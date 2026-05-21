# Decision Record Policy

## Purpose

This policy defines when and how project decisions are recorded.

## Core rule

Decisions that affect architecture, stack, workflow, governance, dependencies, data, security, integrations, deployment, or public behavior must be recorded in `project-brain/03-decisions/`.

## When to create a decision record

Create or update a decision record when work changes or chooses:

- Application architecture.
- Framework, runtime, database, hosting, or deployment approach.
- Dependency policy exceptions.
- Security, access, secret, or runtime boundaries.
- Repo extraction or source-truth usage that affects implementation.
- Client-facing service model or delivery process.
- Validation strategy for a major feature or workflow.

## Decision record format

Use this structure unless a task specifies otherwise:

```text
# Decision: <short title>

Date:
Status: proposed/approved/superseded/rejected

## Context

What situation or requirement created the need for this decision?

## Decision

What was decided?

## Options considered

What alternatives were considered?

## Source attribution

Which project-brain docs, source-map notes, reference repos, or archive names informed the decision?

## Consequences

What tradeoffs, risks, constraints, or follow-up tasks result from the decision?

## Validation

How will this decision be validated?
```

## Attribution requirements

Decision records must cite source influence when a repo, archive, source-map note, or external reference informed the decision.

Minimum citation:

- Source name or path.
- What was inspected.
- What the source influenced.
- Any uncertainty or limitation.

## Status rules

- `proposed`: documented but not approved.
- `approved`: accepted as current project direction.
- `superseded`: replaced by a later decision.
- `rejected`: considered but not adopted.

## Stop conditions

Stop and ask before recording a decision as approved when:

- The user has not approved it.
- The decision implies a stack, dependency, integration, pricing, or deployment choice not requested.
- Source attribution is missing for a source-driven decision.
