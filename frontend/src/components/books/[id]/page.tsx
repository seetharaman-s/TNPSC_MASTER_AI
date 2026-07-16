interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function BookDetails({ params }: Props) {
  const { id } = await params;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">
        Book Details
      </h1>

      <p className="mt-4">
        Book ID: {id}
      </p>
    </div>
  );
}