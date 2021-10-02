<script lang="ts">
	import { goto } from '$app/navigation';
	import { Logo } from '$lib/components/atoms';
</script>

<header>
	<div class="header-container">
		<button on:click={() => goto('/')} aria-label="home" type="button" class="class-logo">
			<Logo />
			<div>
				SUPER<strong>LEVEL</strong>
			</div>
		</button>
	</div>
</header>

<style lang="postcss">
	header {
		@apply bg-white border-b sticky top-0 py-6;
	}
	.header-container {
		@apply flex max-w-5xl mx-auto px-6;
	}
	.class-logo {
		@apply flex m-[-0.5em] gap-2;
	}
</style>
