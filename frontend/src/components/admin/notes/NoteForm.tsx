"use client";

import { useState } from "react";

interface Props {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
}

export default function NoteForm({
  initialData,
  onSubmit,
}: Props) {
  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    subject: initialData?.subject ?? "",
    unit: initialData?.unit ?? "",
    language: initialData?.language ?? "Tamil",
    description: initialData?.description ?? "",
    pdf_url: initialData?.pdf_url ?? "",
  });

  function change(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await onSubmit(form);
  }

  return (
    <form
      onSubmit={submit}
      className="space-y-6 rounded-2xl bg-white p-6 shadow"
    >
      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <input
        name="subject"
        placeholder="Subject"
        value={form.subject}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <input
        name="unit"
        placeholder="Unit"
        value={form.unit}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <select
        name="language"
        value={form.language}
        onChange={change}
        className="w-full rounded-xl border p-3"
      >
        <option>Tamil</option>
        <option>English</option>
      </select>

      <textarea
        name="description"
        rows={5}
        value={form.description}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <input
        name="pdf_url"
        placeholder="PDF URL"
        value={form.pdf_url}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <button
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Save Note
      </button>
    </form>
  );
}