import { StateCreator } from "zustand";
import { TPost } from "../types/post";
import { TUser } from "../types/user";

// Example of a slice of the store that manages dashboard data
export interface DashboardSlice {
  posts: TPost[];
  users: TUser[];
  setPosts: (posts: TPost[]) => void;
  setUsers: (users: TUser[]) => void;
}

// This is a slice of the store that manages dashboard data in the future
export const createDashboardSlice: StateCreator<DashboardSlice> = (set) => ({
  // Example of a slice of the store that manages dashboard data
  posts: [],
  users: [],
  setPosts: (posts) => {
    set({ posts });
  },
  setUsers: (users) => {
    set({ users });
  },
});
