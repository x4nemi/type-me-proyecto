import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { Publication } from "../components/Publication";
import { setActivePerson } from "../../store/slices/profiles/peopleSlice";
import { Avatar } from "../components/Avatar";
import { Rating } from "../components/Rating";
import { Stats } from "../components/Stats";
import { ModalPublication } from "../components/ModalPublication";

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
    const { active } = useSelector((state) => state.people);
    const { displayName, photoURL, type } = active;

    const [openModal, setOpenModal] = useState(false);
    console.log(openModal);

    useEffect(() => {
        return () => {
            setActivePerson(null);
        };
    }, []);
    return (
        <div className="items-center justify-center h-screen">
            <Stats
                displayName={displayName}
                photoURL={photoURL}
                type={type}
                nPublicaciones={publicaciones.length}
            />

            <button className="btn" onClick={() => setOpenModal(true)}>
                Abrir modal
            </button>

            <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-2 mt-10 mr-10 place-items-center">
                {publicaciones.map((publication) => (
                    <Publication key={publication.id} {...publication} />
                ))}
            </div>
            <ModalPublication
                open={openModal}
                onDismiss={() => setOpenModal(false)}
            />
        </div>
    );
};
