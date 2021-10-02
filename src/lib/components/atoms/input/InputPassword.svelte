<script lang="ts">
	export let value: string;
	export let placeholder: string;
</script>

<input type="password" bind:value {placeholder} />
