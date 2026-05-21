# Build Strategy

## Purpose

This document prepares implementation without choosing a stack, dependencies, hosting, forms, analytics, CMS, or build tooling.

## Current status

No architecture or stack decisions are approved. Build work must not start until the required technical decisions are recorded and approved.

## Principles

- Build from project-brain, approved tasks, and decision records.
- Keep increments small enough to review safely.
- Validate each increment before moving to the next.
- Do not add dependencies without approval.
- Do not choose stack, hosting, CMS, forms, analytics, auth, or deployment tools in implementation by assumption.
- Do not invent copy, case studies, testimonials, certifications, pricing, or compliance claims.
- Keep public claims tied to approved brand, product, sales, and website planning docs.

## Small increments

Each implementation increment should have:

- One clear goal.
- A narrow file scope.
- Acceptance criteria.
- Required source docs.
- Validation commands.
- Explicit out-of-scope items.

Preferred increment sequence:

1. Technical decision records.
2. Project scaffold.
3. Base layout and navigation.
4. Core static pages.
5. Contact/intake path.
6. Privacy and trust content.
7. Resources shell.
8. Measurement only after analytics decisions are approved.

## Validation-first approach

Before building each increment, define how it will be checked.

Validation may include:

- Documentation read-back for planning changes.
- Build or typecheck only after a stack exists.
- Visual review only after UI implementation exists.
- Content checks against approved source docs.
- Accessibility and responsive checks once pages are implemented.
- Contact flow checks only after forms are approved.

## Review loops

Use review loops at these points:

- Before stack approval.
- After scaffold creation.
- After first page implementation.
- Before contact flow goes live.
- Before analytics or tracking is added.
- Before public launch.

Each review should check:

- Scope control.
- Source alignment.
- Trust and boundary claims.
- Validation evidence.
- No unrelated changes.
- No unapproved dependencies or services.

## Stop conditions

Stop before implementation when:

- Stack, hosting, form, analytics, CMS, SEO, auth, contact flow, or performance expectations are undecided but needed.
- Required content is missing or unapproved.
- The change would create pricing, compliance, or service guarantees.
- Validation cannot be defined.
- The implementation would require dependencies, builds, network access, or repo extraction that are not approved.
