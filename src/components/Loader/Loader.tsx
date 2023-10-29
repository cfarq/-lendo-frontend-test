import PuffLoader from "react-spinners/PuffLoader";

export const Loader = () => {
  return (
    <div
      data-testId="loader"
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
    >
      <PuffLoader color="blue" />
    </div>
  );
};
