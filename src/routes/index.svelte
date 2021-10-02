<script lang="ts">
</script>

<svelte:head>
	<title>My Svelte Index Page</title>
</svelte:head>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<br />
<ul>
	<li><a href="/login">Login</a></li>
	<li><a href="/cadastro">Cadastro</a></li>
	<li><a href="/produtos">Produtos</a></li>
</ul>

{#if false}<slot />{/if}
