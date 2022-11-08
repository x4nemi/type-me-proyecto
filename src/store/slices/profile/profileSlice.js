import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "auth",
    initialState: {
        loading: false,
        type: null,
        voted_type: null,
        publications: 0,
        id: null,
    },

    reducers: {
        setProfile: (state, action) => {
            state.loading = false;
            state.type = action.payload.type;
            state.voted_type = action.payload.voted_type;
            state.publications = action.payload.publications;
            state.id = action.payload.id;
        },
        loadingProfile: (state) => {
            state.loading = true;
        },
    },
});

export const { setProfile, loadingProfile } = profileSlice.actions;
