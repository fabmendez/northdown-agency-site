# GitHub Push Checklist

## Purpose

This checklist prepares the Northdown agency site for its first GitHub push. It is a planning and pre-flight document only.

Do not treat this checklist as approval to run git commands, create a remote, push to GitHub, deploy to the VPS, configure a reverse proxy, configure TLS, add analytics, or add a contact backend.

## Repository name recommendation

Recommended GitHub repository name:

```text
northdown-agency-site
```

Reason:

- Matches the local project name in `package.json`.
- Keeps the repository specific to the public agency website.
- Avoids spaces, punctuation, and business-name length issues in remote URLs and VPS paths.

## Files that must be committed

Commit the project files needed to rebuild, validate, and understand the site:

- `README.md`
- `package.json`
- `package-lock.json`
- `svelte.config.js`
- `vite.config.js`
- `Dockerfile`
- `.dockerignore`
- `.gitignore`
- `src/`
- `content/`
- `project-brain/`
- `AGENTS.md`

Commit project governance and deployment planning docs, including:

- `project-brain/03-decisions/ADR-0006-hosting-vps-docker.md`
- `project-brain/03-decisions/ADR-0007-sveltekit-runtime-adapter-node.md`
- `project-brain/06-handoffs/HANDOFF_BUILD_SCAFFOLD.md`
- `project-brain/15-build/IMPLEMENTATION_PHASES.md`
- `project-brain/16-deployment/GITHUB_PUSH_CHECKLIST.md`

## Files that must not be committed

Do not commit generated, local, secret, or machine-specific files:

- `node_modules/`
- `.svelte-kit/`
- `build/`
- `.env`
- `.env.*`
- Docker containers, images, volumes, or exported image archives.
- Local editor settings unless deliberately approved.
- OS-generated files.
- Secrets, API keys, SSH keys, deployment tokens, email credentials, or VPS credentials.

Current `.gitignore` already excludes:

- `node_modules`
- `.svelte-kit`
- `build`
- `.env`
- `.env.*`

## Secret and environment checks

Before any commit or push:

- Confirm there is no `.env` or `.env.*` file being committed.
- Confirm no API keys, tokens, SSH keys, passwords, email credentials, or VPS addresses are present in committed files.
- Confirm README and project docs do not include private server credentials.
- Confirm Docker files do not bake secrets into the image.
- Confirm no analytics tokens or contact-form secrets are present.
- Keep `!.env.example` allowed only for non-secret examples if such a file is later created and approved.

## Docker files to include

Include these Docker files:

- `Dockerfile`
- `.dockerignore`

Current Docker validation facts to preserve:

- Image: `northdown-agency-site`
- Test container: `northdown-agency-site-test`
- Port: `localhost:3080 -> container:3000`
- HTTP result: `200 OK`
- Cleanup: container stopped and removed
- No container left running

## Validation commands before push

Run these before any first push:

```bash
npm install
npm run build
npm run check
npm audit --audit-level=low
docker build -t northdown-agency-site .
docker run -d --name northdown-agency-site-test -p 3080:3000 northdown-agency-site
```

Then check the local container:

```text
http://localhost:3080
```

Expected response:

```text
200 OK
```

Then clean up:

```bash
docker stop northdown-agency-site-test
docker rm northdown-agency-site-test
```

Expected known audit status:

- `npm audit --audit-level=low` currently reports 3 low severity vulnerabilities through the SvelteKit dependency chain.
- Do not run `npm audit fix --force` without explicit approval.

## First commit message suggestion

Suggested first commit message:

```text
Initial Northdown agency site scaffold
```

Alternative if a more explicit message is preferred:

```text
Scaffold SvelteKit agency site with Docker runtime
```

## Remote setup steps

These are the intended manual steps. Do not run them until explicitly approved.

1. Create a new GitHub repository named `northdown-agency-site`.
2. Confirm repository visibility.
3. Confirm no secrets are present in the local project.
4. Initialise git locally if the project is not already a repository.
5. Review pending files before staging.
6. Stage only approved project files.
7. Commit with the approved first commit message.
8. Add the GitHub remote.
9. Push the initial branch.
10. Confirm GitHub shows the expected files and no ignored/generated/secret files.

## Rollback note

For the GitHub push itself:

- If the wrong files are pushed, stop and review before making more commits.
- If secrets are pushed, treat it as an incident: rotate the secret immediately, remove it from history only with explicit approval, and document the incident.
- Keep the local project as the source for recovery until the remote is confirmed correct.

For future VPS deployment:

- Keep the previous working container image or commit reference available before updating the running site.
- Do not replace a working VPS container without a rollback path.
- VPS rollback commands and image tagging must be defined in a separate approved deployment task.
