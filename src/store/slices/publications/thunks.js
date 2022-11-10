import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../../firebase/config";
import { loadPublications } from "../../../helpers/loadPublications";

import {
    deletePublication,
    loadingPublications,
    setNewPublication,
    setPublications,
} from "./publicationsSlice";

export const startNewPublication = ({ voted_type, description }) => {
    return async (dispatch, getState) => {
        const { uid, displayName, type, photoURL } = getState().profile;
        const { active } = getState().people;

        const { publications } = getState().publications;
        const newPublication = {
            voted_type,
            description,
            uid,
            displayName,
            photoURL,
            type,
            id: publications.length + 1,
        };

        const publicationRef = collection(FirebaseDB, `publications/`);

        await setDoc(doc(publicationRef, `${active.uid}`), {
            publications: [...publications, newPublication],
        });
        dispatch(setNewPublication(newPublication));
    };
};

export const startLoadingPublications = ({ uid }) => {
    return async (dispatch, getState) => {
        dispatch(loadingPublications());
        const publications = await loadPublications(uid);
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
