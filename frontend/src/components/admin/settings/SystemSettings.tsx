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

export default function SystemSettings({
  settings,
  onRefresh,
}: Props) {

  const [form, setForm] = useState<SettingsUpdate>({
    default_exam: "Group 4",
    current_affairs_enabled: true,
    daily_quiz_enabled: true,
    motivation_enabled: true,
    ai_explanation_enabled: true,
    max_upload_size_mb: 50,
    upload_path: "uploads/",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {

    if (!settings) return;

    setForm({
      default_exam: settings.default_exam,
      current_affairs_enabled: settings.current_affairs_enabled,
      daily_quiz_enabled: settings.daily_quiz_enabled,
      motivation_enabled: settings.motivation_enabled,
      ai_explanation_enabled: settings.ai_explanation_enabled,
      max_upload_size_mb: settings.max_upload_size_mb,
      upload_path: settings.upload_path,
    });

  }, [settings]);

  function update<K extends keyof SettingsUpdate>(
    key: K,
    value: SettingsUpdate[K],
  ) {

    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

  }

  async function save() {

    try {

      setSaving(true);

      await SettingsService.update({
        ...form,
      });

      alert("System settings updated successfully.");

      onRefresh?.();

    } catch (error) {

      console.error(error);

      alert("Failed to update system settings.");

    } finally {

      setSaving(false);

    }

  }

  async function reset() {

    if (!confirm("Reset all settings to defaults?")) {
      return;
    }

    try {

      setSaving(true);

      await SettingsService.reset();

      alert("Settings restored successfully.");

      onRefresh?.();

    } catch (error) {

      console.error(error);

      alert("Unable to reset settings.");

    } finally {

      setSaving(false);

    }

  }

  return (

    <section className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">

        System Settings

      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Default TNPSC Exam
          </label>

          <select
            value={form.default_exam}
            onChange={(e) =>
              update("default_exam", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="Group 1">Group 1</option>
            <option value="Group 2">Group 2</option>
            <option value="Group 2A">Group 2A</option>
            <option value="Group 4">Group 4</option>
            <option value="VAO">VAO</option>
          </select>

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Maximum Upload Size (MB)
          </label>

          <input
            type="number"
            min={1}
            max={500}
            value={form.max_upload_size_mb}
            onChange={(e) =>
              update(
                "max_upload_size_mb",
                Number(e.target.value),
              )
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

      </div>

      <div className="mt-6">

        <label className="mb-2 block font-medium">
          Upload Folder
        </label>

        <input
          value={form.upload_path}
          onChange={(e) =>
            update("upload_path", e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />

      </div>

      <div className="mt-8 space-y-4">

        {[
          {
            key: "current_affairs_enabled",
            label: "Enable Current Affairs",
          },
          {
            key: "daily_quiz_enabled",
            label: "Enable Daily Quiz",
          },
          {
            key: "motivation_enabled",
            label: "Enable Daily Motivation",
          },
          {
            key: "ai_explanation_enabled",
            label: "Enable AI Explanations",
          },
        ].map((item) => (

          <label
            key={item.key}
            className="flex items-center justify-between rounded-xl border p-4"
          >

            <span>{item.label}</span>

            <input
              type="checkbox"
              checked={Boolean(form[item.key as keyof SettingsUpdate])}
              onChange={(e) =>
                update(
                  item.key as keyof SettingsUpdate,
                  e.target.checked as never,
                )
              }
            />

          </label>

        ))}

      </div>

      <div className="mt-8 flex justify-end gap-3">

        <button
          onClick={reset}
          disabled={saving}
          className="rounded-xl bg-red-600 px-5 py-3 text-white"
        >
          Reset
        </button>

        <button
          onClick={save}
          disabled={saving}
          className="rounded-xl bg-blue-600 px-5 py-3 text-white"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>

      </div>

    </section>

  );

}