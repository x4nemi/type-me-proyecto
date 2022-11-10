import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Publication } from "../components/Publication";
import {
    setActivePerson,
    setPublication,
} from "../../store/slices/profiles/peopleSlice";
import { Avatar } from "../components/Avatar";
import { Rating } from "../components/Rating";
import { Stats } from "../components/Stats";
import { ModalPublication } from "../components/ModalPublication";
import { startLoadingPublications } from "../../store/slices/publications/thunks";
import { setPublications } from "../../store/slices/publications/publicationsSlice";
import { getMajorVotedType } from "../../helpers/getMajorVotedType";
import { FaRegSadTear } from "react-icons/fa";

const publicaciones = [
    {
        displayName: "Juan",
        photoURL: null,
        uid: "1",
        id: "1",
        type: "INTJ",
        description: "Hola, soy Juan",
        voted_type: "INTJ",
    },
    {
        displayName: "Alondra",
        uid: "2",
        id: "2",
        photoURL: null,
        type: "ENFP",
        description: "Hola, soy Alondra",
        voted_type: "ENFP",
    },
];

export const PersonPage = () => {
    const { active = { displayName: "", photoURL: "", type: "" } } =
        useSelector((state) => state.people);
    const { uid } = useParams();
    const { displayName = "", photoURL = "", type = "" } = active;
    const { publications } = useSelector((state) => state.publications);

    const [votedType, setVotedType] = useState(type);

    const dispatch = useDispatch();

    const [openModal, setOpenModal] = useState(false);

    useEffect(() => {
        dispatch(startLoadingPublications({ uid }));

        dispatch(setActivePerson({ uid }));
        return () => {
            dispatch(setActivePerson("1"));
            dispatch(setPublications([]));
        };
    }, []);

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

            <button className="btn" onClick={() => setOpenModal(true)}>
                Abrir modal
            </button>

            {publications.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-20">
                    <h1 className="text-5xl font-bold text-center">
                        No hay publicaciones
                    </h1>
                    <FaRegSadTear size={100} />
                </div>
            ) : (
                <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-10 mr-10 place-items-center">
                    {publications.map((publication) => (
                        <Publication key={publication.id} {...publication} />
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
