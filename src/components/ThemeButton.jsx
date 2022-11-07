import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
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
