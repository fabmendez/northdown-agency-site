# Delivery Playbook

## Purpose

This playbook describes how Northdown Computers AI Systems & Automation should run delivery once a project has passed discovery, audit, and proposal. It is stack-neutral and does not define implementation code.

## Delivery stages

## 1. Confirm scope

### Humans do

- Review the signed or approved scope.
- Confirm acceptance criteria, exclusions, client responsibilities, and timeline assumptions.
- Check that no unapproved pricing, platform, or integration assumption has slipped in.

### Agents do

- Compare delivery notes against proposal and project-brain docs.
- Draft a scope confirmation checklist.
- Flag unclear acceptance criteria or missing owner decisions.

### Automation happens

- Scope checklists and project setup notes can be generated from approved docs.

### Deliverables

- Scope confirmation note.
- Delivery checklist.
- Known assumptions and exclusions.

## 2. Design the workflow

### Humans do

- Map the target workflow with client operators.
- Confirm human review points.
- Decide what should be automated and what should stay manual.
- Approve data access and handling boundaries.

### Agents do

- Turn discovery and audit notes into draft workflow maps.
- Identify edge cases, exceptions, and handoff points.
- Draft user-facing process notes for review.

### Automation happens

- Workflow maps, checklists, and draft operating procedures can be generated from approved notes.

### Deliverables

- Target workflow map.
- Human approval points.
- Data and access notes.
- Draft operating procedure.

## 3. Build or configure the agreed system

### Humans do

- Perform or supervise implementation under a future approved technical task.
- Make architecture and stack decisions only through approved decision records.
- Keep delivery inside scope.
- Review outputs before client exposure.

### Agents do

- Support task planning, implementation notes, test plans, and documentation.
- Maintain context in project-brain and handoff files.
- Flag scope drift, unsupported assumptions, and security concerns.

### Automation happens

- Internal templates can support repeatable documentation and validation.
- Approved checks can be run when implementation exists.

### Deliverables

- Implemented workflow, tool, or system when separately approved.
- Updated task notes.
- Draft test and validation material.

## 4. Validate

### Humans do

- Test the delivered work with realistic examples.
- Confirm behavior against acceptance criteria.
- Review security, access, and human approval points.
- Decide whether to release, revise, or pause.

### Agents do

- Prepare validation checklists.
- Summarise test results.
- Draft issue lists and follow-up tasks.

### Automation happens

- Repeatable tests and checks can be run where approved.
- Validation reports can be assembled from results.

### Deliverables

- Validation report.
- Issue list.
- Acceptance decision.

## 5. Handoff

### Humans do

- Walk the client through the final workflow.
- Confirm users understand what the system does and does not do.
- Agree support boundaries and next review point.

### Agents do

- Draft handoff notes, user guides, and internal support notes.
- Prepare improvement backlog items.

### Automation happens

- Documentation can be assembled from approved delivery notes.
- Review reminders can be prepared if approved.

### Deliverables

- Client guide.
- Internal handoff summary.
- Support notes.
- Improvement backlog.

## Operating rules

- Do not expand scope without approval.
- Do not add dependencies without approval.
- Do not choose a stack without a decision record.
- Do not expose sensitive client information to agents or automation without explicit permission.
- Keep human approval for judgment-heavy decisions.
- Record assumptions and unresolved risks in the handoff.
