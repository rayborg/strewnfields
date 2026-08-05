# Strewnfields Project Session Memory

Last updated: 2026-08-05

## Project Goal

Build a provenance-first catalogue and map of documented meteorite strewnfields and recovery locations. The first release is a free public GitHub Pages site with a small number of complete examples. The longer-term product may offer paid access to a much larger reviewed catalogue, advanced search, mapping, and research tools.

The project must distinguish authoritative catalogue information, published recovery evidence, community reports, disputed claims, and geometry derived by this project. An exact-looking coordinate must never be presented as more accurate or authoritative than its source supports.

## Current State

- Repository root: this directory
- GitHub repository: `https://github.com/rayborg/strewnfields`
- Repository visibility: public
- Default branch: `main`
- Git is initialized and the `origin` remote is configured.
- Initial release commit: `bcac844640a2d702800ce57455271da4c7cbce55`.
- The initial release is pushed to `origin/main`.
- GitHub Pages is live at `https://rayborg.github.io/strewnfields/`.
- Deployment workflow run `31036917154` completed successfully.
- The user supplied `glorieta_mountain_strewnfield_maps.md` as the first source inventory.
- The public catalogue contains Glorieta Mountain, Holbrook, Sutter's Mill, and Motopi Pan.
- All local format, type, data, build, and static smoke checks pass.
- The user owns `strewnfields.com`; its DNS is currently managed at Porkbun and still serves the registrar parking page.

## Durable Product Decisions

- Start with a static site that can deploy to GitHub Pages.
- Use free GitHub Pages hosting for the current public informational preview. A later commercial application must move to hosting intended for a paid service.
- Use a structured evidence model so the same records can later move into PostgreSQL/PostGIS without being rewritten.
- Use Astro and TypeScript for static generation, custom CSS for the visual system, and MapLibre for interactive mapping.
- Use the "Field Ledger" visual direction: geological field notes, specimen labels, restrained topographic styling, dense ruled lists, and evidence-forward details.
- Support navigation by meteorite name, alias, locality, classification, event year, and evidence type.
- Store citations and claim-level provenance rather than only a single bibliography per meteorite.
- Treat public Git history as permanent. Coordinates pushed to the public repository cannot later be made reliably private.
- The user selected publication of all sourced coordinates. In implementation, this means all reviewed and legally reusable coordinates that do not trigger an embargo, protected-site, privacy, or safety restriction.
- Future membership must use server-side authorization. Private coordinates or member-only datasets must never be shipped in static JavaScript, JSON, GeoJSON, source maps, or Git history.

## Evidence Vocabulary

Use these public-facing evidence labels:

- `Authority record`: A nomenclature, classification, event, or catalogue fact reported by a recognized authority.
- `Catalogue locality`: A coordinate reported by a recognized catalogue or nomenclature source. It is not automatically an individual recovery point.
- `Published literature`: A non-recovery scientific, historical, compositional, or interpretive claim from identified literature.
- `Published recovery`: A find or recovery location documented in scientific, museum, government, or historical literature.
- `Community-reported`: A finder, collector, dealer, forum, mailing-list, or other self-reported claim.
- `Disputed`: Sources conflict or available evidence is insufficient to select one claim without qualification.
- `Derived`: A point, polygon, ellipse, extent, or model created by this project from cited inputs.

The word `official` describes nomenclature status or a specifically identified authority. It must not be used as a synonym for accurate, exact, peer reviewed, or published in a book.

## Source Hierarchy

1. Nomenclature authorities and maintained institutional catalogues.
2. Primary scientific publications, museum records, and government records.
3. Scholarly catalogues, monographs, and secondary scientific literature.
4. Named field researchers, collectors, owners, and contemporary reports.
5. Commercial pages, forums, mailing lists, social posts, and unattributed community claims.
6. Project-derived interpretations, which must retain their exact source inputs and method.

Lower-tier sources may contain valuable first-hand information. Source tier and claim confidence are separate fields.

## Claim Review Workflow

1. Preserve the source URL, DOI, bibliographic metadata, access date, and page, figure, table, or message locator.
2. Extract atomic claims rather than treating an entire page as one fact.
3. Preserve the original coordinate notation and stated datum or CRS.
4. Normalize coordinates to WGS84 only as a derived value.
5. Record semantic role, such as catalogue locality, individual recovery, search area, reported boundary, or derived model.
6. Record precision and estimated accuracy separately.
7. Cross-check important claims against independent sources.
8. Keep conflicting claims instead of overwriting one with another.
9. Record the LLM review model, review date, verdict, rationale, and supporting quotation or locator.
10. Require human editorial approval before a claim is marked published.

LLM output is an assessment aid, not a source. If the underlying source cannot be opened or verified, the claim remains unverified.

## Glorieta Mountain Research Findings

- The Meteoritical Bulletin entry identifies `Glorieta Mountain` as an official meteorite name and recommends classification `Pallasite, PMG-an`.
- The Meteoritical Bulletin and NHM catalogue locality is `35 degrees 36 minutes N, 105 degrees 48 minutes W`.
- That coordinate is a collective catalogue locality, not an exact individual find point and not a verified strewnfield center.
- Buchwald reports a different collective locality, `35 degrees 34 minutes N, 105 degrees 49 minutes W`, approximately 4 km away.
- No publicly verifiable numerical GPS coordinate for an individual Glorieta Mountain mass has yet been found.
- Kunz, Nininger, LaPaz, and Buchwald provide prose recovery descriptions and approximate spatial relationships.
- Nininger described an approximate distribution no more than 2 to 3 miles long by about 1.5 miles wide.
- Buchwald summarized an approximate extent of about 4 by 1 km.
- KD Meteorites states that the strewnfield spans three square miles, but provides no citation, calculation, coordinates, or boundary.
- The Spirit Rock Shop page provides general terrain and specimen background but does not support the supplied document's private-property claim.
- The Meteorite List archive proves that someone requested a map. It does not prove that a detailed map existed, was supplied, or circulated privately.
- The current Meteoritical Bulletin summary gives 148 kg. A commercial claim over 400 kg is not supported by the reviewed evidence and remains explicitly qualified.
- The original discovery month is disputed. A later Kunz report gives August 1884, so an unqualified May 1884 date should not be published as settled.

