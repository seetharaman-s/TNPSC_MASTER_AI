"use client";

import { BookOpen, CheckCircle2, Globe, FileText } from "lucide-react";

interface Props {

    total: number;

    verified: number;

    published: number;

    draft: number;

}

export default function QuestionStats({

    total,

    verified,

    published,

    draft,

}: Props) {

    const cards = [

        {
            title: "Total Questions",
            value: total,
            icon: BookOpen,
        },

        {
            title: "Verified",
            value: verified,
            icon: CheckCircle2,
        },

        {
            title: "Published",
            value: published,
            icon: Globe,
        },

        {
            title: "Draft",
            value: draft,
            icon: FileText,
        },

    ];

    return (

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {cards.map((card) => {

                const Icon = card.icon;

                return (

                    <div
                        key={card.title}
                        className="bg-white rounded-xl shadow p-6"
                    >

                        <div className="flex justify-between items-center">

                            <div>

                                <p className="text-gray-500">

                                    {card.title}

                                </p>

                                <h2 className="text-3xl font-bold mt-2">

                                    {card.value}

                                </h2>

                            </div>

                            <Icon className="w-10 h-10 text-blue-600" />

                        </div>

                    </div>

                );

            })}

        </div>

    );

}