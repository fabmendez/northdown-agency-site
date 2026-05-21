# Context Hygiene Policy

## Purpose

This policy keeps the project context small, traceable, and useful. Agents should extract knowledge from source material instead of flooding the project with copied repositories, raw dumps, or unrelated notes.

## Context doctrine

- `repos/zipped/` is cold storage.
- `repos/reference/<repo-name>/` is temporary or selective source truth.
- `northdown-agency-site/source-map/` is extracted knowledge and cited notes.
- Project-brain remains the operational source of truth for this project.

## Rules

- Do not unzip everything.
- Inspect one repo at a time when a task requires it.
- Do not modify reference repos unless explicitly approved.
- Extract concise notes into `source-map/` instead of editing source repos.
- Keep notes tied to a task, decision, or project need.
- Prefer summaries, examples, file paths, and decision impact over large copied snippets.
- Avoid storing secrets, tokens, credentials, or sensitive client material in context docs.
- Keep the root workspace clean; do not create loose repo folders outside approved buckets.

## Good source-map notes include

- Why the source was inspected.
- Which repo or archive was used.
- Which files or areas were relevant.
- What was learned.
- How it affects a project decision or future task.
- What remains uncertain.

## Bad context hygiene includes

- Extracting many repos without an active need.
- Copying large source files into documentation.
- Mixing unrelated repo notes into project-brain.
- Treating generated assumptions as source truth.
- Leaving extracted reference repos active after they are no longer needed.

## Cleanup expectations

After source inspection:

1. Confirm notes are captured in `source-map/` or project-brain.
2. Confirm the repo or archive is cited where it influenced a decision.
3. Leave the original repo unchanged.
4. Archive or remove the extracted copy when no longer active.
5. Report what was inspected and what was intentionally not changed.
