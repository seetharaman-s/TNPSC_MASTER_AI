"use client";

import { useState } from "react";

type BookFormData = {
  title: string;
  subject: string;
  standard: number;
  medium: string;
  author: string;
  edition: string;
  pages: number;
  description: string;
  featured: boolean;
  published: boolean;
};

interface Props {
  initialData?: Partial<BookFormData>;
  onSubmit: (data: BookFormData) => void;
}

export default function BookForm({
  initialData,
  onSubmit,
}: Props) {

  const [form, setForm] = useState<BookFormData>({
    title: initialData?.title || "",
    subject: initialData?.subject || "",
    standard: initialData?.standard || 6,
    medium: initialData?.medium || "Tamil",
    author: initialData?.author || "",
    edition: initialData?.edition || "",
    pages: initialData?.pages || 0,
    description: initialData?.description || "",
    featured: initialData?.featured || false,
    published: initialData?.published || false,
  });

  function update<K extends keyof BookFormData>(
    key: K,
    value: BookFormData[K]
  ) {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    onSubmit(form);
  }

  return (
    <form
      onSubmit={submit}
      className="bg-white rounded-2xl shadow p-8 space-y-6"
    >

      <div className="grid md:grid-cols-2 gap-6">

        <Input
          label="Title"
          value={form.title}
          onChange={(v) => update("title", v)}
        />

        <Input
          label="Subject"
          value={form.subject}
          onChange={(v) => update("subject", v)}
        />

        <Input
          label="Author"
          value={form.author}
          onChange={(v) => update("author", v)}
        />

        <Input
          label="Edition"
          value={form.edition}
          onChange={(v) => update("edition", v)}
        />

        <Input
          label="Standard"
          type="number"
          value={String(form.standard)}
          onChange={(v) => update("standard", Number(v))}
        />

        <Input
          label="Pages"
          type="number"
          value={String(form.pages)}
          onChange={(v) => update("pages", Number(v))}
        />

        <div>
          <label className="block mb-2 font-medium">
            Medium
          </label>

          <select
            value={form.medium}
            onChange={(e) =>
              update("medium", e.target.value)
            }
            className="w-full border rounded-xl p-3"
          >
            <option>Tamil</option>
            <option>English</option>
            <option>Bilingual</option>
          </select>
        </div>

      </div>

      <div>
        <label className="block mb-2 font-medium">
          Description
        </label>

        <textarea
          rows={6}
          value={form.description}
          onChange={(e) =>
            update("description", e.target.value)
          }
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div className="flex gap-8">

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) =>
              update("featured", e.target.checked)
            }
          />

          Featured

        </label>

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={form.published}
            onChange={(e) =>
              update("published", e.target.checked)
            }
          />

          Published

        </label>

      </div>

      <div className="flex justify-end gap-4">

        <button
          type="button"
          className="px-6 py-3 rounded-xl bg-gray-200"
        >
          Cancel
        </button>

        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-blue-600 text-white"
        >
          Save Book
        </button>

      </div>

    </form>
  );
}

function Input({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  type?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block mb-2 font-medium">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border rounded-xl p-3"
      />
    </div>
  );
}