export interface CurrentAffair {
  id: number;

  title: string;
  category: string;
  topic?: string;

  content: string;

  source?: string;
  pdf_url?: string;
  image_url?: string;

  publish_date: string;

  language: string;

  featured: boolean;
  is_active: boolean;

  views: number;

  created_at: string;
  updated_at: string;
}

export interface CurrentAffairCreate {
  title: string;
  category: string;
  topic?: string;

  content: string;

  source?: string;
  pdf_url?: string;
  image_url?: string;

  publish_date: string;

  language: string;

  featured?: boolean;
  is_active?: boolean;
}

export type CurrentAffairUpdate = Partial<CurrentAffairCreate>;