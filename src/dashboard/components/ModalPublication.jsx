import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { setActivePublication } from "../../store/slices/publications/publicationsSlice";
import {
    startNewPublication,
    startSavingPublication,
} from "../../store/slices/publications/thunks";
const types = [
    "ENFJ",
    "ENFP",
    "ENTJ",
    "ENTP",
    "ESFJ",
    "ESFP",
    "ESTJ",
    "ESTP",
    "INFJ",
    "INFP",
    "INTJ",
    "INTP",
    "ISFJ",
    "ISFP",
    "ISTJ",
    "ISTP",
];
export const ModalPublication = ({ open, onDismiss }) => {
    const { id, publications } = useSelector((state) => state.publications);
    const [description, setDescription] = useState("");
    const [typeSelected, setType] = useState(types[0]);

    const dispatch = useDispatch();

    const handleType = (event) => {
        setType(event.target.value);
    };

    const handleDescription = (event) => {
        setDescription(event.target.value);
    };

    const closeModal = () => {
        dispatch(setActivePublication("-1"));
        onDismiss();
    };

    const onSubmit = () => {
        if (description.length > 10) {
            toast("Publicación creada con éxito", {
                icon: "👍",
            });

            if (id !== "-1") {
                dispatch(
                    startSavingPublication({
                        id,
                        description,
                        voted_type: typeSelected,
                    })
                );
            } else {
                dispatch(
                    startNewPublication({
                        description,
                        voted_type: typeSelected,
                    })
                );
            }
            dispatch(setActivePublication("-1"));
            onDismiss();
        } else {
            toast("La descripción debe ser mayor de 10 letras", {
                icon: "👎",
            });
        }
    };

    useEffect(() => {
        if (id !== "-1") {
            const publication = publications.find(
                (publication) => publication.id === id
            );
            setDescription(publication.description);
            setType(publication.voted_type);
        } else {
            setDescription("");
            setType(types[0]);
        }
    }, [id]);

    return (
        open && (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-base-100 outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Haz una publicación
                                </h3>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Elige el tipo de personalidad a
                                            votar
                                        </span>
                                    </label>
                                    <select
                                        className="select select-bordered w-full max-w-xs"
                                        value={typeSelected}
                                        onChange={handleType}
                                    >
                                        {types.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    {/* <button className="btn btn-square loading w-1/2"></button> */}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Argumenta tu voto
                                        </span>
                                    </label>
                                    <textarea
                                        onChange={handleDescription}
                                        value={description}
                                        className="textarea textarea-bordered h-24"
                                        placeholder="Yo pienso que..."
                                    ></textarea>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="btn btn-error btn-xs"
                                    type="button"
                                    onClick={() => closeModal()}
                                >
                                    Cerrar
                                </button>
                                <button
                                    className="btn btn-success btn-xs"
                                    type="button"
                                    onClick={() => onSubmit()}
                                >
                                    {id !== "-1"
                                        ? "Guardar publicación"
                                        : "Crear publicación"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
    );
};
