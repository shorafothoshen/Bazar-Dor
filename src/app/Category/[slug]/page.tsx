import ProductList from "@/app/components/ProductList";
import { ProductIType } from "../../types/ProductType";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_BASE_URL}/api/bazardor/products?category=${slug}`);
  const data: ProductIType[] = await res.json();

  const items = data.filter((p) => p.category === slug);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex items-center gap-5 rounded-3xl border border-gray-200 bg-white/80 px-8 py-6">
        <h1 className="text-6xl">{items[0].categoryIcon}</h1>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{items[0].categoryNameBn}</h1>
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