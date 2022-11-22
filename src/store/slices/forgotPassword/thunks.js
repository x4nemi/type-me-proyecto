import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { loadingForgot, setEmail, setError } from "./forgotSlice";

export const startSendingEmail = (email) => {
    return async (dispatch) => {
        dispatch(loadingForgot());

        const auth = getAuth();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                dispatch(setEmail({ email }));
            })
            .catch((error) => {
                dispatch(setError({ errorMessage: error.message }));
            });
    };
};
