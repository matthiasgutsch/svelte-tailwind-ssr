<script lang="ts">
	import WorkCard from '$lib/components/workCard.svelte';

	export let data: any;

	let searchTerm = '';
	let filteredWorks = data.works;
</script>

<svelte:head>
	<title>UX/UI Designer, Frontend Developer, Graphic Designer Portfolio</title>
</svelte:head>

<div class="container">
	<div class="introduction">
		<h2>Work</h2>
	</div>
	<div class="row">
		{#each filteredWorks as work, index (index)}
			<WorkCard {work} />
		{/each}
	</div>
</div>

<div class="footer" />
