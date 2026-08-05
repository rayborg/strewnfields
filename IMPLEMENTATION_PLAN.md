# Strewnfields Implementation Plan

Last updated: 2026-08-05

## Definition of Done for the First Release

- [x] The repository is public at `https://github.com/rayborg/strewnfields`.
- [x] The production site is available at `https://rayborg.github.io/strewnfields/`.
- [x] Four complete examples include Glorieta Mountain, Holbrook, Sutter's Mill, and Motopi Pan.
- [x] Authority, catalogue-locality, literature, recovery, community, disputed, and derived evidence are visibly distinct.
- [x] Every published factual and geographic claim has a source and locator.
- [x] The site works on desktop and mobile, with map-free and tile-failure fallbacks.
- [x] Schema validation, type checks, tests, and the production build pass.
- [x] Independent data, UI, and release validators found no unresolved critical or high-severity issue.
- [x] The committed repository contains no secrets, private data, restricted coordinates, or copied copyrighted publications.

## Phase 0: Product and Evidence Rules

- [x] Define the public-preview and future-membership direction.
- [x] Choose the Field Ledger visual direction.
- [x] Separate source authority from claim confidence.
- [x] Define catalogue, published, community, disputed, and derived evidence labels.
- [x] Establish that conflicting claims remain independently cited.
- [x] Record public-coordinate permanence and source-rights risks.
- [x] Create durable session memory.

### Validation Checkpoint 0

- [x] The terminology does not imply that every published coordinate is official or exact.
- [x] The plan does not depend on hiding private data in a static client.
- [x] The source workflow requires citation and human approval after LLM review.

## Phase 1: Repository Foundation

- [x] Verify the existing folder contents.
- [x] Initialize Git with the `main` branch.
- [x] Create the public `rayborg/strewnfields` GitHub repository.
- [x] Configure the `origin` remote.
- [x] Add `.gitignore`, project metadata, and repository documentation.
- [x] Add separate code, data-rights, and third-party software notices.
- [x] Add the GitHub Pages workflow.

### Validation Checkpoint 1

- [x] `git status --short --branch` shows only intended files.
- [x] `git remote -v` points to `rayborg/strewnfields`.
- [x] No credential, token, local environment file, or downloaded copyrighted source is present in the candidate files.

## Phase 2: Application and Data Foundation

- [x] Scaffold Astro with strict TypeScript and a GitHub Pages base path.
- [x] Add minimal dependencies for mapping, validation, and testing.
- [x] Define stable IDs and MVP schemas for meteorites, sources, claims, and public coordinates.
- [x] Preserve raw coordinate notation and separate it from normalized WGS84 output.
- [x] Encode source authority, confidence, publication state, precision, accuracy, and sensitivity.
- [x] Add build-time invariants for citations and public-coordinate safety.
- [x] Generate the public catalogue, search index, and map payload from validated records.

### Validation Checkpoint 2

- [x] Every published claim has a valid source and locator.
- [x] Every coordinate has a semantic role, method, CRS, precision, and sensitivity classification.
- [x] Coordinate normalization does not create false displayed precision.
- [x] Conflicting source assertions survive validation and generation.
- [x] Re-running generation produces deterministic output.

## Phase 3: Glorieta Mountain Pilot

- [x] Preserve `glorieta_mountain_strewnfield_maps.md` as the supplied research inventory.
- [x] Add the official name, classification, aliases, find year, locality, and catalogue mass with citations.
- [x] Add the MetBull/NHM catalogue locality as a catalogue point, not an exact recovery.
- [x] Add Buchwald's conflicting catalogue locality as a separate claim.
- [x] Add historical prose recovery descriptions without inventing coordinates.
- [x] Add Nininger's and Buchwald's approximate extent descriptions.
- [x] Add the KD three-square-mile statement as an attributed community claim.
- [x] Correct the unsupported map-circulation and private-property assertions in the published presentation.
- [x] Present mass and discovery-month conflicts explicitly.
- [x] Add source-rights and land-access cautions.

### Validation Checkpoint 3

- [x] No point is labeled as an exact individual find unless the source actually supplies one.
- [x] The two catalogue points are displayed as a documented conflict approximately 4 km apart.
- [x] Context maps are not cited as meteorite-find evidence.
- [x] Community claims are visibly distinct from scientific and catalogue claims.
- [x] Every source includes a stable link or documented access limitation.

## Phase 4: Public Website

- [x] Build an editorial landing page with project scope, search entry, and featured records.
- [x] Build a catalogue/explore view with name, alias, locality, classification, date, and evidence filters.
- [x] Build a synchronized result ledger and map.
- [x] Build dynamic record pages with identity, map, chronology, claims, sources, conflicts, and revision stamps.
- [x] Build methodology, source policy, about, and membership-preview content.
- [x] Add URL-addressable search and filter state.
- [x] Add map legend, textual geometry equivalents, tile-error fallback, and map-free navigation.
- [x] Implement mobile list-first behavior and accessible map presentation.
- [x] Add metadata, canonical URLs, sitemap, robots file, and social-preview metadata.
- [x] Make the meteorite-strewnfield purpose explicit in the first headline and first viewport.
- [x] Lead with a sourced Holbrook entry, fragmentation, and ground-distribution schematic.
- [x] Keep schematic positions clearly illustrative and provide readable mobile safety labels.
- [x] Reduce display-heading sizes across landing, record, and information pages.

