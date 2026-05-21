<script>
	import { page } from '$app/state';
	import { navItems } from '$lib/siteStructure.js';
</script>

<svelte:head>
	<title>Northdown Computers — Operational Systems Engineering</title>
	<meta
		name="description"
		content="Northdown builds operational systems that reduce friction, improve consistency, and help businesses scale without operational drag."
	/>
</svelte:head>

<a class="skip-link" href="#main-content">Skip to main content</a>

<header class="site-header">
	<div class="site-header__inner">
		<a class="brand" href="/" aria-label="Northdown home">
			<span>Northdown Computers</span>
			<small>Operational Systems Engineering</small>
		</a>

		<nav aria-label="Primary navigation">
			{#each navItems as item}
				<a href={item.href} aria-current={page.url.pathname === item.href ? 'page' : undefined}>
					{item.label}
				</a>
			{/each}
		</nav>
	</div>
</header>

<main id="main-content">
	<slot />
</main>

<footer class="site-footer">
	<p>Northdown Computers — Operational Systems Engineering</p>
	<nav aria-label="Footer navigation">
		{#each navItems as item}
			<a href={item.href}>{item.label}</a>
		{/each}
	</nav>
</footer>

<style>
	:global(body) {
		margin: 0;
		font-family:
			Arial,
			Helvetica,
			sans-serif;
		color: #172033;
		background: #f5f7f8;
		line-height: 1.5;
	}

	:global(*) {
		box-sizing: border-box;
	}

	:global(a) {
		color: #245276;
	}

	:global(a:focus-visible) {
		outline: 3px solid #7aa7c7;
		outline-offset: 3px;
	}

	.skip-link {
		position: absolute;
		left: 1rem;
		top: 1rem;
		z-index: 10;
		transform: translateY(-150%);
		background: #172033;
		color: #ffffff;
		padding: 0.5rem 0.75rem;
		text-decoration: none;
	}

	.skip-link:focus {
		transform: translateY(0);
	}

	.site-header {
		border-bottom: 1px solid #d9e0e6;
		background: rgba(255, 255, 255, 0.96);
	}

	.site-header__inner {
		display: flex;
		max-width: 76rem;
		margin: 0 auto;
		padding: 0.9rem 1rem;
		align-items: center;
		justify-content: space-between;
		gap: 1.25rem;
	}

	.brand {
		display: inline-flex;
		flex-direction: column;
		gap: 0.15rem;
		color: inherit;
		font-weight: 700;
		line-height: 1.1;
		min-width: max-content;
		text-decoration: none;
	}

	.brand small {
		color: #5d6a77;
		font-size: 0.78rem;
		font-weight: 600;
	}

	nav {
		display: flex;
		flex-wrap: wrap;
		gap: 0.35rem;
		align-items: center;
		justify-content: flex-end;
	}

	nav a {
		border-radius: 0.25rem;
		color: #2c4054;
		padding: 0.5rem 0.65rem;
		font-size: 0.94rem;
		text-decoration: none;
	}

	nav a:hover,
	nav a[aria-current='page'] {
		background: #edf3f7;
		color: #172033;
	}

	main {
		max-width: 76rem;
		min-height: 65vh;
		margin: 0 auto;
		padding: clamp(1.25rem, 4vw, 3rem) 1rem 3rem;
	}

	.site-footer {
		border-top: 1px solid #d9e0e6;
		max-width: 76rem;
		margin: 0 auto;
		padding: 1.5rem 1rem 2rem;
	}

	.site-footer p {
		margin: 0 0 0.75rem;
		color: #5d6a77;
		font-size: 0.92rem;
	}

	:global(.page-shell) {
		display: grid;
		gap: 2rem;
	}

	:global(.page-hero) {
		max-width: 46rem;
	}

	:global(.page-label) {
		margin: 0 0 0.75rem;
		color: #5d6a77;
		font-size: 0.9rem;
		font-weight: 700;
	}

	:global(h1),
	:global(h2),
	:global(p) {
		letter-spacing: 0;
	}

	:global(h1) {
		margin: 0 0 1rem;
		font-size: clamp(2rem, 6vw, 3.75rem);
		line-height: 1.05;
	}

	:global(h2) {
		margin: 0 0 0.5rem;
		font-size: 1.2rem;
		line-height: 1.25;
	}

	:global(p) {
		margin: 0;
		color: #4c5b68;
		line-height: 1.65;
	}

	:global(.content-section) {
		border-top: 1px solid #d9e0e6;
		display: grid;
		grid-template-columns: minmax(12rem, 18rem) 1fr;
		gap: 1.5rem;
		padding-top: 1.5rem;
	}

	:global(.section-heading) {
		max-width: 24rem;
	}

	:global(.section-list),
	:global(.note-list) {
		margin: 0;
		padding-left: 1.25rem;
		color: #2c4054;
		line-height: 1.65;
	}

	:global(.section-list) {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
		gap: 0.75rem 1.5rem;
	}

	:global(.section-list li),
	:global(.note-list li) {
		padding-left: 0.25rem;
	}

	@media (max-width: 760px) {
		.site-header__inner {
			align-items: flex-start;
			flex-direction: column;
		}

		nav {
			justify-content: flex-start;
		}

		main {
			padding-top: 2rem;
		}

		:global(.content-section) {
			grid-template-columns: 1fr;
		}
	}
</style>
