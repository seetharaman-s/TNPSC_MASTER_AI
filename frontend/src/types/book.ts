export interface Book {
  id: number;
  title: string;
  subject: string;
  standard: number;
  medium: "Tamil" | "English";
  cover: string;
  pdf: string;
  description: string;

  pages: number;
  rating: number;
  downloads: number;
}