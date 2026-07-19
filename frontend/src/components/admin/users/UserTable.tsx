"use client";

import Link from "next/link";
import {
  Eye,
  Pencil,
  Trash2,
  UserCheck,
  UserX,
  Shield,
} from "lucide-react";

import { UserService } from "@/services/userService";

interface User {
  id: number;
  full_name?: string;
  username: string;
  email: string;
  role: "admin" | "user";
  is_active: boolean;
}

interface Props {
  users: User[];
  onRefresh?: () => void;
}

export default function UserTable({
  users,
  onRefresh,
}: Props) {

  async function deleteUser(id: number) {

    if (!confirm("Delete this user?")) return;

    try {

      await UserService.delete(id);

      onRefresh?.();

    } catch (error) {

      console.error(error);

      alert("Unable to delete user.");

    }

  }

  async function toggleStatus(user: User) {

    try {

      if (user.is_active) {

        await UserService.deactivate(user.id);

      } else {

        await UserService.activate(user.id);

      }

      onRefresh?.();

    } catch (error) {

      console.error(error);

    }

  }

  async function changeRole(user: User) {

    try {

      await UserService.changeRole(
        user.id,
        user.role === "admin"
          ? "user"
          : "admin"
      );

      onRefresh?.();

    } catch (error) {

      console.error(error);

    }

  }

  if (users.length === 0) {

    return (

      <div className="rounded-xl bg-white p-8 text-center shadow">

        No users found.

      </div>

    );

  }

  return (

    <div className="overflow-x-auto rounded-2xl bg-white shadow">

      <table className="min-w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="px-5 py-4 text-left">Name</th>

            <th className="px-5 py-4 text-left">Username</th>

            <th className="px-5 py-4 text-left">Email</th>

            <th className="px-5 py-4 text-left">Role</th>

            <th className="px-5 py-4 text-left">Status</th>

            <th className="px-5 py-4 text-center">

              Actions

            </th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user.id}
              className="border-t hover:bg-gray-50"
            >

              <td className="px-5 py-4">

                {user.full_name || "-"}

              </td>

              <td className="px-5 py-4">

                {user.username}

              </td>

              <td className="px-5 py-4">

                {user.email}

              </td>

              <td className="px-5 py-4">

                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm">

                  {user.role}

                </span>

              </td>

              <td className="px-5 py-4">

                {user.is_active ? (

                  <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">

                    Active

                  </span>

                ) : (

                  <span className="rounded-full bg-red-100 px-3 py-1 text-red-700">

                    Inactive

                  </span>

                )}

              </td>

              <td className="px-5 py-4">

                <div className="flex justify-center gap-2">

                  <Link
                    href={`/admin/users/${user.id}`}
                    className="rounded-lg bg-blue-600 p-2 text-white"
                    title="View"
                  >
                    <Eye size={18} />
                  </Link>

                  <Link
                    href={`/admin/users/${user.id}/edit`}
                    className="rounded-lg bg-amber-500 p-2 text-white"
                    title="Edit"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => toggleStatus(user)}
                    className="rounded-lg bg-indigo-600 p-2 text-white"
                    title={
                      user.is_active
                        ? "Deactivate"
                        : "Activate"
                    }
                  >
                    {user.is_active ? (
                      <UserX size={18} />
                    ) : (
                      <UserCheck size={18} />
                    )}
                  </button>

                  <button
                    onClick={() => changeRole(user)}
                    className="rounded-lg bg-purple-600 p-2 text-white"
                    title="Change Role"
                  >
                    <Shield size={18} />
                  </button>

                  <button
                    onClick={() => deleteUser(user.id)}
                    className="rounded-lg bg-red-600 p-2 text-white"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}