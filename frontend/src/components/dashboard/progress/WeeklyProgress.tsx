"use client";

interface Props {
    progress: any;
}

export default function WeeklyProgress({
    progress,
}: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-6">

            <h2 className="text-xl font-bold mb-4">
                Weekly Progress
            </h2>

            <div className="space-y-3">

                <div>

                    <p className="text-gray-500">
                        Reading Time
                    </p>

                    <h3 className="text-3xl font-bold">

                        {progress?.reading_time ?? 0} mins

                    </h3>

                </div>

                <div>

                    <p className="text-gray-500">
                        Average Progress
                    </p>

                    <h3 className="text-3xl font-bold">

                        {Number(
                            progress?.average_progress ?? 0
                        ).toFixed(1)}%

                    </h3>

                </div>

            </div>

        </div>

    );

}