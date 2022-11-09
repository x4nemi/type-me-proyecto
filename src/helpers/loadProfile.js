import { collection, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const loadProfile = async (uid) => {
    const profileRef = doc(collection(FirebaseDB, `users/${uid}/profile/`));
    const profileDoc = await getDoc(profileRef);

    if (profileDoc.exists()) {
        return { ...profileDoc.data(), id: profileDoc.id };
    } else {
        return null;
    }
};
