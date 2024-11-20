<script lang="ts">
	import type { WorkBrief } from '$lib/models/work';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	export let work: any;
	export let images: any;

	let elements: HTMLElement[] = [];

	// Initialize IntersectionObserver
	let observer: IntersectionObserver;

	onMount(() => {
		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('visible');
					}
				});
			},
			{ threshold: 0.1 }
		);

		// Observe each element
		elements.forEach((el) => observer.observe(el));

		// Clean up observer on component unmount
		return () => {
			if (observer) observer.disconnect();
		};
	});

	function registerElement(el: HTMLElement) {
		if (el) elements.push(el);
	}
</script>

<div class="container" transition:fade>
	<div class="portfolio-detail">
		<a href="/" transition:fade> Back to List </a>
		<br /><br />

		{#if images.length > 0}
			<div class="row">
				<img
					class="img-fluid first-image hidden"
					use:registerElement
					src={images[0].image}
					alt={work.page_title}
				/>
			</div>
		{/if}
		<div class="description">
			<div class="row">
				<div class="col-12 col-md-4">
					<h1>{work.page_title}</h1>
				</div>
				<div class="col-12 col-md-8">
					{@html work.description_2}
				</div>
			</div>
		</div>
		<div class="row">
			{#each images as image, index (index)}
				{#if index > 0}
					<img
						class="img-fluid hidden"
						use:registerElement
						src={image.image}
						alt={work.page_title}
					/>
					<div class="clearfix" />
					<br />
				{/if}
			{/each}
		</div>
	</div>
</div>
