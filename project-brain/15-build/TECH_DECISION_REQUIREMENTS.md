# Tech Decision Requirements

## Purpose

This document records what must be decided before stack approval. It does not choose the stack.

## Decision record requirement

Any approved technical choice must be recorded in `project-brain/03-decisions/` using the Decision Record Policy.

## Hosting

Must decide:

- Where the site will be hosted.
- Whether hosting needs preview environments.
- Deployment ownership and access model.
- Backup or rollback expectations.
- Whether the site is static, server-rendered, dynamic, or otherwise.

Decision required before:

- Project scaffold.
- Deployment configuration.
- Build pipeline work.

## Forms

Must decide:

- Whether the contact path uses a form, email link, booking link, CRM, or another intake method.
- Required intake fields.
- Sensitive information warning.
- Spam prevention approach.
- Notification and follow-up ownership.
- Storage and retention expectations.

Decision required before:

- Contact page implementation.
- Any client intake automation.

## Analytics

Must decide:

- Whether analytics are needed for MVP.
- What should be measured.
- Privacy expectations.
- Cookie or consent requirements.
- Who reviews analytics.

Decision required before:

- Adding any tracking script, analytics package, or event instrumentation.

## CMS requirements

Must decide:

- Whether content should be edited through files, a CMS, or another workflow.
- Who owns content updates.
- Whether resources or FAQs need ongoing editing.
- Required approval process for public content.

Decision required before:

- Choosing framework, CMS, content model, or resource page implementation.

## Auth requirements

Must decide:

- Whether the public site needs authentication at all.
- Whether future client portal or operating base features are in scope.
- What should remain public versus private.

Current assumption:

- Public marketing site does not require auth unless a future approved decision says otherwise.

Decision required before:

- Any private area, account system, portal, or protected route.

## SEO requirements

Must decide:

- Target search intent.
- Page metadata requirements.
- Local business needs.
- Structured data requirements, if any.
- Sitemap and indexing expectations.
- Content approval workflow for SEO pages.

Decision required before:

- Final metadata, structured data, sitemap, or SEO content expansion.

## Contact flow

Must decide:

- Primary CTA behavior.
- What happens after submission or enquiry.
- How enquiry moves into client intake.
- Who qualifies the enquiry.
- Where intake records live.
- What response expectations are public.

Decision required before:

- Contact form, booking flow, CRM handoff, or automation implementation.

## Performance expectations

Must decide:

- Expected device and network baseline.
- Image and asset strategy.
- Performance budget, if any.
- Accessibility baseline.
- Browser support expectations.

Decision required before:

- Asset-heavy design, frontend framework choice, animation, analytics, or third-party scripts.

## Approval checklist

Before stack approval, confirm:

- Hosting decision recorded.
- Forms/contact flow decision recorded.
- Analytics decision recorded or explicitly deferred.
- CMS decision recorded or explicitly deferred.
- Auth decision recorded or explicitly not required for MVP.
- SEO requirements recorded.
- Performance expectations recorded.
- Validation plan recorded.
