"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Pencil,
    Download,
    Star,
    BookOpen,
    User,
    Languages,
    Calendar,
} from "lucide-react";

import { BookService } from "@/services/bookService";

interface Book {
    id: number;
    title: string;
    author: string;
    subject: string;
    language: string;
    description: string;
    pdf_url: string;
    cover_image: string;
    is_featured: boolean;
    created_at: string;
}

export default function BookDetailsPage() {

    const params = useParams();
    const router = useRouter();

    const id = Number(params.id);

    const [loading, setLoading] = useState(true);
    const [book, setBook] = useState<Book | null>(null);

    useEffect(() => {

        if (id) {

            loadBook();

        }

    }, [id]);

    async function loadBook() {

        try {

            const response = await BookService.getById(id);

            setBook(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <main className="flex justify-center items-center h-screen">

                Loading Book...

            </main>

        );

    }

    if (!book) {

        return (

            <main className="flex flex-col items-center justify-center h-screen">

                <h2 className="text-3xl font-bold">

                    Book Not Found

                </h2>

                <button
                    onClick={() => router.back()}
                    className="mt-5 rounded-lg bg-blue-600 px-5 py-3 text-white"
                >

                    Go Back

                </button>

            </main>

        );

    }

    return (

        <main className="max-w-6xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <Link
                    href="/admin/books"
                    className="flex items-center gap-2 border rounded-lg px-4 py-2 hover:bg-gray-100"
                >

                    <ArrowLeft size={18} />

                    Back

                </Link>

                <Link
                    href={`/admin/books/edit/${book.id}`}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
                >

                    <Pencil size={18} />

                    Edit

                </Link>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <img
                        src={
                            book.cover_image ||
                            "/images/book-placeholder.png"
                        }
                        alt={book.title}
                        className="w-full h-96 object-cover rounded-xl"
                    />

                </div>

                <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

                    <div className="flex justify-between">

                        <h1 className="text-4xl font-bold">

                            {book.title}

                        </h1>

                        {book.is_featured && (

                            <span className="flex items-center gap-1 rounded-full bg-yellow-100 px-3 py-1 text-yellow-700">

                                <Star size={16} />

                                Featured

                            </span>

                        )}

                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">

                        <InfoCard
                            icon={<User size={18} />}
                            label="Author"
                            value={book.author}
                        />

                        <InfoCard
                            icon={<BookOpen size={18} />}
                            label="Subject"
                            value={book.subject}
                        />

                        <InfoCard
                            icon={<Languages size={18} />}
                            label="Language"
                            value={book.language}
                        />

                        <InfoCard
                            icon={<Calendar size={18} />}
                            label="Created"
                            value={new Date(
                                book.created_at
                            ).toLocaleDateString()}
                        />

                    </div>

                    <div className="mt-8">

                        <h3 className="text-xl font-semibold mb-3">

                            Description

                        </h3>

                        <p className="text-gray-600 leading-7">

                            {book.description}

                        </p>

                    </div>

                    {book.pdf_url && (

                        <a
                            href={book.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-8 rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
                        >

                            <Download size={18} />

                            Open PDF

                        </a>

                    )}

                </div>

            </div>

        </main>

    );

}

function InfoCard({

    icon,
    label,
    value,

}: {

    icon: React.ReactNode;

    label: string;

    value: string;

}) {

    return (

        <div className="rounded-xl border p-5">

            <div className="flex items-center gap-2 text-blue-600">

                {icon}

                <span className="font-semibold">

                    {label}

                </span>

            </div>

            <p className="mt-3 text-lg text-gray-700">

                {value || "-"}

            </p>

        </div>

    );

}