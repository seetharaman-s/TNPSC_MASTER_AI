"use client";

import { useEffect, useState } from "react";

import GeneralSettings from "@/components/admin/settings/GeneralSettings";
import ThemeSettings from "@/components/admin/settings/ThemeSettings";
import SystemSettings from "@/components/admin/settings/SystemSettings";
import { SettingsService } from "@/services/settingsService";

export default function SettingsPage() {

  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  async function loadSettings() {

    try {

      setLoading(true);

      const data = await SettingsService.get();

      setSettings(data);

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);

    }

  }

  useEffect(() => {

    loadSettings();

  }, []);

  if (loading) {

    return (

      <div className="p-8">

        Loading settings...

      </div>

    );

  }

  return (

    <main className="space-y-8 p-8">

      <div>

        <h1 className="text-3xl font-bold">

          Settings

        </h1>

        <p className="mt-2 text-gray-500">

          Configure TNPSC MASTER AI.

        </p>

      </div>

      <GeneralSettings
        settings={settings}
        onRefresh={loadSettings}
      />

      <ThemeSettings
        settings={settings}
        onRefresh={loadSettings}
      />

      <SystemSettings
        settings={settings}
        onRefresh={loadSettings}
      />

    </main>

  );

}