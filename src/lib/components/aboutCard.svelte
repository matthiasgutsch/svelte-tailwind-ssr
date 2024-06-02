<script>
	import { fade } from 'svelte/transition';
</script>

	<div class="container" transition:fade>
	
					

					<div class="p-2">
						<h4 class="pb-1 text-xl font-medium leading-8 text-center text-blue-900">
							Countries API
						</h4>
						<div class="px-2 text-xs font-semibold text-left text-gray-600">
							<p class="pb-2">
								<span class="font-bold text-blue-900"
									>A list of countries is fetched from the REST Countries API</span
								>
								The country Alpha3 Code is used as a country id for navigation to a Country Detail page
								using route params id to fetch full country details from the API.
							</p>
							<p>
								<span class="font-bold text-blue-900">The data on the Contact page</span>
								is fetched from the Github API. No API key is required to search for a user up to a set
								search limit.
							</p>
							<br />
							<p>
								<span class="font-bold text-blue-900">The Stack:</span> Svelte, RxJS, Tailwind CSS.
							</p>
						</div>

						<div class="my-2 text-center">
							<a
								class="text-xs italic font-medium text-indigo-600 hover:underline hover:text-indigo-800"
								href="https://github.com/AndrewJBateman/svelte-tailwind-ssr"
								target="_blank"
								rel="noopener noreferrer">See Github Repo.</a
							>
						</div>
					</div>
	</div>
