import { AuthLayout } from "../auth/layout/AuthLayout";

export const CheckingAuth = ({ showThemeButton = true }) => {
    const gif =
        "https://soongyu.carrd.co/assets/images/image01.gif?v87774859893651";
    return (
        <AuthLayout showButton={showThemeButton}>
            <div className="card bg-base-100">
                <div className="card bg-base-100">
                    <div className="card-body">
                        <img src={gif} alt="loading" width="550" />
                        <h2 className="text-center">Cargando...</h2>
                    </div>
                </div>
            </div>
        </AuthLayout>
    );
};
