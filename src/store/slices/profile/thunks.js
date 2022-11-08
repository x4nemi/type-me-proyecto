import { loadingProfile, setProfile } from "./profileSlice";
import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../../firebase/config";

export const startNewProfile = ({ type }) => {
    return async (dispatch, getState) => {
        dispatch(loadingProfile());
        const { uid } = getState().auth;
        const newProfile = {
            type,
            voted_type: null,
            publications: 0,
        };

        const newDoc = doc(collection(FirebaseDB, `users/${uid}/profile/`));

        await setDoc(newDoc, newProfile);

        newProfile.id = newDoc.id;
        dispatch(setProfile(newProfile));
    };
};
