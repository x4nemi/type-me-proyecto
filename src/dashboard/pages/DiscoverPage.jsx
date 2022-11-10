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
        <div className="h-fit w-full my-20">
            {loading ? (
                <CheckingAuth />
            ) : (
                <>
                    <h1 className="text-3xl font-bold mb-4">
                        Descubre gente 🌎
                    </h1>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 place-items-center">
                        {people.lenght === 0 ? (
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
                </>
            )}
        </div>
    );
};
