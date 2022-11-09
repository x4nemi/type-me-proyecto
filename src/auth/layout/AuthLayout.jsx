import React from "react";
import { ThemeButton } from "../../components/ThemeButton";

export const AuthLayout = ({ children, title = "", showButton = true }) => {
    return (
        <div className="bg-base-300">
            {showButton && <ThemeButton />}

            <div className="hero min-h-screen bg-base-300">
                <div className="hero-content text-center">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl font-bold">{title}</h1>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};
