"use client";

interface Props {
    quiz: any;
}

export default function RecentQuiz({
    quiz,
}: Props) {

    if (!quiz) return null;

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Recent Quiz
            </h2>

            <div className="space-y-2">

                <p>
                    Score :
                    <strong>
                        {" "}
                        {quiz.score}
                    </strong>
                </p>

                <p>
                    Correct :
                    {" "}
                    {quiz.correct_answers}
                </p>

                <p>
                    Wrong :
                    {" "}
                    {quiz.wrong_answers}
                </p>

                <p>
                    Skipped :
                    {" "}
                    {quiz.skipped_answers}
                </p>

            </div>

        </div>

    );

}