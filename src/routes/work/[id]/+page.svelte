<script lang="ts">
	import type { PageData } from './$types';
	import WorkDetailCard from '$lib/components/workDetailCard.svelte';
	import WorkCard from '$lib/components/workCard.svelte';

	export let data: PageData;
	let work = data.work;
	let images = data.images;
	let works = data.works;



</script>



<svelte:head>
	<title>{work.page_title} | UX/UI Design, Frontend Development and Branding</title>
</svelte:head>

<div class="px-auto pt-2">
	<WorkDetailCard {work} {images}/>
</div>


<div class="footer"></div>