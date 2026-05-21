# Validation Policy

## Purpose

This policy defines how validation happens before a task is considered complete.

## Core rule

Validation must match the change. Run the narrowest useful validation first, then broader checks when the change affects shared behavior, architecture, or multiple files.

## Documentation-only validation

For documentation and planning changes:

- Read back the changed files.
- Confirm required sections are present.
- Confirm no implementation code, dependency files, builds, installs, archive extraction, or reference repo edits were introduced.
- Report exact commands and results.

## Implementation validation

For implementation changes, use the active task and project stack once approved.

Expected validation may include:

- Unit tests for changed behavior.
- Typecheck for typed code.
- Lint or format checks where configured.
- Targeted integration checks for touched workflows.
- Manual inspection where automated validation is unavailable.

## Pre-merge review standard

Before merge or handoff, confirm:

- Tests pass or failures are explained.
- Cleanup pass completed where relevant.
- Grep review completed where relevant.
- Dependency review completed if dependencies changed.
- Secrets and sensitive data considered.
- No unrelated changes are present.

## Validation reporting

Final reports must include:

- Command run.
- Result.
- Any failure and explanation.
- Any validation intentionally not run and why.

Use this format:

```text
Validation:
- command -> result
```

## Stop conditions

Stop and ask when:

- Validation requires network access, dependency installs, builds, or archive extraction that was not approved.
- Tests fail in a way that conflicts with requirements.
- A failure suggests unsafe behavior or product ambiguity.
- The available validation is too weak for the risk of the change.
