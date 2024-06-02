<script lang="ts">
	import CountryCard from '$lib/components/countryCard.svelte';

	export let data: any;

	let searchTerm = '';
	let filteredCountries = data.countries;
</script>

<svelte:head>
	<title>Studio Nexo</title>
</svelte:head>


<div class="container">

<div class="row">
	{#each filteredCountries as country, index (index)}
		<CountryCard {country} />
	{/each}
</div>
</div>