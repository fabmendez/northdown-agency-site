# Replit Preview Plan

## Purpose

Use Replit as a temporary external preview environment before VPS deployment.

This plan is for preview planning only. It does not approve deployment, Replit configuration files, dependency changes, Dockerfile changes, runtime changes, secrets, or public production launch.

## Source Of Truth

GitHub repository:

```text
https://github.com/fabmendez/northdown-agency-site.git
```

Current branch:

```text
main
```

Latest validated commit:

```text
e71a7c7 Refine homepage copy flow after marketing pass
```

## Current App Type

- SvelteKit application.
- Production runtime uses `@sveltejs/adapter-node`.
- Built output runs with `node build`.
- Docker image currently uses Node 22 Alpine and `PORT=3000`.

## Current Validated State

- `npm run build` passed.
- `npm run check` passed.
- Docker build passed.
- Homepage runtime returned `200 OK`.
- Homepage CTA smoke test passed.
- All public pages were previously validated through local Docker runtime checks.

## Replit Import Approach

1. Create a new Replit project by importing from GitHub.
2. Use the source repository:

```text
https://github.com/fabmendez/northdown-agency-site.git
```

3. Select the `main` branch.
4. Let Replit install Node dependencies from `package.json`.
5. Do not add secrets or environment variables unless a separate task approves them.
6. Treat the generated Replit URL as a temporary preview URL only.

## Expected Commands

Expected install command:

```bash
npm install
```

Expected validation commands:

```bash
npm run build
npm run check
```

Expected run command:

```bash
node build
```

## Configuration Notes

- Package scripts may need review for the Replit run command.
- App port binding may need review depending on the Replit environment.
- No `.env` file is currently required.
- No backend contact form is implemented.
- The `mailto:` CTA and `tel:` CTA are client-side only.
- The current app expects the SvelteKit adapter-node build output to exist before `node build` is run.

## Risks

- Replit runtime configuration may need `.replit` or `replit.nix`.
- Adapter-node port binding may need environment variable review.
- The preview URL should not be treated as final production.
- Replit may choose a default run command that does not match the adapter-node production runtime.
- Replit may install with a different Node version unless configured.

## Stop Points Requiring Approval

Do not proceed without approval before:

- Adding Replit config files.
- Changing package scripts.
- Changing SvelteKit adapter or runtime configuration.
- Publishing publicly as a production site.
- Adding secrets or environment variables.
- Adding a backend contact form.
- Changing Dockerfile or VPS deployment assumptions.

## Recommended First Manual Test After Import

After the GitHub import and successful run:

1. Open `/`.
2. Open `/contact`.
3. Confirm `Request Operational Review` appears.
4. Confirm `mailto:hello@northdowncomputers.com` appears on the primary CTA.
5. Confirm `Call 020-3773 0511` appears.
6. Confirm `tel:+442037730511` appears.
7. Confirm all public routes load:
   - `/`
   - `/services`
   - `/process`
   - `/about`
   - `/resources`
   - `/contact`
   - `/privacy`

## Recommended Next Step

Import the GitHub repository into Replit manually, run the expected install and validation commands, then confirm whether Replit needs a minimal config file before any repository changes are approved.
