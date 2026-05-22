# Contact Conversion Backlog

## Purpose

This backlog item records the current Contact page conversion path and the remaining decisions needed if Northdown later adds a fuller form, booking, or intake system.

This is a planning document only. It does not approve a contact form, booking system, backend route, Sipgate configuration, dependency, deployment change, or automation.

## Current State

- The Contact page has an approved public phone number: `020-3773 0511`.
- The Contact page has an approved public email address: `hello@northdowncomputers.com`.
- `Request Operational Review` now links to a dedicated route: `/request-operational-review`.
- The dedicated review page uses a `mailto:` link as the functional submission path.
- The `mailto:` link pre-populates subject and body fields including: current operational challenge, business/company name, best contact details, current tools or systems, and what would make the business easier to run.
- Phone is a live contact method and is available on both the contact page and the review page.
- Phone is positioned as a secondary/supporting contact option.
- No contact form exists yet.
- No booking system exists yet.
- Backend form and booking flow remain future work.

## What Was Implemented

- Dedicated route created: `src/routes/request-operational-review/+page.svelte`
- Content source created: `content/pages/request-operational-review.md`
- Homepage primary CTA (hero and bottom CTA block) updated to link to `/request-operational-review`.
- Contact page primary CTA (hero and action block) updated to link to `/request-operational-review`.
- `mailto:` link remains on the dedicated review page as the functional submission path.
- Direct email and phone remain available on the contact page.

## Desired Future State

- Visitors can request an operational review through a clear, low-friction path.
- The primary conversion path does not rely only on phone.
- Phone remains secondary/supporting for direct enquiries.
- The contact path aligns with privacy, governance, validation, and data-handling requirements.
- The Contact page makes the next step clear without implying unimplemented systems.
- A future form, booking, or intake system can improve conversion once separately approved.

## Options To Decide

- Keep the approved public email address with a `mailto:` link (current).
- Add a simple contact form.
- Add a booking link or booking system.
- Add a Sipgate voice intake flow.
- Use a combination of phone, email, form, booking, and voice intake.

## Required Decisions

- Whether to implement form-to-email.
- Whether to use an external form provider or a site backend.
- Spam protection approach.
- Privacy wording update before any new data collection goes live.
- Where messages should be delivered.
- Whether the Sipgate number is discovery-only or general contact.
- Whether any call handling, recording, transcription, or AI intake is approved.
- Whether contact submissions require storage, CRM entry, or manual-only handling.

## Interim Website Behavior

- `Request Operational Review` CTA links to `/request-operational-review`.
- The dedicated review page uses `mailto:` as the functional submission path.
- Direct email and phone remain available on the contact page.
- No response-time promise on any page.
- Do not imply a working form, booking system, CRM, automation, or response-time promise exists.

## Recommended Next Implementation Slice

1. Decide whether mailto-only is sufficient for the next public version.
2. If not, approve form-to-email, booking, or Sipgate-supported intake as a separate mechanism.
3. Update privacy wording before any new data collection or recording goes live.
4. Implement the smallest approved improvement to the `Request Operational Review` path.
5. Validate build, check, route behavior, and content.

## Recommended Next Decision

Approve whether the current `mailto:` path on the dedicated review page is enough for launch, or choose the next conversion mechanism:

- simple form-to-email,
- booking system,
- Sipgate-supported intake,
- or a staged combination.
