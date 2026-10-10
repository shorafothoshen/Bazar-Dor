import HeroSection from "./components/HeroSection";
import Product_card from "./components/Product_card";
import AllProducts from "./components/AllProducts";
import { ProductIType } from "./types/ProductType";

const Home = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_BASE_URL}/api/bazardor/products`,);
  const data: ProductIType[] = await res.json();
  return (
    <main className="max-w-7xl mx-auto px-4">
      <HeroSection />
      <div className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
          <span className="text-rose-600">▲</span>আজ দাম বেড়েছে
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.filter((p) => p.change.dir === "up").slice(0,6).map((products) => (
            <Product_card key={products.id} products={products} />
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-gray-900">
          <span className="text-emerald-600">▼</span>আজ দাম কমেছে
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.filter((p) => p.change.dir === "down").slice(0,6).map((products) => (
            <Product_card key={products.id} products={products} />
          ))}
        </div>
      </div>
      <AllProducts products={data} />
    </main>
  );
};

export default Home;
