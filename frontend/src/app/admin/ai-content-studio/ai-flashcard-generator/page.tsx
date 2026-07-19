"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Layers,
  BookOpen,
  Search,
  Filter,
  Eye,
  Play,
  Settings,
  Languages,
  Sparkles,
  Bookmark,
  Target,
  Clock,
  BarChart3,
  RefreshCw,
  Star,
  Library,
} from "lucide-react";

interface FlashcardDeck {
  id: string;
  title: string;
  subject: string;
  cards: number;
  language: string;
  status: "Draft" | "Generated" | "Published";
  difficulty: "Easy" | "Medium" | "Hard" | "Mixed";
}

const flashcardDecks: FlashcardDeck[] = [
  {
    id: "FC001",
    title: "Indian History Revision",
    subject: "History",
    cards: 120,
    language: "Tamil + English",
    status: "Published",
    difficulty: "Mixed",
  },
  {
    id: "FC002",
    title: "Current Affairs - July 2026",
    subject: "Current Affairs",
    cards: 80,
    language: "Tamil + English",
    status: "Generated",
    difficulty: "Medium",
  },
];

export default function AIFlashcardGeneratorPage() {

  const [search, setSearch] = useState("");

  const filteredDecks = useMemo(() => {

    return flashcardDecks.filter((deck) =>
      deck.title.toLowerCase().includes(search.toLowerCase())
    );

  }, [search]);

  return (

    <div className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex justify-between items-center mb-8">

          <div>

            <h1 className="text-3xl font-bold flex items-center gap-3">

              <Brain className="text-indigo-600" />

              AI Flashcard Generator

            </h1>

            <p className="text-gray-500 mt-2">

              Automatically generate bilingual TNPSC flashcards from books,
              notes, current affairs, question bank, and previous-year papers.

            </p>

          </div>

          <Link
            href="/admin/ai-content-studio"
            className="border rounded-lg px-4 py-2 flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back
          </Link>

        </div>

        {/* Dashboard */}

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-white rounded-xl shadow p-6">

            <Layers className="text-blue-600"/>

            <p className="mt-4 text-gray-500">

              Flashcard Decks

            </p>

            <h2 className="text-4xl font-bold mt-2">

              2,486

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <BookOpen className="text-green-600"/>

            <p className="mt-4 text-gray-500">

              Flashcards

            </p>

            <h2 className="text-4xl font-bold mt-2">

              146,830

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Sparkles className="text-orange-600"/>

            <p className="mt-4 text-gray-500">

              AI Generated

            </p>

            <h2 className="text-4xl font-bold mt-2">

              133,275

            </h2>

          </div>

          <div className="bg-white rounded-xl shadow p-6">

            <Target className="text-purple-600"/>

            <p className="mt-4 text-gray-500">

              AI Accuracy

            </p>

            <h2 className="text-4xl font-bold mt-2">

              99.1%

            </h2>

          </div>

        </div>

        {/* Configuration */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Settings className="text-indigo-600"/>

            <h2 className="text-2xl font-bold">

              Flashcard Generator Configuration

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                Source

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>TNPSC Books</option>
                <option>Question Bank</option>
                <option>Current Affairs</option>
                <option>Previous Year Papers</option>
                <option>Notes</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Language

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Tamil + English</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Flashcard Style

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Question → Answer</option>
                <option>Concept → Definition</option>
                <option>Image Based</option>
                <option>Mnemonic</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Mixed</option>
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>

              </select>

            </div>

          </div>

        </div>

        {/* Search */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <div className="flex gap-4">

            <div className="relative flex-1">

              <Search
                className="absolute left-3 top-3 text-gray-400"
                size={18}
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search flashcard decks..."
                className="w-full border rounded-lg pl-10 py-3"
              />

            </div>

            <button className="border rounded-lg px-5 flex items-center gap-2">

              <Filter size={18}/>
              Filter

            </button>

          </div>

        </div>

        {/* Deck List */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Generated Flashcard Decks

            </h2>

          </div>

          <div className="overflow-x-auto">

            <table className="min-w-full">

              <thead className="bg-gray-100">

                <tr>

                  <th className="p-4 text-left">Deck</th>
                  <th className="p-4 text-left">Subject</th>
                  <th className="p-4 text-left">Cards</th>
                  <th className="p-4 text-left">Language</th>
                  <th className="p-4 text-left">Difficulty</th>
                  <th className="p-4 text-left">Status</th>
                  <th className="p-4 text-left">Actions</th>

                </tr>

              </thead>

              <tbody>

                {filteredDecks.map((deck)=>(

                  <tr
                    key={deck.id}
                    className="border-t hover:bg-gray-50"
                  >

                    <td className="p-4">{deck.title}</td>
                    <td className="p-4">{deck.subject}</td>
                    <td className="p-4">{deck.cards}</td>
                    <td className="p-4">{deck.language}</td>
                    <td className="p-4">{deck.difficulty}</td>
                    <td className="p-4">{deck.status}</td>

                    <td className="p-4">

                      <div className="flex gap-2">

                        <button className="border rounded-lg p-2">

                          <Eye size={16}/>

                        </button>

                        <button className="border rounded-lg p-2">

                          <Play size={16}/>

                        </button>

                      </div>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

                {/* AI Flashcard Engine */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <Brain className="text-purple-600" />

            <h2 className="text-2xl font-bold">

              AI Flashcard Generation Engine

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <div>

              <label className="font-semibold">

                AI Model

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>GPT-5.5 Flashcard AI</option>
                <option>TNPSC Revision AI</option>
                <option>Concept Extraction AI</option>
                <option>Bilingual Learning AI</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Card Generation Strategy

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Concept Based</option>
                <option>Question Based</option>
                <option>Exam Oriented</option>
                <option>Mixed Strategy</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Output Mode

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Bilingual</option>
                <option>Tamil</option>
                <option>English</option>

              </select>

            </div>

          </div>

        </div>

        {/* Generation Options */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Flashcard Generation Options

            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate Bilingual Cards

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Add Memory Tricks

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Include Previous Year References

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Automatic Topic Tagging

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              AI Difficulty Classification

            </label>

            <label className="flex items-center gap-3">

              <input type="checkbox" defaultChecked />

              Generate Revision Questions

            </label>

          </div>

        </div>

        {/* Spaced Repetition */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <RefreshCw className="text-green-600" />

            <h2 className="text-2xl font-bold">

              Spaced Repetition Settings

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div>

              <label className="font-semibold">

                First Review

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>1 Day</option>
                <option>2 Days</option>
                <option>3 Days</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Second Review

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>7 Days</option>
                <option>10 Days</option>
                <option>14 Days</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Third Review

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>30 Days</option>
                <option>45 Days</option>
                <option>60 Days</option>

              </select>

            </div>

            <div>

              <label className="font-semibold">

                Difficulty Adaptation

              </label>

              <select className="w-full border rounded-lg mt-2 p-3">

                <option>Automatic</option>
                <option>Manual</option>

              </select>

            </div>

          </div>

        </div>

        {/* Subject Analytics */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Subject Distribution

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>History</span>

                <span className="font-bold">320 Cards</span>

              </div>

              <div className="flex justify-between">

                <span>Polity</span>

                <span className="font-bold">285 Cards</span>

              </div>

              <div className="flex justify-between">

                <span>Science</span>

                <span className="font-bold">264 Cards</span>

              </div>

              <div className="flex justify-between">

                <span>Current Affairs</span>

                <span className="font-bold">410 Cards</span>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Revision Statistics

              </h2>

            </div>

            <div className="p-6 space-y-4">

              <div className="flex justify-between">

                <span>Cards Reviewed</span>

                <span className="font-bold text-green-600">

                  12,584

                </span>

              </div>

              <div className="flex justify-between">

                <span>Average Retention</span>

                <span className="font-bold text-blue-600">

                  91%

                </span>

              </div>

              <div className="flex justify-between">

                <span>Bookmarks</span>

                <span className="font-bold">

                  842

                </span>

              </div>

              <div className="flex justify-between">

                <span>Favorite Decks</span>

                <span className="font-bold">

                  163

                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Live Progress */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex items-center gap-2">

            <BarChart3 className="text-indigo-600" />

            <h2 className="text-2xl font-bold">

              Live Flashcard Generation Progress

            </h2>

          </div>

          <div className="p-6">

            <div className="w-full h-4 bg-gray-200 rounded-full">

              <div
                className="h-4 bg-indigo-600 rounded-full"
                style={{ width: "86%" }}
              />

            </div>

            <p className="mt-4 text-gray-600">

              AI has completed 86% of flashcard generation. Concept extraction, bilingual translation, memory tricks, and revision scheduling are currently being finalized.

            </p>

          </div>

        </div>

                {/* Flashcard Preview */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b flex justify-between items-center">

            <div>

              <h2 className="text-2xl font-bold">

                AI Flashcard Preview

              </h2>

              <p className="text-gray-500 mt-2">

                Interactive bilingual flashcards generated by AI.

              </p>

            </div>

            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm">

              Ready to Publish

            </span>

          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-6">

            {/* Front */}

            <div className="border rounded-xl p-8 bg-gradient-to-br from-indigo-50 to-blue-50">

              <div className="flex justify-between">

                <span className="text-sm font-semibold text-indigo-600">

                  FRONT

                </span>

                <Bookmark className="text-gray-400" />

              </div>

              <h3 className="text-2xl font-bold mt-8">

                Who founded the Imperial Chola Dynasty?

              </h3>

              <p className="mt-6 text-gray-600">

                Subject: History

              </p>

            </div>

            {/* Back */}

            <div className="border rounded-xl p-8 bg-gradient-to-br from-green-50 to-emerald-50">

              <div className="flex justify-between">

                <span className="text-sm font-semibold text-green-600">

                  BACK

                </span>

                <Star className="text-yellow-500 fill-yellow-500" />

              </div>

              <h3 className="text-2xl font-bold mt-8">

                Vijayalaya Chola

              </h3>

              <p className="mt-5 leading-7 text-gray-700">

                Founder of the Imperial Chola Dynasty after capturing
                Thanjavur in the 9th century.

              </p>

              <div className="mt-6 bg-white rounded-lg p-4">

                <h4 className="font-semibold">

                  தமிழ்

                </h4>

                <p className="mt-2 leading-7">

                  விஜயாலய சோழன் பேரரசு சோழ
                  வம்சத்தை நிறுவினார்.

                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Memory Tips */}

        <div className="grid lg:grid-cols-2 gap-8 mt-8">

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                AI Memory Trick

              </h2>

            </div>

            <div className="p-6">

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-5">

                <p className="font-semibold">

                  Mnemonic

                </p>

                <p className="mt-3">

                  <strong>V</strong>ijayalaya =
                  <strong> V</strong>ictory =
                  Beginning of the Imperial Cholas.

                </p>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-xl shadow">

            <div className="p-6 border-b">

              <h2 className="text-xl font-bold">

                Related Flashcards

              </h2>

            </div>

            <div className="p-6 space-y-3">

              {[
                "Rajaraja Chola",
                "Rajendra Chola",
                "Brihadeeswarar Temple",
                "Chola Administration",
                "Sangam Age"
              ].map((topic) => (

                <div
                  key={topic}
                  className="border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
                >

                  {topic}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Learning Analytics */}

        <div className="bg-white rounded-xl shadow mt-8">

          <div className="p-6 border-b">

            <h2 className="text-2xl font-bold">

              Learning Analytics

            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-6 p-6">

            <div className="text-center">

              <h3 className="text-4xl font-bold text-green-600">

                91%

              </h3>

              <p className="mt-2">

                Retention Rate

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-blue-600">

                14

              </h3>

              <p className="mt-2">

                Review Sessions

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-purple-600">

                842

              </h3>

              <p className="mt-2">

                Bookmarked Cards

              </p>

            </div>

            <div className="text-center">

              <h3 className="text-4xl font-bold text-orange-600">

                99%

              </h3>

              <p className="mt-2">

                AI Quality

              </p>

            </div>

          </div>

        </div>

        {/* Publish & Export */}

        <div className="bg-white rounded-xl shadow mt-8 p-6">

          <h2 className="text-2xl font-bold mb-6">

            Publish & Export

          </h2>

          <div className="flex flex-wrap gap-4">

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg">

              Publish to Student Dashboard

            </button>

            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg">

              Publish to Mobile App

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export PDF

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export CSV

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export Anki (.apkg)

            </button>

            <button className="border px-6 py-3 rounded-lg">

              Export JSON

            </button>

          </div>

        </div>

        {/* Backend API Endpoints */}

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mt-8 mb-12">

          <h2 className="text-xl font-bold mb-4">

            Backend API Endpoints

          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm font-mono">

            <div className="space-y-2">

              <p>POST /api/v1/flashcards/generate</p>
              <p>POST /api/v1/flashcards/revision-plan</p>
              <p>POST /api/v1/flashcards/translate</p>
              <p>POST /api/v1/flashcards/bookmark</p>
              <p>GET /api/v1/flashcards/decks</p>

            </div>

            <div className="space-y-2">

              <p>POST /api/v1/flashcards/publish</p>
              <p>POST /api/v1/flashcards/export/pdf</p>
              <p>POST /api/v1/flashcards/export/csv</p>
              <p>POST /api/v1/flashcards/export/apkg</p>
              <p>POST /api/v1/flashcards/export/json</p>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}