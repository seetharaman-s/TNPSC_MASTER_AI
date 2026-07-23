"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Plus, Save, Trash2 } from "lucide-react";

import { QuizService } from "@/services/quizService";

interface Question {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
}

interface QuizForm {
    title: string;
    subject: string;
    unit: string;
    difficulty: string;
    duration: number;
    total_marks: number;
    passing_marks: number;
    is_featured: boolean;
    questions: Question[];
}

export default function EditQuizPage() {

    const router = useRouter();
    const params = useParams();

    const id = Number(params.id);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [form, setForm] = useState<QuizForm>({
        title: "",
        subject: "",
        unit: "",
        difficulty: "Easy",
        duration: 30,
        total_marks: 100,
        passing_marks: 40,
        is_featured: false,
        questions: [],
    });

    useEffect(() => {
        loadQuiz();
    }, []);

    async function loadQuiz() {

        try {

            const response = await QuizService.getById(id);

            setForm(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    function updateQuestion(
        index: number,
        field: keyof Question,
        value: any
    ) {

        const copy = [...form.questions];

        copy[index] = {
            ...copy[index],
            [field]: value,
        };

        setForm({
            ...form,
            questions: copy,
        });

    }

    function updateOption(
        qIndex: number,
        optionIndex: number,
        value: string
    ) {

        const copy = [...form.questions];

        copy[qIndex].options[optionIndex] = value;

        setForm({
            ...form,
            questions: copy,
        });

    }

    function addQuestion() {

        setForm({
            ...form,
            questions: [
                ...form.questions,
                {
                    question: "",
                    options: ["", "", "", ""],
                    correct_answer: 0,
                    explanation: "",
                },
            ],
        });

    }

    function removeQuestion(index: number) {

        if (form.questions.length === 1) return;

        setForm({
            ...form,
            questions: form.questions.filter(
                (_, i) => i !== index
            ),
        });

    }

    async function handleSubmit(
        e: React.FormEvent
    ) {

        e.preventDefault();

        try {

            setSaving(true);

            await QuizService.update(id, form);

            alert("Quiz Updated Successfully");

            router.push("/admin/quizzes");

        } catch (error) {

            console.error(error);

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

        <main className="max-w-7xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <h1 className="text-3xl font-bold">

                    Edit Quiz

                </h1>

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

                <div className="rounded-2xl bg-white shadow-lg p-6">

                    <div className="grid md:grid-cols-2 gap-5">

                        <input
                            value={form.title}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    title:e.target.value
                                })
                            }
                            className="border rounded-lg p-3"
                            placeholder="Title"
                        />

                        <input
                            value={form.subject}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    subject:e.target.value
                                })
                            }
                            className="border rounded-lg p-3"
                            placeholder="Subject"
                        />

                        <input
                            value={form.unit}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    unit:e.target.value
                                })
                            }
                            className="border rounded-lg p-3"
                            placeholder="Unit"
                        />

                        <select
                            value={form.difficulty}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    difficulty:e.target.value
                                })
                            }
                            className="border rounded-lg p-3"
                        >

                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>

                        </select>

                    </div>

                </div>

                {form.questions.map((question,index)=>(

                    <div
                        key={index}
                        className="rounded-2xl bg-white shadow-lg p-6"
                    >

                        <div className="flex justify-between mb-4">

                            <h2 className="font-bold">

                                Question {index+1}

                            </h2>

                            <button
                                type="button"
                                onClick={()=>
                                    removeQuestion(index)
                                }
                                className="text-red-600"
                            >

                                <Trash2 size={20}/>

                            </button>

                        </div>

                        <textarea
                            rows={3}
                            value={question.question}
                            onChange={(e)=>
                                updateQuestion(
                                    index,
                                    "question",
                                    e.target.value
                                )
                            }
                            className="w-full border rounded-lg p-3"
                        />

                        <div className="grid md:grid-cols-2 gap-4 mt-4">

                            {question.options.map((option,i)=>(

                                <input
                                    key={i}
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
                            value={question.correct_answer}
                            onChange={(e)=>
                                updateQuestion(
                                    index,
                                    "correct_answer",
                                    Number(e.target.value)
                                )
                            }
                            className="mt-5 border rounded-lg p-3"
                        >

                            <option value={0}>Option A</option>
                            <option value={1}>Option B</option>
                            <option value={2}>Option C</option>
                            <option value={3}>Option D</option>

                        </select>

                        <textarea
                            rows={3}
                            value={question.explanation}
                            onChange={(e)=>
                                updateQuestion(
                                    index,
                                    "explanation",
                                    e.target.value
                                )
                            }
                            className="mt-5 w-full border rounded-lg p-3"
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
                    disabled={saving}
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-white"
                >

                    <Save size={18}/>

                    {saving
                        ? "Updating..."
                        : "Update Quiz"}

                </button>

            </form>

        </main>

    );

}