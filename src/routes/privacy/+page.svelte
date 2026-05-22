<article class="privacy-page">
	<header class="privacy-hero">
		<p class="page-label">Northdown Computers - Operational Systems Engineering</p>
		<h1>Privacy</h1>
		<p>
			Northdown aims to handle business information carefully, collect only what is needed, and
			avoid unnecessary data exposure.
		</p>
	</header>

	<section class="privacy-section" aria-labelledby="status-heading">
		<div class="section-heading">
			<p class="section-kicker">Current state</p>
			<h2 id="status-heading">Current site status</h2>
			<p>
				This page is a practical summary for the current site state. It is not formal legal
				advice.
			</p>
		</div>

		<ul class="status-list">
			<li>This site is currently informational.</li>
			<li>No working contact form is implemented yet.</li>
			<li>No payment processing is implemented.</li>
			<li>No client portal is implemented.</li>
			<li>No analytics implementation has been performed yet.</li>
		</ul>
	</section>

	<section class="privacy-section" aria-labelledby="provided-heading">
		<div class="section-heading">
			<p class="section-kicker">Visitor information</p>
			<h2 id="provided-heading">Information visitors may choose to provide</h2>
			<p>
				Visitors should avoid sending sensitive information until an appropriate contact path and
				handling expectations are agreed.
			</p>
		</div>

		<ul class="card-grid">
			<li>Future contact details if a contact path is configured.</li>
			<li>Business context shared during discovery.</li>
			<li>Workflow or operational information shared voluntarily.</li>
		</ul>
	</section>

	<section class="privacy-section" aria-labelledby="use-heading">
		<div class="section-heading">
			<p class="section-kicker">Use</p>
			<h2 id="use-heading">How information may be used</h2>
			<p>
				Information should be used for practical enquiry, discovery, proposal, and approved
				delivery purposes.
			</p>
		</div>

		<ul class="card-grid">
			<li>Respond to enquiries.</li>
			<li>Assess fit.</li>
			<li>Understand operational problems.</li>
			<li>Prepare discovery or proposal materials.</li>
			<li>Deliver approved work if a client engagement begins.</li>
		</ul>
	</section>

	<section class="privacy-section" aria-labelledby="confidentiality-heading">
		<div class="section-heading">
			<p class="section-kicker">Confidentiality</p>
			<h2 id="confidentiality-heading">Operational confidentiality</h2>
			<p>
				Operational systems work can involve sensitive business context, so access and handling
				should be agreed before implementation work begins.
			</p>
		</div>

		<ul class="card-grid">
			<li>
				Northdown may work with operational workflows, business rules, documents, tools, and
				internal knowledge.
			</li>
			<li>Sensitive access should be limited to what is necessary.</li>
			<li>Secrets, credentials, and private data should not be sent casually.</li>
			<li>Access and data handling should be agreed before implementation work.</li>
		</ul>
	</section>

	<section class="privacy-section" aria-labelledby="cookies-heading">
		<div class="section-heading">
			<p class="section-kicker">Tracking</p>
			<h2 id="cookies-heading">Cookies and analytics</h2>
			<p>
				No analytics implementation has been performed yet. If analytics is added later, this
				page should be updated.
			</p>
		</div>

		<div class="notice-card">
			<p>Northdown should avoid unnecessary tracking and keep visitor data collection limited.</p>
		</div>
	</section>

	<section class="privacy-section" aria-labelledby="third-party-heading">
		<div class="section-heading">
			<p class="section-kicker">Services</p>
			<h2 id="third-party-heading">Third-party services</h2>
			<p>
				GitHub/source control, hosting infrastructure, email/contact provider, analytics, or
				automation services may be used later depending on approved implementation choices.
			</p>
		</div>

		<div class="notice-card">
			<p>This page should be updated when those services are confirmed.</p>
		</div>
	</section>

	<section class="privacy-cta" aria-labelledby="contact-heading">
		<div>
			<p class="section-kicker">Contact</p>
			<h2 id="contact-heading">Contact Method Pending</h2>
			<p>Contact method is pending final configuration.</p>
		</div>

		<a class="button button-secondary" href="/contact">Return To Contact</a>
	</section>
</article>

<style>
	.privacy-page {
		display: grid;
		gap: 1.25rem;
	}

	.privacy-hero,
	.privacy-section,
	.privacy-cta {
		border: 1px solid #d8e0e7;
		border-radius: 8px;
	}

	.privacy-hero {
		background: linear-gradient(135deg, #ffffff 0%, #f8faf9 64%, #edf4f1 100%);
		padding: clamp(1.5rem, 5vw, 3.5rem);
	}

	.privacy-hero h1 {
		max-width: 12ch;
		margin-bottom: 1.25rem;
		color: #111827;
	}

	.privacy-hero p:not(.page-label) {
		max-width: 46rem;
		color: #213044;
		font-size: 1.12rem;
		line-height: 1.7;
	}

	.privacy-section {
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

	.status-list,
	.card-grid {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.status-list li,
	.card-grid li,
	.notice-card {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #f9fbfc;
		color: #223247;
		line-height: 1.5;
		padding: 1rem;
	}

	.status-list li,
	.card-grid li {
		min-height: 5rem;
	}

	.notice-card {
		background: #fbfcfd;
	}

	.notice-card p {
		margin: 0;
		max-width: 48rem;
	}

	.privacy-cta {
		align-items: center;
		background: #18324a;
		color: #ffffff;
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.privacy-cta h2,
	.privacy-cta p,
	.privacy-cta .section-kicker {
		color: #ffffff;
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

	.button-secondary {
		background: transparent;
		border-color: rgba(255, 255, 255, 0.5);
		color: #ffffff;
	}

	.button-secondary:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	@media (max-width: 920px) {
		.privacy-section {
			grid-template-columns: 1fr;
		}

		.privacy-cta {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (max-width: 560px) {
		.privacy-hero,
		.privacy-section,
		.privacy-cta {
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
