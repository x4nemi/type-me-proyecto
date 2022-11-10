import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../../firebase/config";
import { loadPublications } from "../../../helpers/loadPublications";

import {
    deletePublication,
    loadingPublications,
    setNewPublication,
    setPublications,
} from "./publicationsSlice";

export const startNewPublication = (publication) => {
    return async (dispatch, getState) => {
        dispatch(loadingPublications());
        const { active } = getState().people;

        const { uid, displayName, photoURL, type } = getState().profile;
        const newPublication = {
            ...publication,
            uid,
            displayName,
            photoURL,
            type,
        };

        const newDoc = doc(
            collection(FirebaseDB, `users/${active.uid}/publications/`)
        );

        await setDoc(newDoc, newPublication);

        newPublication.id = newDoc.id;
        dispatch(setNewPublication(newPublication));
    };
};

export const startLoadingPublications = () => {
    return async (dispatch, getState) => {
        dispatch(loadingPublications());
        const { active } = getState().people;
        const publications = await loadPublications(active.uid);
        dispatch(setPublications(publications));
    };
};

export const startSavingPublication = (publication) => {
    return async (dispatch, getState) => {
        dispatch(loadingPublications());
        const { active } = getState().people;
        const publicationToFirestore = { ...publication };
        delete publicationToFirestore.id;

        const publicationRef = doc(
            collection(FirebaseDB, `users/${active.uid}/publications/`),
            publication.id
        );

        await setDoc(publicationRef, publicationToFirestore);

        dispatch(startLoadingPublications());
    };
};

export const startDeletingPublication = (id) => {
    return async (dispatch, getState) => {
        dispatch(loadingPublications());
        const { active } = getState().people;
        const publicationRef = doc(
            collection(FirebaseDB, `users/${active.uid}/publications/`),
            id
        );

        await deleteDoc(publicationRef);

        dispatch(deletePublication(id));
    };
};
