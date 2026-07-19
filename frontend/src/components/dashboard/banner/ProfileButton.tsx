"use client";

import { UserCircle2 } from "lucide-react";

export default function ProfileButton() {

  return (

    <button
      className="bg-white/10 rounded-full p-1 hover:bg-white/20 transition"
    >

      <UserCircle2 size={42} />

    </button>

  );

}