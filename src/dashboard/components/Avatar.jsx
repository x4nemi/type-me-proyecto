import { useMemo } from "react";

export const Avatar = ({ displayName, photoURL, type }) => {
    // const color = useMemo(() => {
    //     switch (type) {
    //         case "INFJ":
    //         case "INFP":
    //         case "ENFJ":
    //         case "ENFP":
    //             return "bg-teal-500";
    //         case "INTJ":
    //         case "INTP":
    //         case "ENTJ":
    //         case "ENTP":
    //             return "bg-violet-500";
    //         case "ISTJ":
    //         case "ISFJ":
    //         case "ESTJ":
    //         case "ESFJ":
    //             return "bg-cyan-500";
    //         case "ISTP":
    //         case "ISFP":
    //         case "ESTP":
    //         case "ESFP":
    //             return "bg-amber-300";
    //     }
    // }, [type]);

    const initials = useMemo(() => {
        const parts = displayName.split(" ");
        if (parts.length === 2) {
            return parts[0][0] + parts[1][0];
        }
        return displayName[0];
    }, [displayName]);

    return (
        <div className="avatar placeholder">
            {photoURL ? (
                <img src={photoURL} alt="avatar" />
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
