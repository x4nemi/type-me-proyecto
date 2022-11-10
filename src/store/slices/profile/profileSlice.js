import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        displayName: null,
        photoURL: null,
        type: null,
        voted_type: null,
        uid: null,
    },

    reducers: {
        setProfile: (state, action) => {
            state.loading = false;
            state.type = action.payload.type;
            state.voted_type = action.payload.voted_type;
            state.displayName = action.payload.displayName;
            state.photoURL = action.payload.photoURL;
            state.uid = action.payload.uid;
            state.id = action.payload.id;
        },
        loadingProfile: (state) => {
            state.loading = true;
        },
        cancelLoadingProfile: (state) => {
            state.loading = false;
        },
    },
});

export const { setProfile, loadingProfile, cancelLoadingProfile } =
    profileSlice.actions;
