<script lang="ts">
	import type { CountryBrief } from '$lib/models/work';
	import { fade } from 'svelte/transition';
	export let country: CountryBrief;
</script>

<div class="col-12 col-sm-6 col-md-6 col-lg-4">
	<div class="work-item">
	<a href={`/work/${country.page_url}`} transition:fade>
		<img class="img-fluid" src={country.image} alt={country.page_title} />
		<h2 class="">{country.page_title}</h2>
	</a>
</div>
</div>
