import { lazy } from "react";
import { RouteObject } from "react-router-dom";

// Lazy load Dashboard pages
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

export const dashboardRoutes: RouteObject[] = [
  { path: "/", element: <DashboardPage /> },
];
