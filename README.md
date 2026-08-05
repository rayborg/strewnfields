# Strewnfields

A provenance-first catalogue and map of documented meteorite strewnfields and recovery
evidence. The first public release presents Glorieta Mountain, Holbrook, Sutter's Mill, and
Motopi Pan. Source claims remain separate, conflicts stay visible, and catalogue localities
are not represented as individual finds.

## Develop

Requires Node.js 22.12 or later.

```sh
npm ci
npm run dev
```

The production site uses the GitHub Pages base path `/strewnfields/`.

```sh
npm run format:check
npm run check
npm test
npm run build
npm run test:e2e
```

## Structure

- `src/data/` contains typed, validated public records and claim-level citations.
- `src/pages/` contains static routes.
- `src/components/` contains accessible interface components and map presentation.
- `tests/` checks evidence invariants, coordinate language, and catalogue search.

Site code is MIT licensed. Bundled software retains its own licenses; see
[`THIRD_PARTY_NOTICES.md`](THIRD_PARTY_NOTICES.md). Third-party data and
publications are not covered by the code license; see [`DATA_RIGHTS.md`](DATA_RIGHTS.md).
