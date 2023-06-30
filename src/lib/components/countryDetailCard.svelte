<script lang="ts">
	import type { CountryBrief } from '$lib/models/country';
	import { fade } from 'svelte/transition';
	export let country: any;
	export let images: any;
</script>
<div
	class="list-none p-6 mx-auto bg-gray-100 text-gray-800 rounded-md shadow-sm hover:shadow-md flex flex-col items-center max-w-sm"
>

{#each images as images, index (index)}
		{images.image}
	{/each}



	<img class="h-30 w-45" src={country.image} alt={country.page_title} />

	{@html country.description_2}


	<div class="py-2 px-4">
		<span
			class="inline-block bg-gray-200 rounded-full p-1 mx-1 my-1 text-xs font-semibold text-gray-700"
			>Alpha2 Code: {country.page_title}</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full p-1 mx-1 my-1 text-xs font-semibold text-gray-700"
			>Alpha3 Code: {country.page_title}</span
		>
		<span
			class="inline-block bg-gray-200 rounded-full p-1 mx-1 my-1 text-xs font-semibold text-gray-700"
			>Domain: {country.page_title}</span
		>
	</div>

	<!--button to return to country cards grid-->
	<div class="text-center">
		<a href="/">
			<button
				class="py-1 px-2 text-white bg-blue-900 rounded-lg w-full/2 focus:outline-none"
				transition:fade
			>
				Back to List
			</button>
		</a>
	</div>
</div>
