import { access, readFile, readdir } from 'node:fs/promises';

const root = new URL('../dist/', import.meta.url);
const recordIds = ['glorieta-mountain', 'holbrook', 'sutters-mill', 'motopi-pan'];
const required = [
  'index.html',
  'explore/index.html',
  ...recordIds.map((id) => `records/${id}/index.html`),
  'sources/index.html',
  'methodology/index.html',
  'about/index.html',
  'membership/index.html',
  'robots.txt',
  'sitemap-index.xml',
];

for (const file of required) await access(new URL(file, root));

const pages = required.filter((file) => file.endsWith('.html'));
for (const page of pages) {
  const html = await readFile(new URL(page, root), 'utf8');
  if (!html.includes('/strewnfields/')) {
    throw new Error(`${page} does not contain the deployment base path`);
  }
  if (!html.includes('id="main-content"')) {
    throw new Error(`${page} is missing the skip-link target`);
  }
  if (html.includes('href="/records/')) {
    throw new Error(`${page} contains a record link without the deployment base path`);
  }
}

const explore = await readFile(new URL('explore/index.html', root), 'utf8');
for (const id of recordIds) {
  if (!explore.includes(`/strewnfields/records/${id}/`)) {
    throw new Error(`Explore output is missing the ${id} record link`);
  }
}
if (!explore.includes('data-map-fallback')) {
  throw new Error('Explore output is missing the server-rendered map fallback');
}

const home = await readFile(new URL('index.html', root), 'utf8');
for (const statement of [
  'Meteorite strewnfields',
  'An observed fall becomes a strewnfield',
  'Illustrative positions, not find coordinates',
  'View the Holbrook record',
]) {
  if (!home.includes(statement)) {
    throw new Error(`Homepage output is missing: ${statement}`);
  }
}
for (const id of recordIds) {
  if (!home.includes(`/strewnfields/records/${id}/`)) {
    throw new Error(`Homepage output is missing the ${id} record link`);
  }
}
for (const evidence of ['Authority record', 'Published literature']) {
  if (!explore.includes(`<option value="${evidence}">${evidence}</option>`)) {
    throw new Error(`Explore output is missing the ${evidence} evidence filter`);
  }
  const evidenceClass = evidence.toLowerCase().replaceAll(' ', '-');
  if (!explore.includes(`evidence-${evidenceClass}`)) {
    throw new Error(`Explore output is missing the ${evidence} evidence badge`);
  }
}

const glorieta = await readFile(
  new URL('records/glorieta-mountain/index.html', root),
  'utf8',
);
for (const statement of [
  'Map-free location record',
  'Source precision:',
  'Estimated accuracy:',
]) {
  if (!glorieta.includes(statement)) {
    throw new Error(`Glorieta output is missing: ${statement}`);
  }
}

const motopi = await readFile(new URL('records/motopi-pan/index.html', root), 'utf8');
if (!motopi.includes('Public points withheld')) {
  throw new Error('Motopi Pan output is missing its withheld-location state');
}
if (motopi.includes('data-field-map')) {
  throw new Error(
    'Motopi Pan output must not render an interactive map without public points',
  );
}

const sources = await readFile(new URL('sources/index.html', root), 'utf8');
for (const id of recordIds) {
  if (!sources.includes(`id="sources-${id}"`)) {
    throw new Error(`Source register is missing the ${id} group`);
  }
}
for (const sourceUrl of [
  'https://pmc.ncbi.nlm.nih.gov/articles/PMC7611328/',
  'https://minorplanetcenter.net/mpec/K18/K18L04.html',
  'https://doi.org/10.1111/maps.13653',
]) {
  if (!sources.includes(`href="${sourceUrl}"`)) {
    throw new Error(`Source register is missing the public link ${sourceUrl}`);
  }
}
const duplicateDoiHref = 'href="https://doi.org/10.2475/ajs.s3-30.177.235"';
if (sources.split(duplicateDoiHref).length - 1 !== 1) {
  throw new Error('Source register duplicates a source URL that is identical to its DOI');
}

const assetNames = await readdir(new URL('_astro/', root));
const scriptContents = await Promise.all(
  assetNames
    .filter((name) => name.endsWith('.js'))
    .map((name) => readFile(new URL(`_astro/${name}`, root), 'utf8')),
);
if (!scriptContents.some((script) => script.includes('OpenStreetMap contributors'))) {
  throw new Error('Map bundle is missing basemap attribution');
}
if (!scriptContents.some((script) => script.includes('catalogue:visible-records'))) {
  throw new Error('Map bundle is missing catalogue/map synchronization');
}
for (const state of [
  'No public coordinates match because no catalogue records are visible.',
  'The visible catalogue selection has no public coordinates to map.',
]) {
  if (!scriptContents.some((script) => script.includes(state))) {
    throw new Error(`Map bundle is missing the immediate state: ${state}`);
  }
}

const robots = await readFile(new URL('robots.txt', root), 'utf8');
if (!robots.includes('https://rayborg.github.io/strewnfields/sitemap-index.xml')) {
  throw new Error('robots.txt has an incorrect sitemap URL');
}

console.log(`Smoke checked ${pages.length} generated pages under /strewnfields/.`);
