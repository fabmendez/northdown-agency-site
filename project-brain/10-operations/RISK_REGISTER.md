# Risk Register

## Purpose

This register tracks operational, governance, delivery, and source-truth risks for Northdown Computers AI Systems & Automation. It is a planning document, not an implementation system.

## Risk scale

Impact: low / medium / high / critical
Likelihood: low / medium / high
Status: open / monitoring / mitigated / accepted

## Current risks

### R-001: Unapproved implementation work

Impact: high
Likelihood: medium
Status: monitoring

Description: Agents may move from planning into code, installs, builds, or infrastructure before an approved task exists.

Controls:

- Change Control Policy requires explicit approval for implementation.
- Validation Policy checks that documentation-only tasks did not introduce code or dependency files.

### R-002: Reference repo mutation

Impact: high
Likelihood: medium
Status: monitoring

Description: Source-truth repos could be edited, reformatted, built, or modified while being inspected.

Controls:

- Reference Repo Policy makes reference repos read-only by default.
- Source extraction workflow requires notes to be extracted into source-map.

### R-003: Archive sprawl

Impact: medium
Likelihood: medium
Status: monitoring

Description: Extracting many archives can create clutter, unclear source status, and unnecessary review scope.

Controls:

- Do not unzip everything.
- Select one archive only when needed.
- Archive or remove extracted copies when no longer active.

### R-004: Weak source attribution

Impact: medium
Likelihood: medium
Status: monitoring

Description: Decisions may be influenced by repo content without clear citation.

Controls:

- Source Attribution Policy defines minimum attribution fields.
- Decision Record Policy requires source attribution for source-driven decisions.

### R-005: Context overload

Impact: medium
Likelihood: high
Status: monitoring

Description: Project context may become too large or noisy if agents copy raw source, unrelated notes, or broad research into project-brain.

Controls:

- Context Hygiene Policy requires concise notes tied to project need.
- Source-map holds extracted knowledge and cited notes.

### R-006: Missing validation evidence

Impact: high
Likelihood: medium
Status: monitoring

Description: Work may be marked complete without exact validation commands and results.

Controls:

- Validation Policy requires command/result reporting.
- Pre-merge review requires tests, cleanup, grep review, dependency review, and secrets consideration where relevant.

### R-007: Product or security judgment hidden in docs

Impact: high
Likelihood: medium
Status: monitoring

Description: Documentation may accidentally approve stack, pricing, compliance, security, or service commitments without explicit human decision.

Controls:

- Change Control Policy marks high-risk changes as approval-required.
- Decision Record Policy requires approved decisions for architecture, workflow, governance, dependencies, data, security, integrations, deployment, or public behavior.

## Risk review workflow

1. Review open risks before major project phases.
2. Add new risks when validation, incidents, or decisions expose them.
3. Update status when controls are added or risks are accepted.
4. Record major risk decisions in `project-brain/03-decisions/`.
5. Include unresolved risks in handoff notes.

## New risk template

```text
### R-000: Risk title

Impact:
Likelihood:
Status:

Description:

Controls:

Owner:
Review date:
```