### Validation Checkpoint 4

- [x] The interface is usable at 320 CSS pixels and at desktop widths.
- [x] Keyboard users can reach all search, filter, navigation, disclosure, and map-alternative controls.
- [x] Evidence status is never conveyed by color alone.
- [x] The map includes visible attribution and does not expose unapproved coordinates.
- [x] Search handles aliases, punctuation, and diacritics.
- [x] Empty, loading, map-error, and missing-data states are understandable.

## Phase 5: Automated and Manual Verification

- [x] Run formatting and lint checks.
- [x] Run Astro and TypeScript checks.
- [x] Run schema and data-invariant tests.
- [x] Run unit tests for search, coordinate formatting, and evidence labels.
- [x] Run the production build using the GitHub Pages base path.
- [x] Run browser smoke tests against the production output.
- [x] Run accessibility checks on the landing, explore, record, sources, and methodology views.
- [x] Inspect generated assets for accidental secrets, private notes, exact restricted coordinates, and copyrighted source content.
- [x] Obtain independent validator reviews for data, UI, hosting, and release safety.
- [x] Correct and revalidate every critical or high-severity finding.

### Planned Verification Commands

```sh
npm ci
npm run format:check
npm run check
npm test
npm run build
npm run test:e2e
```

### Validation Checkpoint 5

- [x] All required commands exit successfully.
- [x] The generated site works under `/strewnfields/`, not only at `/`.
- [x] There are no broken internal links or missing production assets.
- [x] The repository diff contains only intentional project files.
- [x] Residual risks and skipped checks are recorded before release.

## Phase 6: Commit, Push, and Deployment

- [x] Inspect `git status`, the complete diff, and recent repository history.
- [x] Stage only intended files.
- [x] Create a concise initial commit.
- [x] Push `main` to `origin`.
- [x] Configure GitHub Pages to deploy through GitHub Actions.
- [x] Monitor the Pages workflow through completion.
- [x] Verify the live URL, assets, navigation, map, and mobile rendering.
- [x] Record the deployed URL and commit in `SESSION.md`.

### Custom Domain Cutover

- [ ] Verify `strewnfields.com` ownership in GitHub Pages with the account-specific TXT record.
- [ ] Change Astro canonical configuration from the project path to `https://strewnfields.com/`.
- [ ] Rebuild and confirm no stale `/strewnfields/` or `rayborg.github.io` references remain.
- [ ] Configure `strewnfields.com` as the repository Pages custom domain.
- [ ] Replace Porkbun parking `A` records with GitHub Pages apex records.
- [ ] Point `www` to `rayborg.github.io` and preserve existing Porkbun MX/SPF records.
- [ ] Enable HTTPS and verify apex, `www`, redirects, robots, sitemap, and assets.

### Validation Checkpoint 6

- [x] `git status --short --branch` is clean and tracks `origin/main` after deployment updates are pushed.
- [x] GitHub reports the Pages workflow as successful.
- [x] `https://rayborg.github.io/strewnfields/` returns the expected site.
- [x] No source data or coordinate differs unexpectedly between local production output and the deployed site.

## Phase 7: Catalogue Expansion

- [x] Select and publish three additional reviewed examples: Holbrook, Sutter's Mill, and Motopi Pan.
- [ ] Create repeatable source-discovery and claim-review templates.
- [ ] Add editorial queues for unreviewed, disputed, withheld, and published claims.
- [ ] Seek Meteoritical Bulletin reuse permission before bulk extraction.
- [ ] Add correction, takedown, and coordinate-suppression processes.
- [ ] Add community-submission terms and moderation before accepting reports.
- [ ] Expand to several hundred records only after rights and sensitivity checks can scale.

### Validation Checkpoint 7

- [ ] Each imported record passes the same claim-level provenance rules as Glorieta.
- [ ] Bulk imports are idempotent and preserve source-specific raw values.
- [ ] Editorial throughput and unresolved rights issues are reported rather than hidden.

## Phase 8: Members-Only Product

- [ ] Move non-public data into PostgreSQL/PostGIS.
- [ ] Add an authenticated server-side API and row-level access controls.
- [ ] Add managed identity, subscriptions, hosted checkout, and webhook reconciliation.
- [ ] Keep free examples on stable public URLs.
- [ ] Enforce protected-site restrictions independently of membership.
- [ ] Add audit logs, backups, restoration tests, rate limits, and account deletion.
- [ ] Complete legal review for licensing, privacy, subscriptions, and supported jurisdictions.

### Validation Checkpoint 8

- [ ] No member-only payload is present in public Git, static assets, source maps, or unauthenticated API responses.
- [ ] Authorization tests cover direct-object access, expired subscriptions, canceled payments, and restricted-site denial.
- [ ] Payment status and application entitlements reconcile correctly.
- [ ] Backup restoration preserves claim history, citations, and editorial decisions.

## Release Blockers

- [ ] Any published coordinate lacks a traceable source.
- [ ] A catalogue point is mislabeled as an exact recovery.
- [ ] A community claim appears authoritative without qualification.
- [ ] A restricted, private, embargoed, or legally uncleared coordinate is exposed.
- [ ] Copyrighted source material is copied beyond an approved quotation or license.
- [ ] The production build or GitHub Pages deployment fails.
- [ ] A critical or high-severity independent validation finding remains unresolved.
