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

import { CurrentAffairsService as currentAffairService } from "@/services/currentAffairService";

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
      const response = await currentAffairService.getById(
        Number(id)
      );

      setAffair(response.data);
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
          {affair.publish_date}
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

    </div>
  );
}