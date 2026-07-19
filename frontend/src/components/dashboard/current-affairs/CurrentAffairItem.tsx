"use client";

type Props = {
  title: string;
  category: string;
  date: string;
};

export default function CurrentAffairItem({
  title,
  category,
  date,
}: Props) {
  return (
    <div className="border-b last:border-none py-4">

      <div className="flex justify-between">

        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
          {category}
        </span>

        <span className="text-sm text-gray-500">
          {date}
        </span>

      </div>

      <h3 className="mt-3 font-semibold">
        {title}
      </h3>

    </div>
  );
}