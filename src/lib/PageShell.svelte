<script>
	export let title;
	export let description;
	export let primaryAction;
	export let sections = [];
	export let notes = [];
</script>

<article class="page-shell">
	<header class="page-hero">
		<p class="page-label">Northdown Computers — Operational Systems Engineering</p>
		<h1>{title}</h1>
		<p>{description}</p>
	</header>

	<section class="content-section" aria-labelledby="page-sections-heading">
		<div class="section-heading">
			<h2 id="page-sections-heading">Page structure</h2>
			<p>Placeholder sections mapped from the approved website requirements.</p>
		</div>

		<ol class="section-list">
			{#each sections as section}
				<li>{section}</li>
			{/each}
		</ol>
	</section>

	<section class="content-section" aria-labelledby="page-action-heading">
		<div class="section-heading">
			<h2 id="page-action-heading">Primary action</h2>
			<p>{primaryAction}</p>
		</div>
	</section>

	{#if notes.length}
		<section class="content-section" aria-labelledby="page-notes-heading">
			<div class="section-heading">
				<h2 id="page-notes-heading">Implementation notes</h2>
			</div>

			<ul class="note-list">
				{#each notes as note}
					<li>{note}</li>
				{/each}
			</ul>
		</section>
	{/if}
</article>
