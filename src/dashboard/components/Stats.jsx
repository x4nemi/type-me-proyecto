import { Avatar } from "./Avatar";

export const Stats = ({
    displayName,
    photoURL,
    type,
    nPublicaciones = 0,
    votedType = [
        {
            type,
            count: 0,
        },
    ],
}) => {
    return (
        <div className="stats shadow-xl mt-4 bg-base-100 p-4 xl:stats-horizontal md:stats-vertical w-full sm:stats-vertical min-[500px]:stats-vertical flex-shrink">
            <div className="stat">
                <div className="stat-figure text-secondary">
                    <Avatar displayName={displayName} photoURL={photoURL} />
                </div>
                <div className="stat-value">{displayName}</div>
                <div className="stat-title"></div>
                <div className="stat-desc text-secondary">
                    {nPublicaciones} publicaciones
                </div>
            </div>
            <div className="stat">
                <div className="stat-figure text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                    </svg>
                </div>
                <div className="stat-title">Tipo de personalidad</div>
                <div className="stat-value text-secondary">
                    <span className="bg-blue-100 text-blue-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        {type}
                    </span>
                </div>
            </div>

            <div className="stat">
                <div className="stat-figure text-error">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-8 h-8 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        ></path>
                    </svg>
                </div>
                <div className="stat-title">
                    Tipos de personalidad más votados
                </div>
                <div className="stat-value text-primary">
                    {votedType.map(
                        ({ type: vtype }, index) =>
                            index < 3 && (
                                <span
                                    key={index}
                                    className={`bg-indigo-${
                                        600 - index * 100
                                    } text-slate-200 text-xl font-medium mr-2 px-2.5 py-0.5 rounded`}
                                >
                                    {vtype}
                                </span>
                            )
                    )}
                </div>
            </div>
        </div>
    );
};
