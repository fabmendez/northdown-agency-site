# Incident Response

## Purpose

This document defines the planning-level incident response approach for Northdown Computers AI Systems & Automation. It does not configure infrastructure, monitoring, tools, or automation.

## Incident definition

An incident is any event that could affect confidentiality, integrity, availability, client trust, delivery quality, or project governance.

Examples:

- Suspected secret, token, credential, or client data exposure.
- Accidental modification of reference repos.
- Unapproved dependency install, build, network access, or archive extraction.
- Broken project documentation that misleads future agents.
- Loss of project-brain, source-map, task, or handoff context.
- Delivery issue that affects a client workflow or operating process.

## Response principles

- Stop the risky action first.
- Preserve evidence without spreading sensitive data.
- Report exact commands, files, and observed behavior.
- Do not hide failures or clean up evidence before review.
- Use change control before remediation work.
- Record decisions when the response changes governance, architecture, security, data, or workflow rules.

## Response workflow

1. Identify the incident and affected area.
2. Stop ongoing risky activity.
3. Capture a concise incident note.
4. Assess impact, data sensitivity, and affected files or systems.
5. Escalate for human approval when security, product, client, or infrastructure judgment is needed.
6. Create an approved remediation task.
7. Validate the remediation with exact commands.
8. Write a handoff note with cause, fix, residual risk, and follow-up actions.

## Roles

### Humans do

- Decide severity and client impact.
- Approve remediation scope.
- Handle client, legal, commercial, or security-sensitive communication.
- Decide whether a decision record or policy update is required.

### Agents do

- Stop when unsafe or unclear.
- Summarise evidence from approved local context.
- Draft incident notes, remediation plans, validation checklists, and handoff summaries.
- Avoid exposing secrets or sensitive data in logs, docs, or chat.

## Incident note template

```text
# Incident Note

Date:
Reporter:
Status: open/contained/resolved
Severity: low/medium/high/critical

## Summary

## Affected areas

## What happened

## Immediate containment

## Evidence

## Decisions needed

## Remediation plan

## Validation

## Follow-ups
```

## Stop conditions

Stop and ask immediately when:

- Secrets, credentials, or client data may be involved.
- Reference repos may have been modified.
- Unapproved network, dependency, build, archive extraction, or infrastructure work occurred.
- The fix requires product, security, legal, client, or architecture judgment.
