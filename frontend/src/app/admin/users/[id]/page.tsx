"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import UserDetails from "@/components/admin/users/UserDetails";
import { UserService } from "@/services/userService";

interface User {
  id: number;
  username: string;
  full_name?: string;
  email: string;
  phone?: string;
  role: string;
  is_active: boolean;
  is_verified: boolean;
  language: string;
  theme: string;
  profile_image?: string;
  last_login?: string;
  created_at: string;
  updated_at: string;
}

export default function UserDetailsPage() {
  const params = useParams();

  const id = Number(params.id);

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadUser();
  }, [id]);

  async function loadUser() {
    try {
      setLoading(true);
      setError("");

      const res = await UserService.getById(id);

      setUser(res.data);

    } catch (err) {
      console.error(err);
      setError("Failed to load user details.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="p-8">
        Loading user details...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-red-600">
        {error}
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-8">
        User not found.
      </div>
    );
  }

  return (
    <main className="mx-auto max-w-5xl space-y-6 p-8">

      <div>

        <h1 className="text-3xl font-bold">
          User Details
        </h1>

        <p className="mt-2 text-gray-500">
          View complete information about this user.
        </p>

      </div>

      <UserDetails user={user} />

    </main>
  );
}