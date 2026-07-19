"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Target,
  Loader2,
  Download,
  Printer,
} from "lucide-react";

import {
  AIService,
  StudyPlanResponse,
} from "@/services/aiService";

const EXAMS = [
  "Group 1",
  "Group 2",
  "Group 2A",
  "Group 4",
  "VAO",
];

export default function StudyPlanner() {
  const [exam, setExam] = useState("Group 4");
  const [daysLeft, setDaysLeft] = useState(60);
  const [hours, setHours] = useState(4);

  const [loading, setLoading] = useState(false);

  const [plan, setPlan] =
    useState<StudyPlanResponse | null>(null);

  async function generatePlan() {
    setLoading(true);

    try {
      const result =
        await AIService.studyPlan({
          exam,
          days_left: daysLeft,
          study_hours_per_day: hours,
        });

      setPlan(result);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }
  }

  function printPlan() {
    window.print();
  }

  function downloadPlan() {

    if (!plan) return;

    const content = plan.tasks
      .map(
        (task) =>
          `Day ${task.day}
Subject: ${task.subject}
Topic: ${task.topic}
Duration: ${task.duration_hours} hrs`
      )
      .join("\n\n");

    const blob = new Blob(
      [content],
      {
        type: "text/plain",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const link =
      document.createElement("a");

    link.href = url;

    link.download =
      `${plan.exam}-StudyPlan.txt`;

    link.click();

    URL.revokeObjectURL(url);
  }

  return (

    <div className="rounded-2xl border bg-white shadow-sm">

      {/* Header */}

      <div className="border-b p-6">

        <div className="flex items-center gap-3">

          <Calendar className="h-8 w-8 text-blue-600" />

          <div>

            <h2 className="text-2xl font-bold">

              AI Study Planner

            </h2>

            <p className="text-gray-500">

              Personalized TNPSC preparation schedule

            </p>

          </div>

        </div>

      </div>

      {/* Form */}

      <div className="grid gap-4 p-6 md:grid-cols-4">

        <select
          value={exam}
          onChange={(e) =>
            setExam(e.target.value)
          }
          className="rounded-lg border p-3"
        >

          {EXAMS.map((item) => (

            <option
              key={item}
              value={item}
            >
              {item}
            </option>

          ))}

        </select>

        <input
          type="number"
          min={1}
          value={daysLeft}
          onChange={(e) =>
            setDaysLeft(
              Number(e.target.value)
            )
          }
          className="rounded-lg border p-3"
          placeholder="Days Left"
        />

        <input
          type="number"
          min={1}
          max={16}
          value={hours}
          onChange={(e) =>
            setHours(
              Number(e.target.value)
            )
          }
          className="rounded-lg border p-3"
          placeholder="Study Hours"
        />

        <button
          onClick={generatePlan}
          disabled={loading}
          className="rounded-lg bg-blue-600 px-4 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
        >

          {loading ? (

            <Loader2 className="mx-auto h-5 w-5 animate-spin" />

          ) : (

            "Generate Plan"

          )}

        </button>

      </div>

      {plan && (

        <>

          {/* Actions */}

          <div className="flex justify-end gap-3 px-6">

            <button
              onClick={downloadPlan}
              className="rounded-lg border p-2 hover:bg-gray-100"
            >

              <Download className="h-5 w-5" />

            </button>

            <button
              onClick={printPlan}
              className="rounded-lg border p-2 hover:bg-gray-100"
            >

              <Printer className="h-5 w-5" />

            </button>

          </div>

          {/* Timeline */}

          <div className="space-y-4 p-6">

            {plan.tasks.map((task) => (

              <div
                key={task.day}
                className="rounded-xl border p-5 hover:shadow-md transition"
              >

                <div className="flex flex-wrap items-center justify-between gap-4">

                  <div>

                    <h3 className="text-lg font-bold">

                      Day {task.day}

                    </h3>

                    <p className="mt-2 text-gray-700">

                      {task.subject}

                    </p>

                    <p className="text-sm text-gray-500">

                      {task.topic}

                    </p>

                  </div>

                  <div className="flex gap-6">

                    <div className="flex items-center gap-2">

                      <Clock className="h-5 w-5 text-blue-600" />

                      <span>

                        {task.duration_hours} hrs

                      </span>

                    </div>

                    <div className="flex items-center gap-2">

                      <Target className="h-5 w-5 text-green-600" />

                      <span>

                        Study

                      </span>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </>

      )}

    </div>

  );

}