"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import { UserService } from "@/services/userService";

export default function EditUserPage() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    phone: "",
    language: "Tamil",
    theme: "light",
    profile_image: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  async function loadUser() {
    try {
      setLoading(true);

      const res = await UserService.getById(id);

      const user = res.data;

      setForm({
        full_name: user.full_name ?? "",
        phone: user.phone ?? "",
        language: user.language ?? "Tamil",
        theme: user.theme ?? "light",
        profile_image: user.profile_image ?? "",
      });

    } catch (error) {
      console.error(error);
      alert("Unable to load user.");
    } finally {
      setLoading(false);
    }
  }

  function updateField(
    key: string,
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

      await UserService.update(id, form);

      alert("User updated successfully.");

      router.push("/admin/users");

    } catch (error) {
      console.error(error);
      alert("Unable to update user.");
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-3xl space-y-6 p-8">

      <div>
        <h1 className="text-3xl font-bold">
          Edit User
        </h1>

        <p className="mt-2 text-gray-500">
          Update user information.
        </p>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow space-y-5">

        <div>
          <label className="mb-2 block font-medium">
            Full Name
          </label>

          <input
            value={form.full_name}
            onChange={(e) =>
              updateField("full_name", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Phone
          </label>

          <input
            value={form.phone}
            onChange={(e) =>
              updateField("phone", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Language
          </label>

          <select
            value={form.language}
            onChange={(e) =>
              updateField("language", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          >
            <option>Tamil</option>
            <option>English</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Theme
          </label>

          <select
            value={form.theme}
            onChange={(e) =>
              updateField("theme", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          >
            <option value="light">
              Light
            </option>

            <option value="dark">
              Dark
            </option>
          </select>
        </div>

        <div>
          <label className="mb-2 block font-medium">
            Profile Image URL
          </label>

          <input
            value={form.profile_image}
            onChange={(e) =>
              updateField("profile_image", e.target.value)
            }
            className="w-full rounded-xl border p-3"
          />
        </div>

        <div className="flex justify-end gap-3">

          <button
            onClick={() => router.back()}
            className="rounded-xl bg-gray-500 px-5 py-3 text-white"
          >
            Cancel
          </button>

          <button
            onClick={save}
            disabled={saving}
            className="rounded-xl bg-blue-600 px-5 py-3 text-white disabled:opacity-50"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>

        </div>

      </div>

    </main>
  );
}