<article class="services-page">
	<header class="services-hero">
		<p class="page-label">Northdown Computers - Operational Systems Engineering</p>
		<h1>Services That Make Your Business Easier To Run</h1>
		<p>
			Northdown designs and builds operational systems that reduce repeated work, retain business
			knowledge, and improve consistency as you grow.
		</p>
		<div class="button-row" aria-label="Services actions">
			<a class="button button-primary" href="/contact">Book Discovery</a>
			<a class="button button-secondary" href="/process">See Process</a>
		</div>
	</header>

	<section class="services-section" aria-labelledby="problems-heading">
		<div class="section-heading">
			<p class="section-kicker">Operational problems</p>
			<h2 id="problems-heading">Problems Northdown helps solve</h2>
			<p>
				The work starts with repeated friction in the way the business already operates, not with
				a tool choice.
			</p>
		</div>

		<ul class="card-grid">
			<li>Repeated manual work.</li>
			<li>Bottlenecks between people, tools, and processes.</li>
			<li>Information trapped in inboxes or spreadsheets.</li>
			<li>Undocumented workflows.</li>
			<li>Inconsistent delivery.</li>
			<li>Duplicated admin.</li>
			<li>Teams depending on memory instead of systems.</li>
		</ul>
	</section>

	<section class="services-section" aria-labelledby="categories-heading">
		<div class="section-heading">
			<p class="section-kicker">Service categories</p>
			<h2 id="categories-heading">What Northdown builds</h2>
			<p>
				Northdown is an operations engineering company that uses AI where appropriate. It is not
				an AI agency, generic automation company, or prompt consultancy.
			</p>
		</div>

		<div class="service-grid">
			<section class="service-card" aria-labelledby="operational-ai-heading">
				<h3 id="operational-ai-heading">Operational AI Systems</h3>
				<p>AI-assisted systems designed around real operational workflows, not novelty demos.</p>
			</section>

			<section class="service-card" aria-labelledby="workflow-automation-heading">
				<h3 id="workflow-automation-heading">Workflow Automation</h3>
				<p>
					Automations that move information, trigger actions, reduce handoffs, and prevent
					repeated admin.
				</p>
			</section>

			<section class="service-card" aria-labelledby="knowledge-systems-heading">
				<h3 id="knowledge-systems-heading">Knowledge Systems</h3>
				<p>
					Internal systems that capture processes, decisions, client context, and operational
					know-how.
				</p>
			</section>

			<section class="service-card" aria-labelledby="infrastructure-heading">
				<h3 id="infrastructure-heading">Operational Infrastructure</h3>
				<p>
					Private, maintainable systems that support your operating model, boundaries, and
					growth.
				</p>
			</section>
		</div>
	</section>

	<section class="services-section" aria-labelledby="delivery-heading">
		<div class="section-heading">
			<p class="section-kicker">Delivery</p>
			<h2 id="delivery-heading">What delivery can include</h2>
			<p>
				Delivery is scoped after discovery, with clear owners, boundaries, validation, and handoff.
			</p>
		</div>

		<ul class="pill-list">
			<li>Workflow mapping</li>
			<li>System design</li>
			<li>Automation buildout</li>
			<li>Internal tools</li>
			<li>Documentation systems</li>
			<li>Knowledge capture</li>
			<li>AI-assisted processes</li>
			<li>Validation and handover</li>
		</ul>
	</section>

	<section class="fit-section" aria-labelledby="fit-heading">
		<div class="section-heading">
			<p class="section-kicker">Fit</p>
			<h2 id="fit-heading">Good fit and poor fit</h2>
			<p>
				Good projects have a real operational owner, a repeated workflow, and a practical way to
				validate whether the work helped.
			</p>
		</div>

		<div class="fit-grid">
			<section class="fit-card" aria-labelledby="good-fit-heading">
				<h3 id="good-fit-heading">Good fit</h3>
				<ul>
					<li>Growing businesses with repeated operational work.</li>
					<li>Teams losing time to manual admin.</li>
					<li>Businesses where knowledge lives in people's heads.</li>
					<li>Owners who want clearer systems before adding more people.</li>
					<li>Teams that value practical delivery over hype.</li>
				</ul>
			</section>

			<section class="fit-card" aria-labelledby="poor-fit-heading">
				<h3 id="poor-fit-heading">Poor fit</h3>
				<ul>
					<li>Businesses looking for AI gimmicks.</li>
					<li>Teams wanting fake metrics or instant transformation claims.</li>
					<li>Projects with no owner or decision-maker.</li>
					<li>Requests to bypass governance, privacy, or validation.</li>
				</ul>
			</section>
		</div>
	</section>

	<section class="services-cta" aria-labelledby="cta-heading">
		<div>
			<p class="section-kicker">Next step</p>
			<h2 id="cta-heading">Build Systems That Compound Capability</h2>
			<p>Start with discovery before choosing tools, integrations, or implementation detail.</p>
		</div>

		<div class="button-row" aria-label="Conversion actions">
			<a class="button button-primary" href="/contact">Book Discovery</a>
			<a class="button button-secondary" href="/process">See Process</a>
		</div>
	</section>
