import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const loadPublications = async (uid) => {
    const publicationsRef = collection(
        FirebaseDB,
        `users/${uid}/publications/`
    );
    const publicationsSnap = await getDocs(publicationsRef);
    const publications = [];

    publicationsSnap.forEach((publication) => {
        publications.push({
            ...publication.data(),
            id: publication.id,
        });
    });

    return publications;
};
