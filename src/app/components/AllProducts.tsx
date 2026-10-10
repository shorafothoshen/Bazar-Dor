'use client'
import { useState } from "react";
import { Select, ListBox } from "@heroui/react";
import Product_card from "./Product_card";
import { ProductIType } from "../types/ProductType";

const AllProducts = ({ products }: { products: ProductIType[] }) => {
  const [sort, setSort] = useState<string>("default");
  const sorted = [...products].sort((a, b) => {
    if (sort === "asc") return a.today - b.today;
    if (sort === "desc") return b.today - a.today;
    return 0;
  });

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-900">সব পণ্য</h2>

      <div className="mt-3 mb-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-gray-600">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য দেখানো হচ্ছে
        </p>

        <div className="flex items-center gap-2">
          <span className="text-gray-600">সাজান</span>
          <Select
            aria-label="sajan"
            className="w-[200px]"
            value={sort}
            onChange={(v) => setSort(String(v))}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="default" textValue="ডিফল্ট">
                  ডিফল্ট
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="asc" textValue="দাম: কম থেকে বেশি">
                  দাম: কম থেকে বেশি
                  <ListBox.ItemIndicator />
                </ListBox.Item>
                <ListBox.Item id="desc" textValue="দাম: বেশি থেকে কম">
                  দাম: বেশি থেকে কম
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

     <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <Product_card key={p.id} products={p} />
          ))}
        </div>
    </div>
  );
};

export default AllProducts;