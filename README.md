# Förderwerk Projektarchiv

Static portfolio and retirement archive for Förderwerk, Elbchen and
Stiftungskartei.

The preserved application source is available as two public Apache-2.0
projects:

- [Stiftungskartei](https://github.com/sichgeis/stiftungskartei) — web UI,
  API, matching service and local demo data
- [Stiftungs-Sammler](https://github.com/sichgeis/stiftungs-sammler) — the
  collection and enrichment pipeline

The historical production dataset is not included. See the project READMEs
for information about requesting access from Christian.

## What is preserved

- A portfolio overview of the product family
- A dedicated Stiftungskartei case study at `/stiftungskartei/`
- Product screenshots captured from the final public deployment
- The Stiftungskartei editorial journal with eight fully rendered article pages
- Complete original Vue sources for all eight articles alongside the readable archive
- The complete legacy Hugo post collection under `public/archive/legacy-blog`
- A simplified system architecture and project timeline
- A clear notice that the operational services have ended

The archive makes no API calls, collects no form data and includes no analytics.

## Local development

```sh
npm ci
npm run dev
```

The production build is generated with:

```sh
npm run build
```

`postbuild` creates the static case-study route and a GitHub Pages fallback.

## Publishing

The workflow in `.github/workflows/pages.yml` publishes `dist/` to GitHub
Pages. In the GitHub repository settings, select **GitHub Actions** as the Pages
source and configure `foerderwerk.org` as the custom domain.

DNS and redirect steps are documented in
[`RETIREMENT_CUTOVER.md`](./RETIREMENT_CUTOVER.md).

## Rights

This repository is public so the retired site can be preserved and hosted as a
static archive. No general reuse license is granted for its editorial text,
photographs or other media. The separately linked Stiftungskartei and
Stiftungs-Sammler software repositories are licensed under Apache-2.0.
