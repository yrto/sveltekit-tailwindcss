<script lang="ts">
	import { goto } from '$app/navigation';
	import { RollingBrand } from '$lib/components/atoms';
	import LoginMenu from '$lib/components/molecules/LoginMenu.svelte';
</script>

<header>
	<div class="header-container">
		<button on:click={() => goto('/')} aria-label="home" type="button" class="class-logo">
			<RollingBrand />
		</button>
		<LoginMenu />
	</div>
</header>

<style lang="postcss">
	header {
		@apply bg-black border-b border-gray-700 sticky top-0 py-6;
	}
	.header-container {
		@apply flex justify-between max-w-5xl mx-auto px-6;
	}
	.class-logo {
		@apply mx-[-0.75em] p-3;
	}
</style>
