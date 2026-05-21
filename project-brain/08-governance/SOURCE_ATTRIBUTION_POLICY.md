# Source Attribution Policy

## Purpose

This policy ensures decisions, designs, and implementation plans cite the source repositories or archives that informed them.

## Core rule

Agents must cite repo influence in project docs when repo content informs a decision.

## Where attribution belongs

Use the most relevant project document:

- `source-map/REPO_INDEX.md` for catalog entries and high-level repo notes.
- `source-map/` notes for extracted technical knowledge.
- `project-brain/03-decisions/` for architecture, stack, integration, or governance decisions.
- `project-brain/06-handoffs/` for work completed and context transfer.
- Active task files when a source repo directly informs the task.

## Minimum attribution fields

When a repo informs work, record:

- Repo or archive name.
- Category: `reference`, `active`, `experiment`, `archive`, or `zipped`.
- What was inspected.
- What decision or note it informed.
- Whether the repo was read-only.
- Any uncertainty, limitation, or unverified assumption.

## Attribution examples

```text
Source: repos/zipped/react-main.zip
Category: zipped
Use: Cold-storage archive listed for future source inspection.
Decision impact: None yet; archive not extracted or inspected.
Read-only: Yes
Notes: Do not extract unless a future task requires React source context.
```

```text
Source: repos/reference/example-repo/
Category: reference
Use: Inspected routing pattern in documented files.
Decision impact: Informed ADR-0001 routing approach.
Read-only: Yes
Notes: No repo files were modified.
```

## Non-attribution

Do not cite a repo as source truth if:

- The archive was only listed but not inspected.
- The idea came from general memory or generated reasoning.
- The source was not local and approved for use.

## Stop conditions

Stop and clarify when:

- A decision depends on a repo but no source-map note exists.
- A source claim cannot be tied to a repo, file, or approved document.
- A repo appears to conflict with project-brain requirements.
