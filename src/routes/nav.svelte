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
		<div class="row">
		<div class="col-8 col-md-8">
			<a  href="/" transition:fade>
			<div class="logo">Matthias Gutsch</div></a>
		</div>


	<div class="col-4 col-md-4">	
			<a data-bs-toggle="offcanvas" href="#offcanvasExample" class="icon cp">
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


