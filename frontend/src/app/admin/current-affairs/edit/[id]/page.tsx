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

import { CurrentAffairsService } from "@/services/currentAffairsService";

interface MCQ {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
}

interface CurrentAffairForm {
    title: string;
    category: string;
    language: string;
    summary: string;
    content: string;
    cover_image: string;
    pdf_url: string;
    published_date: string;
    is_featured: boolean;
    is_published: boolean;
    tags: string;
    mcqs: MCQ[];
}

export default function EditCurrentAffairPage() {

    const router = useRouter();
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState<CurrentAffairForm>({
        title: "",
        category: "",
        language: "Tamil",
        summary: "",
        content: "",
        cover_image: "",
        pdf_url: "",
        published_date: "",
        is_featured: false,
        is_published: true,
        tags: "",
        mcqs: [],
    });

    useEffect(() => {
        loadArticle();
    }, []);

    async function loadArticle() {

        try {

            const response = await CurrentAffairsService.getById(Number(id));

            const data = response.data;

            setForm({
                ...data,
                tags: Array.isArray(data.tags)
                    ? data.tags.join(", ")
                    : "",
                mcqs: data.mcqs || [],
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

    function addMCQ() {

        setForm({
            ...form,
            mcqs: [
                ...form.mcqs,
                {
                    question: "",
                    options: ["", "", "", ""],
                    correct_answer: 0,
                    explanation: "",
                },
            ],
        });

    }

    function removeMCQ(index: number) {

        setForm({
            ...form,
            mcqs: form.mcqs.filter((_, i) => i !== index),
        });

    }

    function updateMCQ(
        index: number,
        field: keyof MCQ,
        value: any
    ) {

        const copy = [...form.mcqs];

        copy[index] = {
            ...copy[index],
            [field]: value,
        };

        setForm({
            ...form,
            mcqs: copy,
        });

    }

    function updateOption(
        mcqIndex: number,
        optionIndex: number,
        value: string
    ) {

        const copy = [...form.mcqs];

        copy[mcqIndex].options[optionIndex] = value;

        setForm({
            ...form,
            mcqs: copy,
        });

    }

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            setSaving(true);

            await CurrentAffairsService.update(
                Number(id),
                {
                    ...form,
                    tags: form.tags
                        .split(",")
                        .map(tag => tag.trim())
                        .filter(Boolean),
                }
            );

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
                            value={form.published_date}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                        />

                    </div>

                    <textarea
                        rows={3}
                        name="summary"
                        value={form.summary}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                    />

                    <textarea
                        rows={12}
                        name="content"
                        value={form.content}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                    />

                    <input
                        name="cover_image"
                        value={form.cover_image}
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

                    <input
                        name="tags"
                        value={form.tags}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                        placeholder="Comma separated tags"
                    />

                    <div className="flex gap-8 mt-5">

                        <label className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                name="is_featured"
                                checked={form.is_featured}
                                onChange={handleChange}
                            />

                            Featured

                        </label>

                        <label className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                name="is_published"
                                checked={form.is_published}
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

                        <button
                            type="button"
                            onClick={addMCQ}
                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg"
                        >
                            <Plus size={18}/>
                            Add MCQ
                        </button>

                    </div>

                    {form.mcqs.map((mcq, index) => (

                        <div
                            key={index}
                            className="border rounded-xl p-5 mb-6"
                        >

                            <div className="flex justify-between">

                                <h3>

                                    Question {index + 1}

                                </h3>

                                <button
                                    type="button"
                                    onClick={() => removeMCQ(index)}
                                    className="text-red-600"
                                >
                                    <Trash2 size={18}/>
                                </button>

                            </div>

                            {/* Same MCQ editor as Create Page */}
                            {/* Question */}
                            {/* Options */}
                            {/* Correct Answer */}
                            {/* Explanation */}

                        </div>

                    ))}

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