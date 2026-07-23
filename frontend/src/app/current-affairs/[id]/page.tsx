"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import {
  Calendar,
  ExternalLink,
  FileText,
  ArrowLeft,
  Eye,
} from "lucide-react";

import currentAffairsService from "@/services/currentAffairsService";

export default function CurrentAffairDetailsPage() {
  const { id } = useParams();

  const [affair, setAffair] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadCurrentAffair();
    }
  }, [id]);

  async function loadCurrentAffair() {
    try {
      const response = await currentAffairsService.getById(Number(id));

      setAffair(response);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!affair) {
    return (
      <div className="py-20 text-center">
        Current Affair Not Found
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      <Link
        href="/current-affairs"
        className="inline-flex items-center gap-2 text-blue-600"
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      {affair.image_url && (
        <img
          src={affair.image_url}
          alt={affair.title}
          className="rounded-2xl w-full max-h-[450px] object-cover"
        />
      )}

      <div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {affair.category}
        </span>

        <h1 className="text-4xl font-bold mt-4">
          {affair.title}
        </h1>

      </div>

      <div className="flex flex-wrap gap-5 text-gray-500">

        <div className="flex items-center gap-2">
          <Calendar size={18} />
           {new Date(affair.publish_date).toLocaleDateString()}
        </div>

        <div className="flex items-center gap-2">
          <Eye size={18} />
          {affair.views} Views
        </div>

      </div>

      <article className="prose prose-lg max-w-none whitespace-pre-line">
        {affair.content}
      </article>

      {affair.pdf_url && (
        <a
          href={affair.pdf_url}
          target="_blank"
          className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-3 rounded-xl"
        >
          <FileText size={18} />
          Open PDF
        </a>
      )}

      {affair.source && (
        <a
          href={affair.source}
          target="_blank"
          className="inline-flex items-center gap-2 ml-4 bg-green-600 text-white px-5 py-3 rounded-xl"
        >
          <ExternalLink size={18} />
          Source
        </a>
      )}

      {affair.topic && (
        <div className="mt-2 text-gray-600">
          Topic: <span className="font-medium">{affair.topic}</span>
        </div>
      )}

      {affair.featured && (
        <span className="ml-3 rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-700">
          ⭐ Featured
        </span>
      )}

      <div className="mt-4">
        <span
          className={`rounded-full px-3 py-1 text-sm ${
            affair.is_active
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {affair.is_active ? "Active" : "Inactive"}
        </span>
      </div>

      <a
        href={affair.pdf_url}
        target="_blank"
        rel="noopener noreferrer"
      ></a>

      <a
        href={affair.source}
        target="_blank"
        rel="noopener noreferrer"
      ></a>

    </div>
  );
}