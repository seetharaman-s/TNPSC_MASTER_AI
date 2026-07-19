"use client";

import { Search } from "lucide-react";

interface Props {

    search: string;

    setSearch: (value: string) => void;

    subject: string;

    setSubject: (value: string) => void;

    difficulty: string;

    setDifficulty: (value: string) => void;

    language: string;

    setLanguage: (value: string) => void;

}

export default function QuestionFilters({

    search,

    setSearch,

    subject,

    setSubject,

    difficulty,

    setDifficulty,

    language,

    setLanguage,

}: Props) {

    return (

        <div className="bg-white rounded-xl shadow p-5 grid lg:grid-cols-4 gap-4">

            <div className="relative">

                <Search
                    className="absolute left-3 top-3 text-gray-400"
                    size={18}
                />

                <input
                    className="w-full border rounded-lg pl-10 py-2"
                    placeholder="Search Questions..."
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />

            </div>

            <select
                className="border rounded-lg px-3 py-2"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
            >

                <option value="All">All Subjects</option>

                <option>History</option>

                <option>Geography</option>

                <option>Polity</option>

                <option>Economics</option>

                <option>Science</option>

                <option>Current Affairs</option>

                <option>Aptitude</option>

            </select>

            <select
                className="border rounded-lg px-3 py-2"
                value={difficulty}
                onChange={(e)=>setDifficulty(e.target.value)}
            >

                <option value="All">Difficulty</option>

                <option>Easy</option>

                <option>Medium</option>

                <option>Hard</option>

                <option>Very Hard</option>

            </select>

            <select
                className="border rounded-lg px-3 py-2"
                value={language}
                onChange={(e)=>setLanguage(e.target.value)}
            >

                <option value="All">Language</option>

                <option>English</option>

                <option>Tamil</option>

                <option>Bilingual</option>

            </select>

        </div>

    );

}