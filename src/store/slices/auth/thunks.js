import {
    logInWithEmailAndPassword,
    logoutFirebase,
    registerUserWithEmailAndPassword,
    signInWithGoogle,
} from "../../../firebase/providers";
import { setProfile } from "../profile/profileSlice";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await signInWithGoogle();

        if (result.ok) {
            const { uid, email, displayName, photoURL } = result;
            dispatch(login({ uid, email, displayName, photoURL }));
            dispatch(setProfile({ type: null }));
        } else {
            dispatch(logout({ errorMessage: result.message }));
        }
    };
};

export const startCreateUserWithEmailAndPassword = ({
    email,
    password,
    displayName,
}) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await registerUserWithEmailAndPassword({
            email,
            password,
            displayName,
        });

        if (result.ok) {
            const { uid, email, displayName, photoURL } = result;
            dispatch(login({ uid, email, displayName, photoURL }));
            dispatch(setProfile({ type: null }));
        } else {
            dispatch(logout({ errorMessage: result.message }));
        }
    };
};

export const startLogInWithEmailAndPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());

        const result = await logInWithEmailAndPassword({
            email,
            password,
        });

        if (result.ok) {
            const { uid, email, displayName, photoURL } = result;
            dispatch(login({ uid, email, displayName, photoURL }));
        } else {
            dispatch(logout({ errorMessage: result.message }));
        }
    };
};

export const startLogOut = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(logout());
    };
};
