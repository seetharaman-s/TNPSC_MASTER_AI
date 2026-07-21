import Spinner from "./Spinner";

export default function ButtonLoader() {
  return (
    <div className="flex justify-center items-center">
      <Spinner size="sm" className="text-white" />
    </div>
  );
}