import { AuthLayout } from "../layout/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title="Regístrate">
            <div className="card bg-slate-800">
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
                                    type="text"
                                    placeholder="Fulanito"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="input-group mb-4 input-group-lg ">
                                <span className="pr-16">Email</span>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="input-group mb-4 input-group-lg">
                                <span>Contraseña</span>
                                <input
                                    type="password"
                                    placeholder="●●●●●●●●●●"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="input-group mb-4 input-group-lg">
                                <span>Repite la contraseña</span>
                                <input
                                    type="password"
                                    placeholder="●●●●●●●●●●"
                                    className="input input-bordered"
                                />
                            </label>
                            <button className="btn btn-outline">
                                Crear Cuenta
                            </button>
                        </div>
                    </form>
                    <div className="row-end-1">
                        ¿Ya tienes cuenta?
                        <button className="btn btn-active btn-link">
                            Inicia sesión
                        </button>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};
