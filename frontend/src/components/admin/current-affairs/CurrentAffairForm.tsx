"use client";

import { useState } from "react";

interface Props {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
}

export default function CurrentAffairForm({
  initialData,
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    category: initialData?.category ?? "",
    description: initialData?.description ?? "",
    source: initialData?.source ?? "",
    publish_date: initialData?.publish_date ?? "",
    image_url: initialData?.image_url ?? "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();
    await onSubmit(form);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl bg-white p-6 shadow"
    >

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <input
        name="source"
        placeholder="Source"
        value={form.source}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <input
        type="date"
        name="publish_date"
        value={form.publish_date}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <input
        name="image_url"
        placeholder="Image URL"
        value={form.image_url}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
      />

      <textarea
        rows={6}
        name="description"
        value={form.description}
        onChange={handleChange}
        className="w-full rounded-xl border p-3"
        placeholder="Description"
      />

      <button
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Save Current Affair
      </button>

    </form>
  );
}