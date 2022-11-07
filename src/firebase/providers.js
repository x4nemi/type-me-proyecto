import {
    GoogleAuthProvider,
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);

        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            uid,
            email,
            displayName,
            photoURL,
        };
    } catch (error) {
        const { code, message } = error;

        return {
            ok: false,
            code,
            message,
        };
    }
};

export const registerUserWithEmailAndPassword = async ({
    email,
    password,
    displayName,
}) => {
    try {
        const result = await createUserWithEmailAndPassword(
            FirebaseAuth,
            email,
            password
        );
        await updateProfile(FirebaseAuth.currentUser, { displayName });

        const { photoURL, uid } = result.user;

        return {
            ok: true,
            uid,
            email,
            displayName,
            photoURL,
        };
    } catch (error) {
        const { code, message } = error;

        return {
            ok: false,
            code,
            message,
        };
    }
};
