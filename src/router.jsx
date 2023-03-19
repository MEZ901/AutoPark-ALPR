import { 
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Index from "./views/Index";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Index />} />
        </Route>
    )
);

export default router;