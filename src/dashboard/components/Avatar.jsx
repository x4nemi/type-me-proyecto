import { useMemo } from "react";

export const Avatar = ({ displayName, photoURL, type }) => {
    const initials = useMemo(() => {
        const parts = displayName.split(" ");
        if (parts.length >= 2) {
            return parts[0][0] + parts[1][0];
        }
        return displayName[0];
    }, [displayName]);

    return (
        <div className="avatar placeholder">
            {photoURL ? (
                <img
                    src={photoURL}
                    alt={initials}
                    width="20"
                    referrerPolicy="no-referrer"
                    className="rounded-full"
                />
            ) : (
                <div
                    className={`bg-primary-content text-neutral-content rounded-full w-20 ring`}
                >
                    <span className="text-3xl">{initials}</span>
                </div>
            )}
        </div>
    );
};
