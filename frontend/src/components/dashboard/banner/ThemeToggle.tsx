"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {

  const [dark, setDark] = useState(true);

  return (

    <button
      onClick={() => setDark(!dark)}
      className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition"
    >

      {dark ? <Sun size={22} /> : <Moon size={22} />}

    </button>

  );

}