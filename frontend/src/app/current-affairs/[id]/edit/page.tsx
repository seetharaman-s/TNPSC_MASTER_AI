"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import CurrentAffairForm from "@/components/admin/current-affairs/CurrentAffairForm";
import currentAffairsService, {
  CurrentAffair,
} from "@/services/currentAffairsService";

export default function EditCurrentAffairPage() {
  const [error, setError] = useState("");
  const params = useParams();
  const router = useRouter();

  const [item, setItem] = useState<CurrentAffair | null>(null);
  
  const id = Number(params.id);

  useEffect(() => {
    loadItem();
  }, [id]);

  async function loadItem() {
    try {
      const item = await currentAffairsService.getById(id);
      setItem(item);
    } catch (error) {
      console.error(error);
      setError("Unable to load current affair.");
    }
  }

  async function submit(data: any) {
    try {
      await currentAffairsService.update(id, data);

      router.push("/admin/current-affairs");
      router.refresh();

    } catch (error) {
      console.error(error);
    }
  }

  if (!item) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Current Affair
      </h1>

      <CurrentAffairForm
        initialData={item}
        onSubmit={submit}
      />

    </main>
  );
}