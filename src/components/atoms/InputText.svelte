<script lang="ts">
	export let placeholder: string;
</script>

<input type="text" {placeholder} />

<style lang="postcss">
	input {
		@apply border rounded shadow-inner;
	}
</style>
