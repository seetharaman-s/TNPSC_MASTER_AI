"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { Save, ArrowLeft } from "lucide-react";

import { BookService } from "@/services/bookService";

interface BookForm {
    title: string;
    author: string;
    subject: string;
    language: string;
    description: string;
    pdf_url: string;
    cover_image: string;
    is_featured: boolean;
}

export default function EditBookPage() {

    const router = useRouter();
    const params = useParams();

    const id = Number(params.id);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState<BookForm>({
        title: "",
        author: "",
        subject: "",
        language: "Tamil",
        description: "",
        pdf_url: "",
        cover_image: "",
        is_featured: false,
    });

    useEffect(() => {

        if (id) {

            loadBook();

        }

    }, [id]);

    async function loadBook() {

        try {

            const response = await BookService.getById(id);

            setForm(response.data);

        } catch (err) {

            console.error(err);

            alert("Unable to load book.");

        } finally {

            setLoading(false);

        }

    }

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

            setSaving(true);

            await BookService.update(id, form);

            alert("Book updated successfully.");

            router.push("/admin/books");

        } catch (err) {

            console.error(err);

            alert("Failed to update.");

        } finally {

            setSaving(false);

        }

    }

    if (loading) {

        return (

            <div className="flex h-screen items-center justify-center">

                Loading...

            </div>

        );

    }

    return (

        <main className="max-w-5xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Edit Book

                    </h1>

                    <p className="text-gray-500">

                        Update TNPSC Book Details

                    </p>

                </div>

                <Link
                    href="/admin/books"
                    className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-100"
                >

                    <ArrowLeft size={18} />

                    Back

                </Link>

            </div>

            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
            >

                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <label>Title</label>

                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="mt-2 w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    <div>

                        <label>Author</label>

                        <input
                            name="author"
                            value={form.author}
                            onChange={handleChange}
                            className="mt-2 w-full border rounded-lg p-3"
                        />

                    </div>

                    <div>

                        <label>Subject</label>

                        <input
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="mt-2 w-full border rounded-lg p-3"
                            required
                        />

                    </div>

                    <div>

                        <label>Language</label>

                        <select
                            name="language"
                            value={form.language}
                            onChange={handleChange}
                            className="mt-2 w-full border rounded-lg p-3"
                        >

                            <option>Tamil</option>

                            <option>English</option>

                        </select>

                    </div>

                </div>

                <div>

                    <label>Description</label>

                    <textarea
                        rows={5}
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        className="mt-2 w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label>PDF URL</label>

                    <input
                        name="pdf_url"
                        value={form.pdf_url}
                        onChange={handleChange}
                        className="mt-2 w-full border rounded-lg p-3"
                    />

                </div>

                <div>

                    <label>Cover Image URL</label>

                    <input
                        name="cover_image"
                        value={form.cover_image}
                        onChange={handleChange}
                        className="mt-2 w-full border rounded-lg p-3"
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
                    type="submit"
                    disabled={saving}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
                >

                    <Save size={18} />

                    {saving
                        ? "Updating..."
                        : "Update Book"}

                </button>

            </form>

        </main>

    );

}