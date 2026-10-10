import { ProductIType } from "@/app/types/ProductType";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
const Marquee = async () => {
  const res = await fetch(
    `${process.env.BACK_END_API_BASE_URL}/api/bazardor/products`,
  );
  const data = await res.json();
  return (
    <div className="w-full bg-white/90 border-b border-gray-100">
      <div className="py-3 flex items-center">
        <MarqueeText
          direction="right"
          duration={10}
          pauseOnHover
          >
          {data.map((p: ProductIType) => (
            <div
              key={p.id}
              className="flex items-center gap-2 mr-10 pr-10 border-r border-gray-300"
            >
              <span>{p.image}</span>
              <span className="font-semibold">{p.nameBn}</span>
              <span>
                ৳{p.today.toLocaleString("bn-BD")} টাকা/কেজি
              </span>
              <span
                className={
                  p.change.dir === "up" ? "text-red-600" : "text-green-600"
                }
              >
                {p.change.dir === "up" ? "▲" : "▼"} {p.change.pct.toLocaleString("bn-BD")}%
              </span>
            </div>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
