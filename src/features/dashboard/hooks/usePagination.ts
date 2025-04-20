import { useCallback, useState } from "react";

interface PaginationOptions {
  initialPage?: number;
  initialLimit?: number;
}

interface PaginationData {
  page: number;
  limit: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  emptyResponse: (perPage: number) => {
    current_page: string;
    data: never[];
    first_page_url: string;
    from: number;
    last_page: string;
    last_page_url: string;
    links: never[];
    next_page_url: null;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
  };
}

/**
 * Custom hook for handling pagination logic
 * @param options Pagination options
 * @returns Pagination state and handlers
 */
export function usePagination({
  initialPage = 1,
  initialLimit = 10,
}: PaginationOptions = {}): PaginationData {
  const [page, setPage] = useState(initialPage);
  const [limit] = useState(initialLimit);

  // Memoized handlers to prevent unnecessary re-renders
  const nextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const prevPage = useCallback(() => {
    setPage((prev) => Math.max(1, prev - 1));
  }, []);

  // Memoized empty response template to prevent unnecessary object creation on each render
  const emptyResponse = useCallback(
    (perPage: number = limit) => ({
      current_page: "1",
      data: [],
      first_page_url: "",
      from: 0,
      last_page: "1",
      last_page_url: "",
      links: [],
      next_page_url: null,
      path: "",
      per_page: perPage,
      prev_page_url: null,
      to: 0,
      total: 0,
    }),
    [limit]
  );

  return {
    page,
    limit,
    setPage,
    nextPage,
    prevPage,
    emptyResponse,
  };
}
