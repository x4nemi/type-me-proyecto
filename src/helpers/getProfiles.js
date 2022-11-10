import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const getProfiles = async () => {
    // profile/uid

    const profilesRef = collection(FirebaseDB, `profile/`);
    const profilesSnap = await getDocs(profilesRef);
    const profiles = [];

    profilesSnap.forEach((profile) => {
        profiles.push({
            ...profile.data(),
            id: profile.id,
        });
    });

    return profiles;
};