</article>

<style>
	.services-page {
		display: grid;
		gap: 1.25rem;
	}

	.services-hero,
	.services-section,
	.fit-section,
	.services-cta {
		border: 1px solid #d8e0e7;
		border-radius: 8px;
	}

	.services-hero {
		background: linear-gradient(135deg, #ffffff 0%, #f8faf9 64%, #edf4f1 100%);
		padding: clamp(1.5rem, 5vw, 3.5rem);
	}

	.services-hero h1 {
		max-width: 14ch;
		margin-bottom: 1.25rem;
		color: #111827;
	}

	.services-hero p:not(.page-label) {
		max-width: 44rem;
		color: #213044;
		font-size: 1.12rem;
		line-height: 1.7;
	}

	.services-section,
	.fit-section {
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
	.service-grid,
	.pill-list,
	.fit-card ul {
		margin: 0;
		padding: 0;
	}

	.card-grid,
	.service-grid {
		display: grid;
		gap: 0.85rem;
		grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
		list-style: none;
	}

	.card-grid li,
	.service-card {
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

	.service-card h3,
	.fit-card h3 {
		color: #152236;
		font-size: 1rem;
		line-height: 1.3;
		margin: 0 0 0.75rem;
	}

	.service-card p {
		margin: 0;
	}

	.pill-list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.75rem;
		list-style: none;
	}

	.pill-list li {
		border: 1px solid #d6dfd8;
		border-radius: 999px;
		background: #f6faf7;
		color: #243b2f;
		font-weight: 700;
		line-height: 1.35;
		padding: 0.55rem 0.8rem;
	}

	.fit-grid {
		display: grid;
		gap: 1rem;
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}

	.fit-card {
		border: 1px solid #dbe3e8;
		border-radius: 8px;
		background: #fbfcfd;
		padding: 1rem;
	}

	.fit-card ul {
		display: grid;
		gap: 0.65rem;
		list-style: none;
	}

	.fit-card li {
		color: #2c4054;
		line-height: 1.5;
		padding-left: 1rem;
		position: relative;
	}

	.fit-card li::before {
		background: #7b8f82;
		border-radius: 999px;
		content: '';
		height: 0.35rem;
		left: 0;
		position: absolute;
		top: 0.6rem;
		width: 0.35rem;
	}

	.services-cta {
		align-items: center;
		background: #18324a;
		color: #ffffff;
		display: flex;
		gap: 1.5rem;
		justify-content: space-between;
		padding: clamp(1.25rem, 3vw, 2rem);
	}

	.services-cta h2,
	.services-cta p,
	.services-cta .section-kicker {
		color: #ffffff;
	}

	.services-cta .button-row {
		flex: 0 0 auto;
		margin-top: 0;
	}

	.services-cta .button-primary {
		background: #ffffff;
		color: #18324a;
	}

	.services-cta .button-secondary {
		background: transparent;
		border-color: rgba(255, 255, 255, 0.5);
		color: #ffffff;
	}

	.services-cta .button-secondary:hover {
		background: rgba(255, 255, 255, 0.12);
	}

	@media (max-width: 920px) {
		.services-section,
		.fit-section {
			grid-template-columns: 1fr;
		}

		.fit-grid {
			grid-template-columns: 1fr;
		}

		.services-cta {
			align-items: flex-start;
			flex-direction: column;
		}
	}

	@media (max-width: 560px) {
		.services-hero,
		.services-section,
		.fit-section,
		.services-cta {
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
