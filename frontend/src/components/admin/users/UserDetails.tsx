"use client";

import Link from "next/link";
import {
  User,
  Mail,
  Phone,
  Shield,
  Globe,
  Palette,
  Calendar,
  Clock,
  CheckCircle,
  XCircle,
  Pencil,
} from "lucide-react";

interface UserDetailsProps {
  user: {
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
  };
}

export default function UserDetails({
  user,
}: UserDetailsProps) {

  function formatDate(date?: string) {
    if (!date) return "Never";
    return new Date(date).toLocaleString();
  }

  return (
    <div className="space-y-6">

      {/* Profile Card */}

      <div className="rounded-2xl bg-white p-8 shadow">

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">

          <div className="flex items-center gap-5">

            {user.profile_image ? (
              <img
                src={user.profile_image}
                alt={user.username}
                className="h-24 w-24 rounded-full object-cover border"
              />
            ) : (
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                <User size={40} />
              </div>
            )}

            <div>

              <h2 className="text-3xl font-bold">
                {user.full_name || user.username}
              </h2>

              <p className="text-gray-500">
                @{user.username}
              </p>

            </div>

          </div>

          <Link
            href={`/admin/users/${user.id}/edit`}
            className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700"
          >
            <Pencil size={18} />
            Edit User
          </Link>

        </div>

      </div>

      {/* Details */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow space-y-4">

          <h3 className="text-xl font-semibold">
            Account Information
          </h3>

          <p className="flex items-center gap-3">
            <Mail size={18} />
            <span>{user.email}</span>
          </p>

          <p className="flex items-center gap-3">
            <Phone size={18} />
            <span>{user.phone || "Not Provided"}</span>
          </p>

          <p className="flex items-center gap-3">
            <Shield size={18} />
            <span>{user.role}</span>
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow space-y-4">

          <h3 className="text-xl font-semibold">
            Preferences
          </h3>

          <p className="flex items-center gap-3">
            <Globe size={18} />
            <span>{user.language}</span>
          </p>

          <p className="flex items-center gap-3">
            <Palette size={18} />
            <span>{user.theme}</span>
          </p>

        </div>

      </div>

      {/* Status */}

      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow">

          <h3 className="mb-4 text-xl font-semibold">
            Account Status
          </h3>

          <div className="space-y-3">

            <p className="flex items-center gap-3">

              {user.is_active ? (
                <CheckCircle
                  size={20}
                  className="text-green-600"
                />
              ) : (
                <XCircle
                  size={20}
                  className="text-red-600"
                />
              )}

              <span>
                {user.is_active ? "Active" : "Inactive"}
              </span>

            </p>

            <p className="flex items-center gap-3">

              {user.is_verified ? (
                <CheckCircle
                  size={20}
                  className="text-green-600"
                />
              ) : (
                <XCircle
                  size={20}
                  className="text-orange-500"
                />
              )}

              <span>
                {user.is_verified
                  ? "Verified"
                  : "Not Verified"}
              </span>

            </p>

          </div>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow">

          <h3 className="mb-4 text-xl font-semibold">
            Activity
          </h3>

          <div className="space-y-3">

            <p className="flex items-center gap-3">
              <Clock size={18} />
              <span>
                Last Login: {formatDate(user.last_login)}
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Calendar size={18} />
              <span>
                Created: {formatDate(user.created_at)}
              </span>
            </p>

            <p className="flex items-center gap-3">
              <Calendar size={18} />
              <span>
                Updated: {formatDate(user.updated_at)}
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}