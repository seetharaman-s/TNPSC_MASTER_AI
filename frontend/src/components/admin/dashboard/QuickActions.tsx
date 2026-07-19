"use client";

import Link from "next/link";
import {
    BookPlus,
    FilePlus2,
    Newspaper,
    ClipboardPlus,
    Users,
    BarChart3,
    Upload,
    Settings,
} from "lucide-react";

interface ActionItem {
    title: string;
    description: string;
    href: string;
    icon: React.ElementType;
    bgColor: string;
    iconColor: string;
}

export default function QuickActions() {

    const actions: ActionItem[] = [
        {
            title: "Add Book",
            description: "Create a new book",
            href: "/admin/books/create",
            icon: BookPlus,
            bgColor: "bg-blue-50",
            iconColor: "text-blue-600",
        },
        {
            title: "Add Note",
            description: "Create study notes",
            href: "/admin/notes/create",
            icon: FilePlus2,
            bgColor: "bg-green-50",
            iconColor: "text-green-600",
        },
        {
            title: "Current Affairs",
            description: "Publish news",
            href: "/admin/current-affairs/create",
            icon: Newspaper,
            bgColor: "bg-orange-50",
            iconColor: "text-orange-600",
        },
        {
            title: "Create Quiz",
            description: "Add MCQ questions",
            href: "/admin/quizzes/create",
            icon: ClipboardPlus,
            bgColor: "bg-purple-50",
            iconColor: "text-purple-600",
        },
        {
            title: "Users",
            description: "Manage users",
            href: "/admin/users",
            icon: Users,
            bgColor: "bg-pink-50",
            iconColor: "text-pink-600",
        },
        {
            title: "Analytics",
            description: "View reports",
            href: "/admin/analytics",
            icon: BarChart3,
            bgColor: "bg-cyan-50",
            iconColor: "text-cyan-600",
        },
        {
            title: "Upload",
            description: "Upload PDF / Image",
            href: "/admin/uploads",
            icon: Upload,
            bgColor: "bg-yellow-50",
            iconColor: "text-yellow-600",
        },
        {
            title: "Settings",
            description: "Application settings",
            href: "/admin/settings",
            icon: Settings,
            bgColor: "bg-gray-100",
            iconColor: "text-gray-700",
        },
    ];

    return (
        <section>

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-2xl font-bold text-gray-800">
                    Quick Actions
                </h2>

                <p className="text-gray-500 text-sm">
                    Frequently used admin shortcuts
                </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-4 gap-5">

                {actions.map((action) => {

                    const Icon = action.icon;

                    return (

                        <Link
                            key={action.title}
                            href={action.href}
                            className="group rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 p-5 border hover:border-blue-300"
                        >

                            <div
                                className={`w-14 h-14 rounded-xl flex items-center justify-center ${action.bgColor}`}
                            >
                                <Icon
                                    className={`${action.iconColor} group-hover:scale-110 transition`}
                                    size={28}
                                />
                            </div>

                            <h3 className="mt-5 text-lg font-semibold text-gray-800">
                                {action.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-500">
                                {action.description}
                            </p>

                        </Link>

                    );

                })}

            </div>

        </section>
    );
}