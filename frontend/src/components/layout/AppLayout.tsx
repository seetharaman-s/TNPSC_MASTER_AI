"use client";

import { ReactNode, useState } from "react";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Breadcrumb from "./Breadcrumb";
import Footer from "./Footer";
import BottomNavigation from "./BottomNavigation";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({
  children,
}: AppLayoutProps) {

  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (

    <div className="min-h-screen bg-slate-50">

      {/* Sidebar */}

      <Sidebar
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main Area */}

      <div
        className={`
          transition-all duration-300
          ${sidebarCollapsed ? "lg:ml-20" : "lg:ml-72"}
        `}
      >

        <Header />

        <Breadcrumb />

        <main className="p-6">

          {children}

        </main>

        <Footer />

      </div>

      <BottomNavigation />

    </div>

  );

}