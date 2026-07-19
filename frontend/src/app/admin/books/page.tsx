"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Plus,
    Pencil,
    Trash2,
    Search,
    BookOpen,
    Eye,
} from "lucide-react";

import { BookService } from "@/services/bookService";

interface Book {
    id: number;
    title: string;
    subject: string;
    language: string;
    author: string;
    is_featured: boolean;
    created_at: string;
}

export default function BooksPage() {

    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadBooks();
    }, []);

    async function loadBooks() {

        try {

            setLoading(true);

            const response = await BookService.getAll();

            setBooks(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function deleteBook(id: number) {

        const ok = confirm(
            "Are you sure you want to delete this book?"
        );

        if (!ok) return;

        try {

            await BookService.delete(id);

            loadBooks();

        } catch (error) {

            console.error(error);

        }

    }

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <main className="max-w-7xl mx-auto p-6">

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Books Management

                    </h1>

                    <p className="text-gray-500">

                        Manage TNPSC Books

                    </p>

                </div>

                <Link
                    href="/admin/books/create"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
                >

                    <Plus size={18} />

                    Add Book

                </Link>

            </div>

            <div className="mb-6 relative">

                <Search
                    className="absolute left-4 top-3 text-gray-400"
                    size={18}
                />

                <input
                    type="text"
                    placeholder="Search books..."
                    className="w-full rounded-xl border pl-11 pr-4 py-3"
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

            </div>

            <div className="rounded-xl bg-white shadow">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-4 text-left">

                                Title

                            </th>

                            <th className="p-4">

                                Subject

                            </th>

                            <th className="p-4">

                                Language

                            </th>

                            <th className="p-4">

                                Author

                            </th>

                            <th className="p-4">

                                Featured

                            </th>

                            <th className="p-4">

                                Actions

                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {loading ? (

                            <tr>

                                <td
                                    colSpan={6}
                                    className="p-8 text-center"
                                >

                                    Loading...

                                </td>

                            </tr>

                        ) : filteredBooks.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={6}
                                    className="p-8 text-center"
                                >

                                    No Books Found

                                </td>

                            </tr>

                        ) : (

                            filteredBooks.map(book => (

                                <tr
                                    key={book.id}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="p-4">

                                        <div className="flex items-center gap-3">

                                            <BookOpen
                                                className="text-blue-600"
                                                size={20}
                                            />

                                            {book.title}

                                        </div>

                                    </td>

                                    <td className="text-center">

                                        {book.subject}

                                    </td>

                                    <td className="text-center">

                                        {book.language}

                                    </td>

                                    <td className="text-center">

                                        {book.author}

                                    </td>

                                    <td className="text-center">

                                        {book.is_featured
                                            ? "Yes"
                                            : "No"}

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-2">

                                            <Link
                                                href={`/admin/books/${book.id}`}
                                                className="rounded-lg bg-sky-500 p-2 text-white"
                                            >

                                                <Eye size={18} />

                                            </Link>

                                            <Link
                                                href={`/admin/books/edit/${book.id}`}
                                                className="rounded-lg bg-green-600 p-2 text-white"
                                            >

                                                <Pencil size={18} />

                                            </Link>

                                            <button
                                                onClick={() =>
                                                    deleteBook(book.id)
                                                }
                                                className="rounded-lg bg-red-600 p-2 text-white"
                                            >

                                                <Trash2 size={18} />

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