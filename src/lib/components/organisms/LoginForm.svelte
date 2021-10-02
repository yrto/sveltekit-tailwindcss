<script lang="ts">
	import { ButtonSubmit, InputText, InputPassword, WrapperForm } from '$lib/components/atoms';

	let user = {
		email: '',
		password: ''
	};
</script>

<WrapperForm>
	<form name="login form" on:submit|preventDefault={() => {}}>
		<label for="login form">Entre com seu e-mail e senha:</label>
		<InputText placeholder="E-mail" bind:value={user.email} />
		<InputPassword placeholder="Senha" bind:value={user.password} />
		<ButtonSubmit style="primary">Entrar</ButtonSubmit>
	</form>
</WrapperForm>

<style lang="postcss">
	form {
		@apply grid gap-3;
	}
</style>
