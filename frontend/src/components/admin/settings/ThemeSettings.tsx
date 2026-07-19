"use client";

import { useEffect, useState } from "react";

import {
  SettingsService,
  SettingsUpdate,
} from "@/services/settingsService";

interface Props {
  settings: any;
  onRefresh?: () => void;
}

export default function ThemeSettings({
  settings,
  onRefresh,
}: Props) {

  const [form, setForm] = useState<SettingsUpdate>({
    default_theme: "light",
    default_language: "Tamil",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {

    if (!settings) return;

    setForm({
      default_theme: settings.default_theme ?? "light",
      default_language: settings.default_language ?? "Tamil",
    });

  }, [settings]);

  function updateField(
    key: keyof SettingsUpdate,
    value: string,
  ) {

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

  }

  async function save() {

    try {

      setSaving(true);

      await SettingsService.updateAppearance(form);

      alert("Appearance settings updated successfully.");

      onRefresh?.();

    } catch (error) {

      console.error(error);

      alert("Failed to update appearance settings.");

    } finally {

      setSaving(false);

    }

  }

  return (

    <section className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        Appearance Settings
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Default Theme
          </label>

          <select
            value={form.default_theme ?? "light"}
            onChange={(e) =>
              updateField("default_theme", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Default Language
          </label>

          <select
            value={form.default_language ?? "Tamil"}
            onChange={(e) =>
              updateField("default_language", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="Tamil">Tamil</option>
            <option value="English">English</option>
          </select>

        </div>

      </div>

      <div className="mt-6 flex justify-end">

        <button
          onClick={save}
          disabled={saving}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700 disabled:opacity-50"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </section>

  );

}