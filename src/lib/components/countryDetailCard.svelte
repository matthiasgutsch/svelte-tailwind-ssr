<script lang="ts">
	import type { CountryBrief } from '$lib/models/country';
	import { fade } from 'svelte/transition';
	export let country: any;
	export let images: any;
</script>

<div class="container">
	<div class="portfolio-detail">
		<a href="/" transition:fade> Back to List </a>
		
		{#if images.length > 0}
		<div class="row">
			<img class="img-fluid first-image" src={images[0].image} alt={country.page_title} />
		</div>
		{/if}
		
		<h1>{country.page_title}</h1>
		{@html country.description_2}
		
		<div class="row">
			{#each images as image, index (index)}
				{#if index > 0}
					<img class="img-fluid" src={image.image} alt={country.page_title} />
					<div class="clearfix"></div>
					<br/>
				{/if}
			{/each}
		</div>
	</div>
</div>
