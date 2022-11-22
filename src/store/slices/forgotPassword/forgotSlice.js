import { createSlice } from "@reduxjs/toolkit";

export const forgotSlice = createSlice({
    name: "forgotPassword",
    initialState: {
        email: null,
        loading: false,
        errorMessage: "",
        sucess: false,
    },

    reducers: {
        setEmail: (state, action) => {
            state.loading = false;
            state.email = action.payload.email;
            state.errorMessage = "";
            state.sucess = true;
        },
        loadingForgot: (state) => {
            state.errorMessage = "";
            state.loading = true;
        },
        setError: (state, action) => {
            state.loading = false;
            state.errorMessage = action.payload.errorMessage;
        },
        clearAll: (state) => {
            state.loading = false;
            state.errorMessage = "";
            state.email = null;
            state.sucess = false;
        },
    },
});

export const { setEmail, loadingForgot, setError, clearAll } =
    forgotSlice.actions;
