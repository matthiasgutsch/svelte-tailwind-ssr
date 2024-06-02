<script lang="ts">
	import type { PageData } from './$types';
	import CountryDetailCard from '$lib/components/countryDetailCard.svelte';

	export let data: PageData;
	let country = data.country;
	let images = data.images;

</script>

<svelte:head>
	<title>{country.page_title}</title>
</svelte:head>

<div class="px-auto pt-2">
	<CountryDetailCard {country} {images}/>
</div>
