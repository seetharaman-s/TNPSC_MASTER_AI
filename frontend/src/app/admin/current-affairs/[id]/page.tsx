"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    Pencil,
    Trash2,
    Printer,
    Calendar,
    Globe,
    Tag,
    Star,
    FileText,
    Download,
    CheckCircle2,
} from "lucide-react";

import { CurrentAffairsService } from "@/services/currentAffairsService";

interface MCQ {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
}

interface CurrentAffair {
    id: number;
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
    tags: string[];
    mcqs: MCQ[];
}

export default function CurrentAffairDetailsPage() {

    const { id } = useParams();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [article, setArticle] =
        useState<CurrentAffair | null>(null);

    useEffect(() => {
        loadArticle();
    }, []);

    async function loadArticle() {

        try {

            const response =
                await CurrentAffairsService.getById(Number(id));

            setArticle(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function deleteArticle() {

        if (!article) return;

        if (!confirm("Delete this article?")) return;

        try {

            await CurrentAffairsService.delete(article.id);

            router.push("/admin/current-affairs");

        } catch (error) {

            console.error(error);

        }

    }

    if (loading) {

        return (
            <div className="flex h-screen items-center justify-center">
                Loading...
            </div>
        );

    }

    if (!article) {

        return (
            <div className="flex h-screen items-center justify-center">
                Article not found.
            </div>
        );

    }

    return (

        <main className="max-w-7xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <Link
                    href="/admin/current-affairs"
                    className="flex items-center gap-2 border rounded-lg px-4 py-2"
                >
                    <ArrowLeft size={18}/>
                    Back
                </Link>

                <div className="flex gap-3">

                    <button
                        onClick={() => window.print()}
                        className="bg-gray-700 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <Printer size={18}/>
                        Print
                    </button>

                    <Link
                        href={`/admin/current-affairs/edit/${article.id}`}
                        className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <Pencil size={18}/>
                        Edit
                    </Link>

                    <button
                        onClick={deleteArticle}
                        className="bg-red-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <Trash2 size={18}/>
                        Delete
                    </button>

                </div>

            </div>

            {article.cover_image && (

                <img
                    src={article.cover_image}
                    alt={article.title}
                    className="w-full h-96 rounded-2xl object-cover shadow-lg mb-8"
                />

            )}

            <div className="bg-white rounded-2xl shadow-lg p-8">

                <div className="flex justify-between items-start">

                    <div>

                        <h1 className="text-4xl font-bold">

                            {article.title}

                        </h1>

                        <div className="flex gap-5 mt-4 text-gray-600">

                            <span className="flex items-center gap-2">
                                <Calendar size={16}/>
                                {article.published_date}
                            </span>

                            <span className="flex items-center gap-2">
                                <FileText size={16}/>
                                {article.category}
                            </span>

                            <span className="flex items-center gap-2">
                                <Globe size={16}/>
                                {article.language}
                            </span>

                        </div>

                    </div>

                    {article.is_featured && (

                        <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">

                            <Star size={16}/>
                            Featured

                        </span>

                    )}

                </div>

                <div className="mt-8">

                    <h2 className="text-2xl font-semibold mb-3">

                        Summary

                    </h2>

                    <p className="text-gray-700 leading-8">

                        {article.summary}

                    </p>

                </div>

                <div className="mt-10">

                    <h2 className="text-2xl font-semibold mb-3">

                        Full Content

                    </h2>

                    <div className="prose max-w-none whitespace-pre-wrap">

                        {article.content}

                    </div>

                </div>

                {article.tags?.length > 0 && (

                    <div className="mt-10">

                        <h2 className="text-xl font-semibold mb-3">

                            Tags

                        </h2>

                        <div className="flex flex-wrap gap-3">

                            {article.tags.map(tag => (

                                <span
                                    key={tag}
                                    className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
                                >
                                    <Tag size={14}/>
                                    {tag}
                                </span>

                            ))}

                        </div>

                    </div>

                )}

                {article.pdf_url && (

                    <div className="mt-10">

                        <a
                            href={article.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-green-600 text-white rounded-lg px-5 py-3"
                        >
                            <Download size={18}/>
                            Download PDF
                        </a>

                    </div>

                )}

            </div>

            {article.mcqs?.length > 0 && (

                <section className="mt-10">

                    <h2 className="text-3xl font-bold mb-6">

                        Related TNPSC MCQs

                    </h2>

                    <div className="space-y-6">

                        {article.mcqs.map((mcq, index) => (

                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow p-6"
                            >

                                <h3 className="font-semibold text-lg mb-5">

                                    Q{index + 1}. {mcq.question}

                                </h3>

                                <div className="grid md:grid-cols-2 gap-4">

                                    {mcq.options.map((option, i) => (

                                        <div
                                            key={i}
                                            className={`rounded-lg border p-4 ${
                                                i === mcq.correct_answer
                                                    ? "bg-green-100 border-green-500"
                                                    : ""
                                            }`}
                                        >
                                            <strong>
                                                {String.fromCharCode(65 + i)}.
                                            </strong>{" "}
                                            {option}
                                        </div>

                                    ))}

                                </div>

                                <div className="mt-5 bg-blue-50 rounded-lg p-4">

                                    <div className="flex items-center gap-2 font-semibold">

                                        <CheckCircle2 size={18}/>

                                        Explanation

                                    </div>

                                    <p className="mt-2">

                                        {mcq.explanation}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>

            )}

        </main>

    );

}