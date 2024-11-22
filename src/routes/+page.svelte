<script lang="ts">
	import WorkCard from '$lib/components/workCard.svelte';
	import { onMount } from 'svelte';

	export let data: any;

	let searchTerm = '';
	let filteredWorks = data.works;

	onMount(() => {
		// Load the first script asynchronously
		const script1 = document.createElement('script');
		script1.src = 'https://api.chartacoop.it/cookie/lwcnCookieNotice.js';
		script1.async = true;
		script1.type = 'text/javascript'; // Correcting the type attribute
		document.head.appendChild(script1);

		// Load the second script asynchronously
		const script2 = document.createElement('script');
		script2.src = 'https://api.chartacoop.it/cookie/cartacoop.js';
		script2.async = true;
		script2.type = 'text/javascript'; // Correcting the type attribute
		document.head.appendChild(script2);

		// Cleanup the scripts when the component is destroyed
		return () => {
			document.head.removeChild(script1);
			document.head.removeChild(script2);
		};
	});
</script>

<svelte:head>
	<title>UX/UI Designer, Frontend Developer, Graphic Designer Portfolio</title>
</svelte:head>

<div class="container">
	<div class="introduction">
		<h2>I am Matthias Gutsch, a Graphic / Web Designer specializing in Frontend Development and UI/UX design. I have a strong traditional graphic design and <strong>WordPress, PHP, Angular, CSS Framework Development</strong> background and I can work on complete projects from conception to completion independently or as part of a team.</h2>
	</div>
	<div class="row">
		{#each filteredWorks as work, index (index)}
			<WorkCard {work} />
		{/each}
	</div>
</div>

<div class="footer"></div>
