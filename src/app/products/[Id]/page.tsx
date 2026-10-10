import Link from "next/link";
import { ProductIType } from "../../types/ProductType";
import { MdKeyboardArrowRight } from "react-icons/md";

interface DetailsPageProps {
  params: Promise<{ Id: string }>;
}

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  hali: "হালি",
};

const bn = (n: number) =>
  Number.isInteger(n)
    ? n.toLocaleString("bn-BD")
    : n.toLocaleString("bn-BD", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

const ProductDetailsPage = async ({ params }: DetailsPageProps) => {
  const { Id } = await params;

  const res = await fetch(
    `${process.env.BACK_END_API_BASE_URL}/api/bazardor/products/${Id}`,
  );
  const p: ProductIType = await res.json();

  const lowest = p.markets.reduce((a,b)=>(b.min < a.min ? b : a));
  const highest = p.markets.reduce((a,b)=>(b.max > a.max ? b : a));
  const avg = Math.round(p.markets.reduce((sum, m)=>sum + (m.min + m.max)/2, 0)/p.markets.length);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <nav className="mb-4 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/" className="hover:text-green-700">
          হোম
        </Link>
        <p>
          <MdKeyboardArrowRight />
        </p>
        <Link href={`/Category/${p.category}`} className="hover:text-green-700">
          {p.categoryNameBn}
        </Link>
        <p>
          <MdKeyboardArrowRight />
        </p>
        <span className="text-gray-800">{p.nameBn}</span>
      </nav>

      <section className="flex flex-col gap-4 rounded-3xl border border-gray-200 bg-white/80 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-100 text-4xl">
            {p.image}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">{p.nameBn}</h1>
            <p className="text-sm text-gray-500">
              প্রতি {unitBn[p.unit]} · {p.categoryNameBn}
            </p>
            <p className="mt-1 text-sm text-gray-700">
              গতকালের তুলনায় আজ দাম{" "}
              <span className="font-bold">
                {p.change.dir ? "বেড়েছে" : "কমেছে"}
              </span>
              {" · "}
              {bn(Math.abs(p.today - p.yesterday))} টাকা
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 px-8 py-4 text-center">
          <p className="text-xs text-gray-500">আজকের দাম</p>
          <p className="text-4xl font-extrabold text-gray-900">{bn(p.today)}</p>
          <p className="text-sm text-gray-500">টাকা / {unitBn[p.unit]}</p>
          <p
            className={`mt-1 text-sm font-semibold ${
              p.change.dir === "up" ? "text-rose-600" : "text-emerald-600"
            }`}
          >
            {p.change.dir === "up" ? "▲" : "▼"} {bn(p.change.pct)}%
          </p>
        </div>
      </section>
      <section className="mt-6 rounded-3xl border border-gray-200 bg-white/80 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
            <p className="mt-1 text-2xl font-bold text-emerald-600">
              {bn(lowest.min)} <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              সবচেয়ে কম দামের বাজার: {lowest.market}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
            <p className="mt-1 text-2xl font-bold text-rose-600">
              {bn(highest.max)} <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              সবচেয়ে বেশি দামের বাজার: {highest.market}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-4">
            <p className="text-xs text-gray-500">গড় দাম</p>
            <p className="text-2xl font-bold text-green-700">
              {bn(avg)}{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              প্রতি {unitBn[p.unit]}-এর হিসাবে
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6 rounded-3xl border border-gray-200 bg-white/80 p-6">
        <h2 className="mb-4 text-xl font-bold text-gray-900">
          বাজারভিত্তিক আজকের দাম
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-gray-200">
          <table className="w-full min-w-[640px] text-md">
            <thead>
              <tr className="bg-white text-gray-500">
                <th className="px-4 py-3 text-left font-medium">বাজার</th>
                <th className="px-4 py-3 text-left font-medium">বিভাগ</th>
                <th className="px-4 py-3 text-right font-medium">সর্বনিম্ন</th>
                <th className="px-4 py-3 text-right font-medium">সর্বোচ্চ</th>
                <th className="px-4 py-3 text-right font-medium">গড়</th>
              </tr>
            </thead>
            <tbody>
              {p.markets.map((m, i) => (
                <tr
                  key={m.market}
                  className={`border-t border-gray-200 ${
                    i % 2 === 1 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="px-4 py-3 font-medium text-gray-900">
                    {m.market}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{m.division}</td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {bn(m.min)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right text-gray-700">
                    {bn(m.max)} টাকা
                  </td>
                  <td className="px-4 py-3 text-right font-bold text-gray-900">
                    {bn((m.min + m.max) / 2)} টাকা
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;
