import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { dashboardRoutes } from "../features/dashboard/routes";
import DashboardQuestionPage from "./pages/DashboardQuestionPage";
import PageNotFound from "./pages/PageNotFound";

const appRoutes = createBrowserRouter([
  ...dashboardRoutes,
  {
    path: "/dashboard-old-code",
    element: <DashboardQuestionPage />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function AppRoutes() {
  return <RouterProvider router={appRoutes} />;
}

export default AppRoutes;
