# Northdown Agency Site

Website and operating base for Northdown Computers AI Systems & Automation.

Current status: Phase 1 scaffold with baseline validation hygiene, simple layout/navigation structure, and adapter-node runtime configuration for Docker.

## Local development

Install dependencies:

```bash
npm install
```

Run the local dev server:

```bash
npm run dev
```

Build locally:

```bash
npm run build
```

Run Svelte validation:

```bash
npm run check
```

## Docker local build

Build the local Docker image:

```bash
docker build -t northdown-agency-site .
```

Run the container locally:

```bash
docker run --rm -p 3000:3000 northdown-agency-site
```

Confirmed detached local validation command:

```bash
docker run -d --name northdown-agency-site-test -p 3080:3000 northdown-agency-site
```

Then open:

```text
http://localhost:3000
```

For the confirmed validation command, use:

```text
http://localhost:3080
```

## Validation

Current scaffold validation commands:

```bash
npm run build
npm run check
npm audit --audit-level=low
docker build -t northdown-agency-site .
```

Last validation on 2026-05-21 after adapter-node runtime configuration:

- `npm install` passes.
- `npm run build` passes and uses `@sveltejs/adapter-node`.
- `npm run check` passes with 0 errors and 0 warnings.
- `npm audit --audit-level=low` reports 3 low severity vulnerabilities through the SvelteKit dependency chain. No force fix has been applied.
- `docker build -t northdown-agency-site .` passes.
- `docker run -d --name northdown-agency-site-test -p 3080:3000 northdown-agency-site` passes.
- HTTP check against `http://localhost:3080` returns `200 OK`.
- `docker stop northdown-agency-site-test` and `docker rm northdown-agency-site-test` pass.
- Image: `northdown-agency-site`.
- Test container: `northdown-agency-site-test`.
- Port: `localhost:3080 -> container:3000`.
- Cleanup: container stopped and removed.
- No container left running.

## Implementation boundaries

- No final marketing copy yet.
- No visual polish yet.
- No contact form backend yet.
- No analytics setup yet.
- No VPS deployment, reverse proxy, TLS, or GitHub push setup yet.
