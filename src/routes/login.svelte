<script lang="ts">
	import LoginForm from '../components/molecules/LoginForm.svelte';
	import FormPage from '../components/templates/FormPage.svelte';
</script>

<FormPage>
	<h1>Acesse sua conta</h1>
	<LoginForm />
	<p>Ainda não tem uma conta? <a href="/cadastro"> Faça seu cadastro</a></p>
</FormPage>

{#if false}<slot />{/if}

<style lang="postcss">
	h1 {
		@apply text-2xl mb-6 font-bold;
	}
	p {
		@apply text-sm text-center mt-6 text-gray-400;
	}
	a {
		@apply text-gray-700;
	}
</style>
