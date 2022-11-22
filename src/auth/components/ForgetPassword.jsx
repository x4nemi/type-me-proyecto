import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    clearAll,
    setError,
} from "../../store/slices/forgotPassword/forgotSlice";
import { startSendingEmail } from "../../store/slices/forgotPassword/thunks";

export const ForgetPassword = ({ open, onDismiss }) => {
    const [email, setEmail] = useState("");
    const { errorMessage, loading, sucess } = useSelector(
        (state) => state.forgotPassword
    );
    const dispatch = useDispatch();

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            email
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                )
        ) {
            dispatch(startSendingEmail(email));
        } else {
            dispatch(setError({ errorMessage: "El correo no es válido" }));
        }
    };

    useEffect(() => {
        if (sucess) {
            setTimeout(() => {
                dispatch(clearAll());
                onDismiss();
            }, 4000);
        }
    }, [sucess]);

    return (
        open && (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-base-100 outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-xl font-semibold">
                                    Escribe tu correo para enviar la solicitud
                                    de cambio
                                </h3>
                            </div>

                            <div className="relative p-6 flex-auto">
                                <label className="input-group input-group-lg">
                                    <span className="pr-16">Email</span>
                                    <input
                                        disabled={loading || sucess}
                                        value={email}
                                        onChange={handleEmail}
                                        name="email"
                                        type="text"
                                        placeholder="info@site.com"
                                        className="input input-bordered w-full"
                                    />
                                </label>
                            </div>
                            {/*footer*/}

                            {!!errorMessage && (
                                <div className="flex-auto pl-6 pr-6">
                                    <div className="alert alert-error shadow-lg mb-6">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="stroke-current flex-shrink-0 h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span>{errorMessage}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {sucess && (
                                <div className="flex-auto pl-6 pr-6">
                                    <div className="alert alert-success shadow-lg mb-4">
                                        <div>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="stroke-current flex-shrink-0 h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                            <span>
                                                Se ha enviado un correo a{" "}
                                                {email}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div className="mb-4">
                                {loading ? (
                                    <button className="btn loading">
                                        Cargando...
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            className="btn btn-error mr-2 btn-sm"
                                            type="button"
                                            onClick={onDismiss}
                                        >
                                            Cerrar
                                        </button>
                                        {!sucess && (
                                            <button
                                                className="btn btn-success btn-sm"
                                                type="button"
                                                onClick={handleSubmit}
                                            >
                                                Enviar
                                            </button>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
    );
};
