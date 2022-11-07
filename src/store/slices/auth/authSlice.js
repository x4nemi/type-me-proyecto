import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "checking",
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
    },

    reducers: {
        login: (state, action) => {
            state.status = "authenticated";
            state.uid = action.payload.uid;
            state.email = action.payload.email;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
        },
        logout: (state, payload) => {
            state.status = "not-authenticated";
            state.uid = null;
            state.email = null;
            state.displayName = null;
            state.photoURL = null;
        },
        checkingCredentials: (state) => {
            state.status = "checking";
        },
    },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
