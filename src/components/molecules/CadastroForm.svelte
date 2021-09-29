<script lang="ts">
	import Button from '../atoms/Button.svelte';
	import InputText from '../atoms/TextInput.svelte';
	import FormContainer from '../atoms/FormContainer.svelte';
</script>

<h1>Crie sua conta</h1>
<FormContainer>
	<form name="login form" on:submit|preventDefault={() => {}}>
		<label for="login form">Cadastre-se com seu e-mail e uma senha:</label>
		<InputText placeholder="E-mail" />
		<InputText placeholder="Senha" />
		<Button style="primary">Cadastrar</Button>
	</form>
</FormContainer>
<p>Já tem uma conta? <a href="/login"> Faça seu login</a></p>

<style lang="postcss">
	h1 {
		@apply text-2xl mb-6 font-bold;
	}
	form {
		@apply grid gap-3;
	}
	p {
		@apply text-sm text-center mt-6 text-gray-400;
	}
	a {
		@apply text-gray-700;
	}
</style>
