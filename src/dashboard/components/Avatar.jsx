import { useMemo } from "react";

export const Avatar = ({ displayName, photoURL, type, size = 16 }) => {
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
                <div className="w-20 h-20 rounded-full">
                    <img
                        src={photoURL}
                        alt={initials}
                        width="20"
                        height="20"
                        referrerPolicy="no-referrer"
                        className="rounded-full"
                    />
                </div>
            ) : (
                <div
                    className={`bg-primary-content text-neutral-content rounded-full w-${size} ring`}
                >
                    <span className={`${size > 16 ? "text-9xl" : "text-3xl"}`}>
                        {initials}
                    </span>
                </div>
            )}
        </div>
    );
};
