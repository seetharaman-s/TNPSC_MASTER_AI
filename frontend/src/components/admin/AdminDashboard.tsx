"use client";

import DashboardCards from "./DashboardCards";
import AdminStats from "./AdminStats";

export default function AdminDashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome to TNPSC MASTER AI Admin Panel
        </p>
      </div>

      <DashboardCards />

      <AdminStats />

    </div>
  );
}