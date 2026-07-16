"use client";

import { useMemo, useState } from "react";

import AppLayout from "@/components/layout/AppLayout";
import { PageContainer } from "@/components/layout";

import {
  BookHeader,
  BookSearch,
  BookFilters,
  BookGrid,
  ContinueReading,
  FeaturedBooks,
} from "@/components/books";

import { BOOKS } from "@/constants/books";

export default function BooksPage() {
const [search, setSearch] = useState("");
const [standard, setStandard] = useState("");
const [subject, setSubject] = useState("");
const [medium, setMedium] = useState("");

const filteredBooks = useMemo(() => {
  return BOOKS.filter((book) => {
    const matchSearch =
      book.title.toLowerCase().includes(search.toLowerCase());

    const matchClass =
      standard === "" ||
      book.standard.toString() === standard;

    const matchSubject =
      subject === "" ||
      book.subject === subject;

    const matchMedium =
      medium === "" ||
      book.medium === medium;

    return (
      matchSearch &&
      matchClass &&
      matchSubject &&
      matchMedium
    );
  });
}, [search, standard, subject, medium]);

  return (
    <AppLayout>
      <PageContainer>
        <BookHeader />

        <div className="space-y-4 mb-8">
         <BookSearch
    value={search}
    onChange={setSearch}
       />

      <BookFilters
    standard={standard}
    subject={subject}
    medium={medium}
    setStandard={setStandard}
    setSubject={setSubject}
    setMedium={setMedium}
        />
        </div>

        <ContinueReading />

        <BookGrid books={filteredBooks} />

        <FeaturedBooks />

        <BookGrid books={filteredBooks} />
      </PageContainer>
    </AppLayout>
  );
}