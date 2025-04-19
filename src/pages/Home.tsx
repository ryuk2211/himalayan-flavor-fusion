
import { useState, useEffect } from "react";
import Hero from "@/components/home/Hero";
import MenuCategory from "@/components/menu/MenuCategory";
import { fetchMenuCategories } from "@/services/menuService";
import { MenuCategory as MenuCategoryType } from "@/types/menu";

const Home = () => {
  const [menuCategories, setMenuCategories] = useState<MenuCategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMenuData = async () => {
      try {
        const categories = await fetchMenuCategories();
        setMenuCategories(categories);
      } catch (error) {
        console.error("Failed to fetch menu data", error);
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  return (
    <div>
      <Hero />

      {loading ? (
        <div className="container mx-auto py-20 text-center">
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
        <>
          {menuCategories.map((category) => (
            <MenuCategory 
              key={category.id} 
              title={category.name} 
              items={category.items.slice(0, 4)} // Show only 4 items per category on homepage
            />
          ))}
        </>
      )}

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bitter font-semibold mb-6 text-nepali-maroon">
            Discover the Complete Himalayan Experience
          </h2>
          <p className="max-w-3xl mx-auto text-lg mb-8">
            Our menu features a wide range of traditional Nepali dishes, from momos to thalis, 
            all prepared with authentic spices and techniques.
          </p>
          <a
            href="/menu"
            className="inline-block bg-nepali-red hover:bg-nepali-maroon text-white font-medium py-3 px-8 rounded-lg transition-colors"
          >
            View Full Menu
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
