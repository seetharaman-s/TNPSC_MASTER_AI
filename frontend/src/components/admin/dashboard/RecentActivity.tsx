"use client";

import {
    BookOpen,
    FileText,
    ClipboardList,
    Newspaper,
} from "lucide-react";

interface Book {
    id: number;
    title: string;
}

interface Note {
    id: number;
    title: string;
}

interface Quiz {
    id: number;
    title: string;
}

interface CurrentAffair {
    id: number;
    title: string;
}

interface RecentActivityProps {
    books: Book[];
    notes: Note[];
    quizzes: Quiz[];
    currentAffairs: CurrentAffair[];
}

export default function RecentActivity({
    books,
    notes,
    quizzes,
    currentAffairs,
}: RecentActivityProps) {

    const sections = [
        {
            title: "Recent Books",
            icon: BookOpen,
            color: "text-blue-600",
            bg: "bg-blue-50",
            items: books,
        },
        {
            title: "Recent Notes",
            icon: FileText,
            color: "text-green-600",
            bg: "bg-green-50",
            items: notes,
        },
        {
            title: "Recent Quizzes",
            icon: ClipboardList,
            color: "text-purple-600",
            bg: "bg-purple-50",
            items: quizzes,
        },
        {
            title: "Current Affairs",
            icon: Newspaper,
            color: "text-orange-600",
            bg: "bg-orange-50",
            items: currentAffairs,
        },
    ];

    return (

        <section>

            <h2 className="mb-6 text-2xl font-bold text-gray-800">

                Recent Activity

            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {sections.map((section) => {

                    const Icon = section.icon;

                    return (

                        <div
                            key={section.title}
                            className="rounded-2xl bg-white shadow-lg"
                        >

                            <div
                                className={`flex items-center gap-3 p-5 border-b ${section.bg}`}
                            >

                                <Icon
                                    className={section.color}
                                    size={24}
                                />

                                <h3 className="text-lg font-semibold">

                                    {section.title}

                                </h3>

                            </div>

                            <div className="divide-y">

                                {section.items.length > 0 ? (

                                    section.items.map((item) => (

                                        <div
                                            key={item.id}
                                            className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
                                        >

                                            <div>

                                                <p className="font-medium text-gray-800">

                                                    {item.title}

                                                </p>

                                                <p className="text-sm text-gray-500">

                                                    ID: {item.id}

                                                </p>

                                            </div>

                                            <button
                                                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
                                            >

                                                View

                                            </button>

                                        </div>

                                    ))

                                ) : (

                                    <div className="p-6 text-center text-gray-500">

                                        No data available

                                    </div>

                                )}

                            </div>

                        </div>

                    );

                })}

            </div>

        </section>

    );

}