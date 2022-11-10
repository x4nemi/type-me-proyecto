import { createSlice } from "@reduxjs/toolkit";

export const publicationsSlice = createSlice({
    name: "people",
    initialState: {
        loading: false,
        publications: [],
        id: null,
    },

    reducers: {
        setPublications: (state, action) => {
            state.publications = action.payload;
            state.loading = false;
        },

        setNewPublication: (state, action) => {
            state.loading = false;
            state.publications = [...state.publications, action.payload];
        },
        updatePublication: (state, action) => {
            state.publications = state.publications.map((publication) => {
                if (publication.id === action.payload.id) {
                    return action.payload;
                }
                return publication;
            });
            state.loading = false;
        },
        deletePublication: (state, action) => {
            state.publications = state.publications.filter(
                (publication) => publication.id !== action.payload
            );
            state.loading = false;
        },

        loadingPublications: (state) => {
            state.loading = true;
        },
    },
});

export const {
    setPublications,
    setNewPublication,
    updatePublication,
    deletePublication,
    loadingPublications,
} = publicationsSlice.actions;
