"use client";

import { Bell } from "lucide-react";

export default function NotificationButton() {

  return (

    <button
      className="relative bg-white/10 p-3 rounded-xl hover:bg-white/20 transition"
    >

      <Bell size={22} />

      <span
        className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"
      />

    </button>

  );

}