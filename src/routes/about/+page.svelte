<article class="about-page">
	<header class="about-hero">
		<p class="page-label">Northdown Computers - Operational Systems Engineering</p>
		<h1>Operations Engineering For Businesses That Need Better Systems</h1>
		<p>
			Northdown helps businesses capture knowledge, reduce repeated work, and build operational
			systems that make growth easier to manage.
		</p>
		<div class="button-row" aria-label="About actions">
			<a class="button button-primary" href="/contact">Book Discovery</a>
			<a class="button button-secondary" href="/services">See Services</a>
		</div>
	</header>

	<section class="about-section" aria-labelledby="why-heading">
		<div class="section-heading">
			<p class="section-kicker">Purpose</p>
			<h2 id="why-heading">Why Northdown exists</h2>
		</div>

		<div class="prose-card">
			<p>
				Growth often creates hidden operational drag. Work gets repeated. Decisions live in
				memory. Processes depend on specific people. Tools multiply without improving the way the
				business actually runs.
			</p>
			<p>
				Northdown exists to help businesses turn that operational mess into clearer systems.
			</p>
		</div>
	</section>

	<section class="about-section" aria-labelledby="beliefs-heading">
		<div class="section-heading">
			<p class="section-kicker">Beliefs</p>
			<h2 id="beliefs-heading">What Northdown believes</h2>
			<p>
				The work is grounded in practical operations: workflows, knowledge, governance,
				validation, and useful systems.
			</p>
		</div>

		<ul class="card-grid">
			<li>Businesses should get easier to run as they grow.</li>
			<li>Systems should retain knowledge, not lose it.</li>
			<li>Automation should support real workflows.</li>
			<li>AI should be used where it improves operational capability.</li>
			<li>Governance and validation matter.</li>
			<li>Useful systems beat novelty demos.</li>
		</ul>
	</section>

	<section class="about-section" aria-labelledby="works-heading">
		<div class="section-heading">
			<p class="section-kicker">Working method</p>
			<h2 id="works-heading">How Northdown works</h2>
			<p>
				Northdown starts with the operating reality before recommending tools, automation, or
				build work.
			</p>
		</div>

		<ol class="method-list">
			<li><span>Understand the operation first.</span></li>
			<li><span>Map work and knowledge.</span></li>
			<li><span>Design practical systems.</span></li>
			<li><span>Build in controlled increments.</span></li>
			<li><span>Validate before handover.</span></li>
			<li><span>Document what matters.</span></li>
		</ol>
	</section>

	<section class="about-section" aria-labelledby="not-heading">
		<div class="section-heading">
			<p class="section-kicker">Boundaries</p>
			<h2 id="not-heading">What Northdown is not</h2>
			<p>Clear boundaries help keep the work credible, reviewable, and useful.</p>
		</div>

		<ul class="boundary-list">
			<li>Not an AI agency chasing hype.</li>
			<li>Not a prompt consultancy.</li>
			<li>Not a generic automation shop.</li>
			<li>Not a vendor pushing tools before understanding operations.</li>
		</ul>
	</section>

	<section class="about-cta" aria-labelledby="cta-heading">
		<div>
			<p class="section-kicker">Next step</p>
			<h2 id="cta-heading">Build A Business That Runs With Less Drag</h2>
			<p>Start with the operation, then decide what system should exist.</p>
		</div>

		<div class="button-row" aria-label="Conversion actions">
			<a class="button button-primary" href="/contact">Book Discovery</a>
			<a class="button button-secondary" href="/services">See Services</a>
		</div>
	</section>
</article>

<style>
	.about-page {
		display: grid;
		gap: 1.25rem;
	}

	.about-hero,
	.about-section,
	.about-cta {
		border: 1px solid #d8e0e7;
		border-radius: 8px;
	}

	.about-hero {
		background: linear-gradient(135deg, #ffffff 0%, #f8faf9 64%, #edf4f1 100%);
		padding: clamp(1.5rem, 5vw, 3.5rem);
	}

	.about-hero h1 {
		max-width: 16ch;
		margin-bottom: 1.25rem;
		color: #111827;
	}

	.about-hero p:not(.page-label) {
		max-width: 45rem;
		color: #213044;
		font-size: 1.12rem;
		line-height: 1.7;
	}

	.about-section {
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

	.button {
		align-items: center;
		border: 1px solid transparent;
		border-radius: 6px;
		display: inline-flex;
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

	.button-secondary {
		background: #ffffff;
		border-color: #b9c7d3;
		color: #18324a;
	}

	.button-secondary:hover {
		background: #eef4f7;
		border-color: #8fa4b6;
	}

	.prose-card {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #f9fbfc;
		display: grid;
		gap: 1rem;
		padding: clamp(1rem, 2vw, 1.4rem);
	}

	.prose-card p {
		margin: 0;
		max-width: 50rem;
	}

	.card-grid,
	.boundary-list,
	.method-list {
		margin: 0;
		padding: 0;
	}

	.card-grid,
	.boundary-list {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		list-style: none;
	}

	.card-grid li,
	.boundary-list li {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #f9fbfc;
		color: #223247;
		line-height: 1.5;
		min-height: 5rem;
		padding: 1rem;
	}

	.boundary-list li {
		background: #fbfcfd;
	}

	.method-list {
		counter-reset: method;
		display: grid;
		gap: 0.75rem;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		list-style: none;
	}

	.method-list li {
		border: 1px solid #d7e0e5;
		border-radius: 8px;
		background: #fbfcfd;
		counter-increment: method;
		min-height: 7rem;
		padding: 1rem;
	}

	.method-list li::before {
		color: #5e6a57;
		content: '0' counter(method);
		display: block;
		font-size: 0.78rem;
		font-weight: 800;
		margin-bottom: 1.5rem;
	}

	.method-list span {
		color: #152236;
		font-weight: 800;
		line-height: 1.35;
	}

	.about-cta {
		align-items: center;
		background: #18324a;
		color: #ffffff;
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.about-cta h2,
	.about-cta p,
	.about-cta .section-kicker {
		color: #ffffff;
	}

	.about-cta .button-row {
		flex: 0 0 auto;
		margin-top: 0;
	}

	.about-cta .button-primary {
		background: #ffffff;
		color: #18324a;
	}

	.about-cta .button-secondary {
		background: transparent;
		border-color: rgba(255, 255, 255, 0.5);
		color: #ffffff;
	}

	.about-cta .button-secondary:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	@media (max-width: 920px) {
		.about-section {
			grid-template-columns: 1fr;
		}

		.method-list {
			grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		}

		.about-cta {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (max-width: 560px) {
		.about-hero,
		.about-section,
		.about-cta {
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
