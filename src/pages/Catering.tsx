
import { Button } from "@/components/ui/button";

const Catering = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-nepali-maroon text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bitter font-bold mb-4">Catering Services</h1>
          <p className="text-lg max-w-3xl mx-auto text-white/80">
            Bring authentic Nepali flavors to your next event with our customizable catering packages
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bitter font-semibold mb-4 text-nepali-maroon">Private Events</h2>
            <p className="text-gray-700 mb-6">
              Whether you're hosting a corporate lunch, wedding reception, or birthday celebration, 
              our catering team will create a customized menu to exceed your expectations. We offer 
              buffet-style service with a range of authentic Nepali dishes.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li>Corporate events and meetings</li>
              <li>Wedding receptions and rehearsal dinners</li>
              <li>Birthday and anniversary celebrations</li>
              <li>Holiday parties</li>
            </ul>
            <Button className="bg-nepali-red hover:bg-nepali-maroon text-white">Request Quote</Button>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1576402187878-974f70c890a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Catered event with Nepali food" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 md:flex-row-reverse">
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bitter font-semibold mb-4 text-nepali-maroon">Package Options</h2>
            <p className="text-gray-700 mb-6">
              Choose from our carefully crafted catering packages or work with our team to create a custom menu 
              for your event. All packages include setup, serving equipment, and staff as needed.
            </p>
            <div className="space-y-4 mb-6">
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Everest Package</h3>
                <p className="text-gray-600">Premium selection of our signature dishes including momos, curry, and desserts for 30+ guests</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Annapurna Package</h3>
                <p className="text-gray-600">Selection of popular menu items including appetizers and main courses for 20+ guests</p>
              </div>
              <div className="p-4 border rounded-lg">
                <h3 className="font-semibold text-xl mb-2">Kathmandu Package</h3>
                <p className="text-gray-600">Perfect starter package with a mix of traditional Nepali favorites for 10+ guests</p>
              </div>
            </div>
            <Button className="bg-nepali-red hover:bg-nepali-maroon text-white">Download Menu PDF</Button>
          </div>
          <div className="order-2 md:order-1 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1585937421612-70a008356c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Nepali food catering display" 
              className="w-full h-80 object-cover"
            />
          </div>
        </div>

        <div className="bg-secondary rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bitter font-semibold mb-4">Ready to bring Nepali flavors to your event?</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Contact our catering team today to discuss your requirements and create a memorable dining experience for your guests.
          </p>
          <Button className="bg-nepali-red hover:bg-nepali-maroon text-white px-8">Contact Us</Button>
        </div>
      </div>
    </div>
  );
};

export default Catering;
