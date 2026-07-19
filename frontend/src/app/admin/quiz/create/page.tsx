"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Plus,
    Save,
    Trash2,
} from "lucide-react";

import { QuizService } from "@/services/quizService";

interface Question {

    question: string;

    options: string[];

    correct_answer: number;

    explanation: string;

}

export default function CreateQuizPage() {

    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({

        title: "",

        subject: "",

        unit: "",

        difficulty: "Easy",

        duration: 30,

        total_marks: 100,

        passing_marks: 40,

        is_featured: false,

    });

    const [questions, setQuestions] = useState<Question[]>([
        {
            question: "",
            options: ["", "", "", ""],
            correct_answer: 0,
            explanation: "",
        },
    ]);

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
        qIndex: number,
        optionIndex: number,
        value: string
    ) {

        const copy = [...questions];

        copy[qIndex].options[optionIndex] = value;

        setQuestions(copy);

    }

    function addQuestion() {

        setQuestions([
            ...questions,
            {
                question: "",
                options: ["", "", "", ""],
                correct_answer: 0,
                explanation: "",
            },
        ]);

    }

    function removeQuestion(index: number) {

        if (questions.length === 1) return;

        setQuestions(
            questions.filter((_, i) => i !== index)
        );

    }

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            setLoading(true);

            await QuizService.create({
                ...form,
                questions,
            });

            alert("Quiz Created Successfully");

            router.push("/admin/quizzes");

        } catch (error) {

            console.error(error);

            alert("Unable to create quiz");

        } finally {

            setLoading(false);

        }

    }

    return (

        <main className="max-w-6xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Create Quiz

                    </h1>

                    <p className="text-gray-500">

                        Create TNPSC Quiz

                    </p>

                </div>

                <Link
                    href="/admin/quizzes"
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

                {/* Quiz Details */}

                <div className="rounded-2xl bg-white shadow-lg p-6">

                    <h2 className="text-xl font-semibold mb-5">

                        Quiz Details

                    </h2>

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            placeholder="Quiz Title"
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
                            placeholder="Duration"
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
                            type="number"
                            placeholder="Passing Marks"
                            className="border rounded-lg p-3"
                            value={form.passing_marks}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    passing_marks:Number(e.target.value)
                                })
                            }
                        />

                    </div>

                </div>

                {/* Questions */}

                {questions.map((q,index)=>(

                    <div
                        key={index}
                        className="rounded-2xl bg-white shadow-lg p-6"
                    >

                        <div className="flex justify-between mb-4">

                            <h3 className="font-bold">

                                Question {index+1}

                            </h3>

                            <button
                                type="button"
                                onClick={()=>removeQuestion(index)}
                                className="text-red-600"
                            >

                                <Trash2 size={20}/>

                            </button>

                        </div>

                        <textarea
                            placeholder="Question"
                            rows={3}
                            className="w-full border rounded-lg p-3"
                            value={q.question}
                            onChange={(e)=>
                                updateQuestion(
                                    index,
                                    "question",
                                    e.target.value
                                )
                            }
                        />

                        <div className="grid md:grid-cols-2 gap-4 mt-5">

                            {q.options.map((option,i)=>(

                                <input
                                    key={i}
                                    placeholder={`Option ${String.fromCharCode(65+i)}`}
                                    value={option}
                                    onChange={(e)=>
                                        updateOption(
                                            index,
                                            i,
                                            e.target.value
                                        )
                                    }
                                    className="border rounded-lg p-3"
                                />

                            ))}

                        </div>

                        <select
                            className="mt-5 border rounded-lg p-3"
                            value={q.correct_answer}
                            onChange={(e)=>
                                updateQuestion(
                                    index,
                                    "correct_answer",
                                    Number(e.target.value)
                                )
                            }
                        >

                            <option value={0}>Option A</option>
                            <option value={1}>Option B</option>
                            <option value={2}>Option C</option>
                            <option value={3}>Option D</option>

                        </select>

                        <textarea
                            rows={3}
                            placeholder="Explanation"
                            className="mt-5 w-full border rounded-lg p-3"
                            value={q.explanation}
                            onChange={(e)=>
                                updateQuestion(
                                    index,
                                    "explanation",
                                    e.target.value
                                )
                            }
                        />

                    </div>

                ))}

                <button
                    type="button"
                    onClick={addQuestion}
                    className="flex items-center gap-2 rounded-lg bg-green-600 px-5 py-3 text-white"
                >

                    <Plus size={18}/>

                    Add Question

                </button>

                <button
                    disabled={loading}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white"
                >

                    <Save size={18}/>

                    {loading
                        ? "Saving..."
                        : "Create Quiz"}

                </button>

            </form>

        </main>

    );

}