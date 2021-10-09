<script lang="ts">
	import { goto } from '$app/navigation';
	import { authEmailAndPassword } from '$lib/auth';
	import { ButtonSubmit, InputText, InputPassword, WrapperForm } from '$lib/components/atoms';

	let userInfo = {
		email: '',
		password: ''
	};

	const handleSignIn = async () => {
		await authEmailAndPassword(userInfo.email, userInfo.password);
		goto('/');
	};
</script>

<WrapperForm>
	<form name="login form" on:submit|preventDefault={handleSignIn}>
		<label for="login form">Entre com seu e-mail e senha:</label>
		<InputText placeholder="E-mail" bind:value={userInfo.email} />
		<InputPassword placeholder="Senha" bind:value={userInfo.password} />
		<ButtonSubmit style="primary">Entrar</ButtonSubmit>
	</form>
</WrapperForm>

<style lang="postcss">
	form {
		@apply grid gap-3;
	}
</style>
