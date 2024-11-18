<script lang="ts">
	import UserCard from '$lib/components/userCard.svelte';
	import type { User } from '$lib/models/user';
	import type { PageData } from '../$types';

	export let data: any;
	let user = data;
</script>

<svelte:head>
	<title>Contact Matthias Gutsch</title>
</svelte:head>

<main>
	<UserCard {user} />
</main>
