"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Plus,
    Pencil,
    Trash2,
    Search,
    FileText,
    Eye,
} from "lucide-react";

import { NoteService } from "@/services/noteService";

interface Note {
    id: number;
    title: string;
    subject: string;
    language: string;
    is_featured: boolean;
    created_at: string;
}

export default function NotesPage() {

    const [notes, setNotes] = useState<Note[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadNotes();
    }, []);

    async function loadNotes() {

        try {

            setLoading(true);

            const response = await NoteService.getAll();

            setNotes(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function deleteNote(id: number) {

        if (!confirm("Delete this note?")) return;

        try {

            await NoteService.delete(id);

            loadNotes();

        } catch (error) {

            console.error(error);

        }

    }

    const filtered = notes.filter(note =>
        note.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <main className="max-w-7xl mx-auto p-6">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Notes Management

                    </h1>

                    <p className="text-gray-500">

                        Manage TNPSC Notes

                    </p>

                </div>

                <Link
                    href="/admin/notes/create"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
                >

                    <Plus size={18} />

                    Add Note

                </Link>

            </div>

            <div className="relative mb-6">

                <Search
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search notes..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="w-full rounded-xl border pl-10 pr-4 py-3"
                />

            </div>

            <div className="rounded-2xl bg-white shadow">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-4 text-left">

                                Title

                            </th>

                            <th>

                                Subject

                            </th>

                            <th>

                                Language

                            </th>

                            <th>

                                Featured

                            </th>

                            <th>

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {loading ? (

                            <tr>

                                <td
                                    colSpan={5}
                                    className="p-8 text-center"
                                >

                                    Loading...

                                </td>

                            </tr>

                        ) : filtered.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={5}
                                    className="p-8 text-center"
                                >

                                    No Notes Found

                                </td>

                            </tr>

                        ) : (

                            filtered.map(note=>(

                                <tr
                                    key={note.id}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="p-4">

                                        <div className="flex items-center gap-2">

                                            <FileText
                                                className="text-green-600"
                                                size={20}
                                            />

                                            {note.title}

                                        </div>

                                    </td>

                                    <td className="text-center">

                                        {note.subject}

                                    </td>

                                    <td className="text-center">

                                        {note.language}

                                    </td>

                                    <td className="text-center">

                                        {note.is_featured ? "Yes":"No"}

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-2">

                                            <Link
                                                href={`/admin/notes/${note.id}`}
                                                className="rounded-lg bg-sky-500 p-2 text-white"
                                            >

                                                <Eye size={18}/>

                                            </Link>

                                            <Link
                                                href={`/admin/notes/edit/${note.id}`}
                                                className="rounded-lg bg-green-600 p-2 text-white"
                                            >

                                                <Pencil size={18}/>

                                            </Link>

                                            <button
                                                onClick={()=>deleteNote(note.id)}
                                                className="rounded-lg bg-red-600 p-2 text-white"
                                            >

                                                <Trash2 size={18}/>

                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </main>

    );

}