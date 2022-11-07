import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

export const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(null);

    const themeToggler = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        const theme = JSON.parse(localStorage.getItem("theme"));

        setDarkMode(theme);
    }, []);

    useEffect(() => {
        if (darkMode !== null) {
            if (darkMode) {
                document.documentElement.setAttribute("data-theme", "winter");
                localStorage.setItem("theme", JSON.stringify(true));
            } else {
                document.documentElement.setAttribute("data-theme", "night");
                localStorage.setItem("theme", JSON.stringify(false));
            }
        }
    }, [darkMode]);

    return (
        <button className="btn btn-ghost rounded-full" onClick={themeToggler}>
            {!darkMode ? <ImSun size="1.5em" /> : <FaRegMoon size="1.5em" />}
        </button>
    );
};
