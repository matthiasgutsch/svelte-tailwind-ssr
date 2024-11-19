<script lang="ts">
	import type { PageData } from './$types';
	import WorkDetailCard from '$lib/components/WorkDetailCard.svelte';
	import WorkCard from '$lib/components/WorkCard.svelte';

	export let data: PageData;
	let country = data.country;
	let images = data.images;
	let countries = data.countries;



</script>



<svelte:head>
	<title>{country.page_title} | UX/UI Design, Frontend Development and Branding</title>
</svelte:head>

<div class="px-auto pt-2">
	<WorkDetailCard {country} {images}/>
</div>


<div class="footer"></div>