import Link from "next/link";
import ProductList from "@/app/components/ProductList";
import { ProductIType } from "../../types/ProductType";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  let data: ProductIType[] = [];

  try {
    const res = await fetch(
      `${process.env.BACK_END_API_BASE_URL}/api/bazardor/products?category=${slug}`,
    );
    if (!res.ok) throw new Error("API error");
    data = await res.json();
  } catch {
    data = [];
  }

  const items = data.filter((p) => p.category === slug);

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-md px-4 py-20 text-center">
        <p className="text-5xl">🔍</p>
        <h1 className="mt-4 text-xl font-bold text-gray-900 sm:text-2xl">
          তথ্য খুঁজে পাওয়া যায়নি
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          এই ক্যাটাগরিতে কোনো পণ্য নেই, অথবা ঠিকানাটি ভুল।
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-green-600 px-6 py-3 font-bold text-white shadow-md transition-colors hover:bg-green-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white/80 px-8 py-6">
        <h1 className="text-6xl">{items[0].categoryIcon}</h1>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {items[0].categoryNameBn}
          </h1>
          <p className="text-gray-600">
            {items.length.toLocaleString("bn-BD")}টি পণ্যের আজকের দাম ও পরিবর্তন
          </p>
        </div>
      </div>
      <ProductList items={items} />
    </main>
  );
};

export default CategoryPage;
