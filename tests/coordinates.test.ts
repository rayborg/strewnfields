import { describe, expect, it } from 'vitest';
import { catalogue } from '../src/data/catalogue';
import { glorieta } from '../src/data/glorieta';
import { holbrook } from '../src/data/holbrook';
import { motopiPan } from '../src/data/motopi-pan';
import { meteoriteSchema } from '../src/data/schema';
import { suttersMill } from '../src/data/sutters-mill';
import { displayCoordinate, distanceKilometres } from '../src/lib/coordinates';

describe('coordinate handling', () => {
  it('displays source notation instead of false decimal precision', () => {
    expect(glorieta.coordinates.map(displayCoordinate)).toEqual([
      "35°36'N, 105°48'W",
      "35°34'N, 105°49'W",
    ]);
  });

  it('labels both Glorieta coordinates as catalogue localities, never individual recoveries', () => {
    for (const coordinate of glorieta.coordinates) {
      expect(coordinate.roles).toEqual(['catalogue locality']);
      expect(coordinate.roles).not.toContain('individual recovery');
      expect(coordinate.estimatedAccuracy).toContain('unsuitable as an individual find');
      expect(coordinate.precision).toContain('nearest arc-minute');
    }
  });

  it('places the conflicting localities approximately four kilometres apart', () => {
    const [first, second] = glorieta.coordinates;
    expect(first).toBeDefined();
    expect(second).toBeDefined();
    const distance = distanceKilometres(first!.normalized, second!.normalized);
    expect(distance).toBeGreaterThan(3.5);
    expect(distance).toBeLessThan(4.5);
  });

  it('publishes only the approved Holbrook catalogue point', () => {
    expect(holbrook.coordinates).toHaveLength(1);
    expect(holbrook.coordinates[0]).toMatchObject({
      raw: "34°54'N, 110°11'W",
      normalized: { latitude: 34.9, longitude: -110.1833333333, crs: 'WGS84' },
      roles: ['catalogue locality'],
      evidence: ['Catalogue locality'],
      precision: 'source reported to nearest arc-minute',
    });
    expect(holbrook.coordinates[0]!.estimatedAccuracy).toContain('not stated');
  });

  it("publishes only the approved Sutter's Mill catalogue point", () => {
    expect(suttersMill.coordinates).toHaveLength(1);
    expect(suttersMill.coordinates[0]).toMatchObject({
      raw: '38°48\'14"N, 120°54\'29"W',
      normalized: { latitude: 38.8038889, longitude: -120.9080556, crs: 'WGS84' },
      roles: ['catalogue locality'],
      evidence: ['Catalogue locality'],
      precision: 'source reported to nearest arc-second',
    });
    expect(suttersMill.coordinates[0]!.estimatedAccuracy).toContain('not stated');
  });

  it('withholds every Motopi Pan recovery coordinate', () => {
    expect(motopiPan.coordinates).toEqual([]);
    expect(motopiPan.mapNote).toContain('protected reserve');
    expect(motopiPan.accessNote).toContain('do not authorize access');
  });

  it('rejects coordinate structures and notation anywhere in Motopi public data', () => {
    const { coordinates, ...publicData } = motopiPan;
    expect(coordinates).toEqual([]);

    const forbiddenKeys = new Set([
      'latitude',
      'longitude',
      'lat',
      'lon',
      'lng',
      'normalized',
      'raw',
      'crs',
      'geometry',
      'features',
    ]);
    const inspect = (value: unknown): void => {
      if (Array.isArray(value)) {
        for (const item of value) inspect(item);
        return;
      }
      if (value === null || typeof value !== 'object') return;
      for (const [key, child] of Object.entries(value)) {
        expect(forbiddenKeys.has(key.toLowerCase())).toBe(false);
        inspect(child);
      }
    };

    inspect(publicData);
    const serialized = JSON.stringify(publicData);
    expect(serialized).not.toMatch(/[°º]/u);
    expect(serialized).not.toMatch(
      /\b\d{1,3}\s*(?:deg(?:rees?)?|[dD])\s*\d{1,2}\s*(?:min(?:utes?)?|['′])/u,
    );
    expect(serialized).not.toMatch(
      /[+-]?\d{1,2}(?:\.\d+)?\s*[,/]\s*[+-]?\d{1,3}(?:\.\d+)?/u,
    );
  });

  it('links every mapped point to existing claims with unique coordinate IDs', () => {
    for (const record of catalogue) {
      const claimIds = new Set(record.claims.map((claim) => claim.id));
      expect(new Set(record.coordinates.map((coordinate) => coordinate.id)).size).toBe(
        record.coordinates.length,
      );
      for (const coordinate of record.coordinates) {
        expect(coordinate.claimIds.length).toBeGreaterThan(0);
        for (const claimId of coordinate.claimIds) {
          expect(claimIds.has(claimId)).toBe(true);
        }
      }
    }
  });

  it('rejects dangling claim references and duplicate coordinate IDs', () => {
    const danglingClaim = structuredClone(holbrook);
    danglingClaim.coordinates[0]!.claimIds[0] = 'missing-claim';
    expect(meteoriteSchema.safeParse(danglingClaim).success).toBe(false);

    const duplicateCoordinate = structuredClone(glorieta);
    duplicateCoordinate.coordinates[1]!.id = duplicateCoordinate.coordinates[0]!.id;
    expect(meteoriteSchema.safeParse(duplicateCoordinate).success).toBe(false);
  });
});
