"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2 } from "lucide-react";
import { toast } from "react-hot-toast";

import { QuestionBankService } from "@/services/questionBankService";

export default function EditQuestionPage() {

    const { id } = useParams();

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    const [saving, setSaving] = useState(false);

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

        exam: "",

        year: new Date().getFullYear(),

        source: "",

        tags: "",

        image_url: ""

    });

    useEffect(() => {

        loadQuestion();

    }, []);

    async function loadQuestion() {

        try {

            const response = await QuestionBankService.getById(Number(id));

            const q = response.data;

            setForm({

                ...q,

                tags: Array.isArray(q.tags)

                    ? q.tags.join(", ")

                    : "",

            });

        }

        catch {

            toast.error("Unable to load question.");

        }

        finally {

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

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    }

    function updateOption(index:number,value:string){

        const copy=[...form.options];

        copy[index]=value;

        setForm({

            ...form,

            options:copy

        });

    }

    function updateTamilOption(index:number,value:string){

        const copy=[...form.tamil_options];

        copy[index]=value;

        setForm({

            ...form,

            tamil_options:copy

        });

    }

    function addOption(){

        setForm({

            ...form,

            options:[...form.options,""],

            tamil_options:[...form.tamil_options,""]

        });

    }

    function removeOption(index:number){

        if(form.options.length<=2) return;

        setForm({

            ...form,

            options:form.options.filter((_,i)=>i!==index),

            tamil_options:form.tamil_options.filter((_,i)=>i!==index)

        });

    }

    async function updateQuestion(){

        try{

            setSaving(true);

            await QuestionBankService.update(

                Number(id),

                {

                    ...form,

                    tags:form.tags
                        .split(",")
                        .map(x=>x.trim())
                        .filter(Boolean)

                }

            );

            toast.success("Question Updated");

            router.push("/admin/question-bank");

        }

        catch{

            toast.error("Update Failed");

        }

        finally{

            setSaving(false);

        }

    }

    if(loading){

        return(

            <div className="min-h-screen flex items-center justify-center">

                Loading...

            </div>

        );

    }

    if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            Loading...
        </div>
    );
}

return (

    <div className="min-h-screen bg-gray-50 p-6">

        <div className="max-w-7xl mx-auto">

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Edit Question

                    </h1>

                    <p className="text-gray-500">

                        Update Question Details

                    </p>

                </div>

                <Link
                    href="/admin/question-bank"
                    className="flex items-center gap-2 border px-4 py-2 rounded-lg hover:bg-gray-100"
                >

                    <ArrowLeft size={18}/>

                    Back

                </Link>

            </div>

            <div className="bg-white rounded-xl shadow p-8 space-y-8">

                {/* English */}

                <div>

                    <label className="font-semibold block mb-2">

                        English Question

                    </label>

                    <textarea
                        rows={4}
                        name="question"
                        value={form.question}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                {/* Tamil */}

                <div>

                    <label className="font-semibold block mb-2">

                        Tamil Question

                    </label>

                    <textarea
                        rows={4}
                        name="tamil_question"
                        value={form.tamil_question}
                        onChange={handleChange}
                        className="w-full border rounded-lg p-3"
                    />

                </div>

                {/* Subject */}

                <div className="grid md:grid-cols-3 gap-5">

                    <input
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="border rounded-lg p-3"
                    />

                    <input
                        name="unit"
                        value={form.unit}
                        onChange={handleChange}
                        placeholder="Unit"
                        className="border rounded-lg p-3"
                    />

                    <input
                        name="topic"
                        value={form.topic}
                        onChange={handleChange}
                        placeholder="Topic"
                        className="border rounded-lg p-3"
                    />

                </div>

                {/* Difficulty */}

                <div className="grid md:grid-cols-2 gap-5">

                    <select
                        name="difficulty"
                        value={form.difficulty}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    >

                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                        <option>Very Hard</option>

                    </select>

                    <select
                        name="language"
                        value={form.language}
                        onChange={handleChange}
                        className="border rounded-lg p-3"
                    >

                        <option>English</option>
                        <option>Tamil</option>
                        <option>Bilingual</option>

                    </select>

                </div>

                {/* Options */}

                <div>

                    <div className="flex justify-between mb-4">

                        <h2 className="text-xl font-bold">

                            Options

                        </h2>

                        <button
                            onClick={addOption}
                            type="button"
                            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                        >

                            <Plus size={18}/>

                            Add Option

                        </button>

                    </div>

                    {form.options.map((option,index)=>(

                        <div
                            key={index}
                            className="grid grid-cols-12 gap-3 mb-3"
                        >

                            <input
                                className="col-span-5 border rounded-lg p-3"
                                value={option}
                                onChange={(e)=>
                                    updateOption(index,e.target.value)
                                }
                            />

                            <input
                                className="col-span-5 border rounded-lg p-3"
                                value={form.tamil_options[index]}
                                onChange={(e)=>
                                    updateTamilOption(index,e.target.value)
                                }
                            />

                            <input
                                className="col-span-1"
                                type="radio"
                                checked={form.correct_answer===index}
                                onChange={()=>
                                    setForm({
                                        ...form,
                                        correct_answer:index
                                    })
                                }
                            />

                            <button
                                type="button"
                                className="col-span-1"
                                onClick={()=>
                                    removeOption(index)
                                }
                            >

                                <Trash2 className="text-red-600"/>

                            </button>

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
                        />

                    </div>

                </div>

                {/* Metadata */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

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
                        placeholder="history, polity, economy"
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
                    />

                    {form.image_url && (

                        <img
                            src={form.image_url}
                            alt="Preview"
                            className="mt-4 rounded-lg border max-h-64"
                        />

                    )}

                </div>

                {/* Live Preview */}

                <div className="rounded-xl border bg-blue-50 p-6">

                    <h2 className="text-xl font-bold mb-4">

                        Live Preview

                    </h2>

                    <h3 className="font-semibold text-lg">

                        {form.question}

                    </h3>

                    {form.tamil_question && (

                        <p className="mt-3 text-gray-700">

                            {form.tamil_question}

                        </p>

                    )}

                    <ol className="list-decimal ml-6 mt-5 space-y-2">

                        {form.options.map((option,index)=>(

                            <li
                                key={index}
                                className={
                                    form.correct_answer===index
                                    ? "font-bold text-green-600"
                                    : ""
                                }
                            >

                                {option}

                            </li>

                        ))}

                    </ol>

                </div>

                {/* Footer */}

                <div className="flex justify-end gap-4 border-t pt-6">

                    <Link
                        href="/admin/question-bank"
                        className="px-6 py-3 border rounded-lg hover:bg-gray-100"
                    >

                        Cancel

                    </Link>

                    <button
                        onClick={updateQuestion}
                        disabled={saving}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
                    >

                        <Save size={18}/>

                        {saving ? "Updating..." : "Update Question"}

                    </button>

                </div>

            </div>

        </div>

    </div>

);

}