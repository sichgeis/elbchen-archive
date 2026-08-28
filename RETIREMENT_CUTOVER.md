# Static cutover and shutdown checklist

## Target URLs

| Incoming URL | Permanent destination |
| --- | --- |
| `https://foerderwerk.org/` | GitHub Pages archive |
| `https://www.foerderwerk.org/` | `https://foerderwerk.org/` |
| `https://kartei.foerderwerk.org/` | `https://foerderwerk.org/stiftungskartei/` |
| `https://elbchen.com/` (if retained) | `https://foerderwerk.org/#projekte` |

The apex domain is the only canonical site. Redirects should use HTTP 301 or
308 at the DNS/CDN provider. The HTML fallbacks under `redirects/` are provided
for hosts that cannot create an HTTP redirect rule.

## Before DNS changes

- [ ] Create or select the GitHub repository.
- [ ] Push the archive branch and run the Pages workflow.
- [ ] In **Settings → Pages**, select GitHub Actions and add
      `foerderwerk.org` as the custom domain.
- [ ] Verify `/`, `/stiftungskartei/`, `/og.png`, and an unknown URL.
- [ ] Confirm the site contains no API, subscription, form or analytics calls.
- [ ] Lower DNS TTLs.

## DNS cutover

- [ ] Point the apex records for `foerderwerk.org` to GitHub Pages as shown in
      the repository's Pages settings.
- [ ] Configure `www.foerderwerk.org` as a redirect to the apex domain.
- [ ] Configure `kartei.foerderwerk.org` as a redirect to the case study.
- [ ] Enable HTTPS for the custom domain.
- [ ] Verify the canonical URL and social preview.

## Application shutdown order

- [ ] Stop subscriptions and outreach jobs.
- [ ] Export any data that must be retained.
- [ ] Stop Stiftungskartei frontend, API, MCP and matching services.
- [ ] Stop LibreChat, RAG API and Förderdatenbank MCP services.
- [ ] Remove Portainer deployment webhooks and GitLab deployment jobs.
- [ ] Remove Postgres, Redis, MongoDB, Meilisearch and upload volumes after
      retention decisions are complete.
- [ ] Remove obsolete container images and registries.
- [ ] Retire AWS ECS/ECR and the legacy blog S3 bucket if still present.
- [ ] Cancel the two servers only after the static archive and redirects have
      been verified independently.

## Final verification

- [ ] Old public domains lead to an explicit archived-project page.
- [ ] Search, newsletter and account endpoints no longer accept writes.
- [ ] No paid server, database or container resource remains.
- [ ] Repositories are marked deprecated and deployment pipelines are disabled.
