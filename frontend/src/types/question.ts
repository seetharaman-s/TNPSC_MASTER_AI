export interface Question {

    id: number;

    question: string;

    tamil_question?: string;

    subject: string;

    unit: string;

    topic: string;

    difficulty: "Easy" | "Medium" | "Hard" | "Very Hard";

    language: "English" | "Tamil" | "Bilingual";

    options: string[];

    tamil_options?: string[];

    correct_answer: number;

    explanation: string;

    tamil_explanation?: string;

    marks: number;

    negative_marks: number;

    exam: string;

    year: number;

    source: string;

    tags: string[];

    image_url?: string;

    is_verified: boolean;

    is_published: boolean;

    created_at: string;

    updated_at: string;

}

export interface QuestionStatistics {

    total: number;

    verified: number;

    published: number;

    draft: number;

    subjects: number;

    topics: number;

}