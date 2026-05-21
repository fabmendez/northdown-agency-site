# Implementation Phases

## Purpose

This document defines implementation phases without starting implementation or choosing a stack.

## Phase 1: Foundation

### Goal

Create the technical and content foundation once stack and build decisions are approved.

### Status

Phase 1 scaffold slice: complete as of 2026-05-21.
Phase 1 hygiene slice: complete as of 2026-05-21.
Phase 1 layout/navigation slice: complete as of 2026-05-21.
Phase 1 content source mapping slice: complete as of 2026-05-21.
Phase 1 Docker local runtime validation slice: complete as of 2026-05-21.

Completed in the scaffold increment:

- Minimal SvelteKit project scaffold.
- Base SvelteKit file structure.
- Approved site-map routes for Home, Services, About, Process, Contact, Resources, and Privacy.
- Markdown placeholder content directory.
- README local run/build instructions.
- Scaffold build validation after the workspace path rename.
- Baseline Svelte check script.
- Svelte validation tooling with `svelte-check` and `typescript`.
- README validation section with build, check, and audit commands.
- Shared layout shell with header, footer, skip link, and approved primary navigation.
- Active navigation state for approved pages.
- Semantic placeholder page shell reused across approved routes.
- Minimal global CSS for restrained layout, navigation, focus states, and responsive structure.
- Page content source map for approved internal website sources.
- SvelteKit adapter-node runtime configuration for VPS Docker deployment.
- Dockerfile and `.dockerignore` for local image builds.
- Docker local runtime validation:
  - Image: `northdown-agency-site`.
  - Test container: `northdown-agency-site-test`.
  - Port: `localhost:3080 -> container:3000`.
  - HTTP result: `200 OK`.
  - Cleanup: container stopped and removed.
  - No container left running.

Still not complete in Phase 1:

- GitHub repository setup and push workflow.
- VPS pull/build/run procedure.
- Reverse proxy, TLS, restart policy, logging, backup, and rollback configuration.

Out of scope for the scaffold increment:

- Visual polish.
- Final marketing copy.
- Contact form backend.
- Analytics setup.
- Deployment setup.

### Requires before start

- Stack decision record.
- Hosting decision record or explicit local-only decision.
- Validation plan.
- Approved scaffold task.

### Scope

- Project scaffold.
- Base file structure.
- Global layout plan.
- Primary navigation structure.
- Content source mapping.
- Initial validation setup for chosen stack.

### Validation

- Stack-specific scaffold validation once approved.
- No unapproved pages, dependencies, or services.
- Documentation and source alignment check.

## Phase 2: Core pages

### Goal

Build the main static site structure and page content from approved source docs.

### Requires before start

- Approved page copy or placeholder policy.
- Approved brand asset approach.
- Page requirements confirmed.

### Scope

- Home.
- Services.
- About.
- Process.
- Resources shell if approved.
- Privacy shell or approved privacy page.

### Validation

- Page requirements check.
- Content guardrail check.
- Responsive and accessibility checks once UI exists.
- No pricing, stack claims, unsupported case studies, or compliance claims.

## Phase 3: Conversion

### Goal

Implement the visitor-to-intake path once contact flow decisions are approved.

### Requires before start

- Contact flow decision.
- Form/intake method decision.
- Privacy handling decision.
- Spam and notification expectations if forms are used.

### Scope

- Contact page behavior.
- Intake fields or contact method.
- Sensitive information warning.
- Post-contact next-step messaging.
- Qualification handoff notes.

### Validation

- Contact flow test once implemented.
- Intake field check against `project-brain/12-sales/CLIENT_INTAKE_TEMPLATE.md`.
- Privacy and sensitive-data warning check.
- Human review path confirmed.

## Phase 4: Measurement

### Goal

Add measurement only after analytics and privacy decisions are approved.

### Requires before start

- Analytics decision record or explicit no-analytics decision.
- Privacy and consent requirements.
- Events or metrics to track.

### Scope

- Analytics setup if approved.
- Conversion path measurement if approved.
- Basic performance review.
- Post-launch improvement backlog.

### Validation

- Analytics presence or absence confirmed against decision record.
- Privacy expectations checked.
- Performance expectations checked.
- Measurement notes added to handoff.

## Cross-phase rules

- Do not move to the next phase with unresolved validation failures.
- Do not add dependencies without approval.
- Do not change stack decisions inside implementation work.
- Record architectural or operational decisions in `project-brain/03-decisions/`.
- Keep each phase small enough to review safely.
