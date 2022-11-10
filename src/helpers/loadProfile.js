import { collection, doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const loadProfile = async (uid) => {
    // profile/uid
    const docRef = doc(FirebaseDB, `profile/${uid}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        return {
            type: null,
            voted_type: null,
            displayName: null,
            photoURL: null,
            uid: null,
        };
    }
};
