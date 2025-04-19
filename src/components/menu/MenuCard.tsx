
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface MenuItemProps {
  name: string;
  description: string;
  price: string;
  image: string;
  isSpicy?: boolean;
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  isNewItem?: boolean;
}

const MenuCard = ({
  name,
  description,
  price,
  image,
  isSpicy = false,
  isVegetarian = false,
  isGlutenFree = false,
  isNewItem = false,
}: MenuItemProps) => {
  return (
    <div className="group relative flex flex-col bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {isNewItem && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-nepali-yellow text-nepali-maroon font-medium">New</Badge>
          </div>
        )}
      </div>
      
      <div className="flex flex-col p-4 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bitter font-semibold text-foreground">{name}</h3>
          <span className="font-medium text-nepali-red ml-2">{price}</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        
        <div className="flex space-x-2 mt-auto">
          {isVegetarian && (
            <Badge variant="outline" className="border-green-500 text-green-600 bg-green-50">
              Veg
            </Badge>
          )}
          {isSpicy && (
            <Badge variant="outline" className="border-nepali-red text-nepali-red bg-red-50">
              Spicy
            </Badge>
          )}
          {isGlutenFree && (
            <Badge variant="outline" className="border-blue-500 text-blue-600 bg-blue-50">
              GF
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