Principal Glorieta references include:

- Meteoritical Bulletin Database, code 10935.
- G. F. Kunz, 1885, DOI `10.2475/ajs.s3-30.177.235`.
- G. F. Kunz, 1886, DOI `10.2475/ajs.s3-32.190.311`.
- H. H. Nininger, 1940, DOI `10.2475/ajs.238.1.56`.
- Beck, LaPaz, and Stevenson, 1951, DOI `10.1111/j.1945-5100.1951.tb00166.x`.
- Lincoln LaPaz, 1956, DOI `10.1111/j.1945-5100.1956.tb01385.x`.
- Vagn Buchwald, 1975, volume 2, pages 597-601.
- David E. Lange and Klaus Keil, 1976, DOI `10.56577/FFC-27.293`.
- Wasson and Choi, 2003, DOI `10.1016/S0016-7037(03)00306-5`.

## Rights and Safety Rules

- Do not store or redistribute complete copyrighted books, PDFs, articles, commercial maps, photographs, or scraped websites.
- Store bibliographic metadata, links, claim-level facts, and only short supporting quotations when justified.
- The Meteoritical Bulletin Database does not currently expose a clear bulk or commercial reuse license. Avoid mirroring it and seek written permission before bulk extraction or commercial republication.
- Keep source-specific rights metadata. A code license must not imply that third-party data is covered by the same license.
- A coordinate does not establish ownership, permission to enter, permission to collect, or legality of possession, sale, or export.
- Exact locations may require withholding or generalization for active research, embargoes, private residences, protected land, culturally sensitive land, ecological risk, or credible safety requests.
- Member access must not override a protected or restricted location decision.

## Architecture Direction

- Static application: Astro with strict TypeScript.
- Data: structured JSON or YAML validated at build time.
- Mapping: MapLibre with an attribution-compliant basemap and a map-free textual equivalent.
- Search: client-side index for the public sample; later server-side search for the full catalogue.
- Styling: custom design tokens and CSS, no generic component-dashboard theme.
- Deployment: GitHub Actions to GitHub Pages at `https://rayborg.github.io/strewnfields/`.
- Custom domain: verify the temporary Pages deployment first, then move the canonical site to `https://strewnfields.com/` through GitHub Pages and Porkbun DNS.
- DNS safety: preserve the existing Porkbun mail-forwarding MX and SPF records during the web-record cutover.
- Future backend: PostgreSQL/PostGIS, authenticated API, managed identity, payment provider, and server-side entitlements.

## Immediate Next Actions

1. Complete independent revalidation of the corrected four-record release.
2. Stage and inspect the exact initial commit candidate.
3. Commit and push `main`.
4. Enable GitHub Pages through GitHub Actions and verify the temporary project URL.
5. Verify ownership of `strewnfields.com` with GitHub.
6. Change the Astro canonical URL and base path for the custom domain.
7. Replace only Porkbun's parking web records, preserving email records.
8. Verify apex, `www`, HTTPS, assets, canonical metadata, robots, and sitemap.

## Unresolved Work

- Obtain written Meteoritical Bulletin reuse guidance before bulk ingestion or commercial use.
- Locate museum accession cards, field notes, or authenticated collector maps with individual Glorieta coordinates.
- Establish a current land-status review process before publishing access guidance.
- Decide contributor terms before accepting community submissions.
- Decide which later records remain permanently free after membership launches.
- Obtain legal review before selling access to a large combined coordinate database.
- Decide when the paid application should move from GitHub Pages to a commercial-capable host such as Cloudflare Pages plus a protected backend.

## Session Log

### 2026-08-05

- Inspected the initial Glorieta Mountain source inventory.
- Researched authoritative, literature, map, commercial, and mailing-list sources.
- Identified unsupported and conflicting Glorieta claims.
- Chose the Field Ledger product and visual direction.
- Confirmed GitHub authentication as `rayborg`.
- Initialized the local Git repository on `main`.
- Created the public `rayborg/strewnfields` GitHub repository and configured `origin`.
- Added durable session memory and a checklist-driven implementation plan.
- Built an Astro/TypeScript Field Ledger interface with search, evidence filters, MapLibre context maps, map-free equivalents, and dynamic record pages.
- Added reviewed public records for Holbrook, Sutter's Mill, and Motopi Pan alongside Glorieta Mountain.
- Withheld Motopi Pan recovery coordinates because the finds are inside a protected reserve.
- Added source-specific rights notes and complete browser-bundle third-party software notices.
- Ran independent data, UI, safety, hosting, and release reviews and corrected their blocking findings.
- Confirmed `strewnfields.com` is registered at Porkbun and selected GitHub Pages as the free host for the public informational preview.
- Committed and pushed initial release `bcac844`.
- Enabled GitHub Pages through GitHub Actions and verified all public pages, records, assets, notices, robots, sitemap, and custom 404 behavior.
- Redesigned the landing page around a sourced Holbrook meteor-entry and strewnfield schematic so the project's meteorite purpose is visible immediately.
- Reduced global display-title sizes and moved all four public records above the methodology section.
- Added mobile-specific readable dimensions and safety labels so the schematic cannot be mistaken for mapped find coordinates.
