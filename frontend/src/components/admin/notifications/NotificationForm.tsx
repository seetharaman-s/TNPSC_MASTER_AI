"use client";

import { useState } from "react";

export default function NotificationForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  async function sendNotification() {
    if (!title || !message) return;

    // await NotificationService.create({
    //   title,
    //   message,
    // });

    alert("Notification sent.");

    setTitle("");
    setMessage("");
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Create Notification
      </h2>

      <div className="space-y-5">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Notification Title"
          className="w-full rounded-xl border p-3"
        />

        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Notification Message"
          className="w-full rounded-xl border p-3"
        />

        <button
          onClick={sendNotification}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Send Notification
        </button>

      </div>

    </div>
  );
}