<article class="resources-page">
	<header class="resources-hero">
		<p class="page-label">Northdown Computers - Operational Systems Engineering</p>
		<h1>Resources For Building Better Operational Systems</h1>
		<p>
			Practical notes, guides, and decision support for businesses that want to reduce repeated
			work, retain knowledge, and improve operational consistency.
		</p>
		<div class="button-row" aria-label="Resources actions">
			<a class="button button-primary" href="/services">See Services</a>
			<a class="button button-secondary" href="/contact">Book Discovery</a>
		</div>
	</header>

	<section class="resources-section" aria-labelledby="library-heading">
		<div class="section-heading">
			<p class="section-kicker">Library scope</p>
			<h2 id="library-heading">What this resource library will cover</h2>
			<p>
				The resource library will focus on practical operating concerns, not trend commentary or
				unsupported claims.
			</p>
		</div>

		<ul class="card-grid">
			<li>Workflow automation.</li>
			<li>Operational AI systems.</li>
			<li>Knowledge capture.</li>
			<li>Process documentation.</li>
			<li>Internal tools.</li>
			<li>Governance and validation.</li>
			<li>Private operational infrastructure.</li>
		</ul>
	</section>

	<section class="resources-section" aria-labelledby="questions-heading">
		<div class="section-heading">
			<p class="section-kicker">Buyer guidance</p>
			<h2 id="questions-heading">Useful questions to ask before automating</h2>
			<p>
				Good automation starts with clear operational understanding and explicit human
				boundaries.
			</p>
		</div>

		<ul class="question-grid">
			<li>What work is being repeated?</li>
			<li>Where does important knowledge currently live?</li>
			<li>Which handoffs create delay or confusion?</li>
			<li>What decisions rely on memory?</li>
			<li>What should stay human?</li>
			<li>What would make the business easier to run?</li>
		</ul>
	</section>

	<section class="resources-section" aria-labelledby="start-heading">
		<div class="section-heading">
			<p class="section-kicker">Navigation</p>
			<h2 id="start-heading">Start with the right page</h2>
			<p>
				These pages explain the current Northdown offer, delivery model, operating principles,
				and contact path.
			</p>
		</div>

		<div class="link-grid">
			<a class="link-card" href="/services">
				<span>Services</span>
				Understand what Northdown builds.
			</a>
			<a class="link-card" href="/process">
				<span>Process</span>
				See how Northdown works.
			</a>
			<a class="link-card" href="/about">
				<span>About</span>
				Understand the operating principles.
			</a>
			<a class="link-card" href="/contact">
				<span>Contact</span>
				Request an operational review.
			</a>
		</div>
	</section>

	<section class="resources-section" aria-labelledby="status-heading">
		<div class="section-heading">
			<p class="section-kicker">Status</p>
			<h2 id="status-heading">Resource status</h2>
			<p>
				The resource library is being developed. Northdown will add practical notes and guides as
				the public site matures.
			</p>
		</div>

		<div class="status-card">
			<p>
				No published guide library, downloadable resources, case studies, metrics, or client
				examples are being claimed here.
			</p>
		</div>
	</section>

	<section class="resources-cta" aria-labelledby="cta-heading">
		<div>
			<p class="section-kicker">Next step</p>
			<h2 id="cta-heading">Move From Learning To Operational Leverage</h2>
			<p>Use the site to understand the offer, then start with a practical discovery conversation.</p>
		</div>

		<div class="button-row" aria-label="Conversion actions">
			<a class="button button-primary" href="/services">See Services</a>
			<a class="button button-secondary" href="/contact">Book Discovery</a>
		</div>
	</section>
</article>

<style>
	.resources-page {
		display: grid;
		gap: 1.25rem;
	}

	.resources-hero,
	.resources-section,
	.resources-cta {
		border: 1px solid #d8e0e7;
		border-radius: 8px;
	}

	.resources-hero {
		background: linear-gradient(135deg, #ffffff 0%, #f8faf9 64%, #edf4f1 100%);
		padding: clamp(1.5rem, 5vw, 3.5rem);
	}

	.resources-hero h1 {
		max-width: 15ch;
		margin-bottom: 1.25rem;
		color: #111827;
	}

	.resources-hero p:not(.page-label) {
		max-width: 46rem;
		color: #213044;
		font-size: 1.12rem;
		line-height: 1.7;
	}

	.resources-section {
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

	.card-grid,
	.question-grid,
	.link-grid {
		margin: 0;
		padding: 0;
	}

	.card-grid,
	.question-grid {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		list-style: none;
	}

	.card-grid li,
	.question-grid li,
	.status-card {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #f9fbfc;
		color: #223247;
		line-height: 1.5;
		padding: 1rem;
	}

	.card-grid li {
		min-height: 5rem;
	}

	.question-grid li {
		background: #fbfcfd;
		min-height: 6rem;
	}

	.link-grid {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.link-card {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #f9fbfc;
		color: #2c4054;
		display: grid;
		gap: 0.55rem;
		line-height: 1.5;
		min-height: 7rem;
		padding: 1rem;
		text-decoration: none;
	}

	.link-card:hover {
		background: #eef4f7;
		border-color: #b9c7d3;
	}

	.link-card span {
		color: #152236;
		font-weight: 800;
	}

	.status-card p {
		margin: 0;
		max-width: 48rem;
	}

	.resources-cta {
		align-items: center;
		background: #18324a;
		color: #ffffff;
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.resources-cta h2,
	.resources-cta p,
	.resources-cta .section-kicker {
		color: #ffffff;
	}

	.resources-cta .button-row {
		flex: 0 0 auto;
		margin-top: 0;
	}

	.resources-cta .button-primary {
		background: #ffffff;
		color: #18324a;
	}

	.resources-cta .button-secondary {
		background: transparent;
		border-color: rgba(255, 255, 255, 0.5);
		color: #ffffff;
	}

	.resources-cta .button-secondary:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	@media (max-width: 920px) {
		.resources-section {
			grid-template-columns: 1fr;
		}

		.resources-cta {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (max-width: 640px) {
		.link-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 560px) {
		.resources-hero,
		.resources-section,
		.resources-cta {
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
