"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    Pencil,
    Copy,
    Trash2,
    CheckCircle2,
    Globe,
    Printer,
    Download,
} from "lucide-react";

import { toast } from "react-hot-toast";

import StatusBadge from "@/components/admin/question-bank/StatusBadge";
import { QuestionBankService } from "@/services/questionBankService";
import { Question } from "@/types/question";

export default function QuestionDetailsPage() {

    const { id } = useParams();

    const router = useRouter();

    const [loading, setLoading] = useState(true);

    const [question, setQuestion] = useState<Question | null>(null);

    useEffect(() => {

        loadQuestion();

    }, []);

    async function loadQuestion() {

        try {

            const response =
                await QuestionBankService.getById(Number(id));

            setQuestion(response.data);

        }

        catch {

            toast.error("Unable to load question.");

        }

        finally {

            setLoading(false);

        }

    }

    async function duplicateQuestion() {

        try {

            await QuestionBankService.duplicate(Number(id));

            toast.success("Question duplicated");

        }

        catch {

            toast.error("Duplicate failed");

        }

    }

    async function verifyQuestion() {

        try {

            await QuestionBankService.verify(Number(id));

            toast.success("Question verified");

            loadQuestion();

        }

        catch {

            toast.error("Verification failed");

        }

    }

    async function publishQuestion() {

        try {

            await QuestionBankService.publish(Number(id));

            toast.success("Question published");

            loadQuestion();

        }

        catch {

            toast.error("Publish failed");

        }

    }

    async function deleteQuestion() {

        if (!confirm("Delete this question?"))
            return;

        try {

            await QuestionBankService.delete(Number(id));

            toast.success("Deleted");

            router.push("/admin/question-bank");

        }

        catch {

            toast.error("Delete failed");

        }

    }

    function printQuestion() {

        window.print();

    }

    function exportPDF() {

        toast.success("PDF Export Coming Soon");

    }

    if (loading) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                Loading...

            </div>

        );

    }

    if (!question) {

        return (

            <div className="min-h-screen flex items-center justify-center">

                Question Not Found

            </div>

        );

    }

    if (!question) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            Question Not Found
        </div>
    );
}

