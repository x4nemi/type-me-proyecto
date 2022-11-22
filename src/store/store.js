import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { profileSlice } from "./slices/profile/profileSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { peopleSlice } from "./slices/profiles/peopleSlice";
import { publicationsSlice } from "./slices/publications/publicationsSlice";
import { forgotSlice } from "./slices/forgotPassword/forgotSlice";

const reducers = combineReducers({
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
    people: peopleSlice.reducer,
    publications: publicationsSlice.reducer,
    forgotPassword: forgotSlice.reducer,
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true,
});
