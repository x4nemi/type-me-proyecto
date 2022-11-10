import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setActivePerson } from "../../store/slices/profiles/peopleSlice";
import { BsThreeDots } from "react-icons/bs";

export const Publication = ({
    displayName = "Ximena",
    uid = "2",
    photoURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/1024px-Emblem-person-blue.svg.png",
    type = "ENFP",
    description = "Hola, soy Ximena",
    voted_type = "ENFP",
    id = "2",
    canEdit = true,
    canDelete = true,
    editAction,
    deleteAction,
}) => {
    const dispatch = useDispatch();
    const initials = useMemo(() => {
        const parts = displayName.split(" ");
        if (parts.length === 2) {
            return parts[0][0] + parts[1][0];
        }
        return displayName[0];
    }, [displayName]);

    const handleSetActivePerson = () => {
        dispatch(setActivePerson({ id }));
    };

    return (
        <div className="card bg-base-100 shadow-xl w-full">
            <div className="card-body">
                <Link to={`/profile/${uid}`} onClick={handleSetActivePerson}>
                    <h2 className="card-title">
                        <div className="avatar placeholder ">
                            <div className="bg-neutral-focus text-neutral-content rounded-full w-8">
                                {photoURL !== null ? (
                                    <img
                                        className="rounded-full"
                                        src={photoURL}
                                        alt={displayName}
                                        width="20"
                                        referrerPolicy="no-referrer"
                                    />
                                ) : (
                                    <span className="text-sm">{initials}</span>
                                )}
                            </div>
                        </div>
                        {displayName}
                        <div className="badge badge-outline mt-1">{type}</div>
                    </h2>
                </Link>
                <p>{description}</p>
                <div className="card-actions justify-between">
                    {(canDelete || canEdit) && (
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-xs btn-active btn-ghost"
                            >
                                <BsThreeDots />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-30"
                            >
                                {canEdit && (
                                    <li>
                                        <a onClick={() => editAction()}>
                                            Editar
                                        </a>
                                    </li>
                                )}
                                {canDelete && (
                                    <li>
                                        <a onClick={() => deleteAction()}>
                                            Eliminar
                                        </a>
                                    </li>
                                )}
                            </ul>
                        </div>
                    )}
                    <div>
                        Voto:{" "}
                        <div className="badge badge-secondary">
                            {voted_type}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
