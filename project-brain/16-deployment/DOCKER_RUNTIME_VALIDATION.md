# Docker Runtime Validation

## Purpose

Record the successful local Docker runtime validation for the current clean committed Northdown agency site.

## Validation Date

2026-05-21

## Project Path

```text
F:\Agentic engineering\Northdown Computers AI Systems and Automation\northdown-agency-site
```

## Git State

Clean git status was confirmed before validation.

Latest relevant commit:

```text
2b71ddd Improve homepage presentation and layout polish
```

## Commands and Results

### Local Build

Command:

```bash
npm.cmd run build
```

Result:

```text
Passed. Production build completed with @sveltejs/adapter-node.
```

### Svelte Check

Command:

```bash
npm.cmd run check
```

Result:

```text
Passed. svelte-check found 0 errors and 0 warnings.
```

### Docker Build

Command:

```bash
docker build -t northdown-agency-site .
```

Result:

```text
Passed. Docker image built successfully as northdown-agency-site.
```

Non-blocking warning:

```text
Current commit information was not captured by the build because git.exe is not on PATH inside the Docker build context.
```

This warning does not block the current local runtime validation.

### Docker Run

Command:

```bash
docker run -d --name northdown-agency-site-test -p 3080:3000 northdown-agency-site
```

Port mapping:

```text
localhost:3080 -> container:3000
```

Result:

```text
Passed. Test container started successfully.
```

### HTTP Response

Command:

```bash
curl.exe -I http://localhost:3080
```

Result:

```text
HTTP/1.1 200 OK
```

### Homepage Smoke Test

Command:

```bash
curl.exe http://localhost:3080
```

Result:

```text
Passed. Homepage HTML contained the headline:
Your Business Should Get Easier To Run As It Grows.
```

### Cleanup

Command:

```bash
docker rm -f northdown-agency-site-test
```

Result:

```text
Passed. Test container was removed.
```

## Conclusion

The committed site at `2b71ddd Improve homepage presentation and layout polish` can build and run locally as a Docker container.

The local Docker runtime path is validated for the current implementation state. This record does not approve VPS deployment, reverse proxy configuration, TLS setup, analytics setup, contact backend implementation, or GitHub push execution.
