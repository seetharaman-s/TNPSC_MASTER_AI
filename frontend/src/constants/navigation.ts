import {
  Home,
  BookOpen,
  NotebookPen,
  Newspaper,
  Brain,
  PlayCircle,
  ClipboardList,
  BarChart3,
  Bookmark,
  Settings,
} from "lucide-react";

import { NavigationItem } from "@/types/navigation";

export const SIDEBAR_MENU: NavigationItem[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: Home,
  },
  {
    id: 2,
    title: "Books",
    path: "/books",
    icon: BookOpen,
  },
  {
    id: 3,
    title: "Notes",
    path: "/notes",
    icon: NotebookPen,
  },
  {
    id: 4,
    title: "Current Affairs",
    path: "/current-affairs",
    icon: Newspaper,
    badge: "LIVE",
  },
  {
    id: 5,
    title: "Math Tricks",
    path: "/maths-tricks",
    icon: Brain,
  },
  {
    id: 6,
    title: "Videos",
    path: "/youtube-learning",
    icon: PlayCircle,
  },
  {
    id: 7,
    title: "Mock Tests",
    path: "/mock-test",
    icon: ClipboardList,
  },
  {
    id: 8,
    title: "Performance",
    path: "/performance",
    icon: BarChart3,
  },
  {
    id: 9,
    title: "Bookmarks",
    path: "/bookmarks",
    icon: Bookmark,
  },
  {
    id: 10,
    title: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export const MOBILE_MENU = [
  SIDEBAR_MENU[0],
  SIDEBAR_MENU[1],
  SIDEBAR_MENU[6],
  SIDEBAR_MENU[7],
  SIDEBAR_MENU[9],
];