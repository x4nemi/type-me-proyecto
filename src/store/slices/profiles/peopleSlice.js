import { createSlice } from "@reduxjs/toolkit";

export const peopleSlice = createSlice({
    name: "people",
    initialState: {
        loading: false,
        people: [],
        active: null,
    },

    reducers: {
        loadPeople: (state, action) => {
            state.loading = true;
        },
        setPeople: (state, action) => {
            state.people = action.payload;
            state.loading = false;
        },

        setActivePerson: (state, action) => {
            state.active = state.people.find(
                (person) => person.id === action.payload.id
            );
        },

        updatePerson: (state, action) => {
            state.loading = false;
            state.people = state.people.map((person) => {
                if (person.id === action.payload.id) {
                    return action.payload;
                }
                return person;
            });
        },

        setPublication: (state, action) => {
            state.loading = false;
            state.active.publications = [
                ...state.active.publications,
                action.payload,
            ];
        },

        deletePublication: (state, action) => {
            state.loading = false;
            state.active.publications = state.active.publications.filter(
                (publication) => publication.id !== action.payload
            );
        },

        clearPeople: (state) => {
            state.people = [];
            state.active = null;
        },
    },
});

export const {
    loadPeople,
    setPeople,
    setActivePerson,
    updatePerson,
    clearPeople,
    setPublication,
    deletePublication,
} = peopleSlice.actions;
