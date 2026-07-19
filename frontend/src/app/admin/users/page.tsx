"use client";

import { useEffect, useState } from "react";

import UserTable from "@/components/admin/users/UserTable";
import UserFilters from "@/components/admin/users/UserFilters";
import { UserService } from "@/services/userService";

export default function UsersPage() {

    const [users, setUsers] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const [search, setSearch] = useState("");
    const [role, setRole] = useState("");
    const [status, setStatus] = useState("");

    async function loadUsers() {

        try {

            setLoading(true);

            let response;

            if (search.trim()) {

                response = await UserService.search(search);

            } else if (role) {

                response = await UserService.filterByRole(role);

            } else if (status) {

                response = await UserService.filterByStatus(
                    status === "active"
                );

            } else {

                response = await UserService.getAll();

            }

            setUsers(response.data.items ?? response.data);

        } catch (error) {

            console.error("Failed to load users:", error);

        } finally {

            setLoading(false);

        }

    }

    useEffect(() => {

        loadUsers();

    }, [search, role, status]);

    if (loading) {

        return (

            <div className="p-8">

                Loading users...

            </div>

        );

    }

    return (

        <main className="space-y-6 p-8">

            <div>

                <h1 className="text-3xl font-bold">
                    User Management
                </h1>

                <p className="mt-2 text-gray-500">
                    Manage registered users.
                </p>

            </div>

            <UserFilters
                search={search}
                onSearch={setSearch}
                role={role}
                onRoleChange={setRole}
                status={status}
                onStatusChange={setStatus}
            />

            <UserTable
                users={users}
                onRefresh={loadUsers}
            />

        </main>

    );

}