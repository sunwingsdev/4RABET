import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AllGames from "../pages/all-games/AllGames";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AllGames />,
      },
    ],
  },
]);

export default Router;
