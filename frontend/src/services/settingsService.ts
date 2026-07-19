import api from "./api";

export interface Settings {
  id: number;

  app_name: string;
  app_logo?: string;
  footer_text?: string;

  contact_email?: string;
  contact_phone?: string;

  default_language: string;
  default_theme: string;

  default_exam: string;

  current_affairs_enabled: boolean;
  daily_quiz_enabled: boolean;
  motivation_enabled: boolean;
  ai_explanation_enabled: boolean;

  max_upload_size_mb: number;
  upload_path: string;

  created_at: string;
  updated_at: string;
}

export type SettingsUpdate = Partial<
  Omit<Settings, "id" | "created_at" | "updated_at">
>;

export const SettingsService = {

  // ---------------------------------------
  // Get Settings
  // ---------------------------------------

  async get(): Promise<Settings> {

    const response = await api.get("/settings");

    return response.data;

  },

  // ---------------------------------------
  // Update All Settings
  // ---------------------------------------

  async update(
    data: SettingsUpdate,
  ): Promise<Settings> {

    const response = await api.put(
      "/settings",
      data,
    );

    return response.data;

  },

  // ---------------------------------------
  // General Settings
  // ---------------------------------------

  async updateGeneral(
    data: SettingsUpdate,
  ): Promise<Settings> {

    const response = await api.put(
      "/settings/general",
      data,
    );

    return response.data;

  },

  // ---------------------------------------
  // Appearance
  // ---------------------------------------

  async updateAppearance(
    data: SettingsUpdate,
  ): Promise<Settings> {

    const response = await api.put(
      "/settings/appearance",
      data,
    );

    return response.data;

  },

  // ---------------------------------------
  // TNPSC Settings
  // ---------------------------------------

  async updateTNPSC(
    data: SettingsUpdate,
  ): Promise<Settings> {

    const response = await api.put(
      "/settings/tnpsc",
      data,
    );

    return response.data;

  },

  // ---------------------------------------
  // Upload Settings
  // ---------------------------------------

  async updateUpload(
    data: SettingsUpdate,
  ): Promise<Settings> {

    const response = await api.put(
      "/settings/upload",
      data,
    );

    return response.data;

  },

  // ---------------------------------------
  // Reset Settings
  // ---------------------------------------

  async reset(): Promise<Settings> {

    const response = await api.post(
      "/settings/reset",
    );

    return response.data;

  },

};