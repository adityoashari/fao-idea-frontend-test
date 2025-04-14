import {
  createDashboardSlice,
  DashboardSlice,
} from "@/features/dashboard/store/dashboardStore";
import { create } from "zustand";

export const useBoundedStore = create<DashboardSlice>()((...a) => ({
  ...createDashboardSlice(...a),
  // Add any other slices from other features here
}));
