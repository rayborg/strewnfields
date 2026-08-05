import { meteoriteSchema } from './schema';

const rawSuttersMill = {
  id: 'sutters-mill',
  name: "Sutter's Mill",
  officialName: "Sutter's Mill",
  aliases: [],
  locality: 'El Dorado County, California',
  region: 'California',
  country: 'USA',
  classification: 'C',
  eventYear: 2012,
  eventLabel: 'Observed fall, 22 April 2012',
  summary:
    'A carbonaceous observed fall documented by authority, field, radar, and consortium sources whose recovery totals changed as reporting continued.',
  revision: '2026-08-05',
  publicOrder: 3,
  recordStatus: 'Reviewed public record',
  mapNote:
    'The single point is the recommended catalogue locality. It is not identified as an individual recovery or a verified strewnfield center.',
  accessNote:
    'No member recovery coordinate is published here. A catalogue coordinate does not authorize access, searching, collecting, or removal.',
  chronology: [
    {
      label: '22 April 2012',
      text: 'The observed fall occurred in California and was followed by coordinated recovery work.',
    },
    {
      label: 'Early reports',
      text: 'Scientific papers summarized 77 meteorites with a combined mass of 943 g.',
    },
    {
      label: '27 November 2012',
      text: 'The Bulletin writeup counted 90 fragments with a combined mass of 992.5 g.',
    },
    {
      label: 'Current records',
      text: 'The authority summary rounds the mass to 993 g, while the consortium member page lists 78 records.',
    },
  ],
  sources: [
    {
      id: 'metbull-55529',
      title: "Sutter's Mill, Meteoritical Bulletin Database record 55529",
      authors: 'The Meteoritical Society',
      year: null,
      sourceType: 'authority',
      tier: 1,
      url: 'https://www.lpi.usra.edu/meteor/metbull.php?code=55529',
      doi: null,
      accessed: '2026-08-05',
      rightsNote: 'Linked authority record; database contents are not reproduced in bulk.',
    },
    {
      id: 'bulletin-maps-12342',
      title: 'The Meteoritical Bulletin, No. 100, 2014 June',
      authors: 'Alex Ruzicka, Jeffrey N. Grossman, and Laurence A. J. Garvie',
      year: 2014,
      sourceType: 'journal',
      tier: 1,
      url: 'https://doi.org/10.1111/maps.12342',
      doi: '10.1111/maps.12342',
      accessed: '2026-08-05',
      rightsNote: 'Bibliographic citation, DOI, and short factual summaries only.',
    },
    {
      id: 'jenniskens-science-2012',
      title:
        "Radar-enabled recovery of the Sutter's Mill meteorite, a carbonaceous chondrite regolith breccia",
      authors: 'Peter Jenniskens et al.',
      year: 2012,
      sourceType: 'journal',
      tier: 2,
      url: 'https://doi.org/10.1126/science.1227163',
      doi: '10.1126/science.1227163',
      accessed: '2026-08-05',
      rightsNote: 'Bibliographic citation, DOI, and short factual summaries only.',
    },
    {
      id: 'fries-maps-12249',
      title:
        "Detection and rapid recovery of the Sutter's Mill meteorite fall as a model for future recoveries worldwide",
      authors: 'Marc Fries et al.',
      year: 2014,
      sourceType: 'journal',
      tier: 2,
      url: 'https://digitalcommons.unl.edu/nasapub/137/',
      doi: '10.1111/maps.12249',
      accessed: '2026-08-05',
      rightsNote:
        'Linked institutional article page; figures and article text are not reproduced.',
    },
    {
      id: 'asima-sm',
      title: "Sutter's Mill Meteorite Consortium member records",
      authors: 'Sutter’s Mill Meteorite Consortium',
      year: null,
      sourceType: 'catalogue',
      tier: 2,
      url: 'https://asima.seti.org/sm/',
      doi: null,
      accessed: '2026-08-05',
      rightsNote:
        'Linked consortium summary; member locations and tables are not reproduced.',
    },
    {
      id: 'metbull-55529-members',
      title: "Sutter's Mill MetBull strewnfield member list",
      authors: 'The Meteoritical Society',
      year: null,
      sourceType: 'authority',
      tier: 1,
      url: 'https://www.lpi.usra.edu/meteor/strewnfield.php?id=55529',
      doi: null,
      accessed: '2026-08-05',
      rightsNote:
        'Linked member-list heading only; member rows and coordinates are not reproduced.',
    },
  ],
  claims: [
    {
      id: 'official-name',
      label: 'Official name',
      statement: "The official meteorite name is Sutter's Mill.",
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [{ sourceId: 'metbull-55529', locator: 'Basic information, Name field' }],
      editorialNote: 'Official concerns nomenclature.',
    },
    {
      id: 'fall-status',
      label: 'Observed fall status',
      statement: "The authority record identifies Sutter's Mill as an observed fall.",
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        { sourceId: 'metbull-55529', locator: 'Basic information, Observed fall field' },
      ],
      editorialNote: 'Fall status is separate from the event date.',
    },
    {
      id: 'fall-date',
      label: 'Fall date',
      statement: 'The authority writeup dates the fall to 22 April 2012.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [{ sourceId: 'metbull-55529', locator: 'Writeup, Fell field' }],
      editorialNote: 'The date is retained independently of recovery chronology.',
    },
    {
      id: 'classification',
      label: 'Authority classification',
      statement: 'The recommended authority classification is C.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        { sourceId: 'metbull-55529', locator: 'Classification history, Recommended field' },
      ],
      editorialNote:
        'The authority class is distinct from the scientific material description.',
    },
    {
      id: 'scientific-description',
      label: 'Scientific material description',
      statement:
        'Jenniskens et al. describe the material as a CM-type carbonaceous regolith breccia.',
      evidence: 'Published literature',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'jenniskens-science-2012',
          locator: 'title and abstract; printed page 1583',
        },
      ],
      editorialNote:
        'This scientific description is not substituted for the authority class.',
    },
    {
      id: 'catalogue-locality',
      label: 'Recommended catalogue locality',
      statement:
        'The recommended catalogue locality is 38°48\'14"N, 120°54\'29"W; it is not identified as an individual recovery or a verified strewnfield center.',
      evidence: 'Catalogue locality',
      confidence: 'high',
      publicationState: 'published',
      references: [
        { sourceId: 'metbull-55529', locator: 'Geography, Coordinates, Recommended field' },
      ],
      editorialNote: 'Datum and real-world accuracy are not stated.',
    },
    {
      id: 'current-summary-mass',
      label: 'Current authority mass',
      statement: 'The current authority summary reports a total known mass of 993 g.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [{ sourceId: 'metbull-55529', locator: 'Basic information, Mass field' }],
      editorialNote: 'This is the maintained rounded summary, not the earlier dated count.',
    },
    {
      id: 'bulletin-fragment-count',
      label: 'Dated Bulletin fragment count',
      statement: 'As of 27 November 2012, the Bulletin writeup reported 90 fragments.',
      evidence: 'Published recovery',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'bulletin-maps-12342',
          locator:
            "MB100, Sutter's Mill entry, Physical characteristics paragraph; Table 1 line 1916, Pieces field",
        },
      ],
      editorialNote: 'The date and fragment counting unit are essential qualifiers.',
    },
    {
      id: 'bulletin-recovered-mass',
      label: 'Dated Bulletin recovered mass',
      statement: 'As of 27 November 2012, the Bulletin writeup reported 992.5 g.',
      evidence: 'Published recovery',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'bulletin-maps-12342',
          locator:
            "MB100, Sutter's Mill entry, Physical characteristics paragraph; Table 1 line 1916, Mass field",
        },
      ],
      editorialNote:
        'The dated precise value is distinct from the rounded current summary.',
    },
    {
      id: 'early-paper-count',
      label: 'Early scientific-paper recovery count',
      statement: 'Jenniskens et al. reported 77 meteorites in the early recovery snapshot.',
      evidence: 'Published recovery',
      confidence: 'high',
      publicationState: 'published',
      references: [
        { sourceId: 'jenniskens-science-2012', locator: 'abstract, printed page 1583' },
      ],
      editorialNote: 'This early count is not presented as current.',
    },
    {
      id: 'early-paper-mass',
      label: 'Early scientific-paper recovered mass',
      statement: 'Jenniskens et al. reported 943 g in the early recovery snapshot.',
      evidence: 'Published recovery',
      confidence: 'high',
      publicationState: 'published',
      references: [
        { sourceId: 'jenniskens-science-2012', locator: 'abstract, printed page 1583' },
      ],
      editorialNote: 'This early mass is not presented as current.',
    },
    {
      id: 'current-member-count',
      label: 'Current member-list count',
      statement: 'The current MetBull strewnfield member page lists 78 records.',
      evidence: 'Authority record',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'metbull-55529-members',
          locator: 'current member-list heading, 78 records',
        },
      ],
      editorialNote:
        'Records, meteorites, and fragments are source-specific counting units.',
    },
    {
      id: 'radar-guided-recovery',
      label: 'Radar-guided recovery',
      statement: 'Fries et al. document radar observations used in the recovery effort.',
      evidence: 'Published recovery',
      confidence: 'high',
      publicationState: 'published',
      references: [
        {
          sourceId: 'fries-maps-12249',
          locator: 'printed pages 1991–1993, radar and recovery sections',
        },
      ],
      editorialNote: 'No radar image or inferred geometry is reproduced.',
    },
  ],
  coordinates: [
    {
      id: 'catalogue-locality',
      label: 'Recommended catalogue locality',
      claimIds: ['catalogue-locality'],
      roles: ['catalogue locality'],
      evidence: ['Catalogue locality'],
      raw: '38°48\'14"N, 120°54\'29"W',
      normalized: { latitude: 38.8038889, longitude: -120.9080556, crs: 'WGS84' },
      precision: 'source reported to nearest arc-second',
      estimatedAccuracy: 'datum and real-world accuracy not stated',
      sensitivity: 'public-source',
      method: 'DMS transcription and arithmetic normalization',
    },
  ],
  searchTerms: [
    "Sutter's Mill",
    'Sutters Mill',
    'El Dorado County',
    'California',
    'USA',
    'C',
    'CM-type carbonaceous',
    'regolith breccia',
    '2012',
    'observed fall',
    'catalogue locality',
    'authority record',
    'published literature',
    'published recovery',
    'disputed',
  ],
} as const;

export const suttersMill = meteoriteSchema.parse(rawSuttersMill);
