<script lang="ts">
	export let type: 'text' | 'email' | 'password' = 'text';
	export let placeholder: string;
</script>

<input {type} {placeholder} />

<style lang="postcss">
	input {
		@apply border rounded shadow-inner;
	}
</style>
