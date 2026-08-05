import { describe, expect, it } from 'vitest';
import { catalogue, normalizeSearch, searchCatalogue } from '../src/data/catalogue';

describe('catalogue search', () => {
  it.each(['Glorieta', 'glorieta!', 'Santa Fe', 'PMG an', '1884'])(
    'finds the pilot record with %s',
    (query) => {
      expect(searchCatalogue(catalogue, query).map((record) => record.id)).toEqual([
        'glorieta-mountain',
      ]);
    },
  );

  it.each([
    ['Holbrook', 'holbrook'],
    ['Aztec', 'holbrook'],
    ['Navajo County', 'holbrook'],
    ['L LL6', 'holbrook'],
    ['1912', 'holbrook'],
    ["Sutter's Mill", 'sutters-mill'],
    ['Sutters Mill', 'sutters-mill'],
    ['El Dorado C', 'sutters-mill'],
    ['CM type', 'sutters-mill'],
    ['2012', 'sutters-mill'],
    ['Motopi Pan', 'motopi-pan'],
    ['Central Kalahari', 'motopi-pan'],
    ['Ghanzi Botswana', 'motopi-pan'],
    ['Howardite', 'motopi-pan'],
    ['2018 LA', 'motopi-pan'],
  ])('finds %s as %s', (query, recordId) => {
    expect(searchCatalogue(catalogue, query).map((record) => record.id)).toContain(
      recordId,
    );
  });

  it.each([
    'authority record',
    'catalogue locality',
    'published literature',
    'published recovery',
    'disputed',
  ])('indexes the %s evidence vocabulary', (query) => {
    expect(searchCatalogue(catalogue, query).length).toBeGreaterThan(0);
  });

  it('normalizes punctuation and diacritics', () => {
    expect(normalizeSearch('Cañón—Glorieta')).toBe('canon glorieta');
  });

  it('returns an understandable empty result at the data layer', () => {
    expect(searchCatalogue(catalogue, 'ordinary chondrite Antarctica')).toEqual([]);
  });
});
