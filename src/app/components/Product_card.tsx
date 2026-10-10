import { Card } from "@heroui/react";
import Link from "next/link";
import { ProductIType } from "../types/ProductType";

const unitBn: Record<string, string> = {
  kg: "কেজি",
  litre: "লিটার",
  dozen: "ডজন",
  piece: "পিস",
  hali: "হালি",
};

const Product_card = ({ products }: { products: ProductIType }) => {
  return (
          <Link
            // href={`/products/${p.slug}`}
            href=''
            className="block w-full"
          >
            <Card className="w-full rounded-3xl border hover:border-green-700 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3.5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-stone-100 text-2xl shadow-inner">
                  <span role="img" aria-label={products.nameBn}>
                    {products.image}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold tracking-tight text-neutral-900 sm:text-2xl">
                    {products.nameBn}
                  </h3>
                  <span className="text-sm font-medium text-neutral-500">
                    প্রতি {unitBn[products.unit] ?? products.unit}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-end justify-between gap-2">
                <div className="flex flex-col">
                  <span className="text-xs font-medium text-neutral-500 sm:text-sm">
                    আজকের দাম
                  </span>
                  <span className="text-2xl font-extrabold text-neutral-900 sm:text-3xl">
                    {products.today.toLocaleString("bn-BD")}{" "}
                    <span className="text-base font-normal">টাকা</span>
                  </span>
                </div>

                <div
                  className={`inline-flex items-center gap-1 rounded-full bg-neutral-100/80 px-2.5 py-1 text-xs font-semibold sm:text-sm ${
                    products.change.dir==='up' ? "text-rose-600" : "text-emerald-600"
                  }`}
                >
                  <span className="text-[10px]">{products.change.dir==='up' ? "▲" : "▼"}</span>
                  <span>{products.change.pct.toLocaleString("bn-BD")}%</span>
                </div>
              </div>
            </Card>
          </Link>
        );
};

export default Product_card;