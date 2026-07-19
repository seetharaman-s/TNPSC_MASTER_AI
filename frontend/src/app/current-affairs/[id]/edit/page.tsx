"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import CurrentAffairForm from "@/components/admin/current-affairs/CurrentAffairForm";
import { CurrentAffairService } from "@/services/currentAffairService";

export default function EditCurrentAffairPage() {

  const params = useParams();
  const router = useRouter();

  const [item, setItem] = useState<any>();

  useEffect(() => {
    loadItem();
  }, []);

  async function loadItem() {
    try {
      const res = await CurrentAffairService.getById(params.id);
      setItem(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function submit(data: any) {
    try {
      await CurrentAffairService.update(params.id, data);

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