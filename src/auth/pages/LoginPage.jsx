import { useEffect } from "react";
import { AuthLayout } from "../layout/AuthLayout";
import { AiOutlineGoogle } from "react-icons/ai";

export const LoginPage = () => {
    const handleClick = (event) => {
        event.preventDefault();
        console.log("Login with Google");
    };
    useEffect(() => {
        // focus on card
        document.querySelector(".card").focus();
    }, []);
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
                                    type="text"
                                    placeholder="info@site.com"
                                    className="input input-bordered"
                                />
                            </label>
                            <label className="input-group mb-4 input-group-lg">
                                <span>Contraseña</span>
                                <input
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
        </AuthLayout>
    );
};
