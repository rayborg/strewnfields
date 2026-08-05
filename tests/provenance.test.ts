import { describe, expect, it } from 'vitest';
import { catalogue } from '../src/data/catalogue';
import { glorieta } from '../src/data/glorieta';
import { evidenceKinds, meteoriteSchema } from '../src/data/schema';

describe('claim-level provenance', () => {
  it('gives every published claim at least one valid source and locator', () => {
    for (const record of catalogue) {
      const sourceIds = new Set(record.sources.map((source) => source.id));
      for (const claim of record.claims) {
        expect(claim.publicationState).toBe('published');
        expect(claim.references.length).toBeGreaterThan(0);
        for (const reference of claim.references) {
          expect(sourceIds.has(reference.sourceId)).toBe(true);
          expect(reference.locator.trim().length).toBeGreaterThan(0);
          expect(reference.locator).not.toMatch(
            /\b(?:discussion|summary|article|contents)\b/i,
          );
          expect(reference.locator).toMatch(
            /page|field|section|paragraph|sentence|heading|row|caption|body text|line|entry|notice|abstract|final totals|message body|observations/i,
          );
        }
      }
    }
  });

  it('uses the complete evidence vocabulary and reserves catalogue locality for mapped claims', () => {
    expect(evidenceKinds).toEqual([
      'Authority record',
      'Catalogue locality',
      'Published literature',
      'Published recovery',
      'Community-reported',
      'Disputed',
      'Derived',
    ]);

    for (const record of catalogue) {
      const mappedClaimIds = new Set(
        record.coordinates.flatMap((coordinate) => coordinate.claimIds),
      );
      for (const claim of record.claims) {
        if (claim.evidence === 'Catalogue locality') {
          expect(mappedClaimIds.has(claim.id)).toBe(true);
        }
      }
    }
  });

  it('keeps core authority and quantitative facts atomic', () => {
    const claimIds = new Map(
      catalogue.map((record) => [
        record.id,
        new Set(record.claims.map((claim) => claim.id)),
      ]),
    );

    const requiredClaims = {
      holbrook: [
        'official-name',
        'alias-aztec',
        'classification',
        'fall-status',
        'fall-date',
        'metbull-mass',
        'nhm-mass',
        'foote-stone-count',
        'foote-total-mass',
        'foote-largest-stone',
      ],
      'sutters-mill': [
        'official-name',
        'fall-status',
        'fall-date',
        'classification',
        'scientific-description',
        'bulletin-fragment-count',
        'bulletin-recovered-mass',
        'early-paper-count',
        'early-paper-mass',
      ],
      'motopi-pan': [
        'official-name',
        'fall-status',
        'fall-date',
        'classification',
        'paper-specimen-count',
        'current-specimen-count',
        'current-recovered-mass',
        'mp24-recovery',
      ],
    };

    for (const [recordId, required] of Object.entries(requiredClaims)) {
      for (const claimId of required) {
        expect(claimIds.get(recordId)?.has(claimId)).toBe(true);
      }
    }
  });

  it('parses four records with unique IDs in public order', () => {
    expect(catalogue.map((record) => record.id)).toEqual([
      'glorieta-mountain',
      'holbrook',
      'sutters-mill',
      'motopi-pan',
    ]);
    expect(new Set(catalogue.map((record) => record.id)).size).toBe(catalogue.length);
    for (const record of catalogue) {
      expect(meteoriteSchema.safeParse(record).success).toBe(true);
      expect(new Set(record.sources.map((source) => source.id)).size).toBe(
        record.sources.length,
      );
      expect(new Set(record.claims.map((claim) => claim.id)).size).toBe(
        record.claims.length,
      );
    }
  });

  it('rejects a record with a dangling source reference', () => {
    const invalid = structuredClone(glorieta);
    invalid.claims[0]!.references[0]!.sourceId = 'missing-source';
    expect(meteoriteSchema.safeParse(invalid).success).toBe(false);
  });

  it('rejects duplicate source and claim IDs within a record', () => {
    const duplicateSource = structuredClone(glorieta);
    duplicateSource.sources[1]!.id = duplicateSource.sources[0]!.id;
    expect(meteoriteSchema.safeParse(duplicateSource).success).toBe(false);

    const duplicateClaim = structuredClone(glorieta);
    duplicateClaim.claims[1]!.id = duplicateClaim.claims[0]!.id;
    expect(meteoriteSchema.safeParse(duplicateClaim).success).toBe(false);
  });

  it('rejects catalogue-locality evidence on a non-coordinate claim', () => {
    const invalid = structuredClone(glorieta);
    invalid.claims.find((claim) => claim.id === 'official-name')!.evidence =
      'Catalogue locality';
    expect(meteoriteSchema.safeParse(invalid).success).toBe(false);
  });

  it('preserves conflicting claims rather than choosing one', () => {
    expect(glorieta.claims.map((claim) => claim.id)).toEqual(
      expect.arrayContaining(['catalogue-locality-metbull', 'catalogue-locality-buchwald']),
    );
    expect(new Set(glorieta.coordinates.map((coordinate) => coordinate.raw)).size).toBe(2);
  });

  it('retains source- and date-qualified count and mass conflicts', () => {
    const statements = new Map(
      catalogue.flatMap((record) =>
        record.claims.map(
          (claim) => [`${record.id}:${claim.id}`, claim.statement] as const,
        ),
      ),
    );

    expect(statements.get('holbrook:metbull-mass')).toContain('220 kg');
    expect(statements.get('holbrook:nhm-mass')).toContain('218 kg');
    expect(statements.get('holbrook:foote-stone-count')).toContain('14,029');
    expect(statements.get('sutters-mill:bulletin-fragment-count')).toContain(
      '27 November 2012',
    );
    expect(statements.get('sutters-mill:early-paper-count')).toContain('77 meteorites');
    expect(statements.get('motopi-pan:paper-specimen-count')).toContain('23');
    expect(statements.get('motopi-pan:current-specimen-count')).toContain('24');
    expect(statements.get('motopi-pan:mp24-recovery')).toContain('2020');
    expect(statements.get('glorieta-mountain:current-mass')).toContain('148 kg');
    expect(JSON.stringify(glorieta)).not.toContain('147.6');
  });
});
