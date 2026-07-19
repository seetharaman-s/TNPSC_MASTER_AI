"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
    Plus,
    Pencil,
    Trash2,
    Eye,
    Search,
    Newspaper,
    Star,
    Calendar,
} from "lucide-react";

import { CurrentAffairsService } from "@/services/currentAffairsService";

interface CurrentAffair {
    id: number;
    title: string;
    category: string;
    language: string;
    published_date: string;
    is_featured: boolean;
    is_published: boolean;
}

export default function CurrentAffairsPage() {

    const [articles, setArticles] = useState<CurrentAffair[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

    useEffect(() => {
        loadArticles();
    }, []);

    async function loadArticles() {

        try {

            setLoading(true);

            const response = await CurrentAffairsService.getAll();

            setArticles(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function deleteArticle(id: number) {

        if (!confirm("Delete this article?")) return;

        try {

            await CurrentAffairsService.delete(id);

            loadArticles();

        } catch (error) {

            console.error(error);

        }

    }

    const categories = useMemo(() => {

        return [
            "All",
            ...new Set(
                articles.map(item => item.category)
            ),
        ];

    }, [articles]);

    const filtered = articles.filter(item => {

        const matchesSearch =
            item.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            category === "All" ||
            item.category === category;

        return matchesSearch && matchesCategory;

    });

    return (

        <main className="max-w-7xl mx-auto p-8">

            <div className="flex items-center justify-between mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Current Affairs

                    </h1>

                    <p className="text-gray-500">

                        Daily TNPSC Current Affairs

                    </p>

                </div>

                <Link
                    href="/admin/current-affairs/create"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white"
                >

                    <Plus size={18} />

                    Add Article

                </Link>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">

                <div className="relative">

                    <Search
                        size={18}
                        className="absolute left-3 top-4 text-gray-400"
                    />

                    <input
                        className="w-full rounded-xl border py-3 pl-10 pr-4"
                        placeholder="Search article..."
                        value={search}
                        onChange={(e) =>
                            setSearch(e.target.value)
                        }
                    />

                </div>

                <select
                    className="rounded-xl border px-4"
                    value={category}
                    onChange={(e) =>
                        setCategory(e.target.value)
                    }
                >

                    {categories.map(cat => (

                        <option key={cat}>

                            {cat}

                        </option>

                    ))}

                </select>

            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="p-4 text-left">

                                Title

                            </th>

                            <th>

                                Category

                            </th>

                            <th>

                                Language

                            </th>

                            <th>

                                Date

                            </th>

                            <th>

                                Status

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
                                    colSpan={6}
                                    className="p-10 text-center"
                                >

                                    Loading...

                                </td>

                            </tr>

                        ) : filtered.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={6}
                                    className="p-10 text-center"
                                >

                                    No Articles Found

                                </td>

                            </tr>

                        ) : (

                            filtered.map(article => (

                                <tr
                                    key={article.id}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="p-4">

                                        <div className="flex items-center gap-2">

                                            <Newspaper
                                                size={18}
                                            />

                                            {article.title}

                                            {article.is_featured && (

                                                <Star
                                                    size={16}
                                                    className="text-yellow-500"
                                                />

                                            )}

                                        </div>

                                    </td>

                                    <td>

                                        {article.category}

                                    </td>

                                    <td>

                                        {article.language}

                                    </td>

                                    <td>

                                        <div className="flex items-center gap-2">

                                            <Calendar size={16} />

                                            {article.published_date}

                                        </div>

                                    </td>

                                    <td>

                                        <span
                                            className={`rounded-full px-3 py-1 text-sm ${
                                                article.is_published
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}
                                        >

                                            {article.is_published
                                                ? "Published"
                                                : "Draft"}

                                        </span>

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-2">

                                            <Link
                                                href={`/admin/current-affairs/${article.id}`}
                                                className="rounded-lg bg-sky-500 p-2 text-white"
                                            >

                                                <Eye size={18} />

                                            </Link>

                                            <Link
                                                href={`/admin/current-affairs/edit/${article.id}`}
                                                className="rounded-lg bg-green-600 p-2 text-white"
                                            >

                                                <Pencil size={18} />

                                            </Link>

                                            <button
                                                onClick={() =>
                                                    deleteArticle(article.id)
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