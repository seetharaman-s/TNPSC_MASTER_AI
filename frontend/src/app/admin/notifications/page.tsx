"use client";

import NotificationForm from "@/components/admin/notifications/NotificationForm";
import NotificationList from "@/components/admin/notifications/NotificationList";

export default function NotificationsPage() {
  return (
    <main className="space-y-8 p-8">

      <div>
        <h1 className="text-3xl font-bold">
          Notification Center
        </h1>

        <p className="mt-2 text-gray-500">
          Create, send and manage notifications.
        </p>
      </div>

      <NotificationForm />

      <NotificationList />

    </main>
  );
}