# Decision: Hosting is VPS Docker deployment

Date: 2026-05-21
Status: approved

Supersedes: `project-brain/03-decisions/ADR-0002-hosting-cloudflare.md`

Dependent runtime decision: `project-brain/03-decisions/ADR-0007-sveltekit-runtime-adapter-node.md`

## Context

The previous approved hosting direction was Cloudflare. The project direction has changed: the Northdown agency site will be deployed by pushing the local project to a GitHub repository, then running the site in Docker on a VPS.

The build planning docs require hosting and deployment decisions before deployment configuration or build pipeline work. This ADR records the new hosting direction only. It does not implement Docker, GitHub publishing, VPS setup, CI/CD, reverse proxy configuration, secrets, analytics, or deployment automation.

## Decision

Host the Northdown Computers AI Systems & Automation agency site on a VPS using Docker.

The approved deployment flow is:

```text
Local project
  -> GitHub repo
  -> VPS pulls repository
  -> VPS builds Docker image
  -> Docker container runs the site
```

The approved SvelteKit production runtime for this deployment is `@sveltejs/adapter-node`, recorded in `project-brain/03-decisions/ADR-0007-sveltekit-runtime-adapter-node.md`.

## Options considered

- Cloudflare hosting: previously approved, now superseded by the VPS Docker direction.
- VPS Docker deployment: selected because it gives direct server control and aligns with the new deployment path.
- Vercel, Netlify, or other managed hosts: not selected for the current direction.
- Local-only deployment: not suitable for public hosting.

## Source attribution

- `project-brain/03-decisions/ADR-0002-hosting-cloudflare.md`: previous hosting decision being superseded.
- `project-brain/15-build/TECH_DECISION_REQUIREMENTS.md`: requires hosting, deployment ownership, rollback expectations, and site runtime model to be decided before deployment work.
- `project-brain/15-build/IMPLEMENTATION_PHASES.md`: identifies deployment configuration as part of foundation work that must follow approved decisions.
- User-approved direction in chat on 2026-05-21: hosting changed to VPS Docker deployment with the flow `Local project -> GitHub repo -> VPS pulls/builds Docker image -> container runs site`.

## Consequences

- Cloudflare is no longer the approved hosting target for deployment configuration.
- Future deployment work should target Docker on a VPS, not Cloudflare adapter/deployment configuration.
- Future implementation should use the approved adapter-node runtime decision for SvelteKit production builds.
- A future implementation task must create the Dockerfile, container port, reverse proxy expectations, environment handling, and VPS operational process.
- GitHub repository setup and push workflow must be handled by a separate approved task.
- VPS pull/build/run commands must be handled by a separate approved task.
- Backup, rollback, logging, restart policy, domain, TLS, and monitoring expectations still need explicit implementation planning before production use.
- Existing Cloudflare Web Analytics decision may need review because the hosting assumption changed, even though analytics implementation remains out of scope here.

## Validation

- Confirm this ADR exists and has `Status: approved`.
- Confirm `ADR-0002-hosting-cloudflare.md` has `Status: superseded`.
- Before implementation, confirm no Dockerfile, deployment config, GitHub push, VPS command, or dependency change is introduced by this decision record alone.
- During a future deployment implementation task, validate:
  - local build/check still pass,
  - SvelteKit uses the approved adapter-node runtime,
  - Docker image builds successfully,
  - container starts and serves the site,
  - VPS pull/build/run process is documented,
  - rollback or recovery path is documented.
