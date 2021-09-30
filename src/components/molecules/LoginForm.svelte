<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import InputText from '../atoms/InputText.svelte';
	import InputPassword from '../atoms/InputPassword.svelte';
	import FormContainer from '../atoms/FormContainer.svelte';
</script>

<FormContainer>
	<form name="login form" on:submit|preventDefault={() => {}}>
		<label for="login form">Entre com seu e-mail e senha:</label>
		<InputText placeholder="E-mail" />
		<InputPassword placeholder="Senha" />
		<Button style="primary">Entrar</Button>
	</form>
</FormContainer>

<style lang="postcss">
	form {
		@apply grid gap-3;
	}
</style>
