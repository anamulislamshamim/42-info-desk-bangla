import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AdmissionProcess from "../pages/AdmissionProcess";
import Course from "../pages/Course";
import Faq from "../pages/Faq";
import Home from "../pages/Home";
import Requirements from "../pages/Requirements";
import TotalCost from "../pages/TotalCost";

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
            },
            {
                path: "/faq",
                element: <Faq />
            },
            {
                path:"requirements",
                element: <Requirements />
            },
            {
                path:"/cost",
                element: <TotalCost />
            },
            {
                path:"/course",
                element:<Course />
            }
        ]
    }
]);

export default router;