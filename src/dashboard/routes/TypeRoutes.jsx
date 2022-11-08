import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { ChooseType } from "../pages/ChooseType";
import { DashboardRoutes } from "./DashboardRoutes";

export const TypeRoutes = () => {
    const { type } = useSelector((state) => state.profile);
    return (
        <Routes>
            {type === null ? (
                <Route path="choose" element={<ChooseType />} />
            ) : (
                <Route path="/*" element={<DashboardRoutes />} />
            )}

            <Route path="/*" element={<Navigate to="/type/choose" />} />
        </Routes>
    );
};
