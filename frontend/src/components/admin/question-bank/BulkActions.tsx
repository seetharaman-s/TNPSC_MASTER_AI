"use client";

import {
    Trash2,
    CheckCircle2,
    Globe,
} from "lucide-react";

interface Props {

    count: number;

    onVerify: () => void;

    onPublish: () => void;

    onDelete: () => void;

}

export default function BulkActions({

    count,

    onVerify,

    onPublish,

    onDelete,

}: Props) {

    if (count === 0) return null;

    return (

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex flex-wrap justify-between items-center">

            <h3 className="font-semibold">

                {count} Question(s) Selected

            </h3>

            <div className="flex gap-3">

                <button
                    onClick={onVerify}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <CheckCircle2 size={18}/>
                    Verify
                </button>

                <button
                    onClick={onPublish}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Globe size={18}/>
                    Publish
                </button>

                <button
                    onClick={onDelete}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                    <Trash2 size={18}/>
                    Delete
                </button>

            </div>

        </div>

    );

}