# Decision: Contact flow is simple form to email

Date: 2026-05-21
Status: approved

## Context

The website needs a practical first contact path that supports discovery and client intake without adding CRM, database, account, or automation complexity at MVP stage.

The website planning docs define the conversion path from visitor to contact to client intake, and the build planning docs require contact-flow and form decisions before implementation.

## Decision

Use a simple contact form that sends enquiries to email.

## Alternatives considered

- Email link only: simplest, but less structured for intake and qualification.
- CRM: useful later, but too much operational overhead for MVP.
- Form to database: adds storage, privacy, and maintenance obligations not needed initially.
- Form to automation: possible future path, but not appropriate before validation of the intake process.

## Source attribution

- `project-brain/14-website/CONVERSION_PATHS.md`: maps Visitor -> Interest -> Discovery -> Qualification -> Contact -> Client intake.
- `project-brain/14-website/PAGE_REQUIREMENTS.md`: Contact page must capture enough information to qualify the enquiry and avoid requesting sensitive data upfront.
- `project-brain/12-sales/CLIENT_INTAKE_TEMPLATE.md`: defines standard intake fields that should inform the form.
- `project-brain/15-build/TECH_DECISION_REQUIREMENTS.md`: requires forms and contact flow decisions before contact page implementation.
- User-approved architecture direction in chat: Simple form -> email.

## Consequences

- MVP contact flow should stay simple and human-reviewed.
- No CRM, database, automation, or account system should be added unless separately approved.
- The form must include a sensitive-information warning and support qualification needs.
- Email routing, spam prevention, and exact form handling still need implementation details during the approved build task.

## Validation

- Confirm this ADR exists and has `Status: approved`.
- During implementation, test form submission to email using approved validation steps.
- Confirm form fields align with `project-brain/12-sales/CLIENT_INTAKE_TEMPLATE.md` and contact requirements in `project-brain/14-website/PAGE_REQUIREMENTS.md`.
- Confirm the form does not store data in a database unless a later decision approves it.
