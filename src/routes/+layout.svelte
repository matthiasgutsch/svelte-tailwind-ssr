

	<Nav></Nav>
	<slot></slot>


<slot></slot><style>
	@import url('../styles/global.less');
</style><slot></slot><script>import { browser } from "$app/environment";
import { onMount } from "svelte";
import "../app.scss";
import Nav from './nav.svelte';

onMount(async () => {
  if (!browser) return;

  // this is enough for most components
  await import("bootstrap");

  // some components require a bootstrap instance, to fulfil their job. In that case, use this:
  // const bootstrap = await import("bootstrap");
  // sample usage: 
  // const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
});</script><style></style>