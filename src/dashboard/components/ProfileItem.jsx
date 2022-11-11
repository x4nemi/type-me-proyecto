import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Avatar } from "./Avatar";
import { setActivePerson } from "../../store/slices/profiles/peopleSlice";

export const ProfileItem = ({ displayName, photoURL, type, id }) => {
    const color = useMemo(() => {
        switch (type) {
            case "INFJ":
            case "INFP":
            case "ENFJ":
            case "ENFP":
                return "bg-teal-500";
            case "INTJ":
            case "INTP":
            case "ENTJ":
            case "ENTP":
                return "bg-violet-500";
            case "ISTJ":
            case "ISFJ":
            case "ESTJ":
            case "ESFJ":
                return "bg-cyan-500";
            case "ISTP":
            case "ISFP":
            case "ESTP":
            case "ESFP":
                return "bg-amber-300";
        }
    }, [type]);

    const nombre = displayName;

    const name = nombre.length > 20 ? nombre.substring(0, 20) + "..." : nombre;

    const dispatch = useDispatch();

    const handleSetActivePerson = () => {
        dispatch(
            setActivePerson({
                id: id,
                displayName,
                photoURL,
                type,
            })
        );
    };

    return (
        <Link
            className="card card-side flex bg-base-300 mb-1 w-full cursor-pointer hover:bg-base-200 transition
            duration-200 ease-in-out"
            to={`/profile/${id}`}
            onClick={handleSetActivePerson}
        >
            <figure className="self-center ml-4 p-1">
                <Avatar displayName={name} photoURL={photoURL} type={type} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className={`badge badge-lg border-transparent ${color}`}>
                    {type}
                </div>
            </div>
        </Link>
    );
};
