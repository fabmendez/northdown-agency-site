# Decision: SvelteKit runtime uses adapter-node

Date: 2026-05-21
Status: approved

Depends on:

- `project-brain/03-decisions/ADR-0001-website-stack-sveltekit.md`
- `project-brain/03-decisions/ADR-0006-hosting-vps-docker.md`

## Context

The Northdown agency site uses SvelteKit as its approved website stack. The hosting direction has changed from Cloudflare to a VPS Docker deployment where the site will run in a container after the VPS pulls the GitHub repository and builds the Docker image.

The current scaffold still uses `@sveltejs/adapter-auto`. That adapter is useful during early scaffolding, but the VPS Docker direction needs an explicit production runtime choice. Since the site will run as a Node process inside a Docker container, SvelteKit should use the Node adapter for production builds.

This ADR records the runtime decision only. It does not install `@sveltejs/adapter-node`, change `svelte.config.js`, create a Dockerfile, push to GitHub, or run deployment commands.

## Decision

Use `@sveltejs/adapter-node` as the SvelteKit production runtime adapter for the VPS Docker deployment.

Future implementation should replace `@sveltejs/adapter-auto` with `@sveltejs/adapter-node` when the runtime implementation task is approved.

## Alternatives considered

- `@sveltejs/adapter-auto`: useful for early scaffold validation, but not explicit enough for a known VPS Docker production target.
- `@sveltejs/adapter-static`: suitable for fully static deployments, but the approved deployment direction is a Node runtime in Docker and may later need server-side behavior.
- Cloudflare adapter: no longer aligned with the superseded Cloudflare hosting decision.
- Keep runtime undecided: rejected because Docker deployment planning needs a clear build/runtime target before Dockerfile and VPS process design.

## Consequences

- Future SvelteKit production builds for deployment should target a Node server output.
- A future implementation task must install `@sveltejs/adapter-node` and update `svelte.config.js`.
- Dockerfile design should run the Node adapter output rather than relying on Cloudflare deployment output or adapter-auto environment detection.
- Runtime environment, container port, Node version, start command, health checks, reverse proxy, TLS, logging, and restart policy remain separate implementation decisions or tasks.
- The current package remains unchanged until implementation is approved.
- `@sveltejs/adapter-auto` remains present only because the adapter-node implementation has not started yet.

## Validation approach

This decision record is validated by documentation readback only.

Future implementation validation should include:

- Confirm `@sveltejs/adapter-node` is installed.
- Confirm `svelte.config.js` uses adapter-node.
- Run `npm run check`.
- Run `npm run build`.
- Confirm the built Node output can start inside the planned Docker image.
- Confirm the container serves the site on the approved internal port.
- Confirm `npm audit --audit-level=low` is reported without force-fixing vulnerabilities.

## Source attribution

- `project-brain/03-decisions/ADR-0001-website-stack-sveltekit.md`: approves SvelteKit as the website stack.
- `project-brain/03-decisions/ADR-0006-hosting-vps-docker.md`: approves VPS Docker deployment and identifies runtime adapter/build mode as a required follow-up decision.
- `project-brain/09-quality/DECISION_RECORD_POLICY.md`: requires architecture, runtime, hosting, and deployment decisions to be recorded.
- `package.json`: current scaffold uses SvelteKit with `@sveltejs/adapter-auto`; adapter-node is not installed yet.
- User-approved direction in chat on 2026-05-21: SvelteKit production runtime is `adapter-node` for VPS Docker deployment.
