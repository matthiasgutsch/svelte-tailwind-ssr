<script lang="ts">
	import WorkCard from '$lib/components/workCard.svelte';

	export let data: any;

	let searchTerm = '';
	let filteredWorks = data.works;
</script>

<svelte:head>
	<title>UX/UI Designer, Frontend Developer, Graphic Designer Portfolio</title>

	<script async src="https://api.chartacoop.it/cookie/lwcnCookieNotice.js" type="9817578c05a6135818995b81-text/javascript"></script>
		<script async src="https://api.chartacoop.it/cookie/cartacoop.js" type="9817578c05a6135818995b81-text/javascript"></script>

</svelte:head>


<div class="container">
	<div class="introduction">
	<h2>I am Matthias Gutsch, a Graphic / Web Designer specializing in Frontend Development and UI/UX design. I have a strong traditional graphic design and <strong>WordPress, PHP, Angular, CSS Framework Development</strong> background and i can work on complete projects from conception to completion independently or as part of a team.</h2>
	</div>
<div class="row">
	{#each filteredWorks as work, index (index)}
		<WorkCard {work} />
	{/each}
</div>
</div>


<div class="footer"></div>


