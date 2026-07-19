"use client";

import { useState } from "react";

interface QuizFormProps {
  initialData?: any;
  onSubmit: (data: any) => Promise<void>;
}

export default function QuizForm({
  initialData,
  onSubmit,
}: QuizFormProps) {

  const [form, setForm] = useState({
    title: initialData?.title ?? "",
    subject: initialData?.subject ?? "",
    difficulty: initialData?.difficulty ?? "Easy",
    duration: initialData?.duration ?? 30,
    total_questions: initialData?.total_questions ?? 20,
    description: initialData?.description ?? "",
  });

  function change(
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
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
        placeholder="Quiz Title"
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

      <select
        name="difficulty"
        value={form.difficulty}
        onChange={change}
        className="w-full rounded-xl border p-3"
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      <input
        type="number"
        name="duration"
        placeholder="Duration (Minutes)"
        value={form.duration}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <input
        type="number"
        name="total_questions"
        placeholder="Questions"
        value={form.total_questions}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <textarea
        rows={5}
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={change}
        className="w-full rounded-xl border p-3"
      />

      <button
        className="rounded-xl bg-blue-600 px-6 py-3 text-white"
      >
        Save Quiz
      </button>

    </form>
  );
}