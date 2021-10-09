<script lang="ts">
	import { goto } from '$app/navigation';
	import { authSignOut, user } from '$lib/auth';

	const handleSignOut = () => {
		authSignOut();
		goto('/login');
	};
</script>

{#if $user.isLoggedIn}
	<div>
		<button on:click={handleSignOut} aria-label="sign out" type="button" class="link">
			Sign out
		</button>
	</div>
{:else}
	<div>
		<button on:click={() => goto('/login')} aria-label="login" type="button" class="link">
			Login
		</button>
		<button on:click={() => goto('/cadastro')} aria-label="sign up" type="button" class="primary">
			Cadastre-se
		</button>
	</div>
{/if}

<style lang="postcss">
	div {
		@apply flex gap-6 items-center;
	}
	button {
		@apply font-semibold transition;
	}
	.link {
		@apply text-gray-500 hover:text-white;
	}
	.primary {
		@apply py-2 px-6 text-white rounded-full bg-indigo-600 hover:bg-indigo-700;
	}
</style>
