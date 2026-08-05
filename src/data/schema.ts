import { z } from 'zod';

export const evidenceKinds = [
  'Authority record',
  'Catalogue locality',
  'Published literature',
  'Published recovery',
  'Community-reported',
  'Disputed',
  'Derived',
] as const;

export const evidenceKindSchema = z.enum(evidenceKinds);

export const sourceSchema = z.object({
  id: z.string().min(1),
  title: z.string().min(1),
  authors: z.string().min(1),
  year: z.number().int().min(1800).max(2100).nullable(),
  sourceType: z.enum([
    'authority',
    'journal',
    'catalogue',
    'book',
    'government',
    'commercial',
    'community-archive',
  ]),
  tier: z.number().int().min(1).max(6),
  url: z.string().url().nullable(),
  doi: z.string().nullable(),
  accessed: z.string().date(),
  rightsNote: z.string().min(1),
});

export const sourceReferenceSchema = z.object({
  sourceId: z.string().min(1),
  locator: z.string().min(1),
});

export const claimSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  statement: z.string().min(1),
  evidence: evidenceKindSchema,
  confidence: z.enum(['high', 'moderate', 'low', 'unresolved']),
  publicationState: z.literal('published'),
  references: z.array(sourceReferenceSchema).min(1),
  editorialNote: z.string().min(1).nullable(),
});

export const coordinateSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1),
  claimIds: z.array(z.string().min(1)).min(1),
  roles: z
    .array(
      z.enum([
        'catalogue locality',
        'historical approximate locality',
        'individual recovery',
      ]),
    )
    .min(1),
  evidence: z.array(evidenceKindSchema).min(1),
  raw: z.string().min(1),
  normalized: z.object({
    latitude: z.number().gte(-90).lte(90),
    longitude: z.number().gte(-180).lte(180),
    crs: z.literal('WGS84'),
  }),
  precision: z.string().min(1),
  estimatedAccuracy: z.string().min(1),
  sensitivity: z.enum(['public-source', 'generalized-public']),
  method: z.string().min(1),
});

export const meteoriteSchema = z
  .object({
    id: z.string().min(1),
    name: z.string().min(1),
    officialName: z.string().min(1),
    aliases: z.array(z.string()),
    locality: z.string().min(1),
    region: z.string().min(1),
    country: z.string().min(1),
    classification: z.string().min(1),
    eventYear: z.number().int(),
    eventLabel: z.string().min(1),
    summary: z.string().min(1),
    revision: z.string().date(),
    publicOrder: z.number().int().nonnegative(),
    recordStatus: z.string().min(1),
    mapNote: z.string().min(1),
    accessNote: z.string().min(1),
    chronology: z.array(
      z.object({
        label: z.string().min(1),
        text: z.string().min(1),
      }),
    ),
    sources: z.array(sourceSchema).min(1),
    claims: z.array(claimSchema).min(1),
    coordinates: z.array(coordinateSchema),
    searchTerms: z.array(z.string()),
  })
  .superRefine((record, context) => {
    const sourceIds = new Set(record.sources.map((source) => source.id));
    const claimIds = new Set(record.claims.map((claim) => claim.id));
    const coordinateClaimIds = new Set(
      record.coordinates.flatMap((coordinate) => coordinate.claimIds),
    );

    if (sourceIds.size !== record.sources.length) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Source IDs must be unique within a record',
      });
    }

    if (claimIds.size !== record.claims.length) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Claim IDs must be unique within a record',
      });
    }

    if (
      new Set(record.coordinates.map((coordinate) => coordinate.id)).size !==
      record.coordinates.length
    ) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Coordinate IDs must be unique within a record',
      });
    }

    for (const claim of record.claims) {
      if (claim.evidence === 'Catalogue locality' && !coordinateClaimIds.has(claim.id)) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: `Catalogue locality claim ${claim.id} is not linked to a coordinate`,
        });
      }
      for (const reference of claim.references) {
        if (!sourceIds.has(reference.sourceId)) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Claim ${claim.id} references missing source ${reference.sourceId}`,
          });
        }
      }
    }

    for (const coordinate of record.coordinates) {
      for (const claimId of coordinate.claimIds) {
        if (!claimIds.has(claimId)) {
          context.addIssue({
            code: z.ZodIssueCode.custom,
            message: `Coordinate ${coordinate.id} references missing claim ${claimId}`,
          });
        }
      }
    }

    if (record.id === 'motopi-pan' && record.coordinates.length !== 0) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Motopi Pan public coordinates must remain empty',
      });
    }
  });

export type EvidenceKind = z.infer<typeof evidenceKindSchema>;
export type Source = z.infer<typeof sourceSchema>;
export type Claim = z.infer<typeof claimSchema>;
export type CoordinateRecord = z.infer<typeof coordinateSchema>;
export type Meteorite = z.infer<typeof meteoriteSchema>;
