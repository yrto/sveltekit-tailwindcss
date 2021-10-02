<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import type { productModel } from '$lib/models/product';
	import { addDocToCollection, listenToCollection } from '$lib/database';
	import { ButtonSubmit, InputText, InputNumber } from '$lib/components/atoms';
	import type { DocumentData } from '@firebase/firestore';

	let product: productModel = {
		name: '',
		description: '',
		price: 0,
		stock: 0
	};

	let products: productModel[] = [];

	const handleSubmit = async () => {
		console.log(product);
		await addDocToCollection('products', product);
	};

	let unsub = () => {};

	onMount(() => {
		unsub = listenToCollection('products', (data) => {
			let temp = [];
			data.forEach((doc: DocumentData) => {
				temp.push(doc.data());
			});
			products = temp;
		});
	});

	onDestroy(() => unsub());
</script>

<form name="new product form" on:submit|preventDefault={handleSubmit}>
	<label for="new product form">Cadastro de produto:</label>
	<InputText placeholder="Nome" bind:value={product.name} />
	<InputText placeholder="Descrição" bind:value={product.description} />
	<InputNumber placeholder="Preço" bind:value={product.price} />
	<InputNumber placeholder="Quantidade" bind:value={product.stock} />
	<ButtonSubmit style="primary">Cadastrar</ButtonSubmit>
</form>

<ul>
	{#each products as product}
		<li>Name: {product.name}</li>
	{:else}
		<p>Carregando...</p>
	{/each}
</ul>

{#if false}<slot />{/if}

<style lang="postcss">
	form {
		@apply flex flex-col gap-2;
	}
</style>
