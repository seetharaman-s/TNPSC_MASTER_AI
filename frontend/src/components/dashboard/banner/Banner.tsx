"use client";

import Greeting from "./Greeting";
import ThemeToggle from "./ThemeToggle";
import NotificationButton from "./NotificationButton";
import ProfileButton from "./ProfileButton";

export default function Banner() {
  return (
    <header className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-6 text-white shadow-xl">

      <div className="flex justify-between items-start">

        <Greeting />

        <div className="flex items-center gap-4">

          <ThemeToggle />

          <NotificationButton />

          <ProfileButton />

        </div>

      </div>

    </header>
  );
}