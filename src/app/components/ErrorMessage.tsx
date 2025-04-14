const ErrorMessage = ({ error }: { error: Error }) => {
  return (
    <div className="text-red-500">
      <h2 className="font-semibold">Error</h2>
      <p>{error.message}</p>
    </div>
  );
};
export default ErrorMessage;
