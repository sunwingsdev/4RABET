import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AllGames from "../pages/all-games/AllGames";
import DashboardLayout from "../layout/DashboardLayout";
import DashboardHome from "../pages/dashboard/dashboard-home/dashboardHome";
import Popular from "../pages/popular/Popular";
import RabetExclusive from "../pages/4rabet-exclusive/RabetExclusive";
import NewGames from "../pages/new-games/NewGames";
import LiveGames from "../pages/live-games/LiveGames";
import SlotGames from "../pages/slots-games/SlotGames";
import CrashGames from "../pages/crash-games/CrashGames";
import LocalGames from "../pages/local-games/LocalGames";
import FastGames from "../pages/fast-games/FastGames";
import RouletteGames from "../pages/roulette/RouletteGames";
import BaccaratGames from "../pages/baccarat/BaccaratGames";
import BlackJack from "../pages/blackjack/BlackJack";
import TableGames from "../pages/table/TableGames";
import VirtualSport from "../pages/virtual-sports/VirtualSport";
import OtherGames from "../pages/other-games/OtherGames";
// import AdminRoute from "./AdminRoute";

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
        path: "/betruss-exclusive",
        element: <RabetExclusive />,
      },
      {
        path: "/new-games",
        element: <NewGames />,
      },
      {
        path: "/live-games",
        element: <LiveGames />,
      },
      {
        path: "/slots",
        element: <SlotGames />,
      },
      {
        path: "/crash-games",
        element: <CrashGames />,
      },
      {
        path: "/local-games",
        element: <LocalGames />,
      },
      {
        path: "/fast-games",
        element: <FastGames />,
      },
      {
        path: "/roulette",
        element: <RouletteGames />,
      },
      {
        path: "/baccarat",
        element: <BaccaratGames />,
      },
      {
        path: "/blackjack",
        element: <BlackJack />,
      },
      {
        path: "/table",
        element: <TableGames />,
      },
      {
        path: "/virtual-sports",
        element: <VirtualSport />,
      },
      {
        path: "/other",
        element: <OtherGames />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      // <AdminRoute>
        <DashboardLayout />
      // </AdminRoute>
    ),
    children: [
      {
        path: "",
        element: <DashboardHome />,
      },
    ],
  },
]);

export default Router;
