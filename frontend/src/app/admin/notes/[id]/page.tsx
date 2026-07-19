"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {
    ArrowLeft,
    Pencil,
    Download,
    Star,
    FileText,
    BookOpen,
    Languages,
    Calendar,
} from "lucide-react";

import { NoteService } from "@/services/noteService";

interface Note {
    id: number;
    title: string;
    subject: string;
    language: string;
    description: string;
    content: string;
    pdf_url: string;
    cover_image: string;
    is_featured: boolean;
    created_at: string;
}

export default function NoteDetailsPage() {

    const params = useParams();
    const router = useRouter();

    const id = Number(params.id);

    const [loading, setLoading] = useState(true);
    const [note, setNote] = useState<Note | null>(null);

    useEffect(() => {

        if (id) {

            loadNote();

        }

    }, [id]);

    async function loadNote() {

        try {

            const response = await NoteService.getById(id);

            setNote(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    if (loading) {

        return (

            <div className="flex h-screen items-center justify-center">

                Loading...

            </div>

        );

    }

    if (!note) {

        return (

            <div className="flex h-screen flex-col items-center justify-center">

                <h1 className="text-3xl font-bold">

                    Note Not Found

                </h1>

                <button
                    onClick={() => router.back()}
                    className="mt-5 rounded-xl bg-blue-600 px-6 py-3 text-white"
                >

                    Go Back

                </button>

            </div>

        );

    }

    return (

        <main className="max-w-6xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <Link
                    href="/admin/notes"
                    className="flex items-center gap-2 rounded-lg border px-4 py-2 hover:bg-gray-100"
                >

                    <ArrowLeft size={18} />

                    Back

                </Link>

                <Link
                    href={`/admin/notes/edit/${note.id}`}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white"
                >

                    <Pencil size={18} />

                    Edit

                </Link>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                <div className="rounded-2xl bg-white shadow-lg p-6">

                    <img
                        src={
                            note.cover_image ||
                            "/images/note-placeholder.png"
                        }
                        alt={note.title}
                        className="h-96 w-full rounded-xl object-cover"
                    />

                </div>

                <div className="lg:col-span-2 rounded-2xl bg-white shadow-lg p-8">

                    <div className="flex items-start justify-between">

                        <h1 className="text-4xl font-bold">

                            {note.title}

                        </h1>

                        {note.is_featured && (

                            <span className="flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-2 text-yellow-700">

                                <Star size={16} />

                                Featured

                            </span>

                        )}

                    </div>

                    <div className="mt-8 grid md:grid-cols-2 gap-5">

                        <InfoCard
                            icon={<BookOpen size={18} />}
                            label="Subject"
                            value={note.subject}
                        />

                        <InfoCard
                            icon={<Languages size={18} />}
                            label="Language"
                            value={note.language}
                        />

                        <InfoCard
                            icon={<Calendar size={18} />}
                            label="Created"
                            value={new Date(
                                note.created_at
                            ).toLocaleDateString()}
                        />

                        <InfoCard
                            icon={<FileText size={18} />}
                            label="Type"
                            value="Study Note"
                        />

                    </div>

                    <div className="mt-8">

                        <h2 className="mb-3 text-2xl font-semibold">

                            Description

                        </h2>

                        <p className="leading-7 text-gray-600">

                            {note.description}

                        </p>

                    </div>

                    <div className="mt-8">

                        <h2 className="mb-3 text-2xl font-semibold">

                            Content

                        </h2>

                        <div className="rounded-xl border bg-gray-50 p-6 leading-8 whitespace-pre-wrap">

                            {note.content}

                        </div>

                    </div>

                    {note.pdf_url && (

                        <a
                            href={note.pdf_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 text-white hover:bg-green-700"
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