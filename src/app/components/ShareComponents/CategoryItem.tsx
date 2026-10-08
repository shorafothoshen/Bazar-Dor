interface CategoryType{
    id: string;
    slug: string;
    nameBn: string;
    icon: string;
}
const CategoryItem = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_ANALYTICS_BASE_URL}/api/bazardor/categories`,{ cache: "force-cache" });
    const data = await res.json();
    return (
         <div className="sticky top-0 z-50 w-full bg-white/90 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-3 flex gap-3">
                {data.map((cat:CategoryType) => (
                    <div key={cat.id} className="flex gap-1 items-center cursor-pointer">
                        <h1>{cat.icon}</h1>
                        <h1>{cat.nameBn}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryItem;