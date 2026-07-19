"use client";

import { UploadAnalytics as UploadAnalyticsType } from "@/services/reportService";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
 Cell,
  Tooltip,
  Legend,
} from "recharts";
import {
  Upload,
  FileText,
  Image,
  Video,
  HardDrive,
} from "lucide-react";

interface Props {
  data: UploadAnalyticsType;
}

export default function UploadAnalytics({ data }: Props) {

  const chartData = [
    {
      name: "PDF",
      value: data.total_pdf,
    },
    {
      name: "Images",
      value: data.total_images,
    },
    {
      name: "Videos",
      value: data.total_videos,
    },
  ];

  const COLORS = [
    "#2563eb",
    "#10b981",
    "#f59e0b",
  ];

  return (

    <section className="rounded-2xl border bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">

        <Upload className="h-7 w-7 text-blue-600" />

        <h2 className="text-xl font-bold">

          Upload Analytics

        </h2>

      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        <div className="space-y-4">

          <div className="rounded-xl border p-4">

            <p className="text-sm text-gray-500">
              Total Uploads
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              {data.total_uploads}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <FileText className="h-5 w-5 text-red-600" />

              <p className="text-sm text-gray-500">
                PDF Files
              </p>

            </div>

            <h3 className="mt-2 text-xl font-bold">
              {data.total_pdf}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Image className="h-5 w-5 text-green-600" />

              <p className="text-sm text-gray-500">
                Images
              </p>

            </div>

            <h3 className="mt-2 text-xl font-bold">
              {data.total_images}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <Video className="h-5 w-5 text-purple-600" />

              <p className="text-sm text-gray-500">
                Videos
              </p>

            </div>

            <h3 className="mt-2 text-xl font-bold">
              {data.total_videos}
            </h3>

          </div>

          <div className="rounded-xl border p-4">

            <div className="flex items-center gap-2">

              <HardDrive className="h-5 w-5 text-orange-600" />

              <p className="text-sm text-gray-500">
                Storage Used
              </p>

            </div>

            <h3 className="mt-2 text-xl font-bold">
              {data.total_size_mb.toFixed(2)} MB
            </h3>

          </div>

        </div>

        <div className="h-80">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >

                {chartData.map((_, index) => (

                  <Cell
                    key={index}
                    fill={COLORS[index % COLORS.length]}
                  />

                ))}

              </Pie>

              <Tooltip />

              <Legend />

            </PieChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>

  );

}