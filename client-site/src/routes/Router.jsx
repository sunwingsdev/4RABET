import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AllGames from "../pages/all-games/AllGames";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/dashboard-home/dashboardHome";
import Popular from "../pages/popular/Popular";
import RabetExclusive from "../pages/4rabet-exclusive/RabetExclusive";
import NewGames from "../pages/new-games/NewGames";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <AllGames />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/4rabet-exclusive",
        element: <RabetExclusive />,
      },
      {
        path: "/new-games",
        element: <NewGames />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default Router;
