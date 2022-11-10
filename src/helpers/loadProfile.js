import { collection, doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const loadProfile = async (uid) => {
    // profile/uid
    const docRef = doc(FirebaseDB, `profile/${uid}`);

    const docSnap = await getDoc(docRef);

    return {
        ...docSnap.data(),
    };
};
