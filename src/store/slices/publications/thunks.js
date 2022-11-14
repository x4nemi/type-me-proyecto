import { collection, doc, setDoc } from "firebase/firestore";
import { FirebaseDB } from "../../../firebase/config";
import { loadPublications } from "../../../helpers/loadPublications";

import {
    deletePublication,
    loadingPublications,
    setNewPublication,
    setPublications,
    updatePublication,
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
            id: Math.random().toString(16).slice(2),
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

export const startSavingPublication = ({ id, description, voted_type }) => {
    return async (dispatch, getState) => {
        dispatch(loadingPublications());

        const { active } = getState().people;
        const { displayName, photoURL, type } = getState().profile;

        const { publications } = getState().publications;
        const publication = publications.find(
            (publication) => publication.id === id
        );

        const newPublication = {
            ...publication,
            description,
            voted_type,
            displayName,
            photoURL,
            type,
        };

        const publicationRef = collection(FirebaseDB, `publications/`);

        await setDoc(doc(publicationRef, `${active.uid}`), {
            publications: publications.map((publication) => {
                if (publication.id === id) {
                    return newPublication;
                }
                return publication;
            }),
        });

        dispatch(updatePublication(newPublication));
    };
};

export const startDeletingPublication = (id) => {
    return async (dispatch, getState) => {
        dispatch(loadingPublications());
        const { active } = getState().people;
        const { publications } = getState().publications;

        const publicationRef = collection(FirebaseDB, `publications/`);

        await setDoc(doc(publicationRef, `${active.uid}`), {
            publications: publications.filter(
                (publication) => publication.id !== id
            ),
        });

        dispatch(deletePublication(id));
    };
};
