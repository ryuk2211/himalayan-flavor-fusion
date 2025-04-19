
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-nepali-maroon to-nepali-red text-white">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTZWMGg2djMwem0tNiAwaC02VjBoNnYzMHpNMzAgNTRoLTZ2LTZoNnY2em0tNiAwSDAgMGg2VjQ4SDB2NmgxOHYtNnoiLz48cGF0aCBkPSJNMzYgMzZWMEgwdjZoNnY2aDZ2NmgxMnYtNmgxMnY2aDZ2LTYuNUwzNiAzMHY2SDZ2LTZIMHY0MmgzNnYtNkgwdi02aDZ2LTZoNnYtNmgxMnY2aDEydi02aDZ2MTJIMzZ2Nkg2di02SDB2Nmgzdi00LjV6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bitter font-bold mb-6">
          Authentic Nepali Cuisine with a Modern Twist
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mb-10 text-white/80">
          Experience the flavors of the Himalayas with our chef-crafted dishes 
          using traditional recipes and locally-sourced ingredients.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg" className="bg-white text-nepali-red hover:bg-white/90 font-medium px-8">
            <Link to="/menu">View Menu</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-medium px-8">
            <Link to="/order">Order Online</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
