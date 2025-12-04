import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import AuthLayout from "../Layouts/AuthLayout";
// import PrivateRoute from "../Provider/PrivateRoute";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import NewsDetails from "../Pages/NewsDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../provider/PrivateRoute";
import AboutPage from "../Components/AboutPage";
import CareerPage from "../Components/CareerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () =>
          fetch("/news.json") // Must be in /public
            .then((res) => {
              if (!res.ok) throw new Error("Failed to fetch news");
              return res.json();
            }),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: () =>
      fetch("/news.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch news");
          return res.json();
        }),
  },
  {
    path: "/about",
    element: <AboutPage></AboutPage>
  },
  {
    path: "/career",
    element: <CareerPage></CareerPage>
  },
  {
    path: "*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
