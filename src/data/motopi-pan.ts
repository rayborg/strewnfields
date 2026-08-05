import { meteoriteSchema } from './schema';

const rawMotopiPan = {
  id: 'motopi-pan',
  name: 'Motopi Pan',
  officialName: 'Motopi Pan',
  aliases: [],
  locality: 'Central Kalahari Game Reserve, Ghanzi',
  region: 'Ghanzi',
  country: 'Botswana',
  classification: 'Howardite',
  eventYear: 2018,
  eventLabel: 'Confirmed fall, 2 June 2018',
  summary:
    'A confirmed howardite fall associated with the pre-impact detected asteroid 2018 LA, documented without publishing recovery coordinates from the protected reserve.',
  revision: '2026-08-05',
  publicOrder: 4,
  recordStatus: 'Reviewed public record; recovery locations withheld',
  mapNote:
    'No point is published. Exact recovery locations are withheld because the finds are inside a protected reserve.',
  accessNote:
    'The finds are inside the Central Kalahari Game Reserve. Published source coordinates do not authorize access, searching, collecting, or removal.',
  chronology: [
    {
      label: '2 June 2018',
      text: 'Asteroid 2018 LA was detected before impact and linked to the confirmed fall.',
    },
    {
      label: '2018 recoveries',
      text: 'The scientific recovery campaign documented specimens inside the protected reserve.',
    },
    {
      label: '2020 recovery',
      text: 'The later recovery designated MP-24 explains the increase beyond the 2021 paper total.',
    },
    {
      label: 'Current catalogue',
      text: 'The maintained record lists 24 specimens with a combined mass of 214.5 g.',
    },
  ],
  sources: [
    {
      id: 'metbull-74065',
      title: 'Motopi Pan, Meteoritical Bulletin Database record 74065',
      authors: 'The Meteoritical Society',
      year: null,
      sourceType: 'authority',
      tier: 1,
      url: 'https://www.lpi.usra.edu/meteor/metbull.php?code=74065',
      doi: null,
      accessed: '2026-08-05',
      rightsNote:
        'Linked authority record; recovery coordinates and database contents are not reproduced.',
    },
    {
      id: 'jenniskens-maps-13653',
      title: 'The impact and recovery of asteroid 2018 LA',
      authors: 'Peter Jenniskens et al.',
      year: 2021,
      sourceType: 'journal',
      tier: 2,
      url: 'https://doi.org/10.1111/maps.13653',
      doi: '10.1111/maps.13653',
      accessed: '2026-08-05',
      rightsNote:
        'Bibliographic citation, DOI, and short factual summaries only; location data are not reproduced.',
    },
    {
      id: 'jenniskens-pmc-7611328',
      title: 'Public full-text record for the 2018 LA recovery study',
      authors: 'Peter Jenniskens et al.',
      year: 2021,
      sourceType: 'journal',
      tier: 2,
      url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7611328/',
      doi: '10.1111/maps.13653',
      accessed: '2026-08-05',
      rightsNote:
        'Linked public article record; figures, source prose, and recovery coordinates are not reproduced.',
    },
    {
      id: 'mpec-2018-l04',
      title: 'MPEC 2018-L04: 2018 LA',
      authors: 'Minor Planet Center',
      year: 2018,
      sourceType: 'authority',
      tier: 1,
      url: 'https://minorplanetcenter.net/mpec/K18/K18L04.html',
      doi: null,
      accessed: '2026-08-05',
      rightsNote: 'Linked astronomical circular; circular text is not reproduced.',
    },
    {
      id: 'metbull-74065-members',
      title: 'Motopi Pan MetBull strewnfield member list',
      authors: 'The Meteoritical Society',
      year: null,
      sourceType: 'authority',
      tier: 1,
      url: 'https://www.lpi.usra.edu/meteor/strewnfield.php?id=74065',
      doi: null,
      accessed: '2026-08-05',
      rightsNote:
        'Linked only for the MP-24 recovery date and mass row; locations are not reproduced.',
    },
  ],
  claims: [
    {
      id: 'official-name',
      label: 'Official name',
      statement: 'The official meteorite name is Motopi Pan.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [{ sourceId: 'metbull-74065', locator: 'Basic information, Name field' }],
      editorialNote: 'Official concerns nomenclature.',
    },
    {
      id: 'fall-status',
      label: 'Confirmed fall status',
      statement: 'The authority record identifies Motopi Pan as a confirmed fall.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        { sourceId: 'metbull-74065', locator: 'Basic information, Observed fall field' },
      ],
      editorialNote: 'Fall status is separate from the event date.',
    },
    {
      id: 'fall-date',
      label: 'Fall date',
      statement: 'The authority writeup dates the confirmed fall to 2 June 2018.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [{ sourceId: 'metbull-74065', locator: 'Writeup, Confirmed fall field' }],
      editorialNote: 'This is the official event date.',
    },
    {
      id: 'classification',
      label: 'Authority classification',
      statement: 'The maintained authority classification is Howardite.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        { sourceId: 'metbull-74065', locator: 'Classification history, Recommended field' },
      ],
      editorialNote: 'Classification follows the maintained authority record.',
    },
    {
      id: 'asteroid-association',
      label: 'Association with asteroid 2018 LA',
      statement: 'The recovery study associates Motopi Pan with asteroid 2018 LA.',
      evidence: 'Published literature',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'jenniskens-pmc-7611328',
          locator: 'Abstract, opening two sentences',
        },
      ],
      editorialNote:
        'The recovered material and astronomical event are linked by the study.',
    },
    {
      id: 'pre-impact-detection',
      label: 'Pre-impact detection',
      statement: 'Asteroid 2018 LA was detected before atmospheric impact.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'mpec-2018-l04',
          locator: 'MPEC 2018-L04, discovery observations and impact notice',
        },
      ],
      editorialNote: 'This claim concerns the astronomical detection only.',
    },
    {
      id: 'hed-polymict-breccia',
      label: 'HED polymict breccia interpretation',
      statement: 'The recovery study interprets Motopi Pan as an HED polymict breccia.',
      evidence: 'Published literature',
      confidence: 'moderate',
      publicationState: 'published',
      references: [
        {
          sourceId: 'jenniskens-pmc-7611328',
          locator: 'Abstract, sentence beginning “A consortium study”',
        },
      ],
      editorialNote: 'This is a scientific interpretation rather than a catalogue field.',
    },
    {
      id: 'vesta-origin',
      label: 'Vesta or Vestoid origin interpretation',
      statement:
        'The recovery study interprets the orbit as consistent with Vesta or a Vestoid origin.',
      evidence: 'Published literature',
      confidence: 'moderate',
      publicationState: 'published',
      references: [
        {
          sourceId: 'jenniskens-pmc-7611328',
          locator: 'Abstract, sentence beginning “The orbit of 2018 LA”',
        },
      ],
      editorialNote: 'The origin is a scientific interpretation, not an authority fact.',
    },
    {
      id: 'paper-specimen-count',
      label: 'Published recovery count',
      statement: 'The 2021 recovery paper reports 23 recovered meteorites.',
      evidence: 'Published recovery',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'jenniskens-pmc-7611328',
          locator: 'Abstract, sentence “23 meteorites were recovered”',
        },
      ],
      editorialNote: 'This count is the paper’s dated recovery snapshot.',
    },
    {
      id: 'current-specimen-count',
      label: 'Current authority specimen count',
      statement: 'The maintained authority writeup reports 24 recovered specimens.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'metbull-74065',
          locator: 'Writeup, Physical characteristics, first sentence',
        },
      ],
      editorialNote: 'This current count postdates the paper’s 23-meteorite snapshot.',
    },
    {
      id: 'current-recovered-mass',
      label: 'Current authority recovered mass',
      statement:
        'The maintained authority writeup reports a total recovered mass of 214.5 g.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'metbull-74065',
          locator: 'Writeup, Physical characteristics, first sentence',
        },
      ],
      editorialNote:
        'This precise writeup value is retained instead of the rounded header value.',
    },
    {
      id: 'mp24-recovery',
      label: 'Later MP-24 recovery',
      statement: 'The authority member list records MP-24 as a 2020 recovery.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'metbull-74065-members',
          locator: 'MP-24 row, recovery date and mass',
        },
      ],
      editorialNote: 'No member location is reproduced.',
    },
    {
      id: 'protected-reserve-recoveries',
      label: 'Protected-reserve recoveries',
      statement:
        'The recovery campaign took place inside the Central Kalahari Game Reserve.',
      evidence: 'Published recovery',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'jenniskens-pmc-7611328',
          locator:
            'Samples and Methods of Meteorite Analysis, first recovery-campaign paragraph',
        },
      ],
      editorialNote:
        'Exact recovery locations remain withheld, and source coordinates do not authorize access.',
    },
  ],
  coordinates: [],
  searchTerms: [
    'Motopi Pan',
    'Central Kalahari Game Reserve',
    'Ghanzi',
    'Botswana',
    'Howardite',
    'HED polymict breccia',
    'Vesta',
    'Vestoid',
    '2018',
    '2018 LA',
    'confirmed fall',
    'authority record',
    'published literature',
    'published recovery',
    'disputed',
    'withheld protected reserve',
  ],
} as const;

export const motopiPan = meteoriteSchema.parse(rawMotopiPan);
