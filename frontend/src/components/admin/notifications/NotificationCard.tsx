"use client";

import { Bell } from "lucide-react";

interface Notification {
  id: number;
  title: string;
  message: string;
  created_at: string;
}

interface Props {
  notification: Notification;
}

export default function NotificationCard({
  notification,
}: Props) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">

      <div className="flex items-start gap-4">

        <Bell className="text-blue-600" size={24} />

        <div className="flex-1">

          <h3 className="font-semibold text-lg">
            {notification.title}
          </h3>

          <p className="mt-2 text-gray-600">
            {notification.message}
          </p>

          <p className="mt-3 text-sm text-gray-400">
            {notification.created_at}
          </p>

        </div>

      </div>

    </div>
  );
}