# Website content ownership

Career facts are generated into `src/generated/site-cv.json` from the private
`zhelun-cv` repository. Review the generated-file diff in the website sync PR;
never edit it manually.

The website repository owns presentation only:

- `src/data/site-presentation.ts` — portrait, Scholar link, CV asset path, and other visual settings;
- `src/data/projects.ts` — project layout and website-specific showcase copy, keyed by `careerId` where a canonical CV record exists;
- `content/blog/*.mdx` — long-form writing and editorial content.

The deployment workflow validates the contract and fails if its schema or stable
IDs are invalid. A `site-only-*` project ID is allowed only for a website showcase
that has not yet been promoted into the canonical CV record.
