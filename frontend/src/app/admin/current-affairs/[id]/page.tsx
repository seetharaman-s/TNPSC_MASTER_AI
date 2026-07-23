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

import currentAffairsService, {
  CurrentAffair,
} from "@/services/currentAffairsService";

interface MCQ {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
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
                await currentAffairsService.getById(Number(id));

            setArticle(response);

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

            await currentAffairsService.delete(article.id);

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

            {article.image_url && (

                <img
                    src={article.image_url}
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
                                {new Date(article.publish_date).toLocaleDateString()}
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

                    <div className="flex items-center gap-2">
                    <Tag size={16} />
                    {article.topic || "-"}
                    </div>


                    {article.featured && (

                        <span className="flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full">

                            <Star size={16}/>
                            Featured

                        </span>

                    )}

                </div>


                <div className="mt-10">

                    <h2 className="text-2xl font-semibold mb-3">

                        Full Content

                    </h2>

                    <div className="prose max-w-none whitespace-pre-wrap">

                        {article.content}

                    </div>

                </div>

                {article.source && (
                <div className="mt-6">
                    <h3 className="font-semibold">Source</h3>
                    <p>{article.source}</p>
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

                <span
                className={`rounded-full px-3 py-1 text-sm ${
                    article.is_active
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
                >
                {article.is_active ? "Active" : "Inactive"}
                </span>

                <div className="mt-6">
                <strong>Views:</strong> {article.views}
                </div>

            </div>


        </main>

    );

}