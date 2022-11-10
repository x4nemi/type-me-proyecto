import { doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const loadPublications = async (uid) => {
    // publications/uid
    const docRef = doc(FirebaseDB, `publications/${uid}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data().publications;
    }
    return [];
};
