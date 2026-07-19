"use client";

type Props = {
  onSubmit: () => void;
};

export default function SubmitDialog({
  onSubmit,
}: Props) {

  return (

    <div className="mt-8">

      <button
        onClick={onSubmit}
        className="bg-green-600 text-white px-8 py-3 rounded-xl"
      >
        Submit Quiz
      </button>

    </div>

  );

}