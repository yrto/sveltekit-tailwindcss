import '$lib/firebase';
import { writable } from 'svelte/store';
import { getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import type { UserInfo } from 'firebase/auth';

const auth = () => getAuth();

interface userInterface {
	isLoggedIn: boolean;
	userCredential?: UserInfo;
}

export const user = writable<userInterface>({
	isLoggedIn: false
});

export const authEmailAndPassword = async (email: string, password: string): Promise<void> => {
	try {
		const userCredential = await signInWithEmailAndPassword(auth(), email, password);
		console.log('Logged in:', userCredential.user.uid);
	} catch (e) {
		// const errorCode = e.code;
		// const errorMessage = e.message;
		console.error('sign in invalid');
	}
};

export const authSignOut = async (): Promise<void> => {
	try {
		signOut(auth());
		console.log('Sign-out successful');
	} catch (e) {
		// const errorCode = e.code;
		// const errorMessage = e.message;
		console.error('sign out invalid');
	}
};

export const authStateListen = onAuthStateChanged(auth(), (userCredential) => {
	user.set({
		isLoggedIn: userCredential !== null,
		userCredential
	});
});
