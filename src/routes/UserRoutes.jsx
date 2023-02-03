import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AdmissionProcess from "../pages/AdmissionProcess";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children:[
            {
                path: "/",
                element: <Home />,
            },
            {
                path:"/home",
                element: <Home />
            },
            {
                path: "/admission",
                element: <AdmissionProcess />
            }
        ]
    }
]);

export default router;