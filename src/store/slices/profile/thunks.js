import { loadingProfile, setProfile } from "./profileSlice";
import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../../firebase/config";

export const startNewProfile = ({ type }) => {
    return async (dispatch, getState) => {
        dispatch(loadingProfile());
        const { uid, displayName, photoURL } = getState().auth;
        const newProfile = {
            displayName,
            photoURL,
            type,
            voted_type: null,
            uid,
        };

        const profileRef = collection(FirebaseDB, `profile/`);

        await setDoc(doc(profileRef, `${uid}`), newProfile);

        dispatch(setProfile(newProfile));
    };
};
