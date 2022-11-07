import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks";
import { AuthLayout } from "../layout/AuthLayout";

import { toast, ToastContainer } from "react-toastify";

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

    const [formSubmitted, setFormSubmitted] = useState(false);

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
                    {!!displayNameValid && <div>{displayNameValid}</div>}
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
