import { doc, getDoc } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";
import { loadProfile } from "./loadProfile";

export const loadPublications = async (uid) => {
    // publications/uid
    const docRef = doc(FirebaseDB, `publications/${uid}`);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const publications = docSnap.data().publications;

        const publicationsWithProfile = await Promise.all(
            publications.map(async (publication) => {
                const profile = await loadProfile(publication.uid);
                return {
                    ...publication,
                    displayName: profile.displayName,
                    photoURL: profile.photoURL,
                    type: profile.type,
                };
            })
        );

        return publicationsWithProfile;
    }
    return [];
};
