<script lang="ts">
	export let value: number;
	export let placeholder: string;
	export let min: number = 0;
	export let max: number = 999999999;
</script>

<input type="number" bind:value {placeholder} {min} {max} />
