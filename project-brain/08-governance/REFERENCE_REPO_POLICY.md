# Reference Repo Policy

## Purpose

This policy defines how Northdown Computers AI Systems & Automation uses local repositories as source truth without turning reference repos into mutable project workspaces.

## Repository roles

- `repos/zipped/` is cold storage for archive files.
- `repos/reference/<repo-name>/` is for selectively extracted source-truth repos only when needed.
- `repos/active/` is for Northdown-owned active work.
- `repos/experiments/` is for sandbox / chaos lab work.
- `repos/archived/` is for inactive or completed work.
- `northdown-agency-site/source-map/` is for extracted knowledge and cited notes.

## Default rules

- Do not unzip everything.
- Do not modify reference repos unless explicitly approved.
- Do not install dependencies in reference repos unless explicitly approved.
- Do not run builds in reference repos unless explicitly approved.
- Do not reformat, clean, modernise, or commit inside reference repos unless the task explicitly authorises that exact change.
- Treat reference repos as evidence, not as owned implementation surfaces.

## Source extraction workflow

1. Select one repo archive only when needed.
2. Extract to `repos/reference/<repo-name>/`.
3. Inspect source.
4. Extract notes into `northdown-agency-site/source-map/`.
5. Cite repo influence in decisions/docs.
6. Leave original repo unchanged.
7. Archive or remove extracted copy when no longer active.

## Approved use cases

Reference repos may be used to:

- Understand APIs, architecture, patterns, constraints, and examples.
- Compare implementation approaches before making project decisions.
- Support source-map notes and decision records.
- Avoid guessing when local source truth exists.

## Stop conditions

Stop and ask before proceeding when:

- A reference repo appears to need edits.
- A dependency install or build seems necessary.
- Multiple archives would need extraction.
- The repo contains unclear licensing, secrets, or sensitive material.
- The intended use would move from learning into copying substantial implementation.
