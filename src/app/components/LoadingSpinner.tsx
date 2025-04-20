import { PuffLoader } from "react-spinners";

/**
 * @returns {JSX.Element}
 * @description LoadingSpinner component that displays a loading spinner.
 */
function LoadingSpinner() {
  return (
    <div className="justify-center items-center flex">
      <PuffLoader size={60} />
    </div>
  );
}

export default LoadingSpinner;
