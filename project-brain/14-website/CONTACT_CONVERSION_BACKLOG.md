# Contact Conversion Backlog

## Purpose

This backlog item records the current Contact page conversion path and the remaining decisions needed if Northdown later adds a fuller form, booking, or intake system.

This is a planning document only. It does not approve a contact form, booking system, backend route, Sipgate configuration, dependency, deployment change, or automation.

## Current State

- The Contact page has an approved public phone number: `020-3773 0511`.
- The Contact page has an approved public email address: `hello@northdowncomputers.com`.
- `Request Operational Review` now has an immediate functional path through a `mailto:` link.
- Phone is a live contact method.
- Phone is positioned as a secondary/supporting contact option.
- No contact form exists yet.
- No booking system exists yet.
- The immediate conversion gap is partially resolved by approved public email.
- The current Contact page copy is honest that a fuller contact or booking flow may be added later.

## Desired Future State

- Visitors can request an operational review through a clear, low-friction path.
- The primary conversion path does not rely only on phone.
- Phone remains secondary/supporting for direct enquiries.
- The contact path aligns with privacy, governance, validation, and data-handling requirements.
- The Contact page makes the next step clear without implying unimplemented systems.
- A future form, booking, or intake system can improve conversion once separately approved.

## Options To Decide

- Keep the approved public email address with a `mailto:` link.
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

- Keep `Request Operational Review` as the primary CTA.
- Use the approved public email address as the current primary functional path: `hello@northdowncomputers.com`.
- Make clear that a fuller contact or booking flow may be added later.
- Use phone as the approved secondary live method: `020-3773 0511`.
- Keep phone secondary/supporting, not the only intended conversion path.
- Do not imply a working form, booking system, CRM, automation, or response-time promise exists.

## Recommended Next Implementation Slice

1. Decide whether email-only is sufficient for the next public version.
2. If not, approve form-to-email, booking, or Sipgate-supported intake as a separate mechanism.
3. Update privacy wording before any new data collection or recording goes live.
4. Implement the smallest approved improvement to the `Request Operational Review` path.
5. Validate build, check, route behavior, and Contact page content.

## Recommended Next Decision

Approve whether the current `mailto:` path is enough for launch, or choose the next conversion mechanism:

- simple form-to-email,
- booking system,
- Sipgate-supported intake,
- or a staged combination.

The lowest-complexity current path is the approved public email link. A simple form-to-email path is the most likely next improvement if Northdown wants lower-friction enquiry capture without adding a booking system or voice intake yet.
