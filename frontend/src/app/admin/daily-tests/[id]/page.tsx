"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    ArrowLeft,
    Pencil,
    Trash2,
    Copy,
    Printer,
    Clock,
    CalendarDays,
    Target,
    CheckCircle2,
    ClipboardList,
    BarChart3,
} from "lucide-react";

import { DailyTestService } from "@/services/dailyTestService";

interface Question {
    question: string;
    options: string[];
    correct_answer: number;
    explanation: string;
    marks: number;
}

interface TestStatistics {
    total_attempts: number;
    average_score: number;
    highest_score: number;
    pass_rate: number;
}

interface DailyTest {
    id: number;
    title: string;
    description: string;
    subject: string;
    unit: string;
    test_type: string;
    difficulty: string;
    duration: number;
    total_marks: number;
    negative_mark: number;
    start_time: string;
    end_time: string;
    is_published: boolean;
    questions: Question[];
    statistics?: TestStatistics;
}

export default function DailyTestDetailsPage() {

    const { id } = useParams();
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [test, setTest] = useState<DailyTest | null>(null);

    useEffect(() => {
        loadTest();
    }, []);

    async function loadTest() {

        try {

            const response =
                await DailyTestService.getById(Number(id));

            setTest(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    async function deleteTest() {

        if (!test) return;

        if (!confirm("Delete this test?")) return;

        try {

            await DailyTestService.delete(test.id);

            router.push("/admin/daily-tests");

        } catch (error) {

            console.error(error);

        }

    }

    async function duplicateTest() {

        if (!test) return;

        try {

            await DailyTestService.duplicate(test.id);

            alert("Test duplicated successfully.");

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

    if (!test) {

        return (
            <div className="flex h-screen items-center justify-center">
                Test not found.
            </div>
        );

    }

    return (

        <main className="max-w-7xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <Link
                    href="/admin/daily-tests"
                    className="border rounded-lg px-4 py-2 flex items-center gap-2"
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

                    <button
                        onClick={duplicateTest}
                        className="bg-indigo-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <Copy size={18}/>
                        Duplicate
                    </button>

                    <Link
                        href={`/admin/daily-tests/edit/${test.id}`}
                        className="bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <Pencil size={18}/>
                        Edit
                    </Link>

                    <button
                        onClick={deleteTest}
                        className="bg-red-600 text-white rounded-lg px-4 py-2 flex items-center gap-2"
                    >
                        <Trash2 size={18}/>
                        Delete
                    </button>

                </div>

            </div>

            {/* Test Header */}

            <div className="bg-white rounded-2xl shadow-lg p-8">

                <h1 className="text-4xl font-bold">

                    {test.title}

                </h1>

                <p className="mt-3 text-gray-600">

                    {test.description}

                </p>

                <div className="grid md:grid-cols-4 gap-5 mt-8">

                    <StatCard
                        icon={<ClipboardList size={20}/>}
                        title="Questions"
                        value={String(test.questions.length)}
                    />

                    <StatCard
                        icon={<Clock size={20}/>}
                        title="Duration"
                        value={`${test.duration} min`}
                    />

                    <StatCard
                        icon={<Target size={20}/>}
                        title="Marks"
                        value={`${test.total_marks}`}
                    />

                    <StatCard
                        icon={<CalendarDays size={20}/>}
                        title="Type"
                        value={test.test_type}
                    />

                </div>

            </div>

            {/* Statistics */}

            {test.statistics && (

                <div className="bg-white rounded-2xl shadow-lg p-8 mt-8">

                    <h2 className="text-2xl font-bold mb-6">

                        Performance Statistics

                    </h2>

                    <div className="grid md:grid-cols-4 gap-6">

                        <StatCard
                            icon={<BarChart3 size={20}/>}
                            title="Attempts"
                            value={String(test.statistics.total_attempts)}
                        />

                        <StatCard
                            icon={<Target size={20}/>}
                            title="Average"
                            value={`${test.statistics.average_score}%`}
                        />

                        <StatCard
                            icon={<CheckCircle2 size={20}/>}
                            title="Highest"
                            value={`${test.statistics.highest_score}%`}
                        />

                        <StatCard
                            icon={<CheckCircle2 size={20}/>}
                            title="Pass Rate"
                            value={`${test.statistics.pass_rate}%`}
                        />

                    </div>

                </div>

            )}

            {/* Questions */}

            <section className="mt-10 space-y-8">

                {test.questions.map((question, index) => (

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6"
                    >

                        <h2 className="font-bold text-lg mb-5">

                            Question {index + 1}

                        </h2>

                        <p className="mb-6">

                            {question.question}

                        </p>

                        <div className="grid md:grid-cols-2 gap-4">

                            {question.options.map((option, i) => (

                                <div
                                    key={i}
                                    className={`border rounded-lg p-4 ${
                                        i === question.correct_answer
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

                            <strong>

                                Explanation

                            </strong>

                            <p className="mt-2">

                                {question.explanation}

                            </p>

                        </div>

                    </div>

                ))}

            </section>

        </main>

    );

}

function StatCard({

    icon,
    title,
    value,

}: {

    icon: React.ReactNode;

    title: string;

    value: string;

}) {

    return (

        <div className="border rounded-xl p-5">

            <div className="flex items-center gap-2 text-blue-600">

                {icon}

                <span className="font-semibold">

                    {title}

                </span>

            </div>

            <div className="text-2xl font-bold mt-3">

                {value}

            </div>

        </div>

    );

}