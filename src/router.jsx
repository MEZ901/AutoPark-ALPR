import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
} from "react-router-dom";
import { Login, Register } from "./features/auth";
import RootLayout from "./layouts/RootLayout";
import AdminDashboard from "./views/AdminDashboard";
import ErrorPage from "./views/ErrorPage";
import Index from "./views/Index";
import NotFound from "./views/NotFound";
import { PrivateRoute } from "./features/auth";

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
                path="dashboard"
                element={
                    <PrivateRoute>
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