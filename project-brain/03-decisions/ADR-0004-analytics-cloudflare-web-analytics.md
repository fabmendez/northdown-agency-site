# Decision: Analytics is Cloudflare Web Analytics

Date: 2026-05-21
Status: approved

## Context

The site needs light analytics for basic measurement without adding unnecessary tracking complexity or a heavier analytics platform. The approved hosting direction is Cloudflare, making Cloudflare Web Analytics a low-complexity fit.

The build planning docs require analytics decisions before adding any tracking script, analytics package, or event instrumentation.

## Decision

Use Cloudflare Web Analytics for light website analytics.

## Alternatives considered

- None: lowest complexity, but provides no basic visibility into site usage.
- Plausible: privacy-friendly option, but adds another service beyond the selected Cloudflare hosting path.
- GA4: powerful, but heavier than needed for the MVP and less aligned with the low-complexity direction.
- Other analytics tools: deferred until there is a specific measurement need.

## Source attribution

- `project-brain/15-build/TECH_DECISION_REQUIREMENTS.md`: requires analytics choice, measurement goals, privacy expectations, and review ownership before tracking is added.
- `project-brain/15-build/IMPLEMENTATION_PHASES.md`: Phase 4 Measurement requires an analytics decision record before analytics setup.
- User-approved architecture direction in chat: Cloudflare Web Analytics selected as light analytics.

## Consequences

- Measurement should be minimal for MVP.
- No GA4, Plausible, tracking packages, or additional analytics services should be added without a later decision.
- Analytics setup belongs in Phase 4 or a separately approved implementation task.
- Privacy content should reflect analytics usage before publication.

## Validation

- Confirm this ADR exists and has `Status: approved`.
- During implementation, confirm Cloudflare Web Analytics is present only when the analytics implementation task is approved.
- Confirm no other analytics scripts or packages are added without a separate decision.
- Confirm privacy guidance is updated before public launch.
