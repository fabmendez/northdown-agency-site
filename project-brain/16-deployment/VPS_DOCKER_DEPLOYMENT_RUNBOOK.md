# VPS Docker Deployment Runbook

## Purpose

Prepare the Northdown agency site for VPS Docker deployment using the existing SvelteKit adapter-node Dockerfile and a minimal Docker Compose configuration.

This runbook does not approve DNS, TLS, public launch, reverse proxy configuration, secrets, analytics, backend forms, or infrastructure changes.

Target VPS provider:

```text
Hostinger VPS
```

## Current Deployment Shape

- App runtime: SvelteKit with `@sveltejs/adapter-node`.
- Build artifact: `build/`.
- Runtime command: `node build`.
- Dockerfile exists and builds the production app.
- `docker-compose.yml` has been added because the VPS deployment tool expects a Docker Compose file.

## Compose Configuration

The compose service is:

```text
northdown-agency-site
```

Initial host port mapping:

```text
localhost:3080 -> container:3000
```

Runtime environment:

```text
NODE_ENV=production
HOST=0.0.0.0
PORT=3000
```

Restart policy:

```text
unless-stopped
```

## VPS Deployment Tool Compatibility

Observed VPS build log:

```text
No Docker compose files found
```

Resolution:

- Add `docker-compose.yml` at the repository root.
- Use the Compose file for Hostinger VPS deployment manager compatibility.
- Build from the existing `Dockerfile`.
- Keep the app exposed on container port `3000`.
- Map initial host validation traffic to port `3080`.

## Reverse Proxy Plan

The reverse proxy should later route public HTTPS traffic to:

```text
http://localhost:3080
```

Do not configure reverse proxy, DNS, or TLS until separately approved.

## Data And Secrets

- No secrets are currently required.
- No `.env` file is currently required.
- No database is currently required.
- No persistent uploads are currently required.
- No backend contact form is currently implemented.
- Current public contact actions are client-side `mailto:` and `tel:` links.

## Validation Commands

Local or VPS validation should run:

```bash
npm run build
npm run check
docker compose config
docker compose build
docker compose up -d
curl -I http://localhost:3080
```

Contact smoke test:

```bash
curl http://localhost:3080/contact
```

Expected Contact content:

- `Request Operational Review`
- `hello@northdowncomputers.com`
- `Call 020-3773 0511`

Cleanup after validation:

```bash
docker compose down
```

## Server Validation Still Required

Before treating the site as deployed, validate on the VPS:

- Compose file is detected by the VPS deployment tool.
- Image builds successfully.
- Container starts successfully.
- `localhost:3080` returns `200 OK`.
- `/contact` contains the approved email and phone CTAs.
- Container restart policy is applied.
- Logs do not show runtime binding errors.

## Stop Points

Stop for approval before:

- DNS changes.
- TLS or certificate setup.
- Reverse proxy configuration.
- Public production launch.
- Adding secrets or environment variables.
- Changing package scripts.
- Changing SvelteKit adapter or runtime configuration.
- Changing Dockerfile.
- Adding analytics.
- Adding a contact backend.
