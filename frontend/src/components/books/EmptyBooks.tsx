export default function EmptyBooks() {
  return (
    <div className="rounded-2xl border border-dashed border-slate-300 p-12 text-center">
      <h2 className="text-2xl font-semibold">
        No books found
      </h2>

      <p className="mt-2 text-slate-500">
        Try changing your search or filter.
      </p>
    </div>
  );
}