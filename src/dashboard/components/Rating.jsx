import { useState } from "react";

export const Rating = () => {
    const [rating, setRating] = useState(0);

    const handle = (value) => {
        setRating(value);
    };

    return (
        <div className="rating">
            {[1, 2, 3].map((value) => (
                <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked={value === rating}
                    onClick={() => handle(value)}
                />
            ))}
        </div>
    );
};
