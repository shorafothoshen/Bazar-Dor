import { CategoryType } from "../types/ProductType";
import CategoryList from "./CategoryList";

const CategoryItem = async () => {
    const res = await fetch(`${process.env.BACK_END_API_BASE_URL}/api/bazardor/categories`);
    const data: CategoryType[] = await res.json();

    return (
        <div className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 py-3">
                <CategoryList categories={data} />
            </div>
        </div>
    );
};

export default CategoryItem;