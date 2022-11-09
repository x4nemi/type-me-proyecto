import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const getProfiles = async () => {
    const collectionRef = collection(FirebaseDB, "users");

    const docs = await getDocs(collectionRef);

    const peopleId = [];

    docs.forEach((doc) => {
        peopleId.push({ id: doc.id });
    });

    const people = [];

    for (const person of peopleId) {
        const personRef = collection(FirebaseDB, `users/${person.id}/profile/`);
        const personDoc = await getDocs(personRef);
        personDoc.forEach((doc) => {
            people.push({ ...doc.data(), id: doc.id });
        });
    }

    return people;
};
