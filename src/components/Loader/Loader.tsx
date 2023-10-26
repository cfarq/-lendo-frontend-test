import PuffLoader from "react-spinners/PuffLoader";

export const Loader = () => {
  return (
    <div className="absolute left-1/2 top-1/2">
      <PuffLoader color="blue" />
    </div>
  );
};
