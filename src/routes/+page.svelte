<script lang="ts">
	import CountryCard from '$lib/components/countryCard.svelte';

	export let data: any;

	let searchTerm = '';
	let filteredCountries = data.countries;
</script>

<svelte:head>
	<title>Matthias Gutsch</title>
</svelte:head>


<div class="container">
	<div class="introduction">
	<h2>I am Matthias Gutsch, a Graphic / Web Designer specializing in Frontend Development and UI/UX design. I have a strong traditional graphic design and <strong>WordPress, PHP, Angular, CSS Framework Development</strong> background and i can work on complete projects from conception to completion independently or as part of a team.</h2>
	</div>
<div class="row">
	{#each filteredCountries as country, index (index)}
		<CountryCard {country} />
	{/each}
</div>
</div>