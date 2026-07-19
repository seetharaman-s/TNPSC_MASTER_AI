"use client";

import {
    BookOpen,
    FileText,
    ClipboardList,
    Newspaper,
} from "lucide-react";

interface DashboardSummary {
    books: number;
    notes: number;
    quizzes: number;
    current_affairs: number;
}

interface StatsCardsProps {
    summary: DashboardSummary;
}

export default function StatsCards({
    summary,
}: StatsCardsProps) {

    const cards = [
        {
            title: "Books",
            value: summary.books,
            icon: BookOpen,
            color: "bg-blue-500",
            bg: "bg-blue-50",
            text: "text-blue-700",
        },
        {
            title: "Notes",
            value: summary.notes,
            icon: FileText,
            color: "bg-green-500",
            bg: "bg-green-50",
            text: "text-green-700",
        },
        {
            title: "Quizzes",
            value: summary.quizzes,
            icon: ClipboardList,
            color: "bg-purple-500",
            bg: "bg-purple-50",
            text: "text-purple-700",
        },
        {
            title: "Current Affairs",
            value: summary.current_affairs,
            icon: Newspaper,
            color: "bg-orange-500",
            bg: "bg-orange-50",
            text: "text-orange-700",
        },
    ];

    return (

        <section>

            <h2 className="mb-5 text-2xl font-bold text-gray-800">

                Dashboard Overview

            </h2>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                {cards.map((card) => {

                    const Icon = card.icon;

                    return (

                        <div
                            key={card.title}
                            className="rounded-2xl bg-white shadow-md hover:shadow-xl transition duration-300 p-6"
                        >

                            <div className="flex items-center justify-between">

                                <div>

                                    <p className="text-sm text-gray-500">

                                        {card.title}

                                    </p>

                                    <h3 className="mt-3 text-4xl font-bold text-gray-800">

                                        {card.value}

                                    </h3>

                                </div>

                                <div
                                    className={`${card.bg} rounded-xl p-4`}
                                >

                                    <Icon
                                        size={30}
                                        className={card.text}
                                    />

                                </div>

                            </div>

                            <div className="mt-6">

                                <div className="h-2 w-full rounded-full bg-gray-200">

                                    <div
                                        className={`${card.color} h-2 rounded-full`}
                                        style={{
                                            width: `${Math.min(
                                                card.value,
                                                100
                                            )}%`,
                                        }}
                                    />

                                </div>

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}