import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";

import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { startCreateUserWithEmailAndPassword } from "../../store/slices/auth/thunks";

const formData = {
    email: "",
    password: "",
    displayName: "",
};

const formValidations = {
    email: [(value) => value.includes("@"), "El correo debe de tener una @"],
    password: [
        (value) => value.length >= 6,
        "El nombre debe de tener más de 6 letras",
    ],
    displayName: [
        (value) => value.length >= 2,
        "El nombre debe de tener más de una letra  ",
    ],
};

export const RegisterPage = () => {
    const {
        displayName,
        password,
        email,
        onInputChange,
        displayNameValid,
        emailValid,
        passwordValid,
        isFormValid,
        setFormStates,
        formState,
    } = useForm(formData, formValidations);

    const dispatch = useDispatch();
    const { errorMessage, status } = useSelector((state) => state.auth);

    const handleClick = (event) => {
        event.preventDefault();
        const theme = JSON.parse(localStorage.getItem("theme"));

        if (!isFormValid) {
            toast(
                <div>
                    Error en el formulario:
                    {!!emailValid && <div>{emailValid}</div>}
                    {!!passwordValid && <div>{passwordValid}</div>}
                    {!!displayNameValid && <div>{displayNameValid}</div>}
                </div>,
                {
                    icon: "😧",
                    theme: theme ? "light" : "dark",
                }
            );
        } else {
            dispatch(startCreateUserWithEmailAndPassword(formState));
            !errorMessage &&
                toast("Formulario bien", {
                    icon: "🚀",
                    theme: theme ? "light" : "dark",
                });
            setFormStates(formData);
        }
    };

    return (
        <AuthLayout title="Regístrate">
            <div className="card bg-base-100">
                <div className="card-body">
                    <form>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Escribe tus datos
                                </span>
                            </label>
                            <label className="input-group mb-4 input-group-lg ">
                                <span className="pr-11">Nombre</span>
                                <input
                                    name="displayName"
                                    value={displayName}
                                    onChange={onInputChange}
                                    type="text"
                                    placeholder="John Doe"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="input-group mb-4 input-group-lg ">
                                <span className="pr-16">Email</span>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    name="email"
                                    value={email}
                                    onChange={onInputChange}
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="input-group mb-4 input-group-lg">
                                <span>Contraseña</span>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={onInputChange}
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
                                className="btn btn-outline"
                                onClick={handleClick}
                            >
                                Crear Cuenta
                            </button>
                        </div>
                    </form>
                    <div className="row-end-1">
                        ¿Ya tienes cuenta?
                        <Link
                            to="/auth/login"
                            className="btn btn-active btn-link"
                        >
                            Inicia sesión
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </AuthLayout>
    );
};
