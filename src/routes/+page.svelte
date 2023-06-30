<script lang="ts">
	import CountryCard from '$lib/components/countryCard.svelte';

	export let data: any;

	let searchTerm = '';
	let filteredCountries = data.countries;
</script>

<svelte:head>
	<title>Svelte Kit API Data</title>
</svelte:head>



<div class="px-4 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
	{#each filteredCountries as country, index (index)}
		<CountryCard {country} />
	{/each}
</div>
