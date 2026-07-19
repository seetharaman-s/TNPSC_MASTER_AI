"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Upload, FileSpreadsheet, Download } from "lucide-react";
import { toast } from "react-hot-toast";
import axios from "@/lib/api";

export default function BulkUploadPage() {

    const [file, setFile] = useState<File | null>(null);

    const [uploading, setUploading] = useState(false);

    const [progress, setProgress] = useState(0);

    async function uploadFile() {

        if (!file) {

            toast.error("Please select a file");

            return;

        }

        const formData = new FormData();

        formData.append("file", file);

        try {

            setUploading(true);

            await axios.post(

                "/questions/bulk-upload",

                formData,

                {

                    headers: {

                        "Content-Type": "multipart/form-data"

                    },

                    onUploadProgress(progressEvent) {

                        const percent = Math.round(

                            (progressEvent.loaded * 100) /

                            (progressEvent.total || 1)

                        );

                        setProgress(percent);

                    }

                }

            );

            toast.success("Questions Uploaded Successfully");

            setFile(null);

            setProgress(0);

        }

        catch {

            toast.error("Upload Failed");

        }

        finally {

            setUploading(false);

        }

    }

    function downloadTemplate() {

        window.open("/templates/question_upload_template.xlsx");

    }

    return (

        <div className="min-h-screen bg-gray-50 p-6">

            <div className="max-w-5xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-8">

                    <div>

                        <h1 className="text-3xl font-bold">

                            Bulk Upload Questions

                        </h1>

                        <p className="text-gray-500 mt-2">

                            Import thousands of TNPSC questions using Excel or CSV.

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

                                {/* Instructions */}

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">

                    <h2 className="text-xl font-bold mb-3">

                        Upload Instructions

                    </h2>

                    <ul className="list-disc ml-6 space-y-2 text-gray-700">

                        <li>Supported formats: XLSX, XLS, CSV</li>

                        <li>Maximum file size: 50 MB</li>

                        <li>Maximum records per upload: 10,000 questions</li>

                        <li>Download the official template before uploading.</li>

                        <li>Each question must contain at least two options.</li>

                        <li>Correct Answer should be the option index (0–3).</li>

                    </ul>

                </div>

                {/* Upload Card */}

                <div className="bg-white rounded-xl shadow p-8">

                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center">

                        <FileSpreadsheet
                            size={70}
                            className="mx-auto text-green-600 mb-4"
                        />

                        <h2 className="text-2xl font-semibold">

                            Drag & Drop Excel File

                        </h2>

                        <p className="text-gray-500 mt-2">

                            or choose a file from your computer

                        </p>

                        <input
                            type="file"
                            accept=".xlsx,.xls,.csv"
                            onChange={(e)=>
                                setFile(
                                    e.target.files?.[0] || null
                                )
                            }
                            className="mt-6"
                        />

                        {file && (

                            <div className="mt-6 bg-gray-100 rounded-lg p-4">

                                <p className="font-semibold">

                                    Selected File

                                </p>

                                <p className="text-blue-600">

                                    {file.name}

                                </p>

                                <p className="text-sm text-gray-500">

                                    {(file.size/1024/1024).toFixed(2)} MB

                                </p>

                            </div>

                        )}

                    </div>

                    {/* Progress */}

                    {uploading && (

                        <div className="mt-8">

                            <div className="flex justify-between">

                                <span>

                                    Upload Progress

                                </span>

                                <span>

                                    {progress}%

                                </span>

                            </div>

                            <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

                                <div
                                    className="bg-green-600 h-3 rounded-full transition-all"
                                    style={{
                                        width:`${progress}%`
                                    }}
                                />

                            </div>

                        </div>

                    )}

                    {/* Actions */}

                    <div className="flex flex-wrap gap-4 mt-8">

                        <button
                            onClick={uploadFile}
                            disabled={!file || uploading}
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 disabled:opacity-50"
                        >

                            <Upload size={18}/>

                            {uploading
                                ? "Uploading..."
                                : "Upload Questions"}

                        </button>

                        <button
                            onClick={downloadTemplate}
                            className="border px-6 py-3 rounded-lg flex items-center gap-2"
                        >

                            <Download size={18}/>

                            Download Template

                        </button>

                    </div>

                </div>

                {/* Upload Statistics */}

                <div className="grid md:grid-cols-4 gap-6 mt-8">

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">

                            Total Records

                        </h3>

                        <p className="text-3xl font-bold mt-3">

                            0

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">

                            Imported

                        </h3>

                        <p className="text-3xl font-bold mt-3 text-green-600">

                            0

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">

                            Failed

                        </h3>

                        <p className="text-3xl font-bold mt-3 text-red-600">

                            0

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow p-6">

                        <h3 className="text-gray-500">

                            Duplicates

                        </h3>

                        <p className="text-3xl font-bold mt-3 text-yellow-600">

                            0

                        </p>

                    </div>

                </div>

                                {/* Import History */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold">

                            Import History

                        </h2>

                        <p className="text-gray-500 mt-1">

                            Recent bulk upload activities

                        </p>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="min-w-full">

                            <thead className="bg-gray-100">

                                <tr>

                                    <th className="text-left p-4">Date</th>

                                    <th className="text-left p-4">Filename</th>

                                    <th className="text-left p-4">Records</th>

                                    <th className="text-left p-4">Success</th>

                                    <th className="text-left p-4">Failed</th>

                                    <th className="text-left p-4">Status</th>

                                    <th className="text-left p-4">Actions</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td
                                        colSpan={7}
                                        className="text-center py-12 text-gray-500"
                                    >

                                        No import history available.

                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

                {/* Failed Records */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold text-red-600">

                            Failed Records

                        </h2>

                        <p className="text-gray-500">

                            Validation errors will appear here.

                        </p>

                    </div>

                    <div className="p-10 text-center text-gray-500">

                        No validation errors.

                    </div>

                </div>

                {/* Duplicate Questions */}

                <div className="bg-white rounded-xl shadow mt-8">

                    <div className="p-6 border-b">

                        <h2 className="text-2xl font-bold text-yellow-600">

                            Duplicate Detection

                        </h2>

                        <p className="text-gray-500">

                            Duplicate questions detected during upload.

                        </p>

                    </div>

                    <div className="p-10 text-center text-gray-500">

                        No duplicate questions found.

                    </div>

                </div>

                {/* Upload Summary */}

                <div className="bg-green-50 border border-green-200 rounded-xl p-6 mt-8">

                    <h2 className="text-2xl font-bold text-green-700">

                        Upload Summary

                    </h2>

                    <ul className="list-disc ml-6 mt-4 space-y-2">

                        <li>Questions Imported Successfully</li>

                        <li>Duplicate Questions Skipped</li>

                        <li>Validation Report Generated</li>

                        <li>Import History Updated</li>

                    </ul>

                </div>

            </div>

        </div>

    );

}