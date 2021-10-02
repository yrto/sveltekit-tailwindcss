<script lang="ts">
	import { ButtonSubmit, InputText, InputPassword, WrapperForm } from '$lib/components/atoms';
	import { addUser, getAllUsers } from '$lib/database';

	let user = {
		email: '',
		password: ''
	};

	const handleSubmit = async () => {
		await addUser();
		await getAllUsers();
	};
</script>

<WrapperForm>
	<form name="login form" on:submit|preventDefault={handleSubmit}>
		<label for="login form">Cadastre-se com seu e-mail e uma senha:</label>
		<InputText placeholder="E-mail" bind:value={user.email} />
		<InputPassword placeholder="Senha" bind:value={user.password} />
		<ButtonSubmit style="primary">Cadastrar</ButtonSubmit>
	</form>
</WrapperForm>

<style lang="postcss">
	form {
		@apply grid gap-3;
	}
</style>
