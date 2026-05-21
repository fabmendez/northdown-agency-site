# Change Control Policy

## Purpose

This policy defines how changes are approved for Northdown Computers AI Systems & Automation project work.

## Core rule

No implementation change starts without an approved task or explicit instruction to execute. Planning, research, and documentation changes must still stay inside the requested scope.

## Approval levels

### Documentation-only changes

Allowed when the active request explicitly asks for documentation, planning, policy, source-map notes, or project-brain updates.

Requirements:

- Read the required governance and project-brain context first.
- Change only the requested documents or directly related docs.
- Do not add implementation code.
- Report files changed and validation performed.

### Implementation changes

Allowed only when an approved task explicitly authorises code, configuration, automation, integration, or build work.

Requirements:

- Read project-brain, active task, source-map, and relevant policies.
- State assumptions before editing unless the user explicitly says execute.
- Keep the change small and reviewable.
- Add or update tests for behavioral changes.
- Run the narrowest useful validation first.

### High-risk changes

Require explicit approval before work starts.

Examples:

- Dependency additions or upgrades.
- Network access.
- Archive extraction.
- Reference repo modification.
- Secrets, credentials, tokens, or environment changes.
- Architecture, stack, deployment, database, auth, payments, analytics, or integration decisions.
- Large refactors or broad file moves.

## Change workflow

1. Read the required context.
2. Confirm the requested scope.
3. Identify assumptions, risks, expected files, and validation.
4. Wait for approval unless the user explicitly says execute.
5. Make the smallest coherent change.
6. Validate with exact commands.
7. Report changed files, results, assumptions, and follow-ups.

## Stop conditions

Stop and ask when:

- Scope is unclear or expanding.
- Requirements conflict.
- Product judgment is required.
- Security-sensitive behavior is unclear.
- Tests conflict with requirements.
- The work would require unapproved dependencies, network access, archive extraction, or reference repo edits.
