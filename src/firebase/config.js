import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCNTUszVugmABuUX2jYBsld1lp-Af9I6Og",
    authDomain: "type-me-3ca4a.firebaseapp.com",
    projectId: "type-me-3ca4a",
    storageBucket: "type-me-3ca4a.appspot.com",
    messagingSenderId: "356647545110",
    appId: "1:356647545110:web:cd3cd2b64633a0be4d8837",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
