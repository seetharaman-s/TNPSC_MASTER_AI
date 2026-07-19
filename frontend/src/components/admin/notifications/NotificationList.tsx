"use client";

import NotificationCard from "./NotificationCard";

const notifications = [
  {
    id: 1,
    title: "Daily Test Available",
    message: "Today's TNPSC daily test is now live.",
    created_at: "17 Jul 2026 09:00 AM",
  },
  {
    id: 2,
    title: "New Current Affairs",
    message: "Weekly current affairs PDF uploaded.",
    created_at: "16 Jul 2026 07:30 PM",
  },
];

export default function NotificationList() {
  return (
    <div className="space-y-4">

      <h2 className="text-2xl font-bold">
        Notification History
      </h2>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.id}
          notification={notification}
        />
      ))}

    </div>
  );
}