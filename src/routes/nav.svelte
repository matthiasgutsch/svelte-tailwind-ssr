<script lang="ts">
	import { fade } from 'svelte/transition';
	
</script>



<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
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
  </div>
</div>
<section class="header">
	<div class="container">
		<div class="col-4">	<a  href="/" transition:fade>
			<div class="logo">Nexo</div></a></div>

			<a  data-bs-toggle="offcanvas" href="#offcanvasExample">menu</a>
	</div>
</section>


