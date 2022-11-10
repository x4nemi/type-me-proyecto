import { HiOutlineLogout } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { ThemeButton } from "../../components/ThemeButton";
import { startLogOut } from "../../store/slices/auth/thunks";
import { Avatar } from "./Avatar";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { RiHome4Line } from "react-icons/ri";

export const NavBar = () => {
    const { type } = useSelector((state) => state.profile);
    const { displayName, photoURL, uid } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const { pathname } = useLocation();

    const handleLogout = () => {
        dispatch(startLogOut());
    };
    return (
        <div className="mx-5 my-36 fixed">
            <ul className="menu bg-base-300 w-56 rounded-box">
                <li className="items-center rounded-full">
                    <Link to={`/profile/${uid}`}>
                        <Avatar
                            displayName={displayName}
                            type={type}
                            photoURL={photoURL}
                        />
                    </Link>
                </li>
                <li className={`${pathname === "/" ? "bordered" : ""}`}>
                    <Link to="/">
                        <RiHome4Line />
                        Inicio
                    </Link>
                </li>
                <li className={`${pathname === "/people" ? "bordered" : ""}`}>
                    <Link to="/people">
                        <MdOutlinePeopleAlt /> Personas
                    </Link>
                </li>
                <li className="mt-96 items-center rounded-full">
                    <ThemeButton />
                </li>
                <li>
                    <button
                        className="btn btn-error"
                        onClick={() => handleLogout()}
                    >
                        <HiOutlineLogout size={20} /> Salir
                    </button>
                </li>
            </ul>
        </div>
    );
};
