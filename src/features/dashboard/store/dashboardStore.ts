// import { StateCreator } from "zustand";
// import { TCatBreedResponse } from "../types/catBreed";
// import { TCatFactResponse } from "../types/catFact";

// // Dashboard state for managing cat breeds and facts with pagination
// export interface DashboardSlice {
//   // Cat Breeds state
//   breedPage: number;
//   breedLimit: number;
//   breedData: TCatBreedResponse | null;
//   isBreedLoading: boolean;

//   // Cat Facts state
//   factPage: number;
//   factLimit: number;
//   factData: TCatFactResponse | null;
//   isFactLoading: boolean;

//   // Actions
//   setBreedPage: (page: number) => void;
//   setBreedData: (data: TCatBreedResponse | null) => void;
//   setBreedLoading: (isLoading: boolean) => void;

//   setFactPage: (page: number) => void;
//   setFactData: (data: TCatFactResponse | null) => void;
//   setFactLoading: (isLoading: boolean) => void;

//   // Pagination actions
//   nextBreedPage: () => void;
//   prevBreedPage: () => void;
//   nextFactPage: () => void;
//   prevFactPage: () => void;
// }

// // Create dashboard store slice
// export const createDashboardSlice: StateCreator<DashboardSlice> = (set) => ({
//   // Initial state
//   breedPage: 1,
//   breedLimit: 10,
//   breedData: null,
//   isBreedLoading: false,

//   factPage: 1,
//   factLimit: 10,
//   factData: null,
//   isFactLoading: false,

//   // Setters
//   setBreedPage: (page) => set({ breedPage: page }),
//   setBreedData: (data) => set({ breedData: data }),
//   setBreedLoading: (isLoading) => set({ isBreedLoading: isLoading }),

//   setFactPage: (page) => set({ factPage: page }),
//   setFactData: (data) => set({ factData: data }),
//   setFactLoading: (isLoading) => set({ isFactLoading: isLoading }),

//   // Pagination actions
//   nextBreedPage: () => set((state) => ({ breedPage: state.breedPage + 1 })),
//   prevBreedPage: () =>
//     set((state) => ({ breedPage: Math.max(1, state.breedPage - 1) })),
//   nextFactPage: () => set((state) => ({ factPage: state.factPage + 1 })),
//   prevFactPage: () =>
//     set((state) => ({ factPage: Math.max(1, state.factPage - 1) })),
// });
