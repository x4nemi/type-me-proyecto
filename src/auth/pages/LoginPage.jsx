import { useEffect, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm } from "../../hooks";
import { ToastContainer, toast } from "react-toastify";

import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn } from "../../store/slices/auth/thunks";

const formData = {
    email: "",
    password: "",
};

const formValidations = {
    email: [(value) => value.includes("@"), "El correo debe de tener una @"],
    password: [
        (value) => value.length >= 6,
        "El nombre debe de tener más de 6 letras",
    ],
};

export const LoginPage = () => {
    const {
        email,
        password,
        onInputChange,
        emailValid,
        passwordValid,
        isFormValid,
        setFormStates,
        formState,
    } = useForm(formData, formValidations);

    const { errorMessage, status } = useSelector((state) => state.auth);

    const [formSubmitted, setFormSubmitted] = useState(false);

    const dispatch = useDispatch();

    const handleClick = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const theme = JSON.parse(localStorage.getItem("theme"));

        if (!isFormValid) {
            toast(
                <div>
                    Error en el formulario:
                    {!!emailValid && <div>{emailValid}</div>}
                    {!!passwordValid && <div>{passwordValid}</div>}
                </div>,
                {
                    icon: "😧",
                    theme: theme ? "light" : "dark",
                }
            );
        } else {
            toast("Formulario bien", {
                icon: "🚀",
                theme: theme ? "light" : "dark",
            });
            setFormStates(formData);
        }
    };

    const googleSignIn = (event) => {
        event.preventDefault();
        dispatch(startGoogleSignIn());
    };

    return (
        <AuthLayout title="Inicia sesión">
            <div className="card bg-base-100">
                <div className="card-body">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Escribe tus datos
                                </span>
                            </label>
                            <label className="input-group mb-4 input-group-lg">
                                <span className="pr-16">Email</span>
                                <input
                                    value={email}
                                    onChange={onInputChange}
                                    name="email"
                                    type="text"
                                    placeholder="info@site.com"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="input-group mb-4 input-group-lg">
                                <span>Contraseña</span>
                                <input
                                    value={password}
                                    onChange={onInputChange}
                                    name="password"
                                    type="password"
                                    placeholder="●●●●●●●●●●"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            {!!errorMessage && status !== "checking" && (
                                <div className="alert alert-error shadow-lg mb-4">
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
                            )}
                            <button
                                className="btn btn-primary mb-4"
                                onClick={handleClick}
                                disabled={status === "checking"}
                            >
                                Iniciar sesión
                            </button>
                            <button
                                disabled={status === "checking"}
                                className="btn btn-outline"
                                onClick={googleSignIn}
                            >
                                <AiOutlineGoogle
                                    className="mr-2"
                                    size="1.5em"
                                />
                                Iniciar sesión con Google
                            </button>
                        </div>
                    </form>
                    <div className="row-end-1">
                        ¿No tienes cuenta?
                        <RouterLink
                            to="/auth/register"
                            className="btn btn-active btn-link"
                        >
                            Regístrate
                        </RouterLink>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={10000} />
        </AuthLayout>
    );
};
