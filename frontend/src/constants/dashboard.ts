import {
  BookOpen,
  NotebookPen,
  Newspaper,
  Brain,
  PlayCircle,
  ClipboardList,
  BarChart3,
  Bookmark,
} from "lucide-react";

export const dashboardData = {
  greeting: "Welcome Back 👋",
  title: "TNPSC MASTER AI",
  subtitle:
    "Your complete AI-powered TNPSC preparation platform.",

  motivation: {
    quote:
      "Success doesn't come from what you do occasionally. It comes from what you do consistently.",
    author: "Marie Forleo",
  },

  fact: {
    title: "Interesting Fact",
    content:
      "The Constitution of India is the longest written constitution in the world.",
  },
};

export const quickActions = [
  {
    title: "Books",
    icon: BookOpen,
    href: "/books",
  },
  {
    title: "Notes",
    icon: NotebookPen,
    href: "/notes",
  },
  {
    title: "Current Affairs",
    icon: Newspaper,
    href: "/current-affairs",
  },
  {
    title: "Math Tricks",
    icon: Brain,
    href: "/maths-tricks",
  },
  {
    title: "Videos",
    icon: PlayCircle,
    href: "/youtube-learning",
  },
  {
    title: "Mock Test",
    icon: ClipboardList,
    href: "/mock-test",
  },
  {
    title: "Performance",
    icon: BarChart3,
    href: "/performance",
  },
  {
    title: "Bookmarks",
    icon: Bookmark,
    href: "/bookmarks",
  },
];

export const HERO_STATS = [
  {
    id: 1,
    title: "Study Time",
    value: "3h 20m",
    color: "blue",
  },
  {
    id: 2,
    title: "Questions",
    value: "125",
    color: "green",
  },
  {
    id: 3,
    title: "Accuracy",
    value: "92%",
    color: "orange",
  },
  {
    id: 4,
    title: "Current Streak",
    value: "18 Days",
    color: "red",
  },
];