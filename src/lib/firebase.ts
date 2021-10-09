import { initializeApp, getApps, getApp } from 'firebase/app';

const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

export const firebaseConfig = {
	apiKey: API_KEY as string,
	authDomain: AUTH_DOMAIN as string,
	projectId: PROJECT_ID as string,
	storageBucket: STORAGE_BUCKET as string,
	messagingSenderId: MESSAGING_SENDER_ID as string,
	appId: APP_ID as string
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export default app;
