import { useState } from "react";
import { ImSun } from "react-icons/im";
import { FaRegMoon } from "react-icons/fa";

export const ThemeButton = () => {
    const [darkMode, setDarkMode] = useState(true);
    const handleThemeChange = () => {
        setDarkMode(!darkMode);
        if (darkMode) {
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
            {darkMode ? <ImSun size="1.5em" /> : <FaRegMoon size="1.5em" />}
        </button>
    );
};
