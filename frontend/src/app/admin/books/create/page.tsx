"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { BookService } from "@/services/bookService";

export default function CreateBookPage() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        title: "",
        author: "",
        subject: "",
        language: "Tamil",
        description: "",
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

        setForm(prev => ({
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

            await BookService.create(form);

            router.push("/admin/books");

        } catch (err) {

            console.error(err);

            alert("Failed to create book.");

        } finally {

            setLoading(false);

        }

    }

    return (

        <main className="max-w-4xl mx-auto p-6">

            <div className="flex items-center justify-between mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Add New Book

                    </h1>

                    <p className="text-gray-500">

                        Create TNPSC Book

                    </p>

                </div>

                <Link
                    href="/admin/books"
                    className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
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

                            Book Title

                        </label>

                        <input
                            name="title"
                            required
                            value={form.title}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border p-3"
                        />

                    </div>

                    <div>

                        <label className="font-medium">

                            Author

                        </label>

                        <input
                            name="author"
                            value={form.author}
                            onChange={handleChange}
                            className="mt-2 w-full rounded-lg border p-3"
                        />

                    </div>

                    <div>

                        <label className="font-medium">

                            Subject

                        </label>

                        <input
                            name="subject"
                            required
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

                </div>

                <div>

                    <label className="font-medium">

                        Description

                    </label>

                    <textarea
                        rows={5}
                        name="description"
                        value={form.description}
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

                <div className="flex items-center gap-3">

                    <input
                        type="checkbox"
                        name="is_featured"
                        checked={form.is_featured}
                        onChange={handleChange}
                    />

                    <label>

                        Featured Book

                    </label>

                </div>

                <button
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >

                    <Save size={18} />

                    {loading
                        ? "Saving..."
                        : "Create Book"}

                </button>

            </form>

        </main>

    );

}