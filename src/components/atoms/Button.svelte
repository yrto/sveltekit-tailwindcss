<script lang="ts">
	export let type: 'submit' = 'submit';
	export let style: 'primary' | 'secondary' = 'secondary';
</script>

<button {type} class={style}>
	<slot />
</button>

<style lang="postcss">
	button {
		@apply border rounded transition font-semibold;
	}
	.primary {
		@apply text-white border border-indigo-500 bg-indigo-500 hover:border-indigo-700 hover:bg-indigo-700;
	}
	.secondary {
		@apply border border-gray-500 hover:bg-gray-500 hover:text-white;
	}
</style>
