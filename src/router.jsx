import RootLayout from "./layouts/RootLayout";
import Index from "./views/Index";
import NotFound from "./views/NotFound";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Index />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

export default router;