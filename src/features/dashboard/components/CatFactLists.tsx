import { memo, useCallback, useEffect, useRef } from "react";
import LoadingSpinner from "../../../app/components/LoadingSpinner";
import { TCatFactResponse } from "../types/catFact";
import ListPagination from "./ListPagination";

interface CatFactListsProps {
  catFacts: TCatFactResponse;
  onNextPage?: () => void;
  onPrevPage?: () => void;
  isLoading?: boolean;
  currentPage?: number; // The actual current page from state
}

/**
 * CatFactLists component for displaying a list of cat facts with pagination.
 * It uses memoization to optimize performance and prevent unnecessary re-renders.
 * It also handles loading states and pagination logic.
 * @param {TCatFactResponse} catFacts - The cat facts data.
 * @param {function} onNextPage - Callback function for next page action.
 * @param {function} onPrevPage - Callback function for previous page action.
 * @param {boolean} isLoading - Indicates if data is loading.
 * @param {number} currentPage - The actual current page from state.
 * @returns {JSX.Element} - Rendered component.
 */
const CatFactLists = memo(
  ({
    catFacts,
    onNextPage,
    onPrevPage,
    isLoading,
    currentPage,
  }: CatFactListsProps) => {
    const {
      current_page = "1",
      data = [],
      next_page_url = null,
      prev_page_url = null,
      last_page = "1",
    } = catFacts || {};

    // Keep a reference to the last non-loading last_page value
    const lastPageRef = useRef(last_page);

    useEffect(() => {
      // Only update the ref when we have valid data and are not loading
      if (!isLoading && last_page !== "1") {
        lastPageRef.current = last_page;
      }
    }, [isLoading, last_page]);

    // Memoize handlers to prevent unnecessary re-renders
    const handleNextPage = useCallback(() => {
      if (next_page_url && onNextPage) {
        onNextPage();
      }
    }, [next_page_url, onNextPage]);

    const handlePrevPage = useCallback(() => {
      if (prev_page_url && onPrevPage) {
        onPrevPage();
      }
    }, [prev_page_url, onPrevPage]);

    // Calculate the expected next/previous page when loading
    let expectedNextPage: string | undefined;
    if (isLoading && currentPage !== undefined) {
      expectedNextPage = currentPage.toString();
    }

    // Use the stored last_page value during loading
    const expectedLastPage = isLoading ? lastPageRef.current : undefined;

    return (
      <div>
        <h3 className="font-semibold text-xl mb-3">Cat Facts</h3>
        <div className="overflow-x-auto">
          <table
            className="min-w-full bg-white border border-gray-200"
            role="grid"
            aria-label="Cat Facts"
          >
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left" scope="col">
                  Fact
                </th>
                <th className="py-2 px-4 border-b text-left" scope="col">
                  Length
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading && (
                <tr>
                  <td colSpan={2} className="py-4">
                    <div className="flex justify-center">
                      <LoadingSpinner />
                    </div>
                  </td>
                </tr>
              )}
              {!isLoading && data.length === 0 ? (
                <tr>
                  <td colSpan={2} className="py-4 text-center text-gray-500">
                    No cat facts found
                  </td>
                </tr>
              ) : (
                !isLoading &&
                data.map((fact, index) => (
                  <tr
                    key={`${index}-${fact.fact}`}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="py-2 px-4 border-b">{fact.fact}</td>
                    <td className="py-2 px-4 border-b">{fact.length}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <ListPagination
          current_page={current_page}
          last_page={last_page}
          next_page_url={next_page_url}
          prev_page_url={prev_page_url}
          handleNextPage={handleNextPage}
          handlePrevPage={handlePrevPage}
          isLoading={isLoading}
          expectedNextPage={expectedNextPage}
          expectedLastPage={expectedLastPage}
        />
      </div>
    );
  }
);

export default CatFactLists;
