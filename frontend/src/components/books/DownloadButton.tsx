"use client";

import { Download } from "lucide-react";

type Props = {
  url: string;
};

export default function DownloadButton({
  url,
}: Props) {

  return (

    <a
      href={url}
      download
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition"
    >

      <Download size={20} />

      Download PDF

    </a>

  );

}