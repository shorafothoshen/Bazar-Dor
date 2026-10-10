'use client'
import { useState } from "react";
import { CategoryType } from "../types/ProductType";
import Link from "next/link";

const CategoryList = ({ categories }: { categories: CategoryType[] }) => {
    const [active, setActive] = useState<string>("");
    return (
        <div className="flex gap-3 overflow-x-auto">
            {categories.map((c) => (
                <Link
                    key={c.id}
                    href={`/Category/${c.slug}`}
                    onClick={() => setActive(c.slug)}
                    className={`flex items-center gap-1 px-4 py-2 rounded-xl cursor-pointer ${active === c.slug? "bg-green-600 text-white": " hover:bg-gray-200"}`}>
                    <h1>{c.icon}</h1>
                    <h1>{c.nameBn}</h1>
                </Link>
            ))}
        </div>
    );
};

export default CategoryList;