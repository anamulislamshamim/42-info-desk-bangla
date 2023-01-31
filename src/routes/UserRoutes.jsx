import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
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
                path: "/course",
                element: <h1>Course</h1>
            }
        ]
    }
]);

export default router;