import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, updateDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addPantryItem = async (item) => {
    const docRef = await addDoc(collection(db, "pantry"), item);
    return docRef;
};

export const getPantryItems = async () => {
    const querySnapshot = await getDocs(collection(db, "pantry"));
    let items = [];
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
};

export const deletePantryItem = async (id) => {
    await deleteDoc(doc(db, "pantry", id));
};

export const updatePantryItem = async (id, item) => {
    const itemRef = doc(db, "pantry", id);
    await updateDoc(itemRef, item);
};
