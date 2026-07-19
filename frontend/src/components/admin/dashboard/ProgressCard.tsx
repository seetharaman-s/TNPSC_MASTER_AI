"use client";

import {
    BookOpen,
    FileText,
    Trophy,
    TrendingUp,
} from "lucide-react";

interface Progress {
    completed_books: number;
    completed_notes: number;
    overall_progress: number;
}

interface ProgressCardProps {
    progress: Progress;
}

export default function ProgressCard({
    progress,
}: ProgressCardProps) {

    const items = [
        {
            title: "Books Completed",
            value: progress.completed_books,
            max: 100,
            icon: BookOpen,
            color: "bg-blue-500",
            text: "text-blue-600",
        },
        {
            title: "Notes Completed",
            value: progress.completed_notes,
            max: 100,
            icon: FileText,
            color: "bg-green-500",
            text: "text-green-600",
        },
        {
            title: "Overall Progress",
            value: progress.overall_progress,
            max: 100,
            icon: TrendingUp,
            color: "bg-purple-500",
            text: "text-purple-600",
        },
    ];

    return (

        <section className="rounded-2xl bg-white shadow-lg p-6">

            <div className="flex items-center gap-3 mb-6">

                <Trophy
                    className="text-yellow-500"
                    size={30}
                />

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">

                        Study Progress

                    </h2>

                    <p className="text-gray-500">

                        Track your daily learning progress

                    </p>

                </div>

            </div>

            <div className="space-y-8">

                {items.map((item) => {

                    const Icon = item.icon;

                    const percentage = Math.min(
                        Math.round(
                            (item.value / item.max) * 100
                        ),
                        100
                    );

                    return (

                        <div key={item.title}>

                            <div className="flex justify-between items-center mb-2">

                                <div className="flex items-center gap-3">

                                    <Icon
                                        className={item.text}
                                        size={22}
                                    />

                                    <span className="font-medium text-gray-700">

                                        {item.title}

                                    </span>

                                </div>

                                <span className="font-bold text-gray-800">

                                    {percentage}%

                                </span>

                            </div>

                            <div className="h-3 rounded-full bg-gray-200 overflow-hidden">

                                <div
                                    className={`${item.color} h-3 rounded-full transition-all duration-700`}
                                    style={{
                                        width: `${percentage}%`,
                                    }}
                                />

                            </div>

                            <div className="mt-2 text-sm text-gray-500">

                                {item.value} / {item.max}

                            </div>

                        </div>

                    );

                })}

            </div>

            <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">

                <h3 className="text-lg font-semibold">

                    🎯 Keep Going!

                </h3>

                <p className="mt-2 text-sm opacity-90">

                    Consistent daily study helps improve your TNPSC
                    preparation. Try to complete at least one book,
                    one note, and one quiz every day.

                </p>

            </div>

        </section>

    );

}