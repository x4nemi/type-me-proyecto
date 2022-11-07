import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/slices/theme/themeSlice";

export const ThemeButton = () => {
    const { theme } = useSelector((state) => state.theme);
    const dispatch = useDispatch();
    const handleThemeChange = () => {
        dispatch(setTheme(theme === "night" ? "winter" : "night"));
        if (theme === "winter") {
            document.documentElement.setAttribute("data-theme", "winter");
        } else {
            document.documentElement.setAttribute("data-theme", "night");
        }
    };
    return (
        <button
            className="btn btn-ghost rounded-full"
            onClick={handleThemeChange}
        >
            {theme === "night" ? (
                <ImSun size="1.5em" />
            ) : (
                <FaRegMoon size="1.5em" />
            )}
        </button>
    );
};
