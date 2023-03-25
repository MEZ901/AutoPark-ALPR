import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import {
    LandingPage,
    ErrorPage,
    NotFound,
    Unauthorized,
} from "./views";

import {
    Login,
    Register,
    ProtectedRoute,
} from "./features/auth";

import {
    CurrentVehicles,
    VehicleLog,
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
                    <ProtectedRoute authenticationType="guest">
                        <LandingPage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="register"
                element={
                    <ProtectedRoute authenticationType="guest">
                        <Register />
                    </ProtectedRoute>
                }
            />
            <Route
                path="login"
                element={
                    <ProtectedRoute authenticationType="guest">
                        <Login />
                    </ProtectedRoute>
                }
            />
            
            <Route
                path="home"
                element={
                    <ProtectedRoute authenticationType="auth">
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
                        <ProtectedRoute authenticationType="admin">
                            <AdminDashboard />
                        </ProtectedRoute>
                    }
                />
            </Route>
            
            <Route
                path="unauthorized"
                element={<Unauthorized />}
            />
            
            <Route
                path="*"
                element={<NotFound />}
            />
        </Route>
    )
);

export default router;