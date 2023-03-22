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
    Home
} from "./views";

import {
    Login,
    Register,
    ProtectedRoute
} from "./features/auth";

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
                path="dashboard"
                element={
                    <ProtectedRoute type="auth">
                        <AdminDashboard />
                    </ProtectedRoute>
                }
            />
            <Route
                path="home"
                element={
                    <ProtectedRoute type="auth">
                        <Home />
                    </ProtectedRoute>
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