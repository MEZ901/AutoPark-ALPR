import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import {
    LandingPage,
    ErrorPage,
    NotFound
} from "./views";

import {
    Login,
    Register,
    ProtectedRoute
} from "./features/auth";

import {
    CurrentVehicles,
    VehicleLog
} from "./features/vehicles";

import { AdminDashboard } from "./features/admin";
import RootLayout from "./layouts/RootLayout";
import HomeLayout from "./layouts/HomeLayout";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<RootLayout />} 
            errorElement={<ErrorPage />}
        >
            <Route
                index
                element={
                    <ProtectedRoute type="guest">
                        <LandingPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="register"
                element={
                    <ProtectedRoute type="guest">
                        <Register />
                    </ProtectedRoute>
                }
            />
            <Route
                path="login"
                element={
                    <ProtectedRoute type="guest">
                        <Login />
                    </ProtectedRoute>
                }
            />
            
            <Route
                path="home"
                element={
                    <ProtectedRoute type="auth">
                        <HomeLayout />
                    </ProtectedRoute>
                }
            >
                <Route
                    index
                    element={<CurrentVehicles />}
                />
                <Route
                    path="log"
                    element={<VehicleLog />}
                />
                <Route
                    path="dashboard"
                    element={
                        <ProtectedRoute type="admin">
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
            </Route>
            
            <Route
                path="*"
                element={<NotFound />}
            />
        </Route>
    )
);

export default router;