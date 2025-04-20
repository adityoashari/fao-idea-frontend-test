import { memo, useCallback } from "react";

interface ListPaginationProps {
  current_page: string;
  last_page: string;
  next_page_url: string | null;
  prev_page_url: string | null;
  handlePrevPage?: () => void;
  handleNextPage?: () => void;
  isLoading?: boolean;
  expectedNextPage?: string; // Used to show expected page during loading
  expectedLastPage?: string; // Used to preserve last page during loading
}

/**
 * ListPagination component for displaying pagination controls.
 */
const ListPagination = memo(
  ({
    current_page,
    last_page,
    prev_page_url,
    next_page_url,
    handleNextPage,
    handlePrevPage,
    isLoading,
    expectedNextPage,
    expectedLastPage,
  }: ListPaginationProps) => {
    // When loading, show the expected page number if provided
    const displayPage =
      isLoading && expectedNextPage ? expectedNextPage : current_page;
    // When loading, preserve the last page if provided
    const displayLastPage =
      isLoading && expectedLastPage ? expectedLastPage : last_page;

    // Memoized handlers with debounce logic (prevent rapid clicks)
    const handlePrevClick = useCallback(() => {
      if (prev_page_url && handlePrevPage && !isLoading) {
        handlePrevPage();
      }
    }, [prev_page_url, handlePrevPage, isLoading]);

    const handleNextClick = useCallback(() => {
      if (next_page_url && handleNextPage && !isLoading) {
        handleNextPage();
      }
    }, [next_page_url, handleNextPage, isLoading]);

    return (
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-sm text-gray-600">
            Page {displayPage} of {displayLastPage}
            {isLoading && (
              <span className="ml-2 italic text-gray-400">(loading...)</span>
            )}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrevClick}
            disabled={!prev_page_url || isLoading}
            className={`px-4 py-2 border rounded cursor-pointer ${
              !prev_page_url || isLoading
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-blue-500 hover:bg-blue-50"
            }`}
            aria-label="Previous page"
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            disabled={!next_page_url || isLoading}
            className={`px-4 py-2 border rounded cursor-pointer ${
              !next_page_url || isLoading
                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                : "bg-white text-blue-500 hover:bg-blue-50"
            }`}
            aria-label="Next page"
          >
            Next
          </button>
        </div>
      </div>
    );
  }
);

export default ListPagination;
