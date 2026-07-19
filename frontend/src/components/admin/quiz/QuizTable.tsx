"use client";

import Link from "next/link";
import { Pencil, Trash2, Eye } from "lucide-react";
import { QuizService } from "@/services/quizService";

interface QuizTableProps {
  quizzes: any[];
  onRefresh?: () => void;
}

export default function QuizTable({
  quizzes,
  onRefresh,
}: QuizTableProps) {

  async function deleteQuiz(id: number) {
    if (!confirm("Delete this quiz?")) return;

    try {
      await QuizService.delete(id);
      onRefresh?.();
    } catch (error) {
      console.error(error);
      alert("Failed to delete quiz.");
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">
          <tr>
            <th className="px-5 py-4 text-left">Title</th>
            <th className="px-5 py-4 text-left">Subject</th>
            <th className="px-5 py-4 text-left">Difficulty</th>
            <th className="px-5 py-4 text-left">Questions</th>
            <th className="px-5 py-4 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>

          {quizzes.map((quiz) => (
            <tr
              key={quiz.id}
              className="border-t"
            >
              <td className="px-5 py-4">{quiz.title}</td>
              <td className="px-5 py-4">{quiz.subject}</td>
              <td className="px-5 py-4">{quiz.difficulty}</td>
              <td className="px-5 py-4">{quiz.total_questions}</td>

              <td className="px-5 py-4">
                <div className="flex justify-center gap-2">

                  <Link
                    href={`/quiz/${quiz.id}`}
                    className="rounded-lg bg-green-600 p-2 text-white"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    href={`/admin/quizzes/${quiz.id}/edit`}
                    className="rounded-lg bg-blue-600 p-2 text-white"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => deleteQuiz(quiz.id)}
                    className="rounded-lg bg-red-600 p-2 text-white"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}