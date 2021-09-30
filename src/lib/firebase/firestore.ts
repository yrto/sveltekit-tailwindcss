import { getFirestore, Firestore, collection, addDoc } from 'firebase/firestore';
import '../firebase/app';

let db = null;

const getDb = (): Firestore => {
	if (!db) db = getFirestore();
	return db;
};

export const addUser = async (): Promise<void> => {
	try {
		const docRef = await addDoc(collection(getDb(), 'users'), {
			first: 'Ada',
			last: 'Lovelace',
			born: 1815
		});
		console.log('Document written with ID: ', docRef.id);
	} catch (e) {
		console.error('Error adding document: ', e);
	}
};

export default getDb;
