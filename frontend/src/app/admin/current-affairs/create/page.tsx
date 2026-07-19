"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import { CurrentAffairsService } from "@/services/currentAffairsService";

interface MCQ {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
}

export default function CreateCurrentAffairPage() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        title: "",
        category: "",
        language: "Tamil",
        summary: "",
        content: "",
        cover_image: "",
        pdf_url: "",
        published_date: new Date().toISOString().split("T")[0],
        is_featured: false,
        is_published: true,
        tags: "",
    });

    const [mcqs, setMcqs] = useState<MCQ[]>([]);

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

        setMcqs([
            ...mcqs,
            {
                question: "",
                options: ["", "", "", ""],
                correct_answer: 0,
                explanation: "",
            },
        ]);

    }

    function updateMCQ(
        index: number,
        field: keyof MCQ,
        value: any
    ) {

        const copy = [...mcqs];

        copy[index] = {
            ...copy[index],
            [field]: value,
        };

        setMcqs(copy);

    }

    function updateOption(
        mcqIndex: number,
        optionIndex: number,
        value: string
    ) {

        const copy = [...mcqs];

        copy[mcqIndex].options[optionIndex] = value;

        setMcqs(copy);

    }

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            setLoading(true);

            await CurrentAffairsService.create({
                ...form,
                tags: form.tags
                    .split(",")
                    .map(tag => tag.trim())
                    .filter(Boolean),
                mcqs,
            });

            alert("Current Affair Created Successfully");

            router.push("/admin/current-affairs");

        } catch (error) {

            console.error(error);

            alert("Failed to create article.");

        } finally {

            setLoading(false);

        }

    }

    return (

        <main className="max-w-6xl mx-auto p-8">

            <div className="flex items-center justify-between mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Create Current Affair

                    </h1>

                    <p className="text-gray-500">

                        Add Daily TNPSC Current Affairs

                    </p>

                </div>

                <Link
                    href="/admin/current-affairs"
                    className="flex items-center gap-2 border rounded-lg px-4 py-2"
                >
                    <ArrowLeft size={18} />
                    Back
                </Link>

            </div>

            <form
                onSubmit={handleSubmit}
                className="space-y-8"
            >

                <div className="rounded-2xl bg-white shadow-lg p-6">

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            name="title"
                            placeholder="Title"
                            value={form.title}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                            required
                        />

                        <input
                            name="category"
                            placeholder="Category"
                            value={form.category}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
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

                        <input
                            name="cover_image"
                            placeholder="Cover Image URL"
                            value={form.cover_image}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                        />

                        <input
                            name="pdf_url"
                            placeholder="PDF URL"
                            value={form.pdf_url}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                        />

                    </div>

                    <textarea
                        name="summary"
                        rows={3}
                        placeholder="Summary"
                        value={form.summary}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                    />

                    <textarea
                        name="content"
                        rows={12}
                        placeholder="Full Content"
                        value={form.content}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                        required
                    />

                    <input
                        name="tags"
                        placeholder="Tags (comma separated)"
                        value={form.tags}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                    />

                    <div className="mt-6 flex gap-8">

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

                {/* TNPSC MCQs */}

                <div className="rounded-2xl bg-white shadow-lg p-6">

                    <div className="flex justify-between items-center mb-6">

                        <h2 className="text-xl font-semibold">

                            Related TNPSC MCQs

                        </h2>

                        <button
                            type="button"
                            onClick={addMCQ}
                            className="rounded-lg bg-green-600 px-4 py-2 text-white"
                        >
                            Add MCQ
                        </button>

                    </div>

                    {mcqs.map((mcq, index) => (

                        <div
                            key={index}
                            className="mb-8 rounded-xl border p-5"
                        >

                            <textarea
                                rows={2}
                                placeholder="Question"
                                value={mcq.question}
                                onChange={(e) =>
                                    updateMCQ(
                                        index,
                                        "question",
                                        e.target.value
                                    )
                                }
                                className="w-full border rounded-lg p-3"
                            />

                            <div className="grid md:grid-cols-2 gap-4 mt-4">

                                {mcq.options.map((option, optionIndex) => (

                                    <input
                                        key={optionIndex}
                                        placeholder={`Option ${String.fromCharCode(65 + optionIndex)}`}
                                        value={option}
                                        onChange={(e) =>
                                            updateOption(
                                                index,
                                                optionIndex,
                                                e.target.value
                                            )
                                        }
                                        className="border rounded-lg p-3"
                                    />

                                ))}

                            </div>

                            <select
                                value={mcq.correct_answer}
                                onChange={(e) =>
                                    updateMCQ(
                                        index,
                                        "correct_answer",
                                        Number(e.target.value)
                                    )
                                }
                                className="mt-4 border rounded-lg p-3"
                            >
                                <option value={0}>Option A</option>
                                <option value={1}>Option B</option>
                                <option value={2}>Option C</option>
                                <option value={3}>Option D</option>
                            </select>

                            <textarea
                                rows={3}
                                placeholder="Explanation"
                                value={mcq.explanation}
                                onChange={(e) =>
                                    updateMCQ(
                                        index,
                                        "explanation",
                                        e.target.value
                                    )
                                }
                                className="mt-4 w-full border rounded-lg p-3"
                            />

                        </div>

                    ))}

                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white"
                >
                    <Save size={18} />
                    {loading ? "Saving..." : "Create Article"}
                </button>

            </form>

        </main>

    );

}