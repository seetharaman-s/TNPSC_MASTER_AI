"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
    Plus,
    Pencil,
    Trash2,
    Eye,
    Search,
    ClipboardList,
} from "lucide-react";

import { QuizService } from "@/services/quizService";

interface Quiz {
    id: number;
    title: string;
    subject: string;
    difficulty: string;
    total_questions: number;
    duration: number;
    is_featured: boolean;
}

export default function QuizPage() {

    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadQuizzes();
    }, []);

    async function loadQuizzes() {

        try {

            setLoading(true);

            const response = await QuizService.getAll();

            setQuizzes(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function deleteQuiz(id: number) {

        if (!confirm("Delete this quiz?")) return;

        try {

            await QuizService.delete(id);

            loadQuizzes();

        } catch (error) {

            console.error(error);

        }

    }

    const filtered = quizzes.filter((quiz) =>
        quiz.title.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <main className="max-w-7xl mx-auto p-6">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Quiz Management

                    </h1>

                    <p className="text-gray-500">

                        Manage TNPSC Quiz Tests

                    </p>

                </div>

                <Link
                    href="/admin/quizzes/create"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
                >

                    <Plus size={18} />

                    Create Quiz

                </Link>

            </div>

            <div className="relative mb-6">

                <Search
                    size={18}
                    className="absolute left-4 top-4 text-gray-400"
                />

                <input
                    type="text"
                    placeholder="Search quiz..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                    className="w-full rounded-xl border pl-10 pr-4 py-3"
                />

            </div>

            <div className="overflow-x-auto rounded-2xl bg-white shadow">

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

                                Difficulty

                            </th>

                            <th>

                                Questions

                            </th>

                            <th>

                                Duration

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
                                    className="p-8 text-center"
                                >

                                    Loading...

                                </td>

                            </tr>

                        ) : filtered.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={6}
                                    className="p-8 text-center"
                                >

                                    No Quiz Found

                                </td>

                            </tr>

                        ) : (

                            filtered.map((quiz)=>(

                                <tr
                                    key={quiz.id}
                                    className="border-t hover:bg-gray-50"
                                >

                                    <td className="p-4">

                                        <div className="flex items-center gap-2">

                                            <ClipboardList
                                                size={20}
                                                className="text-purple-600"
                                            />

                                            {quiz.title}

                                        </div>

                                    </td>

                                    <td className="text-center">

                                        {quiz.subject}

                                    </td>

                                    <td className="text-center">

                                        {quiz.difficulty}

                                    </td>

                                    <td className="text-center">

                                        {quiz.total_questions}

                                    </td>

                                    <td className="text-center">

                                        {quiz.duration} min

                                    </td>

                                    <td>

                                        <div className="flex justify-center gap-2">

                                            <Link
                                                href={`/admin/quizzes/${quiz.id}`}
                                                className="rounded-lg bg-sky-500 p-2 text-white"
                                            >

                                                <Eye size={18}/>

                                            </Link>

                                            <Link
                                                href={`/admin/quizzes/edit/${quiz.id}`}
                                                className="rounded-lg bg-green-600 p-2 text-white"
                                            >

                                                <Pencil size={18}/>

                                            </Link>

                                            <button
                                                onClick={()=>deleteQuiz(quiz.id)}
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