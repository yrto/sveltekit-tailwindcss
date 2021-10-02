import '$lib/firebase';
import {
	Firestore,
	getFirestore,
	collection,
	addDoc,
	getDocs,
	onSnapshot
} from 'firebase/firestore';
import type { Unsubscribe, DocumentData } from 'firebase/firestore';
import type { productModel } from '../models/product';

let db = null;
const getDb = (): Firestore => {
	if (!db) db = getFirestore();
	return db;
};

// const db = getFirestore(app);

export const addUser = async (): Promise<void> => {
	try {
		const docRef = await addDoc(collection(getDb(), 'users'), {
			first: 'Ada',
			last: 'Lovelace',
			born: 1815
		});
		console.log('Document written with ID:', docRef.id);
	} catch (e) {
		console.error('Error adding document:', e);
	}
};

export const addDocToCollection = async (
	collectionName: string,
	doc: productModel
): Promise<void> => {
	try {
		const docRef = await addDoc(collection(getDb(), collectionName), doc);
		console.log(`Document written to "${collectionName}" with ID:`, docRef.id);
	} catch (e) {
		console.error('Error adding document:', e);
	}
};

export const getAllUsers = async (): Promise<void> => {
	const users = await getDocs(collection(getDb(), 'users'));
	users.forEach((doc) => {
		console.log({
			id: doc.id,
			data: doc.data()
		});
	});
};

export const getDocsFromCollection = async (collectionName: string): Promise<productModel[]> => {
	const docs = await getDocs(collection(getDb(), collectionName));
	let docsData = [];
	docs.forEach((doc) => {
		docsData = [...docsData, doc.data()];
	});
	return docsData;
};

export const listenToCollection = (
	collectionName: string,
	callback: (snapshot: DocumentData) => void
): Unsubscribe => {
	return onSnapshot(collection(getDb(), collectionName), callback);
};
