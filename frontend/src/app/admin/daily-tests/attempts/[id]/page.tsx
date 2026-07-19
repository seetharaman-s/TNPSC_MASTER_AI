"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    ArrowLeft,
    Printer,
    FileDown,
    User,
    Clock,
    Trophy,
    CheckCircle2,
    XCircle,
    Brain,
    Target,
    BookOpen,
    Award,
} from "lucide-react";

import { DailyTestAttemptService } from "@/services/dailyTestAttemptService";

interface QuestionReview {
    question: string;
    options: string[];
    selected_answer: number;
    correct_answer: number;
    explanation: string;
    marks_awarded: number;
    max_marks: number;
}

interface PerformanceInsight {
    weak_topics: string[];
    strong_topics: string[];
    recommendations: string[];
    estimated_rank: string;
}

interface AttemptDetails {
    id: number;
    student_name: string;
    email: string;
    test_title: string;
    subject: string;
    score: number;
    total_marks: number;
    percentage: number;
    passed: boolean;
    time_taken: number;
    submitted_at: string;
    questions: QuestionReview[];
    insights: PerformanceInsight;
}

export default function AttemptReviewPage() {

    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [attempt, setAttempt] =
        useState<AttemptDetails | null>(null);

    useEffect(() => {
        loadAttempt();
    }, []);

    async function loadAttempt() {

        try {

            const response =
                await DailyTestAttemptService.getById(Number(id));

            setAttempt(response.data);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    if (loading)
        return (
            <div className="flex h-screen items-center justify-center">
                Loading...
            </div>
        );

    if (!attempt)
        return (
            <div className="flex h-screen items-center justify-center">
                Attempt Not Found
            </div>
        );

    return (

        <main className="max-w-7xl mx-auto p-8">

            {/* Header */}

            <div className="flex justify-between items-center mb-8">

                <Link
                    href="/admin/daily-tests/attempts"
                    className="border rounded-lg px-4 py-2 flex gap-2 items-center"
                >
                    <ArrowLeft size={18}/>
                    Back
                </Link>

                <div className="flex gap-3">

                    <button
                        onClick={()=>window.print()}
                        className="bg-gray-700 text-white px-4 py-2 rounded-lg flex gap-2"
                    >
                        <Printer size={18}/>
                        Print
                    </button>

                    <button
                        className="bg-red-600 text-white px-4 py-2 rounded-lg flex gap-2"
                    >
                        <FileDown size={18}/>
                        PDF
                    </button>

                </div>

            </div>

            {/* Student Summary */}

            <div className="bg-white rounded-2xl shadow-lg p-8">

                <h1 className="text-3xl font-bold">

                    {attempt.student_name}

                </h1>

                <p className="text-gray-500">

                    {attempt.email}

                </p>

                <div className="grid md:grid-cols-5 gap-5 mt-8">

                    <Stat
                        icon={<User size={20}/>}
                        title="Test"
                        value={attempt.test_title}
                    />

                    <Stat
                        icon={<Award size={20}/>}
                        title="Score"
                        value={`${attempt.score}/${attempt.total_marks}`}
                    />

                    <Stat
                        icon={<Trophy size={20}/>}
                        title="Percentage"
                        value={`${attempt.percentage}%`}
                    />

                    <Stat
                        icon={<Clock size={20}/>}
                        title="Time"
                        value={`${attempt.time_taken} min`}
                    />

                    <Stat
                        icon={
                            attempt.passed
                                ? <CheckCircle2 size={20}/>
                                : <XCircle size={20}/>
                        }
                        title="Status"
                        value={
                            attempt.passed
                                ? "PASS"
                                : "FAIL"
                        }
                    />

                </div>

            </div>

            {/* AI Insights */}

            <section className="bg-white rounded-2xl shadow-lg p-8 mt-8">

                <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">

                    <Brain/>

                    AI Performance Insights

                </h2>

                <div className="grid md:grid-cols-3 gap-6">

                    <InsightCard
                        title="Weak Topics"
                        items={attempt.insights.weak_topics}
                        color="red"
                    />

                    <InsightCard
                        title="Strong Topics"
                        items={attempt.insights.strong_topics}
                        color="green"
                    />

                    <InsightCard
                        title="Recommendations"
                        items={attempt.insights.recommendations}
                        color="blue"
                    />

                </div>

            </section>

            {/* Question Review */}

            <section className="mt-8 space-y-6">

                {attempt.questions.map((q,index)=>(

                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg p-6"
                    >

                        <h2 className="font-bold text-lg">

                            Question {index+1}

                        </h2>

                        <p className="mt-4">

                            {q.question}

                        </p>

                        <div className="grid md:grid-cols-2 gap-4 mt-6">

                            {q.options.map((option,i)=>(

                                <div
                                    key={i}
                                    className={`border rounded-lg p-4
                                    ${
                                        i===q.correct_answer
                                            ? "bg-green-100 border-green-500"
                                            : i===q.selected_answer
                                            ? "bg-red-100 border-red-500"
                                            : ""
                                    }`}
                                >

                                    <strong>

                                        {String.fromCharCode(65+i)}

                                    </strong>

                                    {" "}

                                    {option}

                                </div>

                            ))}

                        </div>

                        <div className="bg-blue-50 rounded-lg p-4 mt-5">

                            <h3 className="font-semibold">

                                Explanation

                            </h3>

                            <p className="mt-2">

                                {q.explanation}

                            </p>

                        </div>

                    </div>

                ))}

            </section>

        </main>

    );

}

function Stat({
    icon,
    title,
    value,
}:{
    icon:React.ReactNode;
    title:string;
    value:string;
}){

    return(
        <div className="border rounded-xl p-5">
            <div className="flex gap-2 text-blue-600">
                {icon}
                <span>{title}</span>
            </div>
            <div className="font-bold text-xl mt-3">
                {value}
            </div>
        </div>
    );

}

function InsightCard({
    title,
    items,
    color,
}:{
    title:string;
    items:string[];
    color:string;
}){

    return(

        <div className="border rounded-xl p-5">

            <h3 className="font-semibold mb-4">

                {title}

            </h3>

            <ul className="space-y-2">

                {items.map((item,index)=>(
                    <li
                        key={index}
                        className="flex gap-2"
                    >
                        • {item}
                    </li>
                ))}

            </ul>

        </div>

    );

}