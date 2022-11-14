import { useForm } from "../../hooks";
import { Avatar } from "../components/Avatar";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import { AiOutlineDelete, AiOutlineFolderAdd } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { startUpdateUser } from "../../store/slices/auth/thunks";
import { fileUpload } from "../../helpers/fileUpload";

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
    oldPassword: [
        (value) => value.length >= 6,
        "La contraseña actual debe de tener más de 6 letras",
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
    const fileInputRef = useRef();
    const {
        displayName,
        photoURL,
        email: oldEmail,
        status,
        errorMessage,
    } = useSelector((state) => state.auth);

    const { type: oldType, loading } = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [newPhotoURL, setNewPhotoURL] = useState(photoURL);
    const [loadingPhotoURL, setLoadingPhotoURL] = useState(false);

    const {
        type,
        name,
        oldPassword,
        onInputChange,
        nameValid,
        emailValid,
        oldPasswordValid,
        newPasswordValid,
        isFormValid,
        setFormStates,
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

    const handleFile = async (e) => {
        const file = e.target.files[0];
        if (file) {
            setLoadingPhotoURL(true);
            const url = await fileUpload(file);
            setNewPhotoURL(url);
            setLoadingPhotoURL(false);
        }
    };

    const deleteFile = () => {
        setNewPhotoURL(null);
        fileInputRef.current.value = "";
    };

    const onSubmit = () => {
        if (isFormValid) {
            toast("Formulario bien", {
                icon: "🚀",
            });
            dispatch(
                startUpdateUser({
                    type,
                    displayName: name,
                    photoURL: newPhotoURL,
                    password: oldPassword,
                })
            );
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
                {status === "checking" || loading ? (
                    <div className="flex justify-center items-center h-96">
                        <div className="loader"></div>
                    </div>
                ) : (
                    <div className="card-body">
                        <h2 className="text-2xl font-bold">
                            Configuración de la cuenta
                        </h2>
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Imagen</span>
                            </label>

                            <div className="dropdown self-center">
                                {loadingPhotoURL ? (
                                    <img
                                        src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif"
                                        alt="loading"
                                        width="50"
                                    />
                                ) : (
                                    <label
                                        tabIndex={0}
                                        className={`btn btn-lg btn-ghost btn-circles ${
                                            newPhotoURL
                                                ? "h-20 w-20 ring"
                                                : "h-20 w-20"
                                        } rounded-full bg-base-100`}
                                    >
                                        <Avatar
                                            size={newPhotoURL ? 60 : 16}
                                            tabIndex={0}
                                            displayName={displayName}
                                            photoURL={newPhotoURL}
                                        />
                                    </label>
                                )}
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-40"
                                >
                                    <li>
                                        {newPhotoURL ? (
                                            <a
                                                onClick={() =>
                                                    fileInputRef.current.click()
                                                }
                                            >
                                                <BiEdit /> Editar
                                            </a>
                                        ) : (
                                            <a
                                                onClick={() =>
                                                    fileInputRef.current.click()
                                                }
                                            >
                                                <AiOutlineFolderAdd /> Agregar
                                            </a>
                                        )}
                                    </li>
                                    {newPhotoURL && (
                                        <li>
                                            <a onClick={() => deleteFile()}>
                                                <AiOutlineDelete /> Eliminar
                                            </a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handleFile}
                                style={{ display: "none" }}
                            />
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
                        {/* <div className="form-control">
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
                    <div className="divider"></div> */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-error">
                                    Introduce tu contraseña para guardar los
                                    cambios
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
                        {/* <input
                        name="newPassword"
                        type="password"
                        className="input input-bordered"
                        placeholder="Contraseña nueva"
                        value={newPassword}
                        onChange={onInputChange}
                        disabled={oldPassword.length === 0}
                    /> */}

                        <div className="divider"></div>
                        {!!errorMessage && (status !== "checking" || !loading) && (
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
                            className="btn btn-active"
                            onClick={() => onSubmit()}
                            disabled={oldPassword.length === 0}
                        >
                            Guardar
                        </button>
                    </div>
                )}
            </div>
            <ToastContainer />
        </div>
    );
};