return (

    <div className="min-h-screen bg-gray-50">

        <div className="max-w-7xl mx-auto p-6">

            {/* Header */}

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 mb-8">

                <div>

                    <Link
                        href="/admin/question-bank"
                        className="inline-flex items-center gap-2 text-blue-600 hover:underline"
                    >
                        <ArrowLeft size={18}/>
                        Back to Question Bank
                    </Link>

                    <h1 className="text-3xl font-bold mt-3">
                        Question Details
                    </h1>

                    <p className="text-gray-500 mt-2">
                        View and manage this question.
                    </p>

                </div>

                <div className="flex flex-wrap gap-3">

                    <Link
                        href={`/admin/question-bank/edit/${question.id}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <Pencil size={18}/>
                        Edit
                    </Link>

                    <button
                        onClick={duplicateQuestion}
                        className="border px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <Copy size={18}/>
                        Duplicate
                    </button>

                    <button
                        onClick={verifyQuestion}
                        className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <CheckCircle2 size={18}/>
                        Verify
                    </button>

                    <button
                        onClick={publishQuestion}
                        className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <Globe size={18}/>
                        Publish
                    </button>

                    <button
                        onClick={printQuestion}
                        className="border px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <Printer size={18}/>
                        Print
                    </button>

                    <button
                        onClick={exportPDF}
                        className="border px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <Download size={18}/>
                        PDF
                    </button>

                    <button
                        onClick={deleteQuestion}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                    >
                        <Trash2 size={18}/>
                        Delete
                    </button>

                </div>

            </div>

            {/* Status */}

            <div className="bg-white rounded-xl shadow p-6 mb-6">

                <div className="flex justify-between items-center">

                    <div>

                        <h2 className="text-xl font-bold">
                            Status
                        </h2>

                    </div>

                    <StatusBadge
                        verified={question.is_verified}
                        published={question.is_published}
                    />

                </div>

            </div>

            {/* Metadata */}

            <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h2 className="text-xl font-bold mb-5">

                    Question Information

                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div>
                        <p className="text-gray-500">Subject</p>
                        <h3 className="font-semibold">{question.subject}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500">Unit</p>
                        <h3 className="font-semibold">{question.unit}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500">Topic</p>
                        <h3 className="font-semibold">{question.topic}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500">Difficulty</p>
                        <h3 className="font-semibold">{question.difficulty}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500">Language</p>
                        <h3>{question.language}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500">Exam</p>
                        <h3>{question.exam}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500">Year</p>
                        <h3>{question.year}</h3>
                    </div>

                    <div>
                        <p className="text-gray-500">Marks</p>
                        <h3>{question.marks}</h3>
                    </div>

                </div>

            </div>

            {/* English */}

            <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">

                    Question (English)

                </h2>

                <p className="leading-8 whitespace-pre-wrap">

                    {question.question}

                </p>

            </div>

            {/* Tamil */}

            {question.tamil_question && (

                <div className="bg-white rounded-xl shadow p-6 mb-6">

                    <h2 className="text-xl font-bold mb-4">

                        Question (Tamil)

                    </h2>

                    <p className="leading-8 whitespace-pre-wrap">

                        {question.tamil_question}

                    </p>

                </div>

            )}

            {/* Options */}

            <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h2 className="text-xl font-bold mb-5">

                    Answer Options

                </h2>

                <div className="space-y-3">

                    {question.options.map((option,index)=>(

                        <div
                            key={index}
                            className={`border rounded-lg p-4 ${
                                index===question.correct_answer
                                    ? "bg-green-100 border-green-500"
                                    : ""
                            }`}
                        >

                            <div className="font-medium">

                                {String.fromCharCode(65+index)}. {option}

                            </div>

                            {question.tamil_options?.[index] && (

                                <div className="mt-2 text-gray-600">

                                    {question.tamil_options[index]}

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

                        {/* English Explanation */}

            <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h2 className="text-xl font-bold mb-4">
                    Explanation (English)
                </h2>

                <p className="whitespace-pre-wrap leading-8">

                    {question.explanation || "No explanation available."}

                </p>

            </div>

            {/* Tamil Explanation */}

            {question.tamil_explanation && (

                <div className="bg-white rounded-xl shadow p-6 mb-6">

                    <h2 className="text-xl font-bold mb-4">
                        Explanation (Tamil)
                    </h2>

                    <p className="whitespace-pre-wrap leading-8">

                        {question.tamil_explanation}

                    </p>

                </div>

            )}

            {/* Image */}

            {question.image_url && (

                <div className="bg-white rounded-xl shadow p-6 mb-6">

                    <h2 className="text-xl font-bold mb-4">
                        Question Image
                    </h2>

                    <img
                        src={question.image_url}
                        alt="Question"
                        className="rounded-xl border max-h-[500px] object-contain"
                    />

                </div>

            )}

            {/* Additional Information */}

            <div className="bg-white rounded-xl shadow p-6 mb-6">

                <h2 className="text-xl font-bold mb-5">
                    Additional Information
                </h2>

                <div className="grid lg:grid-cols-2 gap-8">

                    <div>

                        <p className="text-gray-500 mb-1">

                            Source

                        </p>

                        <p className="font-medium">

                            {question.source || "-"}

                        </p>

                    </div>

                    <div>

                        <p className="text-gray-500 mb-1">

                            Tags

                        </p>

                        <div className="flex flex-wrap gap-2">

                            {question.tags?.length ? (

                                question.tags.map(tag => (

                                    <span
                                        key={tag}
                                        className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                                    >
                                        {tag}
                                    </span>

                                ))

                            ) : (

                                <span className="text-gray-500">

                                    No Tags

                                </span>

                            )}

                        </div>

                    </div>

                </div>

            </div>

            {/* Audit Information */}

            <div className="bg-white rounded-xl shadow p-6 mb-8">

                <h2 className="text-xl font-bold mb-5">

                    Audit Information

                </h2>

                <div className="grid md:grid-cols-2 gap-6">

                    <div>

                        <p className="text-gray-500">
                            Created At
                        </p>

                        <p className="font-medium">

                            {new Date(
                                question.created_at
                            ).toLocaleString()}

                        </p>

                    </div>

                    <div>

                        <p className="text-gray-500">
                            Updated At
                        </p>

                        <p className="font-medium">

                            {new Date(
                                question.updated_at
                            ).toLocaleString()}

                        </p>

                    </div>

                </div>

            </div>

            {/* Footer */}

            <div className="text-center text-sm text-gray-500 pb-10">

                TNPSC MASTER AI • Question Bank Management

            </div>

        </div>

    </div>

);

}