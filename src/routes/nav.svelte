<script lang="ts">
	import { fade } from 'svelte/transition';
</script>


<section class="header">
	<div class="container">
		<div class="col-4">	<a  href="/" transition:fade>
			Nexo</a></div>
	</div>
</section>

	<a class="mx-2 bg-blue-900" aria-label="home nav link" href="/" transition:fade>
		<div class="flex mx-2">
			<p class="pt-1 hover:bg-blue-400">work</p>
		</div>
	</a>

	<a class="mx-2 bg-blue-900" aria-label="home nav link" href="/about" transition:fade>
		<div class="flex mx-2">
			<p class="pt-1 hover:bg-blue-400">about</p>
		</div>
	</a>

	<a class="mx-2 bg-blue-900" aria-label="home nav link" href="/Contact" transition:fade>
		<div class="flex mx-2">
			<p class="pt-1 hover:bg-blue-400">Contact</p>
		</div>
	</a>
