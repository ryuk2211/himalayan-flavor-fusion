import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// This page will redirect to our new Home page
const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to the Home page
    navigate("/");
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-2">Redirecting...</h1>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nepali-red mx-auto"></div>
      </div>
    </div>
  );
};

export default Index;
