"use client";

import CareerDashboard from "@/components/career-guidance/CareerDashboard";

export default function CareerGuidancePage() {
  /**
   * TODO:
   * Replace this with the authenticated user's ID
   * after authentication is integrated.
   */
  const userId = 1;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl p-6 lg:p-8">
        <CareerDashboard userId={userId} />
      </div>
    </div>
  );
}