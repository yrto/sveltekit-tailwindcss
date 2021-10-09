import { user } from '$lib/auth';
import type { LoadInput, LoadOutput } from '@sveltejs/kit';

let auth = false;

user.subscribe((authState) => (auth = authState.isLoggedIn));

export async function authGuard({ page }: LoadInput): Promise<LoadOutput> {
	const loggedIn = auth;

	if (loggedIn && page.path === '/login') {
		return { status: 302, redirect: '/' };
	} else if (loggedIn || page.path === '/login') {
		return {};
	} else {
		return { status: 302, redirect: '/login' };
	}
}
