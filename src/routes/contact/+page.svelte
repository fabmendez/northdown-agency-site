<article class="contact-page">
	<header class="contact-hero">
		<p class="page-label">Northdown Computers - Operational Systems Engineering</p>
		<h1>Start With An Operational Review</h1>
		<p>
			If your business is repeating work, losing knowledge, or becoming harder to run as it
			grows, Northdown can help you identify where better systems would create leverage.
		</p>
		<div class="button-row" aria-label="Contact actions">
			<a class="button button-primary" href="tel:+442037730511">Call 020-3773 0511</a>
			<a class="button button-secondary-light" href="/privacy">Review Privacy Notes</a>
		</div>
	</header>

	<section class="contact-section" aria-labelledby="reasons-heading">
		<div class="section-heading">
			<p class="section-kicker">Good reasons</p>
			<h2 id="reasons-heading">Good reasons to get in touch</h2>
			<p>
				A useful enquiry usually starts with a real operational problem, not a preferred tool or
				a vague request for AI.
			</p>
		</div>

		<ul class="card-grid">
			<li>Repeated admin is slowing the team down.</li>
			<li>Important knowledge lives in people's heads.</li>
			<li>Workflows depend on inboxes, spreadsheets, or memory.</li>
			<li>Delivery is becoming inconsistent.</li>
			<li>Growth is creating operational drag.</li>
			<li>You want better systems before adding more people.</li>
		</ul>
	</section>

	<section class="contact-section" aria-labelledby="expect-heading">
		<div class="section-heading">
			<p class="section-kicker">Discovery</p>
			<h2 id="expect-heading">What to expect</h2>
			<p>
				The first step is to understand the workflow, constraints, and fit before making
				implementation promises.
			</p>
		</div>

		<ol class="expect-list">
			<li>Short discovery conversation.</li>
			<li>Review of current workflows and bottlenecks.</li>
			<li>Discussion of constraints, tools, and priorities.</li>
			<li>Honest fit assessment.</li>
			<li>No pressure to buy a tool or AI gimmick.</li>
		</ol>
	</section>

	<section class="contact-section" aria-labelledby="before-heading">
		<div class="section-heading">
			<p class="section-kicker">Before contact</p>
			<h2 id="before-heading">Before you contact Northdown</h2>
			<p>
				You do not need a finished specification, but the conversation is more useful when the
				operational problem has an owner.
			</p>
		</div>

		<ul class="card-grid">
			<li>Know the operational problem you want to improve.</li>
			<li>Have a process owner or decision-maker involved.</li>
			<li>Be ready to discuss current workflows.</li>
			<li>Be clear about privacy, access, and business constraints.</li>
		</ul>
	</section>

	<section class="contact-action" aria-labelledby="action-heading">
		<div>
			<p class="section-kicker">Contact action</p>
			<h2 id="action-heading">Book Discovery</h2>
			<p>
				Call <a href="tel:+442037730511">020-3773 0511</a> to start a discovery or operational
				review conversation. Use the call to explain the workflow problem, current constraints,
				and what would make the business easier to run.
			</p>
		</div>

		<div class="button-row" aria-label="Discovery actions">
			<a class="button button-primary-inverse" href="tel:+442037730511">Call 020-3773 0511</a>
			<a class="button button-secondary" href="/privacy">Review Privacy Notes</a>
		</div>
	</section>
</article>

<style>
	.contact-page {
		display: grid;
		gap: 1.25rem;
	}

	.contact-hero,
	.contact-section,
	.contact-action {
		border: 1px solid #d8e0e7;
		border-radius: 8px;
	}

	.contact-hero {
		background: linear-gradient(135deg, #ffffff 0%, #f8faf9 64%, #edf4f1 100%);
		padding: clamp(1.5rem, 5vw, 3.5rem);
	}

	.contact-hero h1 {
		max-width: 13ch;
		margin-bottom: 1.25rem;
		color: #111827;
	}

	.contact-hero p:not(.page-label) {
		max-width: 46rem;
		color: #213044;
		font-size: 1.12rem;
		line-height: 1.7;
	}

	.contact-section {
		background: #ffffff;
		display: grid;
		grid-template-columns: minmax(14rem, 19rem) minmax(0, 1fr);
		gap: clamp(1.25rem, 3vw, 2rem);
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.section-heading h2 {
		color: #111827;
		font-size: clamp(1.35rem, 2vw, 1.8rem);
		line-height: 1.18;
		margin-bottom: 0.75rem;
	}

	.section-heading p {
		max-width: 42rem;
	}

	.section-kicker {
		color: #5e6a57;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		margin: 0 0 0.55rem;
		text-transform: uppercase;
	}

	.button-row {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		margin-top: 1.5rem;
	}

	.card-grid,
	.expect-list {
		margin: 0;
		padding: 0;
	}

	.card-grid {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		list-style: none;
	}

	.card-grid li {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #f9fbfc;
		color: #223247;
		line-height: 1.5;
		min-height: 5rem;
		padding: 1rem;
	}

	.expect-list {
		counter-reset: expectations;
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		list-style: none;
	}

	.expect-list li {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #fbfcfd;
		color: #223247;
		counter-increment: expectations;
		line-height: 1.5;
		min-height: 6.5rem;
		padding: 1rem;
	}

	.expect-list li::before {
		color: #5e6a57;
		content: '0' counter(expectations);
		display: block;
		font-size: 0.78rem;
		font-weight: 800;
		margin-bottom: 1rem;
	}

	.contact-action {
		align-items: center;
		background: #18324a;
		color: #ffffff;
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.contact-action h2,
	.contact-action p,
	.contact-action .section-kicker {
		color: #ffffff;
	}

	.contact-action p {
		max-width: 48rem;
	}

	.contact-action p a {
		color: #ffffff;
		font-weight: 800;
	}

	.contact-action .button-row {
		flex: 0 0 auto;
		margin-top: 0;
	}

	.button {
		align-items: center;
		border: 1px solid transparent;
		border-radius: 6px;
		display: inline-flex;
		flex: 0 0 auto;
		font-weight: 700;
		justify-content: center;
		min-height: 2.75rem;
		padding: 0.72rem 1rem;
		text-decoration: none;
	}

	.button-primary {
		background: #18324a;
		color: #ffffff;
	}

	.button-primary:hover {
		background: #0f2437;
	}

	.button-primary-inverse {
		background: #ffffff;
		color: #18324a;
	}

	.button-primary-inverse:hover {
		background: #eef4f7;
	}

	.button-secondary-light {
		background: #ffffff;
		border-color: #b9c7d3;
		color: #18324a;
	}

	.button-secondary-light:hover {
		background: #eef4f7;
		border-color: #8fa4b6;
	}

	.button-secondary {
		background: transparent;
		border-color: rgba(255, 255, 255, 0.5);
		color: #ffffff;
	}

	.button-secondary:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	@media (max-width: 920px) {
		.contact-section {
			grid-template-columns: 1fr;
		}

		.contact-action {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (max-width: 560px) {
		.contact-hero,
		.contact-section,
		.contact-action {
			border-left: 0;
			border-right: 0;
			border-radius: 0;
			margin-left: -1rem;
			margin-right: -1rem;
		}

		.button {
			width: 100%;
		}
	}
</style>
