"use client";

import { useRouter } from "next/navigation";

import CurrentAffairForm from "@/components/admin/current-affairs/CurrentAffairForm";
import { CurrentAffairService } from "@/services/currentAffairService";

export default function CreateCurrentAffairPage() {

  const router = useRouter();

  async function submit(data: any) {

    await CurrentAffairService.create(data);

    router.push("/admin/current-affairs");

    router.refresh();

  }

  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="mb-8 text-3xl font-bold">
        Create Current Affair
      </h1>

      <CurrentAffairForm onSubmit={submit} />

    </main>
  );
}