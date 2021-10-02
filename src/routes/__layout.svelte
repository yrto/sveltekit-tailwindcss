<script lang="ts">
	import '../app.postcss';
	import Header from '../lib/components/organisms/Header.svelte';
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
