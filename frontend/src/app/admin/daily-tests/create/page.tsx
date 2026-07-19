"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Save,
    Plus,
    Trash2,
} from "lucide-react";

import { DailyTestService } from "@/services/dailyTestService";

interface Question {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
    marks: number;
}

export default function CreateDailyTestPage() {

    const router = useRouter();

    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState({

        title: "",
        description: "",
        subject: "",
        unit: "",
        test_type: "Daily",
        difficulty: "Easy",

        start_time: "",
        end_time: "",

        duration: 30,

        total_marks: 100,

        negative_mark: 0,

        random_questions: false,

        random_options: false,

        auto_submit: true,

        is_published: false,

    });

    const [questions, setQuestions] = useState<Question[]>([]);

    function addQuestion() {

        setQuestions([
            ...questions,
            {
                question: "",
                options: ["", "", "", ""],
                correct_answer: 0,
                explanation: "",
                marks: 1,
            },
        ]);

    }

    function removeQuestion(index: number) {

        setQuestions(
            questions.filter((_, i) => i !== index)
        );

    }

    function updateQuestion(
        index: number,
        field: keyof Question,
        value: any
    ) {

        const copy = [...questions];

        copy[index] = {
            ...copy[index],
            [field]: value,
        };

        setQuestions(copy);

    }

    function updateOption(
        q: number,
        option: number,
        value: string
    ) {

        const copy = [...questions];

        copy[q].options[option] = value;

        setQuestions(copy);

    }

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            setSaving(true);

            await DailyTestService.create({

                ...form,

                questions,

            });

            alert("Daily Test Created Successfully");

            router.push("/admin/daily-tests");

        } catch (error) {

            console.error(error);

            alert("Unable to create test.");

        } finally {

            setSaving(false);

        }

    }

    return (

        <main className="max-w-7xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Create Daily Test

                    </h1>

                    <p className="text-gray-500">

                        Create TNPSC Practice Test

                    </p>

                </div>

                <Link
                    href="/admin/daily-tests"
                    className="border rounded-lg px-4 py-2 flex gap-2 items-center"
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
                            placeholder="Test Title"
                            className="border rounded-lg p-3"
                            value={form.title}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    title:e.target.value
                                })
                            }
                        />

                        <input
                            placeholder="Subject"
                            className="border rounded-lg p-3"
                            value={form.subject}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    subject:e.target.value
                                })
                            }
                        />

                        <input
                            placeholder="Unit"
                            className="border rounded-lg p-3"
                            value={form.unit}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    unit:e.target.value
                                })
                            }
                        />

                        <select
                            className="border rounded-lg p-3"
                            value={form.test_type}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    test_type:e.target.value
                                })
                            }
                        >

                            <option>Daily</option>
                            <option>Weekly</option>
                            <option>Monthly</option>
                            <option>Unit Test</option>
                            <option>Grand Test</option>

                        </select>

                        <select
                            className="border rounded-lg p-3"
                            value={form.difficulty}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    difficulty:e.target.value
                                })
                            }
                        >

                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>

                        </select>

                        <input
                            type="number"
                            placeholder="Duration (Minutes)"
                            className="border rounded-lg p-3"
                            value={form.duration}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    duration:Number(e.target.value)
                                })
                            }
                        />

                        <input
                            type="datetime-local"
                            className="border rounded-lg p-3"
                            value={form.start_time}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    start_time:e.target.value
                                })
                            }
                        />

                        <input
                            type="datetime-local"
                            className="border rounded-lg p-3"
                            value={form.end_time}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    end_time:e.target.value
                                })
                            }
                        />

                        <input
                            type="number"
                            placeholder="Total Marks"
                            className="border rounded-lg p-3"
                            value={form.total_marks}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    total_marks:Number(e.target.value)
                                })
                            }
                        />

                        <input
                            type="number"
                            step="0.25"
                            placeholder="Negative Mark"
                            className="border rounded-lg p-3"
                            value={form.negative_mark}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    negative_mark:Number(e.target.value)
                                })
                            }
                        />

                    </div>

                    <textarea
                        rows={4}
                        placeholder="Description"
                        className="mt-5 w-full border rounded-lg p-3"
                        value={form.description}
                        onChange={(e)=>
                            setForm({
                                ...form,
                                description:e.target.value
                            })
                        }
                    />

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">

                        <label>
                            <input
                                type="checkbox"
                                checked={form.random_questions}
                                onChange={(e)=>
                                    setForm({
                                        ...form,
                                        random_questions:e.target.checked
                                    })
                                }
                            />
                            Random Questions
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={form.random_options}
                                onChange={(e)=>
                                    setForm({
                                        ...form,
                                        random_options:e.target.checked
                                    })
                                }
                            />
                            Random Options
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={form.auto_submit}
                                onChange={(e)=>
                                    setForm({
                                        ...form,
                                        auto_submit:e.target.checked
                                    })
                                }
                            />
                            Auto Submit
                        </label>

                        <label>
                            <input
                                type="checkbox"
                                checked={form.is_published}
                                onChange={(e)=>
                                    setForm({
                                        ...form,
                                        is_published:e.target.checked
                                    })
                                }
                            />
                            Publish
                        </label>

                    </div>

                </div>

                {/* Questions */}

                {questions.map((question,index)=>(

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6"
                    >

                        {/* Same Question Builder used in Quiz Module */}

                    </div>

                ))}

                <button
                    type="button"
                    onClick={addQuestion}
                    className="bg-green-600 text-white rounded-lg px-5 py-3 flex items-center gap-2"
                >

                    <Plus size={18}/>

                    Add Question

                </button>

                <button
                    disabled={saving}
                    className="bg-blue-600 text-white rounded-xl px-6 py-3 flex gap-2 items-center"
                >

                    <Save size={18}/>

                    {saving
                        ? "Saving..."
                        : "Create Test"}

                </button>

            </form>

        </main>

    );

}