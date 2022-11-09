import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "../../components/CheckingAuth";
import { ProfileItem } from "../components/ProfileItem";
import { startLoadingPeople } from "../../store/slices/profiles/thunks";

export const DiscoverPage = () => {
    const { people, loading } = useSelector((state) => state.people);

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
                        {people.map((person) => (
                            <ProfileItem
                                key={person.id}
                                id={person.id}
                                displayName={person.displayName}
                                photoURL={person.photoURL}
                                type={person.type}
                            />
                        ))}
                        {people.map((person) => (
                            <ProfileItem
                                key={person.id}
                                id={person.id}
                                displayName={person.displayName}
                                photoURL={person.photoURL}
                                type={person.type}
                            />
                        ))}
                        {people.map((person) => (
                            <ProfileItem
                                key={person.id}
                                id={person.id}
                                displayName={person.displayName}
                                photoURL={person.photoURL}
                                type={person.type}
                            />
                        ))}
                        {people.map((person) => (
                            <ProfileItem
                                key={person.id}
                                id={person.id}
                                displayName={person.displayName}
                                photoURL={person.photoURL}
                                type={person.type}
                            />
                        ))}
                        {people.map((person) => (
                            <ProfileItem
                                key={person.id}
                                id={person.id}
                                displayName={person.displayName}
                                photoURL={person.photoURL}
                                type={person.type}
                            />
                        ))}
                        {people.map((person) => (
                            <ProfileItem
                                key={person.id}
                                id={person.id}
                                displayName={person.displayName}
                                photoURL={person.photoURL}
                                type={person.type}
                            />
                        ))}
                    </div>
                    {/* <div className="flex justify-center mt-4">
                        <div className="btn-group grid grid-cols-2 items-center">
                            <button className="btn btn-outline">
                                Previous page
                            </button>
                            <button className="btn btn-outline">Next</button>
                        </div>
                    </div> */}
                </>
            )}
        </div>
    );
};
