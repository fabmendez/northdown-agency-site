# Sipgate Voice Intake Feasibility

## Purpose

This document explores whether Northdown can use Sipgate number(s) to support discovery and operational review enquiries through a separate phone-intake system.

This is not a website implementation plan. It does not approve Sipgate configuration, API credentials, webhook deployment, call recording, transcription, AI voice, contact page changes, or production infrastructure.

## Goal

Use Sipgate number(s) to support discovery and operational review enquiries while preserving the website CTA architecture.

Current public number under consideration:

```text
020-3773 0511
```

CTA direction:

- Primary: `Request Operational Review`
- Secondary: `Call 020-3773 0511`

Phone should not become the only CTA. The website should still support visitors who need to understand services, process, privacy, and fit before making contact.

## Possible MVP

The MVP should be simple, non-AI, and operationally controlled.

Possible MVP capabilities:

- Automated greeting.
- Simple keypad menu.
- Route calls to the appropriate destination or send to voicemail.
- Capture basic call event metadata where supported.
- Notify the owner of missed or new enquiries.
- No AI conversation in MVP unless separately approved.

MVP intent:

- Help route discovery enquiries.
- Reduce missed-call ambiguity.
- Keep the caller experience plain and credible.
- Avoid collecting more personal or operational information than needed.

## Possible Later AI Version

A later AI-supported version may be considered only after the MVP proves useful and governance is approved.

Possible later capabilities:

- Speech-to-text transcription.
- Intake summary.
- Operational problem classification.
- Follow-up task creation.
- CRM or client record integration.
- Human review before any client-facing response.

AI version constraints:

- Do not allow AI to make qualification, pricing, legal, compliance, or client-facing commitments.
- Do not send automated client responses without human approval.
- Do not use call recording or transcription without clear disclosure and privacy updates.
- Keep human review responsible for interpretation, follow-up, and proposal decisions.

## Sipgate Capabilities To Investigate

These capabilities must be verified against the actual Sipgate account, plan, documentation, and available API features before implementation:

- Incoming call webhooks.
- Call event payloads.
- XML response actions such as `Play`, `Gather`, `Dial`, and `Hangup`.
- Voicemail and routing support.
- Whether hosted audio files are needed for greetings.
- Whether a public HTTPS webhook endpoint is required.
- Whether the Sipgate account plan supports required API and webhook features.

Do not assume these capabilities are available until confirmed in the Sipgate account and current Sipgate documentation.

## Architecture Options

## Option A: Sipgate Webhook To Small Node Service

Flow:

```text
Sipgate incoming call
  -> webhook
  -> small Node service
  -> route/play/gather actions
  -> human answer, voicemail, or hangup
```

Potential fit:

- Best if Sipgate supports programmable call responses.
- Allows a controlled greeting and keypad menu.
- Keeps MVP small while leaving room for later metadata handling.

Risks:

- Requires a public HTTPS endpoint.
- Requires secure secret handling if API credentials or webhook signatures are used.
- Requires uptime, monitoring, and fallback planning.
- Requires validation with real calls before public use.

Approval required before proceeding:

- Selecting runtime and hosting.
- Creating webhook service.
- Configuring Sipgate webhook.
- Storing credentials or webhook secrets.

## Option B: Sipgate Voicemail And Routing Only

Flow:

```text
Sipgate incoming call
  -> built-in routing
  -> human answer or voicemail
  -> owner notification
```

Potential fit:

- Best first step if Sipgate offers sufficient no-code routing.
- Avoids custom infrastructure.
- Lower risk than a custom webhook service.
- Faster to validate operational usefulness.

Risks:

- Less flexible than a programmable flow.
- Metadata and integration options may be limited.
- Caller experience depends on Sipgate's built-in configuration options.

Approval required before proceeding:

- Selecting the public number.
- Configuring routing or voicemail.
- Approving greeting text.

## Option C: Sipgate Webhook To AI Intake Service

Flow:

```text
Sipgate incoming call
  -> webhook
  -> AI intake service
  -> transcription and summary
  -> human review
  -> follow-up task or client record
```

Potential fit:

- Later only, after the non-AI intake route is validated.
- Useful if call volume or intake complexity justifies transcription and summarisation.

Risks:

- Highest privacy and governance risk.
- Requires disclosure if calls are recorded or transcribed.
- Requires retention policy, access control, and incident response.
- Requires stronger validation and human review.
- Could create client trust issues if the caller experience feels automated before consent is clear.

Approval required before proceeding:

