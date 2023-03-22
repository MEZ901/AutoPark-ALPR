import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import {
    LandingPage,
    ErrorPage,
    NotFound,
    AdminDashboard,
} from "./views";
import { Login, Register } from "./features/auth";
import { PrivateRoute } from "./features/auth";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootLayout />} 
            ErrorElement={<ErrorPage />}
        >
            <Route
                index
                element={
                    <PrivateRoute type="guest">
                        <LandingPage />
                    </PrivateRoute>
                }
            />
            <Route
                path="register"
                element={
                    <PrivateRoute type="guest">
                        <Register />
                    </PrivateRoute>
                }
            />
            <Route
                path="login"
                element={
                    <PrivateRoute type="guest">
                        <Login />
                    </PrivateRoute>
                }
            />
            <Route
                path="dashboard"
                element={
                    <PrivateRoute type="auth">
                        <AdminDashboard />
                    </PrivateRoute>
                }
            />
            
            <Route
                path="*"
                element={<NotFound />}
            />
        </Route>
    )
);

export default router;