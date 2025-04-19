
import { MenuItem, MenuCategory } from "@/types/menu";

// This simulates the API data that would come from our backend
// In a real application, we would fetch this from an API endpoint
export const fetchMenuCategories = async (): Promise<MenuCategory[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return [
    {
      id: "featured",
      name: "Featured",
      items: featuredItems
    },
    {
      id: "specials",
      name: "Specials",
      items: specialItems
    },
    {
      id: "momos",
      name: "Momo Bowls",
      items: momoItems
    },
    {
      id: "dalbhat",
      name: "Dal Bhat Sets",
      items: dalBhatItems
    },
    {
      id: "streetfood",
      name: "Street Food",
      items: streetFoodItems
    },
    {
      id: "drinks",
      name: "Drinks",
      items: drinkItems
    }
  ];
};

export const fetchMenuItemsByCategory = async (categoryId: string): Promise<MenuItem[]> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const categories = await fetchMenuCategories();
  const category = categories.find(c => c.id === categoryId);
  
  return category ? category.items : [];
};

// Menu items data
const featuredItems: MenuItem[] = [
  {
    id: "f1",
    name: "Everest Momo Platter",
    description: "Selection of our finest momos including chicken, buff, and vegetable varieties with three signature dipping sauces",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "featured",
    isNewItem: true
  },
  {
    id: "f2",
    name: "Himalayan Thali",
    description: "Traditional Nepali thali with rice, lentils, vegetables, pickles, and your choice of protein",
    price: "$22.99",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "featured",
    isVegetarian: true
  },
  {
    id: "f3",
    name: "Kathmandu Goat Curry",
    description: "Slow-cooked tender goat meat in rich aromatic gravy with hints of cinnamon and cardamom",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "featured",
    isSpicy: true
  },
  {
    id: "f4",
    name: "Sherpa Noodle Soup",
    description: "Hearty high-altitude soup with handmade noodles, vegetables, and yak cheese",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "featured"
  }
];

const specialItems: MenuItem[] = [
  {
    id: "s1",
    name: "Maharaja Lamb Shank",
    description: "Tender lamb shank slow-cooked in royal spice blend, served with saffron rice and garlic naan",
    price: "$26.99",
    image: "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "specials",
    isSpicy: true
  },
  {
    id: "s2",
    name: "Annapurna Vegetable Medley",
    description: "Mountain-style mixed vegetables cooked with unique Nepali spices and paneer cheese",
    price: "$17.99",
    image: "https://images.unsplash.com/photo-1590510456852-2fc142fcb170?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "specials",
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: "s3",
    name: "Himalayan Truffle Rice",
    description: "Nepali-style fried rice with rare Himalayan truffles, vegetables, and egg",
    price: "$23.99",
    image: "https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "specials",
    isNewItem: true
  }
];

const momoItems: MenuItem[] = [
  {
    id: "m1",
    name: "Classic Chicken Momos",
    description: "Steamed dumplings filled with minced chicken, ginger, garlic, and Nepali spices",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1568966299082-52568c60615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "momos"
  },
  {
    id: "m2",
    name: "Vegetable Jhol Momos",
    description: "Vegetable dumplings served in spicy, tangy tomato and sesame broth",
    price: "$13.99",
    image: "https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "momos",
    isVegetarian: true,
    isSpicy: true
  },
  {
    id: "m3",
    name: "Kothey Momos",
    description: "Pan-fried buff momos with crispy bottom and juicy filling",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1625398407796-82702fb17533?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "momos"
  },
  {
    id: "m4",
    name: "Cheese Chilli Momos",
    description: "Fried momos tossed in spicy chilli sauce and melted cheese",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1583032015879-e5022cb87c3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "momos",
    isSpicy: true,
    isNewItem: true
  }
];

const dalBhatItems: MenuItem[] = [
  {
    id: "db1",
    name: "Traditional Dal Bhat",
    description: "Nepal's national dish: lentil soup, rice, vegetable curry, spinach, pickles, and papadum",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1631292784640-2b24be784d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "dalbhat",
    isVegetarian: true
  },
  {
    id: "db2",
    name: "Chicken Dal Bhat Power Set",
    description: "Complete meal with lentil soup, rice, chicken curry, vegetables, pickles, and yogurt",
    price: "$21.99",
    image: "https://images.unsplash.com/photo-1596797038530-2c107aa4606c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "dalbhat"
  },
  {
    id: "db3",
    name: "Mountain Goat Dal Bhat",
    description: "Authentic trekking-style meal with rice, lentils, and spicy mountain goat curry",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "dalbhat",
    isSpicy: true
  }
];

const streetFoodItems: MenuItem[] = [
  {
    id: "sf1",
    name: "Kathmandu Chatamari",
    description: "Newari rice crepe topped with minced buffalo meat, egg, and spices",
    price: "$12.99",
    image: "https://images.unsplash.com/photo-1599749001441-a2163368c06d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "streetfood"
  },
  {
    id: "sf2",
    name: "Samosa Chaat",
    description: "Crushed samosas topped with yogurt, chutneys, chickpeas, and spices",
    price: "$10.99",
    image: "https://images.unsplash.com/photo-1541518763669-27fef09b1a0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "streetfood",
    isVegetarian: true,
    isSpicy: true
  },
  {
    id: "sf3",
    name: "Aloo Tama",
    description: "Tangy and spicy bamboo shoot soup with potatoes and black-eyed peas",
    price: "$11.99",
    image: "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "streetfood",
    isVegetarian: true,
    isGlutenFree: true
  },
  {
    id: "sf4",
    name: "Sel Roti",
    description: "Traditional sweet rice bread ring, crispy outside and soft inside",
    price: "$8.99",
    image: "https://images.unsplash.com/photo-1530465548427-883c8f348a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "streetfood",
    isVegetarian: true
  }
];

const drinkItems: MenuItem[] = [
  {
    id: "d1",
    name: "Masala Chai",
    description: "Authentic spiced tea with cardamom, cinnamon, ginger, and milk",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    isVegetarian: true
  },
  {
    id: "d2",
    name: "Himalayan Butter Tea",
    description: "Traditional high-altitude tea with butter and salt, perfect for cold weather",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks"
  },
  {
    id: "d3",
    name: "Mango Lassi",
    description: "Refreshing yogurt drink blended with mango and a hint of cardamom",
    price: "$5.99",
    image: "https://images.unsplash.com/photo-1527661591475-527312dd65f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "drinks",
    isVegetarian: true
  }
];
