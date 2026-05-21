# Decision: Website stack is SvelteKit

Date: 2026-05-21
Status: approved

## Context

The Northdown agency site needs a fast, maintainable website stack that can support a marketing site, structured content, future contact flow, and possible later expansion without unnecessary moving parts.

The build planning docs state that no implementation should begin until stack decisions are approved. The approved direction is low complexity, fast delivery, minimal maintenance, good performance, good SEO foundation, and easy future expansion.

## Decision

Use SvelteKit as the website stack for the Northdown Computers AI Systems & Automation site.

## Alternatives considered

- Static HTML: simple, but less suitable for future structured content and expansion.
- Astro: strong static-site option, but the approved direction selected SvelteKit for this project.
- Next.js: capable, but heavier than needed for the current low-complexity MVP.
- WordPress: adds CMS and maintenance complexity not needed initially.
- Framer/Webflow: fast for visual sites, but less aligned with the local project-brain and future engineering workflow.

## Source attribution

- `project-brain/15-build/TECH_DECISION_REQUIREMENTS.md`: identified stack approval as required before project scaffold and build work.
- `project-brain/15-build/BUILD_STRATEGY.md`: required small increments, validation-first delivery, and no unapproved dependencies or stack choices.
- User-approved architecture direction in chat: SvelteKit selected for low complexity, fast delivery, maintainability, performance, SEO foundation, and future expansion.

## Consequences

- Future implementation should scaffold a SvelteKit project only after an approved implementation task.
- SvelteKit-specific dependencies, adapter choice, build commands, and validation commands still require implementation-time care.
- The project must avoid adding extra frameworks, CMS layers, or integration packages unless separately approved.
- Content and page structure should continue to come from project-brain docs, not ad hoc copy.

## Validation

- Confirm this ADR exists and has `Status: approved`.
- During implementation, validate scaffold and pages using the SvelteKit-approved commands once dependencies are approved and installed.
- Check implemented pages against `project-brain/14-website/PAGE_REQUIREMENTS.md` and `project-brain/15-build/MVP_SCOPE.md`.
