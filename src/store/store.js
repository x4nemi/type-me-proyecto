import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "./slices/theme/themeSlice";

export const store = configureStore({
    reducer: {
        theme: themeSlice.reducer,
    },
});
