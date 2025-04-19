
import MenuCard from "./MenuCard";
import { MenuItem } from "@/types/menu";

interface MenuCategoryProps {
  title: string;
  items: MenuItem[];
}

const MenuCategory = ({ title, items }: MenuCategoryProps) => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="category-title">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {items.map((item) => (
            <MenuCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              isSpicy={item.isSpicy}
              isVegetarian={item.isVegetarian}
              isGlutenFree={item.isGlutenFree}
              isNewItem={item.isNewItem}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuCategory;
