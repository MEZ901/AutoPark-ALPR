import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "../features/auth";
import { vehiclesReducer } from "../features/vehicles";
import { adminReducer} from "../features/admin";

const store = configureStore({
    reducer: {
        auth: authReducer,
        vehicles: vehiclesReducer,
        admin: adminReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export default store;