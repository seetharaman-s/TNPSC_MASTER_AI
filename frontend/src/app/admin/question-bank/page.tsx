"use client";

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

import QuestionStats from "@/components/admin/question-bank/QuestionStats";
import QuestionToolbar from "@/components/admin/question-bank/QuestionToolbar";
import QuestionFilters from "@/components/admin/question-bank/QuestionFilters";
import QuestionTable from "@/components/admin/question-bank/QuestionTable";
import BulkActions from "@/components/admin/question-bank/BulkActions";
import Pagination from "@/components/admin/question-bank/Pagination";
import DeleteDialog from "@/components/admin/question-bank/DeleteDialog";

import { Question } from "@/types/question";
import { QuestionBankService } from "@/services/questionBankService";

export default function QuestionBankPage() {

    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    const [page, setPage] = useState(1);
    const [pageSize] = useState(10);
    const [totalPages, setTotalPages] = useState(1);

    const [search, setSearch] = useState("");
    const [subject, setSubject] = useState("All");
    const [difficulty, setDifficulty] = useState("All");
    const [language, setLanguage] = useState("All");

    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const [deleteId, setDeleteId] = useState<number | null>(null);

    async function loadQuestions() {

        try {

            setLoading(true);

            const response = await QuestionBankService.getAll({
                page,
                page_size: pageSize,
                search,
                subject: subject === "All" ? undefined : subject,
                difficulty: difficulty === "All" ? undefined : difficulty,
                language: language === "All" ? undefined : language,
            });

            const data = response.data;

            setQuestions(data.items ?? []);
            setTotalPages(data.total_pages ?? 1);

        } catch (error) {

            console.error(error);
            toast.error("Unable to load questions.");

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadQuestions();

    }, [
        page,
        search,
        subject,
        difficulty,
        language,
    ]);

    const stats = useMemo(() => {

        return {

            total: questions.length,

            verified: questions.filter(
                q => q.is_verified
            ).length,

            published: questions.filter(
                q => q.is_published
            ).length,

            draft: questions.filter(
                q => !q.is_published
            ).length,

        };

    }, [questions]);

    function toggleSelection(id: number) {

        setSelectedIds(previous =>

            previous.includes(id)

                ? previous.filter(x => x !== id)

                : [...previous, id]

        );

    }

    function toggleSelectAll() {

        if (selectedIds.length === questions.length) {

            setSelectedIds([]);

        } else {

            setSelectedIds(
                questions.map(q => q.id)
            );

        }

    }

    async function deleteQuestion(id: number) {

        try {

            await QuestionBankService.delete(id);

            toast.success("Question deleted.");

            setDeleteId(null);

            loadQuestions();

        } catch {

            toast.error("Delete failed.");

        }

    }

    async function duplicateQuestion(id: number) {

        try {

            await QuestionBankService.duplicate(id);

            toast.success("Question duplicated.");

            loadQuestions();

        } catch {

            toast.error("Duplicate failed.");

        }

    }

    async function verifyQuestion(id: number) {

        try {

            await QuestionBankService.verify(id);

            toast.success("Question verified.");

            loadQuestions();

        } catch {

            toast.error("Verification failed.");

        }

    }

    async function publishQuestion(id: number) {

        try {

            await QuestionBankService.publish(id);

            toast.success("Question published.");

            loadQuestions();

        } catch {

            toast.error("Publish failed.");

        }

    }

    async function bulkDelete() {

        try {

            await QuestionBankService.bulkDelete(selectedIds);

            toast.success("Questions deleted.");

            setSelectedIds([]);

            loadQuestions();

        } catch {

            toast.error("Bulk delete failed.");

        }

    }

    async function bulkVerify() {

        try {

            await QuestionBankService.bulkVerify(selectedIds);

            toast.success("Questions verified.");

            setSelectedIds([]);

            loadQuestions();

        } catch {

            toast.error("Bulk verification failed.");

        }

    }

    async function bulkPublish() {

        try {

            await QuestionBankService.bulkPublish(selectedIds);

            toast.success("Questions published.");

            setSelectedIds([]);

            loadQuestions();

        } catch {

            toast.error("Bulk publish failed.");

        }

    }

        const handleExport = () => {
        toast.success("Export started.");
        // TODO: Implement export API
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 p-6">

                <div className="animate-pulse space-y-6">

                    <div className="h-12 bg-gray-200 rounded-xl" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {[...Array(4)].map((_, index) => (
                            <div
                                key={index}
                                className="h-32 bg-gray-200 rounded-xl"
                            />
                        ))}

                    </div>

                    <div className="h-96 bg-gray-200 rounded-xl" />

                </div>

            </div>
        );
    }

    return (

        <div className="min-h-screen bg-gray-50 p-6 space-y-6">

            <QuestionToolbar
                total={stats.total}
                onRefresh={loadQuestions}
                onExport={handleExport}
            />

            <QuestionStats
                total={stats.total}
                verified={stats.verified}
                published={stats.published}
                draft={stats.draft}
            />

            <QuestionFilters
                search={search}
                setSearch={setSearch}
                subject={subject}
                setSubject={setSubject}
                difficulty={difficulty}
                setDifficulty={setDifficulty}
                language={language}
                setLanguage={setLanguage}
            />

            <BulkActions
                count={selectedIds.length}
                onDelete={bulkDelete}
                onPublish={bulkPublish}
                onVerify={bulkVerify}
            />

            <QuestionTable
                questions={questions}
                selectedIds={selectedIds}
                onSelect={toggleSelection}
                onSelectAll={toggleSelectAll}
                onDelete={(id) => setDeleteId(id)}
                onDuplicate={duplicateQuestion}
                onVerify={verifyQuestion}
                onPublish={publishQuestion}
            />

            <Pagination
                page={page}
                totalPages={totalPages}
                onPageChange={setPage}
            />

            <DeleteDialog
                open={deleteId !== null}
                onCancel={() => setDeleteId(null)}
                onConfirm={() => {
                    if (deleteId !== null) {
                        deleteQuestion(deleteId);
                    }
                }}
            />

        </div>

    );

}