"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Save,
    Trash2,
    Plus,
} from "lucide-react";

import currentAffairsService from "@/services/currentAffairsService";

interface MCQ {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
}

interface CurrentAffairForm {
  title: string;
  category: string;
  topic: string;
  content: string;
  source: string;
  pdf_url: string;
  image_url: string;
  publish_date: string;
  language: string;
  featured: boolean;
  is_active: boolean;
}

export default function EditCurrentAffairPage() {

    const router = useRouter();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState<CurrentAffairForm>({
    title: "",
    category: "",
    topic: "",
    content: "",
    source: "",
    pdf_url: "",
    image_url: "",
    publish_date: "",
    language: "Tamil",
    featured: false,
    is_active: true,
    });

    useEffect(() => {
        loadArticle();
    }, []);

    async function loadArticle() {

        try {

            const response = await currentAffairsService.getById(Number(id));

            const data = response;

            setForm({
                title: data.title,
                category: data.category,
                topic: data.topic ?? "",
                content: data.content,
                source: data.source ?? "",
                pdf_url: data.pdf_url ?? "",
                image_url: data.image_url ?? "",
                publish_date: data.publish_date,
                language: data.language,
                featured: data.featured,
                is_active: data.is_active,
                });

        } catch (error) {

            console.error(error);

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

            setSaving(true);

            await currentAffairsService.update(Number(id), form);
            alert("Article Updated Successfully");

            router.push("/admin/current-affairs");

        } catch (error) {

            console.error(error);

            alert("Unable to update article.");

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

        <main className="max-w-6xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">

                    Edit Current Affair

                </h1>

                <Link
                    href="/admin/current-affairs"
                    className="flex items-center gap-2 border rounded-lg px-4 py-2"
                >
                    <ArrowLeft size={18}/>
                    Back
                </Link>

            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-8"
            >

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                            placeholder="Title"
                        />

                        <input
                            name="category"
                            value={form.category}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                            placeholder="Category"
                        />

                        <select
                            name="language"
                            value={form.language}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                        >
                            <option>Tamil</option>
                            <option>English</option>
                            <option>Bilingual</option>
                        </select>

                        <input
                            type="date"
                            name="published_date"
                            value={form.publish_date}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                        />

                    </div>

                    <textarea
                        rows={12}
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                    />

                    <input
                        name="cover_image"
                        value={form.image_url}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                        placeholder="Cover Image URL"
                    />

                    <input
                        name="pdf_url"
                        value={form.pdf_url}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                        placeholder="PDF URL"
                    />


                    <div className="flex gap-8 mt-5">

                        <label className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                name="featured"
                                checked={form.featured}
                                onChange={handleChange}
                            />

                            Featured

                        </label>

                        <label className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                name="is_active"
                                checked={form.is_active}
                                onChange={handleChange}
                            />

                            Published

                        </label>

                    </div>

                </div>

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-xl font-semibold">

                            TNPSC MCQs

                        </h2>


                    </div>

                </div>

                <button
                    disabled={saving}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white"
                >
                    <Save size={18}/>
                    {saving ? "Updating..." : "Update Article"}
                </button>

            </form>

        </main>

    );

}