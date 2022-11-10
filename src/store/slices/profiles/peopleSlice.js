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
                (person) => person.uid === action.payload.uid
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
        clearPeople: (state) => {
            state.people = [];
            state.active = null;
            state.loading = false;
        },
    },
});

export const {
    loadPeople,
    setPeople,
    setActivePerson,
    updatePerson,
    clearPeople,
} = peopleSlice.actions;
