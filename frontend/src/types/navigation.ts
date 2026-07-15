import { LucideIcon } from "lucide-react";

export interface NavigationItem {
  id: number;
  title: string;
  path: string;
  icon: LucideIcon;
  badge?: string;
  disabled?: boolean;
}