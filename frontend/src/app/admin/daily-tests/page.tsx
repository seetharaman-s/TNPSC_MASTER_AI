"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
    Plus,
    Eye,
    Pencil,
    Trash2,
    Search,
    CalendarDays,
    Clock,
    CheckCircle2,
    XCircle,
    ClipboardList,
} from "lucide-react";

import { DailyTestService } from "@/services/dailyTestService";

interface DailyTest {
    id: number;
    title: string;
    subject: string;
    test_type: string;
    difficulty: string;
    total_questions: number;
    duration: number;
    scheduled_at: string;
    is_published: boolean;
}

export default function DailyTestsPage() {

    const [tests, setTests] = useState<DailyTest[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        loadTests();
    }, []);

    async function loadTests() {

        try {

            setLoading(true);

            const response = await DailyTestService.getAll();

            setTests(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function deleteTest(id: number) {

        if (!confirm("Delete this test?")) return;

        try {

            await DailyTestService.delete(id);

            loadTests();

        } catch (error) {

            console.error(error);

        }

    }

    const filtered = useMemo(() => {

        return tests.filter(test => {

            const matchesSearch =
                test.title
                    .toLowerCase()
                    .includes(search.toLowerCase());

            const matchesFilter =
                filter === "All" ||
                test.test_type === filter;

            return matchesSearch && matchesFilter;

        });

    }, [tests, search, filter]);

    return (

        <main className="max-w-7xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Daily Test Management

                    </h1>

                    <p className="text-gray-500">

                        Manage TNPSC Practice Tests

                    </p>

                </div>

                <Link
                    href="/admin/daily-tests/create"
                    className="bg-blue-600 text-white rounded-xl px-5 py-3 flex items-center gap-2"
                >

                    <Plus size={18} />

                    Create Test

                </Link>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">

                <div className="relative">

                    <Search
                        className="absolute left-3 top-4 text-gray-400"
                        size={18}
                    />

                    <input
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                        placeholder="Search tests..."
                        className="w-full border rounded-xl py-3 pl-10"
                    />

                </div>

                <select
                    value={filter}
                    onChange={(e)=>setFilter(e.target.value)}
                    className="border rounded-xl px-4"
                >

                    <option>All</option>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Unit Test</option>
                    <option>Grand Test</option>

                </select>

            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-lg">

                <table className="w-full">

                    <thead className="bg-gray-100">

                        <tr>

                            <th className="text-left p-4">

                                Test

                            </th>

                            <th>

                                Subject

                            </th>

                            <th>

                                Type

                            </th>

                            <th>

                                Questions

                            </th>

                            <th>

                                Duration

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
                                    colSpan={7}
                                    className="text-center py-10"
                                >

                                    Loading...

                                </td>

                            </tr>

                        ) : filtered.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={7}
                                    className="text-center py-10"
                                >

                                    No Tests Found

                                </td>

                            </tr>

                        ) : (

                            filtered.map(test => (

                                <tr
                                    key={test.id}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="p-4">

                                        <div className="flex items-center gap-3">

                                            <ClipboardList
                                                size={18}
                                            />

                                            {test.title}

                                        </div>

                                    </td>

                                    <td>

                                        {test.subject}

                                    </td>

                                    <td>

                                        {test.test_type}

                                    </td>

                                    <td>

                                        {test.total_questions}

                                    </td>

                                    <td>

                                        <div className="flex items-center gap-2">

                                            <Clock size={16} />

                                            {test.duration} min

                                        </div>

                                    </td>

                                    <td>

                                        {test.is_published ? (

                                            <span className="flex items-center justify-center gap-2 text-green-600">

                                                <CheckCircle2 size={18}/>

                                                Published

                                            </span>

                                        ) : (

                                            <span className="flex items-center justify-center gap-2 text-red-600">

                                                <XCircle size={18}/>

                                                Draft

                                            </span>

                                        )}

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-2">

                                            <Link
                                                href={`/admin/daily-tests/${test.id}`}
                                                className="bg-sky-500 text-white rounded-lg p-2"
                                            >

                                                <Eye size={18}/>

                                            </Link>

                                            <Link
                                                href={`/admin/daily-tests/edit/${test.id}`}
                                                className="bg-green-600 text-white rounded-lg p-2"
                                            >

                                                <Pencil size={18}/>

                                            </Link>

                                            <button
                                                onClick={() =>
                                                    deleteTest(test.id)
                                                }
                                                className="bg-red-600 text-white rounded-lg p-2"
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