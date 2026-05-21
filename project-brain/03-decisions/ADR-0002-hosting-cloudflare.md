# Decision: Hosting is Cloudflare

Date: 2026-05-21
Status: superseded

Superseded by: `project-brain/03-decisions/ADR-0006-hosting-vps-docker.md`

## Context

The site needs low-cost, high-performance hosting that can support a simple marketing website, future form handling, and Cloudflare Web Analytics without unnecessary operational overhead.

The build planning docs require a hosting decision before deployment configuration or build pipeline work.

## Decision

Host the Northdown Computers AI Systems & Automation website on Cloudflare.

## Alternatives considered

- Vercel: strong developer experience, but Cloudflare better aligns with the approved low-cost and low-complexity direction for this site.
- Netlify: suitable for static sites, but not selected for this project.
- VPS: flexible, but adds server maintenance and operational burden.
- Other hosted website platforms: not selected because the project is intended to remain engineering-controlled and lightweight.

## Source attribution

- `project-brain/15-build/TECH_DECISION_REQUIREMENTS.md`: identified hosting as a required decision before scaffold, deployment configuration, and build pipeline work.
- `project-brain/15-build/IMPLEMENTATION_PHASES.md`: Phase 1 requires a hosting decision or explicit local-only decision before foundation work.
- User-approved architecture direction in chat: Cloudflare selected for low complexity, speed, low cost, security, and maintainability.

## Consequences

- This decision is no longer the current hosting direction.
- Do not add Cloudflare deployment configuration from this ADR.
- Future hosting implementation should follow the superseding VPS Docker hosting ADR.
- Historical note: this decision originally supported a Cloudflare-compatible SvelteKit deployment approach.
- Cloudflare may still be relevant to analytics only if the separate analytics decision remains approved and implementation is separately authorised.

## Validation

- Confirm this ADR exists and has `Status: superseded`.
- Confirm the superseding VPS Docker hosting ADR exists and is approved.
- During implementation, validate that deployment configuration does not target Cloudflare unless a later approved decision restores that direction.
