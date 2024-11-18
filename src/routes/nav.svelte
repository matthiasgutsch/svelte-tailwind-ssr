<script lang="ts">
	import { fade } from 'svelte/transition';
	let isOverlayVisible = false;

	function toggleOverlay() {
		isOverlayVisible = !isOverlayVisible;
	}
</script>

<div 
	class="custom-overlay" 
	class:hidden={!isOverlayVisible} 
	transition:fade 
	tabindex="-1"
>
	<div class="custom-overlay-content">
		<!-- Close Button -->
		<button 
			type="button" 
			class="custom-btn-close" 
			on:click={toggleOverlay} 
			aria-label="Close"
		>&times;</button>

		<a class="custom-overlay-link" aria-label="home nav link" href="/" on:click={toggleOverlay}>
			<p>work</p>
		</a>

		<a class="custom-overlay-link" aria-label="about nav link" href="/about" on:click={toggleOverlay}>
			<p>about</p>
		</a>

		<a class="custom-overlay-link" aria-label="contact nav link" href="/contact" on:click={toggleOverlay}>
			<p>Contact</p>
		</a>
	</div>
</div>

<section class="header">
	<div class="container">
		<div class="row">
			<div class="col-8 col-md-8">
				<a href="/" transition:fade>
					<div class="logo">Matthias Gutsch</div>
				</a>
				<p>graphic &amp; web designer</p>
			</div>

			<div class="col-4 col-md-4">
				<a class="icon cp" on:click={toggleOverlay}>
					<div class="hamburger">
						<div class="menui top-menu"></div>
						<div class="menui mid-menu"></div>
						<div class="menui bottom-menu"></div>
					</div>
				</a>
			</div>
		</div>
	</div>
</section>
