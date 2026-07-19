"use client";

import { useState } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    Upload,
    FileSpreadsheet,
    CheckCircle,
    AlertTriangle,
    Play,
} from "lucide-react";

export default function ImportWizardPage() {

    const [step, setStep] = useState(1);

    const [file, setFile] = useState<File | null>(null);

    const [previewData, setPreviewData] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    const nextStep = () => {

        if (step < 4)
            setStep(step + 1);

    };

    const previousStep = () => {

        if (step > 1)
            setStep(step - 1);

    };

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-7xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Import Wizard

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Import TNPSC Questions in 4 Easy Steps

                        </p>

                    </div>

                    <Link
                        href="/admin/question-bank"
                        className="flex items-center gap-2 border px-4 py-2 rounded-lg"
                    >

                        <ArrowLeft size={18}/>

                        Back

                    </Link>

                </div>

                {/* Step Indicator */}

                <div className="bg-white rounded-xl shadow p-6 mb-8">

                    <div className="grid grid-cols-4 gap-6">

                        {[
                            "Upload",
                            "Preview",
                            "Validation",
                            "Import"
                        ].map((title,index)=>(

                            <div
                                key={title}
                                className="text-center"
                            >

                                <div
                                    className={`w-12 h-12 rounded-full mx-auto flex items-center justify-center text-white
                                    ${
                                        step>=index+1
                                            ? "bg-blue-600"
                                            : "bg-gray-300"
                                    }`}
                                >

                                    {index+1}

                                </div>

                                <p className="mt-3 font-medium">

                                    {title}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                                {/* Step 1 - Upload */}

                {step === 1 && (

                    <div className="bg-white rounded-xl shadow p-8">

                        <div className="text-center">

                            <FileSpreadsheet
                                size={70}
                                className="mx-auto text-green-600 mb-6"
                            />

                            <h2 className="text-2xl font-bold">

                                Upload Excel File

                            </h2>

                            <p className="text-gray-500 mt-2">

                                Supported formats: XLSX, XLS, CSV

                            </p>

                            <input
                                type="file"
                                accept=".xlsx,.xls,.csv"
                                className="mt-8"
                                onChange={(e)=>{

                                    const selected =
                                        e.target.files?.[0] ?? null;

                                    setFile(selected);

                                    // TODO:
                                    // Upload to backend and fetch preview
                                    // setPreviewData(response.data.preview);

                                }}
                            />

                            {file && (

                                <div className="mt-6 bg-blue-50 rounded-lg p-4">

                                    <p className="font-semibold">

                                        Selected File

                                    </p>

                                    <p>{file.name}</p>

                                    <p className="text-gray-500">

                                        {(file.size/1024/1024).toFixed(2)} MB

                                    </p>

                                </div>

                            )}

                        </div>

                    </div>

                )}

                {/* Step 2 - Preview */}

                {step === 2 && (

                    <div className="bg-white rounded-xl shadow">

                        <div className="p-6 border-b">

                            <h2 className="text-2xl font-bold">

                                Preview Questions

                            </h2>

                            <p className="text-gray-500">

                                Verify the imported records before validation.

                            </p>

                        </div>

                        <div className="overflow-auto">

                            <table className="min-w-full">

                                <thead className="bg-gray-100">

                                    <tr>

                                        <th className="text-left p-4">
                                            Question
                                        </th>

                                        <th className="text-left p-4">
                                            Subject
                                        </th>

                                        <th className="text-left p-4">
                                            Difficulty
                                        </th>

                                        <th className="text-left p-4">
                                            Exam
                                        </th>

                                    </tr>

                                </thead>

                                <tbody>

                                    {previewData.length === 0 ? (

                                        <tr>

                                            <td
                                                colSpan={4}
                                                className="text-center py-10 text-gray-500"
                                            >

                                                No preview available.

                                            </td>

                                        </tr>

                                    ) : (

                                        previewData.map((row,index)=>(

                                            <tr
                                                key={index}
                                                className="border-t"
                                            >

                                                <td className="p-4">

                                                    {row.question}

                                                </td>

                                                <td className="p-4">

                                                    {row.subject}

                                                </td>

                                                <td className="p-4">

                                                    {row.difficulty}

                                                </td>

                                                <td className="p-4">

                                                    {row.exam}

                                                </td>

                                            </tr>

                                        ))

                                    )}

                                </tbody>

                            </table>

                        </div>

                    </div>

                )}

                {/* Step 3 - Validation */}

                {step === 3 && (

                    <div className="bg-white rounded-xl shadow p-8">

                        <div className="flex items-center gap-3 mb-6">

                            <AlertTriangle
                                className="text-yellow-600"
                            />

                            <h2 className="text-2xl font-bold">

                                Validation Result

                            </h2>

                        </div>

                        <div className="space-y-4">

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">

                                ✅ Required columns verified

                            </div>

                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">

                                ✅ Question format valid

                            </div>

                            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">

                                ⚠ Duplicate questions will be skipped

                            </div>

                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">

                                ❌ Invalid rows (if any) will appear here

                            </div>

                        </div>

                    </div>

                )}

                {/* Step 4 - Import */}

                {step === 4 && (

                    <div className="bg-white rounded-xl shadow p-8 text-center">

                        <CheckCircle
                            size={80}
                            className="mx-auto text-green-600 mb-6"
                        />

                        <h2 className="text-3xl font-bold">

                            Ready to Import

                        </h2>

                        <p className="text-gray-500 mt-3">

                            Click below to start importing all validated questions.

                        </p>

                        <button
                            disabled={loading}
                            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 mx-auto"
                        >

                            <Play size={18}/>

                            {loading
                                ? "Importing..."
                                : "Start Import"}

                        </button>

                    </div>

                )}

                                {/* Footer Navigation */}

                <div className="bg-white rounded-xl shadow p-6 mt-8">

                    <div className="flex justify-between">

                        <button
                            onClick={previousStep}
                            disabled={step === 1}
                            className="px-6 py-3 border rounded-lg disabled:opacity-50"
                        >
                            Previous
                        </button>

                        <div className="flex gap-4">

                            {step < 4 ? (

                                <button
                                    onClick={nextStep}
                                    className="bg-blue-600 text-white px-6 py-3 rounded-lg"
                                >
                                    Next
                                </button>

                            ) : (

                                <button
                                    onClick={async () => {

                                        try {

                                            setLoading(true);

                                            /*
                                             * TODO:
                                             * Replace with your API call
                                             *
                                             * await QuestionBankService.importQuestions(file)
                                             */

                                            await new Promise(resolve =>
                                                setTimeout(resolve, 2000)
                                            );

                                            alert("Questions imported successfully!");

                                        } catch {

                                            alert("Import failed.");

                                        } finally {

                                            setLoading(false);

                                        }

                                    }}
                                    disabled={loading}
                                    className="bg-green-600 text-white px-8 py-3 rounded-lg disabled:opacity-50"
                                >

                                    {loading
                                        ? "Importing..."
                                        : "Finish Import"}

                                </button>

                            )}

                        </div>

                    </div>

                </div>

                {/* Import Summary */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Import Summary

                        </h2>

                    </div>

                    <div className="grid md:grid-cols-4 gap-6 p-6">

                        <div className="text-center">

                            <h3 className="text-gray-500">

                                Total Rows

                            </h3>

                            <p className="text-4xl font-bold mt-2">

                                0

                            </p>

                        </div>

                        <div className="text-center">

                            <h3 className="text-gray-500">

                                Imported

                            </h3>

                            <p className="text-4xl font-bold text-green-600 mt-2">

                                0

                            </p>

                        </div>

                        <div className="text-center">

                            <h3 className="text-gray-500">

                                Failed

                            </h3>

                            <p className="text-4xl font-bold text-red-600 mt-2">

                                0

                            </p>

                        </div>

                        <div className="text-center">

                            <h3 className="text-gray-500">

                                Duplicates

                            </h3>

                            <p className="text-4xl font-bold text-yellow-600 mt-2">

                                0

                            </p>

                        </div>

                    </div>

                </div>

                {/* Error Report */}

                <div className="bg-white rounded-xl shadow mt-8 mb-12">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold text-red-600">

                            Error Report

                        </h2>

                    </div>

                    <div className="p-10 text-center">

                        <p className="text-gray-500">

                            No errors found.

                        </p>

                        <button
                            className="mt-6 border px-6 py-3 rounded-lg"
                        >

                            Download Error Report

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}