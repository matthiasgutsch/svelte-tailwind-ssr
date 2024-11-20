<script lang="ts">
	import type { User } from '$lib/models/user';
	import { fade } from 'svelte/transition';
	export let user: User;
	export const currentDate = new Date().toLocaleDateString('en-GB');
</script>

<main>
	<div class="container" transition:fade>
		<div class="row">
			<div class="col-12">
				<div class="profile">
					<h1>Contact</h1>
					<p>
						Cel. +39 349.3269896<br />
						matthias.gutsch@gmail.com<br /><br />
						<a href="https://www.linkedin.com/in/gutschmatthias/" target="_blank">LinkedIn</a><br>
						<a href="https://github.com/matthiasgutsch" target="_blank">Github</a><br>
						<a href="https://dribbble.com/matthiasgutsch" target="_blank">Dribbble</a>

					</p>
				</div>
			</div>
		</div>
	</div>
</main>
