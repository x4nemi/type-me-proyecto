import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { ThemeButton } from "../../components/ThemeButton";
import { startNewProfile } from "../../store/slices/profile/thunks";

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

export const ChooseType = () => {
    const [typeSelected, setType] = useState("ENFJ");
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.profile);

    const handleType = (event) => {
        setType(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(startNewProfile({ type: typeSelected }));
    };

    return (
        <div className="h-screen bg-base-100">
            <ThemeButton />

            <div className="hero h-3/4">
                <div className="hero-content text-center">
                    <div className="card backdrop-blur-md bg-base-300">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold mb-4">
                                Elige tu tipo de personalidad
                            </h1>
                            <div className="form-control">
                                <div className="input-group flex">
                                    <select
                                        className="select select-bordered w-1/2"
                                        value={typeSelected}
                                        onChange={handleType}
                                        disabled={loading}
                                    >
                                        {types.map((type) => (
                                            <option key={type} value={type}>
                                                {type}
                                            </option>
                                        ))}
                                    </select>
                                    {loading ? (
                                        <button className="btn btn-square loading w-1/2"></button>
                                    ) : (
                                        <Link
                                            to="/auth/login"
                                            className="btn w-1/2"
                                            onClick={handleSubmit}
                                        >
                                            Continuar
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
