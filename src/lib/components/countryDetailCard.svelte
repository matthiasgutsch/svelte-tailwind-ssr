<script lang="ts">
	import type { CountryBrief } from '$lib/models/country';
	import { fade } from 'svelte/transition';
	export let country: any;
	export let images: any;
</script>

<div class="container">
	<a href="/" transition:fade> Back to List </a>
	<h1>{country.page_title}</h1>
	{@html country.description_2}

	<div class="row">
			{#each images as images, index (index)}
				<img class="img-fluid" src={images.image} alt={country.page_title} />
				<div class="clearfix"></div>
				<br/>
			{/each}
	</div>
</div>
