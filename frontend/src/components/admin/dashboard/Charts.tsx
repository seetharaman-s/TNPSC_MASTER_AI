"use client";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    PieChart,
    Pie,
    Cell,
    Legend,
} from "recharts";

interface Statistics {
    books: number;
    notes: number;
    quizzes: number;
    current_affairs: number;
}

interface ChartsProps {
    statistics: Statistics;
}

export default function Charts({
    statistics,
}: ChartsProps) {

    const barData = [
        {
            name: "Books",
            value: statistics.books,
        },
        {
            name: "Notes",
            value: statistics.notes,
        },
        {
            name: "Quizzes",
            value: statistics.quizzes,
        },
        {
            name: "Current Affairs",
            value: statistics.current_affairs,
        },
    ];

    const pieData = [
        {
            name: "Books",
            value: statistics.books,
        },
        {
            name: "Notes",
            value: statistics.notes,
        },
        {
            name: "Quizzes",
            value: statistics.quizzes,
        },
        {
            name: "Current Affairs",
            value: statistics.current_affairs,
        },
    ];

    const COLORS = [
        "#2563EB",
        "#16A34A",
        "#9333EA",
        "#EA580C",
    ];

    return (

        <section className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            {/* Bar Chart */}

            <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h2 className="mb-6 text-xl font-bold">

                    Content Statistics

                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={350}
                >

                    <BarChart
                        data={barData}
                    >

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis
                            dataKey="name"
                        />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="value"
                            radius={[8, 8, 0, 0]}
                            fill="#2563EB"
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

            {/* Pie Chart */}

            <div className="rounded-2xl bg-white p-6 shadow-lg">

                <h2 className="mb-6 text-xl font-bold">

                    Content Distribution

                </h2>

                <ResponsiveContainer
                    width="100%"
                    height={350}
                >

                    <PieChart>

                        <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={110}
                            dataKey="value"
                            label
                        >

                            {pieData.map(
                                (_, index) => (

                                    <Cell
                                        key={index}
                                        fill={
                                            COLORS[index]
                                        }
                                    />

                                )
                            )}

                        </Pie>

                        <Tooltip />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

}