import { useForm } from "../../hooks";
import { Avatar } from "../components/Avatar";
import { toast, ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import { useEffect } from "react";

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

const formValidations = {
    name: [
        (value) => value.length >= 3,
        "El nombre debe de tener más de 3 letras",
    ],
    email: [(value) => value.includes("@"), "El correo debe de tener una @"],
    oldPassword: [
        (value) => value.length === 0 || value.length >= 6,
        "La vieja contraseña debe de tener más de 6 letras",
    ],
    newPassword: [
        (value) => value.length >= 6,
        "La nueva contraseña debe de tener más de 6 letras",
    ],
};

const formData = {
    type: "",
    name: "",
    email: "",
    oldPassword: "",
    newPassword: "",
};
export const ConfigurationPage = () => {
    const {
        displayName,
        photoURL,
        email: oldEmail,
    } = useSelector((state) => state.auth);

    const { type: oldType } = useSelector((state) => state.profile);

    const {
        type,
        name,
        email,
        oldPassword,
        newPassword,
        onInputChange,
        nameValid,
        emailValid,
        oldPasswordValid,
        newPasswordValid,
        isFormValid,
        setFormStates,
        formState,
    } = useForm(formData, formValidations);

    useEffect(() => {
        const formm = {
            type: oldType,
            name: displayName,
            email: oldEmail,
            oldPassword: "",
            newPassword: "",
        };
        setFormStates(formm);
    }, []);

    const onSubmit = () => {
        if (isFormValid) {
            toast("Formulario bien", {
                icon: "🚀",
            });
        } else {
            toast(
                <div>
                    Error en el formulario:
                    {!!nameValid && <div>{nameValid}</div>}
                    {!!emailValid && <div>{emailValid}</div>}
                    {!!oldPasswordValid && <div>{oldPasswordValid}</div>}
                    {!!newPasswordValid && <div>{newPasswordValid}</div>}
                </div>,
                {
                    icon: "😧",
                }
            );
        }
    };
    return (
        <div className="grid grid-cols-1">
            <div className="card ring">
                <div className="card-body">
                    <h2 className="text-2xl font-bold">
                        Configuración de la cuenta
                    </h2>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Imagen</span>
                        </label>

                        <div className="dropdown self-center">
                            <label
                                tabIndex={0}
                                className="btn btn-active btn-lg btn-ghost btn-circles h-20 w-20 rounded-full"
                            >
                                <Avatar
                                    tabIndex={0}
                                    displayName={displayName}
                                />
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a>Cambiar</a>
                                </li>
                                <li>
                                    <a>Eliminar</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Nombre</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered"
                            placeholder="John Doe"
                            value={name}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="divider"></div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Tipo de personalidad
                            </span>
                        </label>
                        <select
                            className="select select-bordered"
                            value={type}
                            name="type"
                            onChange={onInputChange}
                        >
                            {types.map((type) => (
                                <option key={type} defaultValue={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="divider"></div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Correo electrónico
                            </span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            className="input input-bordered"
                            placeholder="info@site.com"
                            value={email}
                            onChange={onInputChange}
                        />
                    </div>
                    <div className="divider"></div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">
                                Cambia tu contraseña
                            </span>
                        </label>
                        <input
                            name="oldPassword"
                            type="password"
                            className="input input-bordered"
                            placeholder="Contraseña actual"
                            value={oldPassword}
                            onChange={onInputChange}
                        />
                    </div>
                    <input
                        name="newPassword"
                        type="password"
                        className="input input-bordered"
                        placeholder="Contraseña nueva"
                        value={newPassword}
                        onChange={onInputChange}
                        disabled={oldPassword.length === 0}
                    />

                    <div className="divider"></div>
                    <button
                        className="btn btn-active"
                        onClick={() => onSubmit()}
                    >
                        Guardar
                    </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};
