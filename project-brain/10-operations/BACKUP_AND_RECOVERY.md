# Backup And Recovery

## Purpose

This document defines planning-level backup and recovery expectations for project knowledge and future systems. It does not create backups, configure infrastructure, install tools, or run recovery automation.

## Protected knowledge areas

The current project depends on these knowledge stores:

- `project-brain/`: charter, requirements, strategy, delivery, governance, quality, and operations source of truth.
- `source-map/`: extracted source knowledge and repo attribution.
- `tasks/`: active, backlog, and completed task records.
- `validation/`: review and validation guidance.
- `repos/zipped/`: cold storage archives.
- `repos/reference/`: selectively extracted read-only source truth when approved.

## Backup principles

- Project-brain and source-map are operational knowledge assets.
- Cold archives should remain unmodified unless an approved task requires movement or extraction.
- Reference repos are not the place to store project notes; extracted knowledge belongs in source-map or project-brain.
- Recovery should preserve source attribution and decision history.
- Backup or recovery actions that affect infrastructure, repositories, or secrets require explicit approval.

## Recovery priorities

1. Restore governance and quality docs needed to work safely.
2. Restore project-brain requirements, architecture, decisions, and handoffs.
3. Restore source-map notes and repo index.
4. Restore task records and validation notes.
5. Restore or re-link repo archives and reference repos only as needed.

## Recovery workflow

1. Identify what is missing, corrupted, or stale.
2. Stop related implementation work until source truth is reliable.
3. Locate the most recent trusted copy or authoritative source.
4. Restore only the affected files or folders.
5. Validate restored docs by reading them back.
6. Record the recovery action in a handoff note.
7. Create or update a decision record if recovery changes governance, source truth, architecture, or operating rules.

## Humans do

- Approve backup and recovery actions.
- Decide whether data loss affects clients, delivery, or security.
- Choose authoritative restore points when multiple versions exist.

## Agents do

- Identify affected docs and missing context.
- Draft recovery plans and validation checklists.
- Read restored files back and report exact results.
- Avoid overwriting unrelated changes.

## Validation

For documentation recovery:

- Confirm required files exist.
- Read back restored files.
- Confirm source attribution and decision history remain intact.
- Confirm no implementation code, installs, builds, or repo extraction occurred unless approved.

## Stop conditions

Stop and ask when:

- Recovery would overwrite unknown user changes.
- Secrets, credentials, or client data are involved.
- Infrastructure, repository history, or archive extraction is required.
- The authoritative source is unclear.
