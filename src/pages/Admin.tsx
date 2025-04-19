
import { useState, useEffect } from "react";
import { fetchMenuCategories } from "@/services/menuService";
import { MenuCategory, MenuItem } from "@/types/menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Admin = () => {
  const [menuCategories, setMenuCategories] = useState<MenuCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [formData, setFormData] = useState<Partial<MenuItem>>({
    name: "",
    description: "",
    price: "",
    image: "",
    isSpicy: false,
    isVegetarian: false,
    isGlutenFree: false,
    isNewItem: false,
  });

  useEffect(() => {
    const loadMenuData = async () => {
      try {
        const categories = await fetchMenuCategories();
        setMenuCategories(categories);
        if (categories.length > 0) {
          setActiveCategory(categories[0].id);
        }
      } catch (error) {
        console.error("Failed to fetch menu data", error);
      } finally {
        setLoading(false);
      }
    };

    loadMenuData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData({ ...formData, [name]: checked });
  };

  const handleCategoryChange = (value: string) => {
    setActiveCategory(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, this would send the data to the backend API
    console.log("Submitting new menu item:", {
      ...formData,
      category: activeCategory,
      id: `new-${Date.now()}`, // Generate a temporary ID
    });

    // Reset form after submit
    setFormData({
      name: "",
      description: "",
      price: "",
      image: "",
      isSpicy: false,
      isVegetarian: false,
      isGlutenFree: false,
      isNewItem: false,
    });

    // Show success message
    alert("Item added successfully! (In a real app, this would be saved to the database)");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nepali-red"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-8 text-center">Menu Admin Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Current Menu Items */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Current Menu</h2>
              
              <div className="space-y-6">
                {menuCategories.map((category) => (
                  <div key={category.id} className="border rounded-lg p-4">
                    <h3 className="font-medium text-lg mb-3">{category.name}</h3>
                    <ul className="space-y-2">
                      {category.items.map((item) => (
                        <li key={item.id} className="text-sm border-b pb-2">
                          <div className="font-medium">{item.name}</div>
                          <div className="text-gray-600 text-xs">{item.price}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Add/Edit Form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Add New Menu Item</h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="category">
                    Category
                  </label>
                  <Select
                    value={activeCategory}
                    onValueChange={handleCategoryChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {menuCategories.map((category) => (
                        <SelectItem key={category.id} value={category.id}>
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="name">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="description">
                    Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="price">
                    Price
                  </label>
                  <Input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    placeholder="$0.00"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="image">
                    Image URL
                  </label>
                  <Input
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="https://example.com/image.jpg"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isVegetarian"
                      checked={formData.isVegetarian}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("isVegetarian", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="isVegetarian"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Vegetarian
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isSpicy"
                      checked={formData.isSpicy}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("isSpicy", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="isSpicy"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Spicy
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isGlutenFree"
                      checked={formData.isGlutenFree}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("isGlutenFree", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="isGlutenFree"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Gluten Free
                    </label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="isNewItem"
                      checked={formData.isNewItem}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange("isNewItem", checked as boolean)
                      }
                    />
                    <label
                      htmlFor="isNewItem"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      New Item
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-nepali-red hover:bg-nepali-maroon"
                >
                  Add Menu Item
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
