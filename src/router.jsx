import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import ErrorPage from "./views/ErrorPage";
import Index from "./views/Index";
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import Register from "./views/Register";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootLayout />} 
            ErrorElement={<ErrorPage />}
        >
            <Route
                index
                element={<Index />}
            />
            <Route
                path="register"
                element={<Register />}
            />
            <Route
                path="login"
                element={<Login />}
            />
            <Route
                path="*"
                element={<NotFound />}
            />
        </Route>
    )
);

export default router;