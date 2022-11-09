import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
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
    const [description, setDescription] = useState("");
    const [typeSelected, setType] = useState("");
    const handleType = (event) => {
        setType(event.target.value);
    };

    const onSubmit = () => {
        toast("Publicación creada con éxito", {
            icon: "👍",
        });
    };
    return (
        open && (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
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
                                    <div className="input-group flex">
                                        <select
                                            className="select select-bordered w-1/2"
                                            value={typeSelected}
                                            onChange={handleType}
                                        >
                                            {types.map((type) => (
                                                <option key={type} value={type}>
                                                    {type}
                                                </option>
                                            ))}
                                        </select>
                                        <button className="btn btn-square loading w-1/2"></button>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">
                                            Argumenta tu voto
                                        </span>
                                    </label>
                                    <textarea
                                        className="textarea textarea-bordered h-24"
                                        placeholder="Bio"
                                    ></textarea>
                                </div>
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => onDismiss()}
                                >
                                    Close
                                </button>
                                <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={() => onSubmit()}
                                >
                                    Save Changes
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
