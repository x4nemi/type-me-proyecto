import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth/authSlice";
import { profileSlice } from "./slices/profile/profileSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const reducers = combineReducers({
    auth: authSlice.reducer,
    profile: profileSlice.reducer,
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
