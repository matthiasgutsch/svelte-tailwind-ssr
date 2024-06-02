<script lang="ts">
	import type { CountryBrief } from '$lib/models/country';
	import { fade } from 'svelte/transition';
	export let country: CountryBrief;
</script>

<a
	class="list-none p-6 bg-gray-100 text-gray-800 text-center rounded-md shadow-md flex flex-col items-center"
	href={`/work/${country.page_url}`}
	transition:fade
>
	<img class="h-20 w-30" src={country.image} alt={country.page_title} />
	<h2 class="">{country.page_title}</h2>
</a>
