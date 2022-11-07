import { useEffect, useState } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { AiOutlineGoogle } from "react-icons/ai";
import { useForm } from "../../hooks";
import { ToastContainer, toast } from "react-toastify";

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

    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleClick = (event) => {
        event.preventDefault();
        setFormSubmitted(true);
        const theme = JSON.parse(localStorage.getItem("theme"));
        console.log(theme);

        if (!isFormValid) {
            toast(
                <div>
                    Error en el formulario:
                    <br /> {emailValid}
                    <br /> {passwordValid}
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
                                    className="input input-bordered"
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
                                    className="input input-bordered"
                                />
                            </label>
                            <button
                                className="btn btn-primary mb-4"
                                onClick={handleClick}
                            >
                                Iniciar sesión
                            </button>
                            <button
                                className="btn btn-outline"
                                onClick={handleClick}
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
                        <button className="btn btn-active btn-link">
                            Regístrate
                        </button>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={10000} />
        </AuthLayout>
    );
};
