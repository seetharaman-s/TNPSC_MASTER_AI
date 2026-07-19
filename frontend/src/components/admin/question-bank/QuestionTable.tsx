"use client";

import Link from "next/link";
import {
    Eye,
    Pencil,
    Trash2,
    Copy,
    CheckCircle2,
    Globe,
} from "lucide-react";

import StatusBadge from "./StatusBadge";
import { Question } from "@/types/question";

interface Props {
    questions: Question[];
    selectedIds: number[];
    onSelect: (id: number) => void;
    onSelectAll: () => void;
    onDelete: (id: number) => void;
    onDuplicate: (id: number) => void;
    onVerify: (id: number) => void;
    onPublish: (id: number) => void;
}

export default function QuestionTable({
    questions,
    selectedIds,
    onSelect,
    onSelectAll,
    onDelete,
    onDuplicate,
    onVerify,
    onPublish,
}: Props) {

    const allSelected =
        questions.length > 0 &&
        selectedIds.length === questions.length;

    return (
        <div className="bg-white rounded-xl shadow overflow-x-auto">

            <table className="min-w-full">

                <thead className="bg-gray-100">

                    <tr>

                        <th className="p-4">

                            <input
                                type="checkbox"
                                checked={allSelected}
                                onChange={onSelectAll}
                            />

                        </th>

                        <th className="text-left p-4">Question</th>

                        <th className="text-left p-4">Subject</th>

                        <th className="text-left p-4">Difficulty</th>

                        <th className="text-left p-4">Language</th>

                        <th className="text-left p-4">Status</th>

                        <th className="text-left p-4">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {questions.map((question) => (

                        <tr
                            key={question.id}
                            className="border-t hover:bg-gray-50"
                        >

                            <td className="p-4">

                                <input
                                    type="checkbox"
                                    checked={selectedIds.includes(question.id)}
                                    onChange={() =>
                                        onSelect(question.id)
                                    }
                                />

                            </td>

                            <td className="p-4">

                                <div className="font-medium">

                                    {question.question}

                                </div>

                                <div className="text-xs text-gray-500">

                                    {question.topic}

                                </div>

                            </td>

                            <td className="p-4">

                                {question.subject}

                            </td>

                            <td className="p-4">

                                <span
                                    className={`px-2 py-1 rounded text-xs
                                    ${
                                        question.difficulty === "Easy"
                                            ? "bg-green-100 text-green-700"
                                            : question.difficulty === "Medium"
                                            ? "bg-yellow-100 text-yellow-700"
                                            : question.difficulty === "Hard"
                                            ? "bg-orange-100 text-orange-700"
                                            : "bg-red-100 text-red-700"
                                    }`}
                                >
                                    {question.difficulty}
                                </span>

                            </td>

                            <td className="p-4">

                                {question.language}

                            </td>

                            <td className="p-4">

                                <StatusBadge
                                    verified={question.is_verified}
                                    published={question.is_published}
                                />

                            </td>

                            <td className="p-4">

                                <div className="flex gap-2">

                                    <Link
                                        href={`/admin/question-bank/${question.id}`}
                                    >
                                        <Eye
                                            size={18}
                                            className="text-blue-600 cursor-pointer"
                                        />
                                    </Link>

                                    <Link
                                        href={`/admin/question-bank/edit/${question.id}`}
                                    >
                                        <Pencil
                                            size={18}
                                            className="text-green-600 cursor-pointer"
                                        />
                                    </Link>

                                    <Copy
                                        size={18}
                                        className="text-yellow-600 cursor-pointer"
                                        onClick={() =>
                                            onDuplicate(question.id)
                                        }
                                    />

                                    <CheckCircle2
                                        size={18}
                                        className="text-emerald-600 cursor-pointer"
                                        onClick={() =>
                                            onVerify(question.id)
                                        }
                                    />

                                    <Globe
                                        size={18}
                                        className="text-indigo-600 cursor-pointer"
                                        onClick={() =>
                                            onPublish(question.id)
                                        }
                                    />

                                    <Trash2
                                        size={18}
                                        className="text-red-600 cursor-pointer"
                                        onClick={() =>
                                            onDelete(question.id)
                                        }
                                    />

                                </div>

                            </td>

                        </tr>

                    ))}

                    {questions.length === 0 && (

                        <tr>

                            <td
                                colSpan={7}
                                className="text-center py-16 text-gray-500"
                            >

                                No Questions Found

                            </td>

                        </tr>

                    )}

                </tbody>

            </table>

        </div>
    );
}