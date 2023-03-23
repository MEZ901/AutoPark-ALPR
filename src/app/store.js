import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth";
import { vehiclesReducer } from "../features/vehicles";

const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicles: vehiclesReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;