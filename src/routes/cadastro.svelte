<script lang="ts">
	import CadastroForm from '$lib/components/organisms/CadastroForm.svelte';
	import FormPage from '$lib/components/pages/FormPage.svelte';
</script>

<FormPage>
	<h1>Crie sua conta</h1>
	<CadastroForm />
	<p>Já tem uma conta? <a href="/login"> Faça seu login</a></p>
</FormPage>

{#if false}<slot />{/if}

<style lang="postcss">
	h1 {
		@apply text-2xl mb-6 font-semibold;
	}
	p {
		@apply text-sm text-center mt-6 text-gray-400;
	}
	a {
		@apply text-gray-700;
	}
</style>
