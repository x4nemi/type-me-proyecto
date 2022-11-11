import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import { ChooseType } from "../pages/ChooseType";
import { ConfigurationPage } from "../pages/ConfigurationPage";
import { DashboardPage } from "../pages/DashboardPage";
import { DiscoverPage } from "../pages/DiscoverPage";
import { PersonPage } from "../pages/PersonPage";

export const DashboardRoutes = () => {
    const { type } = useSelector((state) => state.profile);
    return (
        <div className="flex flex-row">
            {type !== null && (
                <div className="items-center">
                    <NavBar />
                </div>
            )}

            <div
                className={` ${
                    type !== null ? "ml-56 my-10 mr-10 container" : "container"
                }`}
            >
                <Routes>
                    {type !== null ? (
                        <>
                            <Route path="/" element={<DashboardPage />} />
                            <Route path="/people" element={<DiscoverPage />} />
                            <Route
                                path="/config"
                                element={<ConfigurationPage />}
                            />
                            <Route
                                path="/profile/:uid"
                                element={<PersonPage />}
                            />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </>
                    ) : (
                        <>
                            <Route path="/type" element={<ChooseType />} />
                            <Route
                                path="/*"
                                element={<Navigate to="/type" />}
                            />
                        </>
                    )}
                </Routes>
            </div>
        </div>
    );
};
