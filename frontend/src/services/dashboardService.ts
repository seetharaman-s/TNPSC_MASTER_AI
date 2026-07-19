import api from "@/lib/api";

export interface DashboardSummary {
    books: number;
    notes: number;
    quizzes: number;
    current_affairs: number;
}

export interface ReadingProgress {
    completed_books: number;
    completed_notes: number;
    overall_progress: number;
}

export interface DashboardStatistics {
    books: number;
    notes: number;
    quizzes: number;
    current_affairs: number;
}

export interface WeeklyProgress {
    day: string;
    hours: number;
}

export interface ContinueReading {
    book: string;
    chapter: string;
    progress: number;
}

export interface RecentQuiz {
    quiz_id: number;
    title: string;
    score: number;
    correct_answers: number;
    total_questions: number;
}

export const DashboardService = {

    // =====================================================
    // Dashboard Summary
    // =====================================================

    async summary() {
        return api.get<DashboardSummary>(
            "/dashboard/summary"
        );
    },

    // =====================================================
    // Statistics
    // =====================================================

    async statistics() {
        return api.get<DashboardStatistics>(
            "/dashboard/statistics"
        );
    },

    // =====================================================
    // Reading Progress
    // =====================================================

    async progress() {
        return api.get<ReadingProgress>(
            "/dashboard/progress"
        );
    },

    // =====================================================
    // Featured Content
    // =====================================================

    async featured() {
        return api.get(
            "/dashboard/featured"
        );
    },

    // =====================================================
    // Recent Books
    // =====================================================

    async recentBooks(limit = 5) {
        return api.get(
            "/dashboard/recent/books",
            {
                params: { limit },
            }
        );
    },

    // =====================================================
    // Recent Notes
    // =====================================================

    async recentNotes(limit = 5) {
        return api.get(
            "/dashboard/recent/notes",
            {
                params: { limit },
            }
        );
    },

    // =====================================================
    // Recent Quizzes
    // =====================================================

    async recentQuizzes(limit = 5) {
        return api.get(
            "/dashboard/recent/quizzes",
            {
                params: { limit },
            }
        );
    },

    // =====================================================
    // Recent Current Affairs
    // =====================================================

    async recentCurrentAffairs(limit = 5) {
        return api.get(
            "/dashboard/recent/current-affairs",
            {
                params: { limit },
            }
        );
    },

    // =====================================================
    // Continue Reading
    // =====================================================

    async continueReading() {
        return api.get<ContinueReading>(
            "/dashboard/continue-reading"
        );
    },

    // =====================================================
    // Weekly Progress
    // =====================================================

    async weeklyProgress() {
        return api.get<WeeklyProgress[]>(
            "/dashboard/weekly-progress"
        );
    },

    // =====================================================
    // Recent Quiz
    // =====================================================

    async recentQuiz() {
        return api.get<RecentQuiz>(
            "/dashboard/recent-quiz"
        );
    },

    // =====================================================
    // Refresh Dashboard
    // =====================================================

    async refresh() {

        const [
            summary,
            statistics,
            progress,
            featured,
            books,
            notes,
            quizzes,
            currentAffairs,
            continueReading,
            weeklyProgress,
            recentQuiz,
        ] = await Promise.all([
            this.summary(),
            this.statistics(),
            this.progress(),
            this.featured(),
            this.recentBooks(),
            this.recentNotes(),
            this.recentQuizzes(),
            this.recentCurrentAffairs(),
            this.continueReading(),
            this.weeklyProgress(),
            this.recentQuiz(),
        ]);

        return {
            summary: summary.data,
            statistics: statistics.data,
            progress: progress.data,
            featured: featured.data,
            books: books.data,
            notes: notes.data,
            quizzes: quizzes.data,
            currentAffairs: currentAffairs.data,
            continueReading: continueReading.data,
            weeklyProgress: weeklyProgress.data,
            recentQuiz: recentQuiz.data,
        };

    },

};

export default DashboardService;