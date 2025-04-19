
import { useState, useEffect } from "react";
import { fetchMenuCategories } from "@/services/menuService";
import { MenuCategory as MenuCategoryType } from "@/types/menu";
import MenuCategory from "@/components/menu/MenuCategory";

const Menu = () => {
  const [menuCategories, setMenuCategories] = useState<MenuCategoryType[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  useEffect(() => {
    const loadMenuData = async () => {
      try {
        const categories = await fetchMenuCategories();
        setMenuCategories(categories);
        setActiveCategory(categories[0]?.id || null);
      } catch (error) {
        console.error("Failed to fetch menu data", error);
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-nepali-maroon text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bitter font-bold mb-4">Our Menu</h1>
          <p className="text-lg max-w-3xl mx-auto text-white/80">
            Discover our range of authentic Nepali dishes, crafted with traditional
            recipes and the finest ingredients
          </p>
        </div>
      </div>

      <div className="sticky top-16 bg-white shadow-md z-30">
        <div className="container mx-auto px-4 py-4 overflow-x-auto">
          <div className="flex space-x-2 md:space-x-4 md:justify-center">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  activeCategory === category.id
                    ? "bg-nepali-red text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {loading ? (
        <div className="container mx-auto py-16 text-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-10 bg-gray-200 rounded w-1/4 mb-10"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-gray-200 h-72 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto py-10 px-4">
          {activeCategory && (
            <MenuCategory
              title={menuCategories.find(c => c.id === activeCategory)?.name || ""}
              items={menuCategories.find(c => c.id === activeCategory)?.items || []}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Menu;
