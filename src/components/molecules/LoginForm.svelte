<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import Input from '../atoms/Input.svelte';
</script>

<form on:submit|preventDefault={() => {}}>
	<Input placeholder="Testesasdasd" />
	<Button style="primary">Teste 1</Button>
	<Button>Teste 2</Button>
</form>
