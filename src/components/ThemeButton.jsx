import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../store/slices/theme/themeSlice";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
    // const { theme } = useSelector((state) => state.theme);
    // const dispatch = useDispatch();
    // const handleThemeChange = () => {
    //     dispatch(setTheme(theme === "night" ? "winter" : "night"));
    // };
    // useEffect(() => {
    //     if (theme === "winter") {
    //         document.documentElement.setAttribute("data-theme", "winter");
    //     } else {
    //         document.documentElement.setAttribute("data-theme", "night");
    //     }
    // }, [theme]);

    const [darkMode, setDarkMode] = useState(false);

    const themeToggler = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem("theme")) || false;

        setDarkMode(theme);
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "winter");
        } else {
            document.documentElement.setAttribute("data-theme", "night");
        }
    }, [darkMode]);

    return (
        <button className="btn btn-ghost rounded-full" onClick={themeToggler}>
            {!darkMode ? <ImSun size="1.5em" /> : <FaRegMoon size="1.5em" />}
        </button>
    );
};
