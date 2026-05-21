# GitHub Remote Setup

## Purpose

Prepare the Northdown agency site for a future GitHub remote setup without adding a remote, pushing code, or deploying.

This document is a checklist and command reference only. Do not push until the remote URL is confirmed by the user.

## Current Repository Status

Current local repository status:

```text
clean
```

Current branch:

```text
master
```

Recommended branch name:

```text
main
```

Branch rename is recommended before the first push so the local branch matches the expected GitHub default branch.

## Recent Commits

```text
2813f0d Document Docker runtime validation
2b71ddd Improve homepage presentation and layout polish
4f82a75 Align homepage markdown source with V2 positioning
1d674f1 Align site shell with operational systems positioning
df04f06 Implement homepage V2 operational systems positioning
4540863 Initial SvelteKit Docker scaffold for Northdown agency site
```

## GitHub Repository Recommendation

Recommended GitHub repository name:

```text
northdown-agency-site
```

Recommended initial visibility:

```text
private
```

Create the GitHub repository as an empty repository.

Do not add:

- README
- License
- `.gitignore`

The local repository already contains the project files and `.gitignore`.

## Secret Check Reminder

Before adding a remote or pushing:

- Confirm no `.env` or `.env.*` files are staged or committed.
- Confirm no API keys, tokens, SSH keys, passwords, VPS credentials, email credentials, or deployment secrets exist in committed files.
- Confirm Docker files do not bake secrets into the image.
- Confirm README and project-brain docs do not include private server credentials.
- Confirm analytics and contact-form secrets have not been added.

## Commands

### Rename Branch If Needed

Use this if the current branch is still `master`:

```bash
git branch -M main
```

### Add Remote

Do not run until the user confirms the GitHub repository URL.

```bash
git remote add origin <GITHUB_REPO_URL>
```

### Push First Branch

Do not run until the remote URL is confirmed and the branch is named `main`.

```bash
git push -u origin main
```

### Remove Wrong Remote

Use this if the wrong `origin` URL is added:

```bash
git remote remove origin
```

## Stop Point

Do not push until the remote URL is confirmed by the user.

Do not deploy from GitHub until a separate VPS deployment task is approved.
