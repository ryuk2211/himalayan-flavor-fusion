
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "Kathmandu Main",
    address: "123 Flavor Street, Thamel",
    city: "Kathmandu",
    phone: "(123) 456-7890",
    hours: {
      weekdays: "11:00 AM - 10:00 PM",
      weekend: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM"
    },
    description: "Our flagship location in the heart of Thamel, featuring a full bar and outdoor seating area.",
    image: "https://images.unsplash.com/photo-1555126634-323283e090fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Pokhara Lakeside",
    address: "456 Phewa Road",
    city: "Pokhara",
    phone: "(987) 654-3210",
    hours: {
      weekdays: "11:00 AM - 10:00 PM",
      weekend: "10:00 AM - 11:00 PM",
      sunday: "10:00 AM - 9:00 PM"
    },
    description: "Stunning lakeside views complement our menu of Nepali classics with a focus on fresh fish dishes.",
    image: "https://images.unsplash.com/photo-1593693296915-82a2262e8d89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Bhaktapur Heritage",
    address: "789 Durbar Square",
    city: "Bhaktapur",
    phone: "(456) 789-0123",
    hours: {
      weekdays: "11:00 AM - 9:00 PM",
      weekend: "10:00 AM - 10:00 PM",
      sunday: "10:00 AM - 9:00 PM"
    },
    description: "Located in a restored heritage building, offering traditional Newari specialties.",
    image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const Locations = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-nepali-maroon text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bitter font-bold mb-4">Our Locations</h1>
          <p className="text-lg max-w-3xl mx-auto text-white/80">
            Find your nearest Himalayan Flavor Fusion restaurant and experience authentic Nepali cuisine
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-16">
          {locations.map((location) => (
            <div key={location.id} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className={`rounded-lg overflow-hidden shadow-lg ${location.id % 2 === 0 ? 'md:order-2' : ''}`}>
                <img 
                  src={location.image} 
                  alt={location.name} 
                  className="w-full h-80 object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bitter font-semibold mb-4 text-nepali-maroon">{location.name}</h2>
                <div className="flex items-start mb-4">
                  <MapPin className="h-5 w-5 text-nepali-red mr-2 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-800">{location.address}</p>
                    <p className="text-gray-800">{location.city}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{location.description}</p>
                
                <div className="bg-secondary p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-lg mb-2">Hours</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>{location.hours.weekdays}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>{location.hours.weekend}</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>{location.hours.sunday}</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button className="bg-nepali-red hover:bg-nepali-maroon text-white">
                    Get Directions
                  </Button>
                  <Button variant="outline" className="border-nepali-red text-nepali-red hover:bg-nepali-red/10">
                    Order Online
                  </Button>
                  <Button variant="outline" className="border-nepali-red text-nepali-red hover:bg-nepali-red/10">
                    Call {location.phone}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Locations;
