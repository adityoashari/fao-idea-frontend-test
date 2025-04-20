import {
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { fetchCatBreeds, fetchCatFacts } from "../services/api";
import { TCatBreedResponse } from "../types/catBreed";
import { TCatFactResponse } from "../types/catFact";

// Cache time constants (in milliseconds)
const CACHE_TIME = 5 * 60 * 1000; // 5 minutes
const STALE_TIME = 1 * 60 * 1000; // 1 minute

/**
 * Custom hook to fetch cat breeds with pagination and prefetching
 * @param param0
 * @param options
 * @returns
 */
export const useCatBreeds = (
  { limit = 10, page = 1 } = {},
  options?: Omit<
    UseQueryOptions<TCatBreedResponse, Error>,
    "queryKey" | "queryFn"
  >
) => {
  const queryClient = useQueryClient();
  const isInitialMount = useRef(true);

  // Prefetch the next page, but only after initial load and when the page changes
  useEffect(() => {
    // Skip prefetching on initial render
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Only prefetch if we're on a valid page
    if (page > 0) {
      queryClient.prefetchQuery({
        queryKey: ["users", { limit, page: page + 1 }],
        queryFn: () => fetchCatBreeds(limit, page + 1),
      });
    }
  }, [page, limit, queryClient]);

  return useQuery<TCatBreedResponse, Error>({
    queryKey: ["users", { limit, page }],
    queryFn: () => fetchCatBreeds(limit, page),
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
    retry: 2, // Retry failed requests twice
    ...options,
  });
};

/**
 * Custom hook to fetch cat facts with pagination and prefetching
 * @param param0
 * @param options
 * @returns
 */
export const useCatFacts = (
  { limit = 10, page = 1 } = {},
  options?: Omit<
    UseQueryOptions<TCatFactResponse, Error>,
    "queryKey" | "queryFn"
  >
) => {
  const queryClient = useQueryClient();
  const isInitialMount = useRef(true);

  // Prefetch the next page, but only after initial load and when the page changes
  useEffect(() => {
    // Skip prefetching on initial render
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }

    // Only prefetch if we're on a valid page
    if (page > 0) {
      queryClient.prefetchQuery({
        queryKey: ["posts", { limit, page: page + 1 }],
        queryFn: () => fetchCatFacts(limit, page + 1),
      });
    }
  }, [page, limit, queryClient]);

  return useQuery<TCatFactResponse, Error>({
    queryKey: ["posts", { limit, page }],
    queryFn: () => fetchCatFacts(limit, page),
    staleTime: STALE_TIME,
    gcTime: CACHE_TIME,
    retry: 2, // Retry failed requests twice
    ...options,
  });
};
