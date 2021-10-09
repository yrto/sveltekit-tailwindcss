<script context="module" lang="ts">
	import { authGuard } from '$lib/auth/guard';
	import type { LoadInput, LoadOutput } from '@sveltejs/kit';

	export async function load({ page, fetch, session, stuff }: LoadInput): Promise<LoadOutput> {
		return await authGuard({ page, fetch, session, stuff });
	}
</script>

<script lang="ts">
	import '../app.postcss';
	import Header from '$lib/components/organisms/Header.svelte';
	import { onMount, onDestroy } from 'svelte';
	import { authStateListen } from '$lib/auth';
	import type { Unsubscribe } from '@firebase/firestore';

	let authUnsubscribe;
	onMount(() => {
		authUnsubscribe = authStateListen();
	});
	onDestroy(() => {
		authUnsubscribe();
	});
</script>

<Header />
<div>
	<slot />
</div>

<style lang="postcss">
	div {
		@apply max-w-5xl mx-auto p-6;
	}
</style>
