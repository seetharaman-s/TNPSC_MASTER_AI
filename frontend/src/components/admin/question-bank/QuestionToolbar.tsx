"use client";

import Link from "next/link";
import { Plus, RefreshCw, Download, Upload } from "lucide-react";

interface Props {
    total: number;
    onRefresh: () => void;
    onExport: () => void;
}

export default function QuestionToolbar({
    total,
    onRefresh,
    onExport,
}: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-5 flex flex-col lg:flex-row justify-between items-center gap-4">

            <div>

                <h2 className="text-2xl font-bold">
                    Question Bank
                </h2>

                <p className="text-gray-500">
                    {total} Questions Available
                </p>

            </div>

            <div className="flex flex-wrap gap-3">

                <button
                    onClick={onRefresh}
                    className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100"
                >
                    <RefreshCw size={18}/>
                    Refresh
                </button>

                <button
                    onClick={onExport}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg"
                >
                    <Download size={18}/>
                    Export
                </button>

                <Link
                    href="/admin/question-bank/import"
                    className="flex items-center gap-2 px-4 py-2 bg-yellow-500 text-white rounded-lg"
                >
                    <Upload size={18}/>
                    Import
                </Link>

                <Link
                    href="/admin/question-bank/create"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                    <Plus size={18}/>
                    New Question
                </Link>

            </div>

        </div>

    );

}