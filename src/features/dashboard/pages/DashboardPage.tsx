import { lazy, Suspense, useMemo } from "react";
import ErrorMessage from "../../../app/components/ErrorMessage";
import LoadingSpinner from "../../../app/components/LoadingSpinner";
import { useCatBreeds, useCatFacts } from "../hooks/useDashboard";
import { usePagination } from "../hooks/usePagination";

const CatBreedLists = lazy(() => import("../components/CatBreedLists"));
const CatFactLists = lazy(() => import("../components/CatFactLists"));

/**
 * DashboardPage component
 * @returns {JSX.Element}
 * @description DashboardPage component that fetches and displays a list of cat breeds and cat facts.
 */
function DashboardPage() {
  // Use the pagination hook for breeds
  const {
    page: breedPage,
    limit: breedLimit,
    nextPage: handleNextBreedPage,
    prevPage: handlePrevBreedPage,
    emptyResponse: emptyBreedResponseFn,
  } = usePagination({ initialLimit: 10 });

  // Use the pagination hook for facts
  const {
    page: factPage,
    limit: factLimit,
    nextPage: handleNextFactPage,
    prevPage: handlePrevFactPage,
    emptyResponse: emptyFactResponseFn,
  } = usePagination({ initialLimit: 10 });

  // Fetch cat breeds using custom hook
  const {
    data: catBreeds,
    isLoading: catBreedsLoading,
    error: catBreedsError,
  } = useCatBreeds({ limit: breedLimit, page: breedPage });

  // Fetch cat facts using custom hook
  const {
    data: catFacts,
    isLoading: catFactsLoading,
    error: catFactsError,
  } = useCatFacts({
    limit: factLimit,
    page: factPage,
  });

  // Memoize empty responses to prevent unnecessary object creation on each render
  const emptyBreedResponse = useMemo(
    () => emptyBreedResponseFn(breedLimit),
    [emptyBreedResponseFn, breedLimit]
  );
  const emptyFactResponse = useMemo(
    () => emptyFactResponseFn(factLimit),
    [emptyFactResponseFn, factLimit]
  );

  return (
    <div className="container mx-auto flex flex-col gap-4 p-4">
      <h1 className="text-5xl font-bold block">Dashboard</h1>
      <a href="/dashboard-old-code" className="text-blue-500 underline">
        Dashboard before refactoring
      </a>
      <div className="w-full">
        {/* Always render the component, using the previous data while loading */}
        <Suspense fallback={<LoadingSpinner />}>
          <CatBreedLists
            catBreeds={catBreeds || emptyBreedResponse}
            onNextPage={handleNextBreedPage}
            onPrevPage={handlePrevBreedPage}
            isLoading={catBreedsLoading}
            currentPage={breedPage}
          />
        </Suspense>
        {catBreedsError && <ErrorMessage error={catBreedsError} />}
      </div>
      <div className="w-full">
        {/* Always render the component, using the previous data while loading */}
        <Suspense fallback={<LoadingSpinner />}>
          <CatFactLists
            catFacts={catFacts || emptyFactResponse}
            onNextPage={handleNextFactPage}
            onPrevPage={handlePrevFactPage}
            isLoading={catFactsLoading}
            currentPage={factPage}
          />
        </Suspense>
        {catFactsError && <ErrorMessage error={catFactsError} />}
      </div>
    </div>
  );
}

export default DashboardPage;
