"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import { NoteService } from "@/services/noteService";

export default function CreateNotePage() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        title: "",
        subject: "",
        language: "Tamil",
        description: "",
        content: "",
        pdf_url: "",
        cover_image: "",
        is_featured: false,
    });

    function handleChange(
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) {

        const { name, value, type } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]:
                type === "checkbox"
                    ? (e.target as HTMLInputElement).checked
                    : value,
        }));

    }

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            setLoading(true);

            await NoteService.create(form);

            alert("Note created successfully.");

            router.push("/admin/notes");

        } catch (error) {

            console.error(error);

            alert("Failed to create note.");

        } finally {

            setLoading(false);

        }

    }

    return (

        <main className="max-w-5xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Create Note

                    </h1>

                    <p className="text-gray-500">

                        Add a new TNPSC study note

                    </p>

                </div>

                <Link
                    href="/admin/notes"
                    className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-100"
                >

                    <ArrowLeft size={18} />

                    Back

                </Link>

            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-6 rounded-2xl bg-white p-8 shadow-lg"
            >

                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <label className="font-medium">

                            Title

                        </label>

                        <input
                            required
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border p-3"
                        />

                    </div>

                    <div>

                        <label className="font-medium">

                            Subject

                        </label>

                        <input
                            required
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border p-3"
                        />

                    </div>

                    <div>

                        <label className="font-medium">

                            Language

                        </label>

                        <select
                            name="language"
                            value={form.language}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border p-3"
                        >

                            <option>Tamil</option>
                            <option>English</option>

                        </select>

                    </div>

                    <div className="flex items-center gap-3 pt-8">

                        <input
                            type="checkbox"
                            name="is_featured"
                            checked={form.is_featured}
                            onChange={handleChange}
                        />

                        <label>

                            Featured Note

                        </label>

                    </div>

                </div>

                <div>

                    <label className="font-medium">

                        Description

                    </label>

                    <textarea
                        rows={4}
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border p-3"
                    />

                </div>

                <div>

                    <label className="font-medium">

                        Content

                    </label>

                    <textarea
                        rows={10}
                        required
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border p-3"
                    />

                </div>

                <div>

                    <label className="font-medium">

                        PDF URL

                    </label>

                    <input
                        name="pdf_url"
                        value={form.pdf_url}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border p-3"
                    />

                </div>

                <div>

                    <label className="font-medium">

                        Cover Image URL

                    </label>

                    <input
                        name="cover_image"
                        value={form.cover_image}
                        onChange={handleChange}
                        className="mt-2 w-full rounded-lg border p-3"
                    />

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >

                    <Save size={18} />

                    {loading
                        ? "Creating..."
                        : "Create Note"}

                </button>

            </form>

        </main>

    );

}