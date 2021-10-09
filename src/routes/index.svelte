<script lang="ts">
</script>

<svelte:head>
	<title>My Svelte Index Page</title>
</svelte:head>

<ul>
	<li><a href="/login">Login</a></li>
	<li><a href="/cadastro">Cadastro</a></li>
	<li><a href="/produtos">Produtos</a></li>
	<li><a href="/produtos-live">Produtos - Live</a></li>
</ul>

{#if false}<slot />{/if}
