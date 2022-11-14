import { doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";
import { loadProfile } from "./loadProfile";

export const loadPublications = async (uid) => {
    // publications/uid
    const docRef = doc(FirebaseDB, `publications/${uid}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const publications = docSnap.data().publications;

        // if (publications.length > 0) {
        //     publications.map(async (publication) => {
        //         const profile = await loadProfile(publication.uid);
        //         const newPublication = {
        //             ...publication,
        //             displayName: profile.displayName,
        //             photoURL: profile.photoURL,
        //         };
        //         return newPublication;
        //     });
        //     return publications;
        // }
        return docSnap.data().publications;
    }
    return [];
};
