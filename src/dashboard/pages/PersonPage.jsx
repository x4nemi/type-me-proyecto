import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Publication } from "../components/Publication";
import { setActivePerson } from "../../store/slices/profiles/peopleSlice";
import { Stats } from "../components/Stats";
import { ModalPublication } from "../components/ModalPublication";
import {
    startDeletingPublication,
    startLoadingPublications,
} from "../../store/slices/publications/thunks";
import {
    setActivePublication,
    setPublications,
} from "../../store/slices/publications/publicationsSlice";
import { getMajorVotedType } from "../../helpers/getMajorVotedType";
import { FaRegSadTear } from "react-icons/fa";

export const PersonPage = () => {
    const { active = { displayName: "", photoURL: "", type: "" } } =
        useSelector((state) => state.people);
    const { uid } = useParams();
    const { displayName = "", photoURL = "", type = "" } = active;
    const { publications } = useSelector((state) => state.publications);

    const { uid: mainUid } = useSelector((state) => state.auth);

    const [votedType, setVotedType] = useState(type);

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    const editAction = (id) => {
        dispatch(setActivePublication(id));
        setOpenModal(true);
    };

    const deleteAction = (id) => {
        dispatch(startDeletingPublication(id));
    };

    useEffect(() => {
        return () => {
            dispatch(setActivePerson("1"));
            dispatch(setPublications([]));
            dispatch(setActivePublication("-1"));
        };
    }, []);

    useEffect(() => {
        dispatch(startLoadingPublications({ uid }));

        dispatch(setActivePerson({ uid }));
    }, [uid]);

    useEffect(() => {
        if (publications.length > 0) {
            setVotedType(getMajorVotedType(publications));
        } else {
            setVotedType(type);
        }
    }, [publications]);
    return (
        <div className="items-center justify-center h-screen">
            <Stats
                displayName={displayName}
                photoURL={photoURL}
                type={type}
                votedType={votedType}
                nPublicaciones={publications.length}
            />

            {mainUid !== uid && (
                <div className="flex justify-center mt-10">
                    <button
                        className="btn btn-accent"
                        onClick={() => setOpenModal(true)}
                    >
                        Hacer publicación
                    </button>
                </div>
            )}

            {publications.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-10">
                    <h1 className="text-5xl font-bold text-center">
                        No hay publicaciones
                    </h1>
                    <FaRegSadTear size={100} />
                </div>
            ) : (
                <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-10 mr-10 place-items-center">
                    {publications.map((publication) => (
                        <Publication
                            key={publication.id}
                            {...publication}
                            canDelete={
                                mainUid === uid || mainUid === publication.uid
                            }
                            canEdit={publication.uid === mainUid}
                            editAction={() => editAction(publication.id)}
                            deleteAction={() => deleteAction(publication.id)}
                        />
                    ))}
                </div>
            )}
            <ModalPublication
                open={openModal}
                onDismiss={() => setOpenModal(false)}
            />
        </div>
    );
};
