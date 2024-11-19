<script lang="ts">
	import type { WorkBrief } from '$lib/models/work';
	import { fade } from 'svelte/transition';
	export let work: WorkBrief;
</script>

<div class="col-12 col-sm-6 col-md-6 col-lg-4">
	<div class="work-item">
	<a href={`/work/${work.page_url}`} transition:fade>
		<img class="img-fluid" src={work.image} alt={work.page_title} />
		<h2 class="">{work.page_title}</h2>
	</a>
</div>
</div>
