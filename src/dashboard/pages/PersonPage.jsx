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
import { startLoadingPeople } from "../../store/slices/profiles/thunks";

export const PersonPage = () => {
    const { active = { displayName: "", photoURL: "", type: "" } } =
        useSelector((state) => state.people);
    const { uid } = useParams();
    const { displayName = "", photoURL = "", type = "" } = active;
    const { publications, loading } = useSelector(
        (state) => state.publications
    );
    const { people } = useSelector((state) => state.people);

    const { uid: mainUid } = useSelector((state) => state.auth);

    const [votedType, setVotedType] = useState([
        {
            type: type,
            count: 0,
        },
    ]);

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
            dispatch(setActivePerson("-1"));
            dispatch(setPublications([]));
            dispatch(setActivePublication("-1"));
        };
    }, []);

    useEffect(() => {
        if (!people.some((person) => person.uid === uid)) {
            window.location.href = "/discover";
        } else {
            dispatch(startLoadingPublications({ uid }));

            dispatch(setActivePerson({ uid }));
        }
        //if active is null, redirect to discover
    }, [uid, active, people]);

    useEffect(() => {
        dispatch(startLoadingPeople());
    }, [dispatch]);

    useEffect(() => {
        if (publications.length > 0) {
            setVotedType(getMajorVotedType(publications));
        } else {
            setVotedType(votedType);
        }
    }, [publications]);

    return loading ? (
        <div className="flex justify-center mt-72">
            <img
                src="https://soongyu.carrd.co/assets/images/image01.gif?v87774859893651"
                alt="loading"
            />
        </div>
    ) : (
        <div className="items-center justify-center grid grid-cols-1">
            <Stats
                displayName={displayName}
                photoURL={photoURL}
                type={type}
                votedType={votedType}
                nPublicaciones={publications.length}
            />

            {mainUid !== uid && !publications.some((p) => p.uid === mainUid) && (
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
                <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-10 place-items-center">
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
