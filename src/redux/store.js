import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice.js";

const store = configureStore({
    reducer: {
        app: appSlice
    }
});

export default store;