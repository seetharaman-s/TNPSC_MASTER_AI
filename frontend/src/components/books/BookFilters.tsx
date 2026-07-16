"use client";

interface Props {
  standard: string;
  subject: string;
  medium: string;

  setStandard: (value: string) => void;
  setSubject: (value: string) => void;
  setMedium: (value: string) => void;
}

export default function BookFilters({
  standard,
  subject,
  medium,
  setStandard,
  setSubject,
  setMedium,
}: Props) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <select
        value={standard}
        onChange={(e) => setStandard(e.target.value)}
        className="rounded-xl border p-3"
      >
        <option value="">All Classes</option>
        {[6, 7, 8, 9, 10, 11, 12].map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <select
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="rounded-xl border p-3"
      >
        <option value="">All Subjects</option>
        <option>Tamil</option>
        <option>English</option>
        <option>Maths</option>
        <option>Science</option>
        <option>History</option>
        <option>Geography</option>
        <option>Economics</option>
        <option>Polity</option>
      </select>

      <select
        value={medium}
        onChange={(e) => setMedium(e.target.value)}
        className="rounded-xl border p-3"
      >
        <option value="">All Mediums</option>
        <option>Tamil</option>
        <option>English</option>
      </select>
    </div>
  );
}