import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";


const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: HomeLayout,
            children:[
                {
                    path: "",
                    Component: Home
                },
                {
                    path: "/category/:id",
                    Component: CategoryNews,
                    loader: ()=>fetch("/news.json")
                }
            ]
        },
        {
            path: "/auth",
            element: <h1>authentication layout</h1>
        },
        {
            path: "/news",
            element: <h1>news layout</h1>
        },
        {
            path: "/*",
            element: <h1>Error 404 </h1>
        },
    ]
);

export default router;