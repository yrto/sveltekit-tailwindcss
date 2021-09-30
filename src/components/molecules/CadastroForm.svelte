<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import InputText from '../atoms/InputText.svelte';
	import InputPassword from '../atoms/InputPassword.svelte';
	import FormContainer from '../atoms/FormContainer.svelte';
	import { addUser } from '$lib';

	const handleSubmit = async () => {
		await addUser();
	};
</script>

<FormContainer>
	<form name="login form" on:submit|preventDefault={handleSubmit}>
		<label for="login form">Cadastre-se com seu e-mail e uma senha:</label>
		<InputText placeholder="E-mail" />
		<InputPassword placeholder="Senha" />
		<Button style="primary">Cadastrar</Button>
	</form>
</FormContainer>

<style lang="postcss">
	form {
		@apply grid gap-3;
	}
</style>
