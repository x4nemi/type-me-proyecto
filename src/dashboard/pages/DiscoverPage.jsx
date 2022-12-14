import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../../components/CheckingAuth";
import { ProfileItem } from "../components/ProfileItem";
import { startLoadingPeople } from "../../store/slices/profiles/thunks";

export const DiscoverPage = () => {
    const { people, loading } = useSelector((state) => state.people);
    const { uid } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoadingPeople());
    }, [dispatch]);

    return (
        <div className="grid grid-cols-1">
            {loading ? (
                <div className="flex justify-center mt-32">
                    <img
                        src="https://soongyu.carrd.co/assets/images/image01.gif?v87774859893651"
                        alt="loading"
                    />
                </div>
            ) : (
                <div>
                    <h1 className="text-3xl font-bold mb-4">
                        Descubre gente 🌎
                    </h1>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 place-items-center">
                        {people.length === 0 ? (
                            <p className="text-2xl font-bold">
                                No hay gente para mostrar
                            </p>
                        ) : (
                            people
                                .filter((person) => person.uid !== uid)
                                .map((person) => (
                                    <ProfileItem
                                        key={person.id}
                                        id={person.id}
                                        displayName={person.displayName}
                                        photoURL={person.photoURL}
                                        type={person.type}
                                    />
                                ))
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
