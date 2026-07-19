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

export default function GeneralSettings({
  settings,
  onRefresh,
}: Props) {

  const [form, setForm] = useState<SettingsUpdate>({
    app_name: "",
    app_logo: "",
    footer_text: "",
    contact_email: "",
    contact_phone: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {

    if (!settings) return;

    setForm({
      app_name: settings.app_name ?? "",
      app_logo: settings.app_logo ?? "",
      footer_text: settings.footer_text ?? "",
      contact_email: settings.contact_email ?? "",
      contact_phone: settings.contact_phone ?? "",
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

      await SettingsService.updateGeneral(form);

      alert("General settings updated successfully.");

      onRefresh?.();

    } catch (error) {

      console.error(error);

      alert("Failed to update settings.");

    } finally {

      setSaving(false);

    }

  }

  return (

    <section className="rounded-2xl bg-white p-6 shadow">

      <h2 className="mb-6 text-2xl font-bold">
        General Settings
      </h2>

      <div className="grid gap-5 md:grid-cols-2">

        <div>

          <label className="mb-2 block font-medium">
            Application Name
          </label>

          <input
            value={form.app_name ?? ""}
            onChange={(e) =>
              updateField("app_name", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Logo URL
          </label>

          <input
            value={form.app_logo ?? ""}
            onChange={(e) =>
              updateField("app_logo", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Contact Email
          </label>

          <input
            type="email"
            value={form.contact_email ?? ""}
            onChange={(e) =>
              updateField("contact_email", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium">
            Contact Phone
          </label>

          <input
            value={form.contact_phone ?? ""}
            onChange={(e) =>
              updateField("contact_phone", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />

        </div>

      </div>

      <div className="mt-5">

        <label className="mb-2 block font-medium">
          Footer Text
        </label>

        <textarea
          rows={3}
          value={form.footer_text ?? ""}
          onChange={(e) =>
            updateField("footer_text", e.target.value)
          }
          className="w-full rounded-xl border p-3"
        />

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