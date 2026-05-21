# Decision: Content management is Markdown with no CMS initially

Date: 2026-05-21
Status: approved

## Context

The website needs maintainable content without adding CMS complexity before the business has a proven need for non-technical content editing. The project already uses structured Markdown documentation in project-brain, and the MVP can be driven from approved content files.

The build planning docs require CMS requirements to be decided before choosing content model or resource page implementation.

## Decision

Use Markdown content for the initial site. Do not use a CMS initially.

## Alternatives considered

- No CMS with hardcoded content: simple, but less maintainable than Markdown content files.
- Headless CMS: useful later, but adds service, schema, auth, and editorial workflow complexity.
- Simple admin: not needed for MVP and would add auth and maintenance scope.
- WordPress: includes CMS but adds operational and maintenance complexity beyond current needs.

## Source attribution

- `project-brain/15-build/TECH_DECISION_REQUIREMENTS.md`: requires CMS requirements and content ownership decisions before content model or resource page implementation.
- `project-brain/14-website/CONTENT_INVENTORY.md`: tracks needed page copy, resources, FAQs, and assets before implementation.
- `project-brain/09-quality/CHANGE_CONTROL_POLICY.md`: requires approved scope for implementation and high-risk changes.
- User-approved architecture direction in chat: Markdown content, no CMS initially.

## Consequences

- Initial content should be managed as Markdown or project-local content files once implementation begins.
- Public copy must still be approved before publication.
- No CMS dependencies, admin interface, auth, or content service should be added unless a later decision approves it.
- Future CMS adoption remains possible if editing needs justify the complexity.

## Validation

- Confirm this ADR exists and has `Status: approved`.
- During implementation, confirm content is stored in Markdown/project-local content files.
- Confirm no CMS package, admin system, database, or auth flow is introduced without a later approved decision.
- Validate page content against `project-brain/14-website/CONTENT_INVENTORY.md` and approved copy sources.
