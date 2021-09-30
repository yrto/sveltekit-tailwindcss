<script lang="ts">
	export let placeholder: string;
</script>

<input type="password" {placeholder} />

<style lang="postcss">
	input {
		@apply border rounded shadow-inner;
	}
</style>
