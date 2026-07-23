"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

import currentAffairsService from "@/services/currentAffairsService";

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
        topic: "",
        content: "",
        source: "",
        pdf_url: "",
        image_url: "",
        publish_date: new Date().toISOString().split("T")[0],
        language: "Tamil",
        featured: false,
        is_active: true,
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

            await currentAffairsService.create(form);

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
                            value={form.publish_date}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                        />

                        <input
                            name="cover_image"
                            placeholder="Cover Image URL"
                            value={form.image_url}
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

                        <input
                            name="topic"
                            placeholder="Topic"
                            value={form.topic}
                            onChange={handleChange}
                            className="border rounded-lg p-3"
                        />

                    </div>

                   
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
                        name="source"
                        placeholder="Source"
                        value={form.source}
                        onChange={handleChange}
                        className="mt-5 w-full border rounded-lg p-3"
                    />


                    <div className="mt-6 flex gap-8">

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
                                name="published"
                                checked={form.is_active}
                                onChange={handleChange}
                            />

                            Published

                        </label>

                    </div>

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