- Recording or transcription.
- AI voice or AI summarisation.
- Storage and retention policy.
- CRM or task integration.
- Privacy page update.
- Production deployment.

## Infrastructure Options

## Replit Preview For Webhook Testing

Use only for early prototype testing if approved.

Pros:

- Quick external HTTPS endpoint for controlled tests.
- Useful for validating webhook shape and basic call flow.

Cons:

- Not preferred for production.
- Secrets and uptime need careful handling.
- Should not hold client-sensitive call data.

## VPS Service Later

Use for production if custom webhook routing is approved.

Pros:

- Fits the approved VPS direction for infrastructure ownership.
- Can run a small Node service beside other Northdown infrastructure if scoped safely.

Cons:

- Requires deployment runbook, monitoring, TLS/reverse proxy decisions, secrets handling, and rollback plan.
- Should not be mixed casually with the website container without architecture approval.

## Cloudflare Tunnel Or Ngrok For Local Testing

Use only if explicitly approved.

Pros:

- Allows local webhook testing against Sipgate.

Cons:

- Temporary endpoints are not production appropriate.
- Requires careful secret and data handling.
- Should not be used for live public routing.

## Production Endpoint Requirement

Production should use a stable HTTPS endpoint with:

- Clear ownership.
- Secret handling.
- Logging boundaries.
- Fallback behavior.
- Monitoring.
- Rollback plan.

## Compliance And Privacy Considerations

Before any live phone-intake system is configured:

- Identify Northdown clearly in the greeting.
- Do not secretly record calls.
- If recording or transcription is used, disclose it clearly.
- Avoid collecting unnecessary personal data.
- Define a retention policy for call logs, voicemail, transcripts, summaries, and metadata.
- Do not ask callers to provide passwords, credentials, or sensitive data.
- Update the Privacy page before any recording or transcription goes live.
- Define who can access voicemail, call logs, transcripts, and summaries.
- Confirm how missed calls and voicemail notifications are handled.
- Confirm whether any third-party services receive call data.

Sensitive-data rule:

Callers should be encouraged to discuss the operational problem at a high level first. Detailed credentials, client data, private documents, or regulated information should not be provided casually by phone.

## Suggested Greeting Draft

```text
Hello, you've reached Northdown Computers. We help businesses reduce operational drag and build better systems. For operational review enquiries, press 1. For existing work, press 2. To leave a message, press 3.
```

Notes:

- Keep the greeting short.
- Avoid hype.
- Avoid promising immediate response times.
- Do not claim AI handling, recording, or transcription unless implemented and disclosed.
- Existing-work routing should only be used if an operational destination exists.

## Stop Points Requiring Approval

Stop and get explicit approval before:

- Selecting which Sipgate number to use.
- Configuring Sipgate webhooks.
- Creating API credentials.
- Storing secrets.
- Recording calls.
- Transcribing calls.
- Adding AI voice.
- Deploying any webhook service.
- Updating the public Contact page.
- Routing live callers to an automated flow.
- Connecting phone intake to CRM, task systems, email, databases, or automations.

## Recommended Next Step

1. Confirm Sipgate plan and API access.
2. Confirm which number is public.
3. Check whether Sipgate supports no-code/simple routing for the approved number.
4. Build no-code/simple routing first if Sipgate supports it.
5. Validate the caller experience with internal test calls.
6. Only then consider a custom webhook or AI receptionist.

Recommended first milestone:

```text
Sipgate built-in routing or voicemail configured for 020-3773 0511, with approved greeting, no recording, no transcription, and owner notification.
```

This milestone still requires explicit approval before any Sipgate settings are changed.

## Open Questions

- Which Sipgate number is definitively approved for public use?
- Which Sipgate plan is active, and does it support incoming call webhooks?
- Are programmable XML responses available for the account?
- Can greetings be configured directly in Sipgate, or are hosted audio files required?
- Where should calls route during business and non-business times, if any routing is approved?
- Who receives voicemail or missed-call notifications?
- Should existing-client calls be handled by this number, or should the number be discovery-only?
- What data, if any, should be retained from call events?
- What privacy wording is required before recording or transcription is considered?

## Assumptions

- Northdown has a Sipgate account and multiple phone numbers.
- `020-3773 0511` is under consideration as the public discovery number.
- The phone-intake system is separate from the current website build.
- No Sipgate settings, credentials, webhook endpoints, recordings, or AI services are approved yet.
- Human review remains required before any client-facing follow-up, proposal, or qualification decision.
