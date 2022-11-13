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

export const startUpdateProfile = ({ displayName, type, photoURL }) => {
    return async (dispatch, getState) => {
        dispatch(loadingProfile());
        const { uid } = getState().auth;
        const profileRef = doc(FirebaseDB, `profile/${uid}`);

        await setDoc(
            profileRef,
            { type, displayName, photoURL },
            { merge: true }
        );

        const profile = getState().profile;
        profile.type = type;
        profile.displayName = displayName;
        profile.photoURL = photoURL;

        dispatch(setProfile(profile));
    };
};
