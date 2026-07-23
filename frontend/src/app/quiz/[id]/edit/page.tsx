"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import QuizForm from "@/components/admin/quiz/QuizForm";
import { QuizService } from "@/services/quizService";

export default function EditQuizPage() {

  const params = useParams();
  const router = useRouter();
  const id = Number(params.id);
  const [quiz, setQuiz] = useState<any>();

  useEffect(() => {
    loadQuiz();
  }, []);

  async function loadQuiz() {
    try {
      const res = await QuizService.getById(id);
      setQuiz(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function submit(data: any) {
    try {
      await QuizService.update(id, data);

      router.push("/admin/quizzes");
      router.refresh();

    } catch (error) {
      console.error(error);
    }
  }

  if (!quiz) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <main className="max-w-5xl mx-auto p-8">

      <h1 className="mb-8 text-3xl font-bold">
        Edit Quiz
      </h1>

      <QuizForm
        initialData={quiz}
        onSubmit={submit}
      />

    </main>
  );
}