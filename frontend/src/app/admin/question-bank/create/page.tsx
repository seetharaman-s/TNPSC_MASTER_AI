"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast";

import { QuestionBankService } from "@/services/questionBankService";

export default function CreateQuestionPage() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        question: "",

        tamil_question: "",

        subject: "",

        unit: "",

        topic: "",

        difficulty: "Easy",

        language: "Bilingual",

        options: ["", "", "", ""],

        tamil_options: ["", "", "", ""],

        correct_answer: 0,

        explanation: "",

        tamil_explanation: "",

        marks: 1,

        negative_marks: 0,

        exam: "TNPSC Group 4",

        year: new Date().getFullYear(),

        source: "",

        tags: "",

        image_url: "",

    });

    function handleChange(
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

    function updateOption(
        index: number,
        value: string
    ) {

        const copy = [...form.options];

        copy[index] = value;

        setForm({

            ...form,

            options: copy,

        });

    }

    function updateTamilOption(
        index: number,
        value: string
    ) {

        const copy = [...form.tamil_options];

        copy[index] = value;

        setForm({

            ...form,

            tamil_options: copy,

        });

    }

    function addOption() {

        setForm({

            ...form,

            options: [...form.options, ""],

            tamil_options: [
                ...form.tamil_options,
                "",
            ],

        });

    }

    function removeOption(index: number) {

        if (form.options.length <= 2) return;

        setForm({

            ...form,

            options: form.options.filter(
                (_, i) => i !== index
            ),

            tamil_options:
                form.tamil_options.filter(
                    (_, i) => i !== index
                ),

        });

    }

    async function saveQuestion() {

        try {

            setLoading(true);

            await QuestionBankService.create({

                ...form,

                tags: form.tags
                    .split(",")
                    .map(tag => tag.trim())
                    .filter(Boolean),

            });

            toast.success("Question Created");

            router.push("/admin/question-bank");

        } catch {

            toast.error("Unable to save");

        } finally {

            setLoading(false);

        }

    }

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex items-center justify-between mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">
                            Create Question
                        </h1>

                        <p className="text-gray-500 mt-1">
                            Add a new TNPSC question to the Question Bank
                        </p>

                    </div>

                    <Link
                        href="/admin/question-bank"
                        className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </Link>

                </div>

                <div className="bg-white rounded-xl shadow p-8 space-y-8">

                    {/* English Question */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Question (English)
                        </label>

                        <textarea
                            name="question"
                            rows={4}
                            value={form.question}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    {/* Tamil Question */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Question (Tamil)
                        </label>

                        <textarea
                            name="tamil_question"
                            rows={4}
                            value={form.tamil_question}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                        />

                    </div>

                    {/* Subject Details */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        <div>

                            <label className="block font-semibold mb-2">
                                Subject
                            </label>

                            <input
                                name="subject"
                                value={form.subject}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">
                                Unit
                            </label>

                            <input
                                name="unit"
                                value={form.unit}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">
                                Topic
                            </label>

                            <input
                                name="topic"
                                value={form.topic}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                    </div>

                    {/* Difficulty / Language */}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                        <div>

                            <label className="block font-semibold mb-2">
                                Difficulty
                            </label>

                            <select
                                name="difficulty"
                                value={form.difficulty}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            >
                                <option>Easy</option>
                                <option>Medium</option>
                                <option>Hard</option>
                                <option>Very Hard</option>
                            </select>

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">
                                Language
                            </label>

                            <select
                                name="language"
                                value={form.language}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            >
                                <option>English</option>
                                <option>Tamil</option>
                                <option>Bilingual</option>
                            </select>

                        </div>

                    </div>

                    {/* Options */}

                    <div>

                        <div className="flex justify-between items-center mb-4">

                            <h2 className="text-xl font-semibold">
                                Answer Options
                            </h2>

                            <button
                                type="button"
                                onClick={addOption}
                                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg"
                            >
                                <Plus size={18} />
                                Add Option
                            </button>

                        </div>

                        {form.options.map((option, index) => (

                            <div
                                key={index}
                                className="grid md:grid-cols-12 gap-3 mb-4"
                            >

                                <div className="md:col-span-5">

                                    <input
                                        value={option}
                                        onChange={(e) =>
                                            updateOption(index, e.target.value)
                                        }
                                        placeholder={`English Option ${index + 1}`}
                                        className="w-full border rounded-lg p-3"
                                    />

                                </div>

                                <div className="md:col-span-5">

                                    <input
                                        value={form.tamil_options[index]}
                                        onChange={(e) =>
                                            updateTamilOption(index, e.target.value)
                                        }
                                        placeholder={`Tamil Option ${index + 1}`}
                                        className="w-full border rounded-lg p-3"
                                    />

                                </div>

                                <div className="md:col-span-1">

                                    <input
                                        type="radio"
                                        checked={form.correct_answer === index}
                                        onChange={() =>
                                            setForm({
                                                ...form,
                                                correct_answer: index,
                                            })
                                        }
                                    />

                                </div>

                                <div className="md:col-span-1">

                                    <button
                                        type="button"
                                        onClick={() => removeOption(index)}
                                    >
                                        <Trash2 className="text-red-600" />
                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                                        {/* Explanations */}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        <div>

                            <label className="block font-semibold mb-2">
                                Explanation (English)
                            </label>

                            <textarea
                                name="explanation"
                                rows={6}
                                value={form.explanation}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                                placeholder="Enter explanation..."
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">
                                Explanation (Tamil)
                            </label>

                            <textarea
                                name="tamil_explanation"
                                rows={6}
                                value={form.tamil_explanation}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                                placeholder="தமிழ் விளக்கம்..."
                            />

                        </div>

                    </div>

                    {/* Marks */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                        <div>

                            <label className="block font-semibold mb-2">
                                Marks
                            </label>

                            <input
                                type="number"
                                name="marks"
                                value={form.marks}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">
                                Negative Marks
                            </label>

                            <input
                                type="number"
                                name="negative_marks"
                                value={form.negative_marks}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">
                                Exam
                            </label>

                            <select
                                name="exam"
                                value={form.exam}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            >
                                <option>TNPSC Group 1</option>
                                <option>TNPSC Group 2</option>
                                <option>TNPSC Group 2A</option>
                                <option>TNPSC Group 4</option>
                                <option>VAO</option>
                            </select>

                        </div>

                        <div>

                            <label className="block font-semibold mb-2">
                                Year
                            </label>

                            <input
                                type="number"
                                name="year"
                                value={form.year}
                                onChange={handleChange}
                                className="w-full border rounded-lg p-3"
                            />

                        </div>

                    </div>

                    {/* Source */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Source
                        </label>

                        <input
                            name="source"
                            value={form.source}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="Book / Previous Year Paper / Author"
                        />

                    </div>

                    {/* Tags */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Tags
                        </label>

                        <input
                            name="tags"
                            value={form.tags}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="history, chola, medieval"
                        />

                    </div>

                    {/* Image */}

                    <div>

                        <label className="block font-semibold mb-2">
                            Image URL
                        </label>

                        <input
                            name="image_url"
                            value={form.image_url}
                            onChange={handleChange}
                            className="w-full border rounded-lg p-3"
                            placeholder="https://..."
                        />

                        {form.image_url && (

                            <img
                                src={form.image_url}
                                alt="Preview"
                                className="mt-4 rounded-lg border max-h-60"
                            />

                        )}

                    </div>

                    {/* Preview */}

                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">

                        <h2 className="text-xl font-bold mb-4">
                            Live Preview
                        </h2>

                        <h3 className="font-semibold">
                            {form.question || "Question Preview"}
                        </h3>

                        {form.tamil_question && (
                            <p className="mt-2 text-gray-700">
                                {form.tamil_question}
                            </p>
                        )}

                        <ol className="list-decimal ml-6 mt-4 space-y-2">
                            {form.options.map((option, index) => (
                                <li
                                    key={index}
                                    className={
                                        index === form.correct_answer
                                            ? "font-bold text-green-600"
                                            : ""
                                    }
                                >
                                    {option || `Option ${index + 1}`}
                                </li>
                            ))}
                        </ol>

                    </div>

                    {/* Footer */}

                    <div className="flex justify-end gap-4 pt-6 border-t">

                        <Link
                            href="/admin/question-bank"
                            className="px-6 py-3 border rounded-lg"
                        >
                            Cancel
                        </Link>

                        <button
                            onClick={saveQuestion}
                            disabled={loading}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
                        >
                            <Save size={18} />

                            {loading ? "Saving..." : "Save Question"}

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}