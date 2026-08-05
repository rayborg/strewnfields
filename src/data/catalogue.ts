import { glorieta } from './glorieta';
import { holbrook } from './holbrook';
import { motopiPan } from './motopi-pan';
import type { Meteorite } from './schema';
import { suttersMill } from './sutters-mill';

const records: Meteorite[] = [glorieta, holbrook, suttersMill, motopiPan];

if (new Set(records.map((record) => record.id)).size !== records.length) {
  throw new Error('Meteorite IDs must be unique within the catalogue');
}

export const catalogue: Meteorite[] = records.sort(
  (first, second) => first.publicOrder - second.publicOrder,
);

export function normalizeSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('en')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function recordSearchText(record: Meteorite): string {
  return normalizeSearch(
    [
      record.name,
      record.officialName,
      ...record.aliases,
      record.locality,
      record.region,
      record.country,
      record.classification,
      String(record.eventYear),
      record.eventLabel,
      ...record.searchTerms,
      ...record.claims.map(
        (claim) => `${claim.evidence} ${claim.label} ${claim.statement}`,
      ),
    ].join(' '),
  );
}

export function searchCatalogue(records: Meteorite[], query: string): Meteorite[] {
  const terms = normalizeSearch(query).split(' ').filter(Boolean);
  if (terms.length === 0) return records;
  return records.filter((record) => {
    const haystack = recordSearchText(record);
    return terms.every((term) => haystack.includes(term));
  });
}

export const publicCatalogue = catalogue.map((record) => ({
  id: record.id,
  name: record.name,
  aliases: record.aliases,
  locality: record.locality,
  region: record.region,
  country: record.country,
  classification: record.classification,
  eventYear: record.eventYear,
  eventLabel: record.eventLabel,
  summary: record.summary,
  publicOrder: record.publicOrder,
  recordStatus: record.recordStatus,
  mapNote: record.mapNote,
  accessNote: record.accessNote,
  evidence: [...new Set(record.claims.map((claim) => claim.evidence))],
  searchText: recordSearchText(record),
}));
