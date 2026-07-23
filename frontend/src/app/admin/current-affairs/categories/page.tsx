"use client";

import { useEffect, useState } from "react";
import {
    Plus,
    Pencil,
    Trash2,
    Search,
    Tag,
    CheckCircle2,
    XCircle,
} from "lucide-react";

import { CurrentAffairsCategoryService } from "@/services/currentAffairsCategoryService";

interface Category {
    id: number;
    name: string;
    tamil_name: string;
    icon: string;
    color: string;
    sort_order: number;
    is_active: boolean;
}

export default function CategoriesPage() {

    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const [form, setForm] = useState({
        id: 0,
        name: "",
        tamil_name: "",
        icon: "",
        color: "#2563eb",
        sort_order: 1,
        is_active: true,
    });

    useEffect(() => {
        loadCategories();
    }, []);

    async function loadCategories() {

        try {

            const response =
                await CurrentAffairsCategoryService.getAll();

            setCategories(response);

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    }

    function resetForm() {

        setForm({
            id: 0,
            name: "",
            tamil_name: "",
            icon: "",
            color: "#2563eb",
            sort_order: 1,
            is_active: true,
        });

    }

    async function saveCategory() {

        try {

            if (form.id === 0) {

                await CurrentAffairsCategoryService.create(form);

            } else {

                await CurrentAffairsCategoryService.update(
                    form.id,
                    form
                );

            }

            resetForm();

            loadCategories();

        } catch (error) {

            console.error(error);

        }

    }

    async function deleteCategory(id: number) {

        if (!confirm("Delete category?")) return;

        try {

            await CurrentAffairsCategoryService.delete(id);

            loadCategories();

        } catch (error) {

            console.error(error);

        }

    }

    const filtered = categories.filter(category =>
        category.name
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (

        <main className="max-w-7xl mx-auto p-8">

            <div className="flex justify-between items-center mb-8">

                <div>

                    <h1 className="text-3xl font-bold">

                        Current Affairs Categories

                    </h1>

                    <p className="text-gray-500">

                        Manage Article Categories

                    </p>

                </div>

            </div>

            <div className="grid lg:grid-cols-3 gap-8">

                {/* Form */}

                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <h2 className="text-xl font-semibold mb-6">

                        {form.id === 0
                            ? "Create Category"
                            : "Edit Category"}

                    </h2>

                    <div className="space-y-4">

                        <input
                            placeholder="Category Name"
                            value={form.name}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    name:e.target.value
                                })
                            }
                            className="w-full border rounded-lg p-3"
                        />

                        <input
                            placeholder="Tamil Name"
                            value={form.tamil_name}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    tamil_name:e.target.value
                                })
                            }
                            className="w-full border rounded-lg p-3"
                        />

                        <input
                            placeholder="Lucide Icon Name"
                            value={form.icon}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    icon:e.target.value
                                })
                            }
                            className="w-full border rounded-lg p-3"
                        />

                        <input
                            type="color"
                            value={form.color}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    color:e.target.value
                                })
                            }
                            className="w-full h-12"
                        />

                        <input
                            type="number"
                            value={form.sort_order}
                            onChange={(e)=>
                                setForm({
                                    ...form,
                                    sort_order:Number(e.target.value)
                                })
                            }
                            className="w-full border rounded-lg p-3"
                        />

                        <label className="flex items-center gap-2">

                            <input
                                type="checkbox"
                                checked={form.is_active}
                                onChange={(e)=>
                                    setForm({
                                        ...form,
                                        is_active:e.target.checked
                                    })
                                }
                            />

                            Active

                        </label>

                        <button
                            onClick={saveCategory}
                            className="w-full bg-blue-600 text-white rounded-lg py-3"
                        >

                            <Plus className="inline mr-2" size={18}/>

                            {form.id === 0
                                ? "Create"
                                : "Update"}

                        </button>

                    </div>

                </div>

                {/* Table */}

                <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6">

                    <div className="relative mb-6">

                        <Search
                            className="absolute left-3 top-4 text-gray-400"
                            size={18}
                        />

                        <input
                            placeholder="Search..."
                            value={search}
                            onChange={(e)=>
                                setSearch(e.target.value)
                            }
                            className="w-full border rounded-lg py-3 pl-10"
                        />

                    </div>

                    <table className="w-full">

                        <thead>

                            <tr className="border-b">

                                <th className="text-left py-3">

                                    Category

                                </th>

                                <th>

                                    Color

                                </th>

                                <th>

                                    Status

                                </th>

                                <th>

                                    Actions

                                </th>

                            </tr>

                        </thead>

                        <tbody>

                            {loading ? (

                                <tr>

                                    <td colSpan={4} className="py-8 text-center">

                                        Loading...

                                    </td>

                                </tr>

                            ) : (

                                filtered.map(category => (

                                    <tr
                                        key={category.id}
                                        className="border-b"
                                    >

                                        <td className="py-4">

                                            <div className="flex items-center gap-3">

                                                <Tag size={18}/>

                                                <div>

                                                    <div className="font-semibold">

                                                        {category.name}

                                                    </div>

                                                    <div className="text-sm text-gray-500">

                                                        {category.tamil_name}

                                                    </div>

                                                </div>

                                            </div>

                                        </td>

                                        <td>

                                            <div
                                                className="w-8 h-8 rounded-full"
                                                style={{
                                                    background: category.color
                                                }}
                                            />

                                        </td>

                                        <td>

                                            {category.is_active ? (

                                                <CheckCircle2
                                                    className="text-green-600"
                                                />

                                            ) : (

                                                <XCircle
                                                    className="text-red-600"
                                                />

                                            )}

                                        </td>

                                        <td>

                                            <div className="flex gap-2">

                                                <button
                                                    onClick={()=>
                                                        setForm(category)
                                                    }
                                                    className="bg-green-600 text-white rounded-lg p-2"
                                                >

                                                    <Pencil size={16}/>

                                                </button>

                                                <button
                                                    onClick={()=>
                                                        deleteCategory(category.id)
                                                    }
                                                    className="bg-red-600 text-white rounded-lg p-2"
                                                >

                                                    <Trash2 size={16}/>

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

        </main>

    );

}