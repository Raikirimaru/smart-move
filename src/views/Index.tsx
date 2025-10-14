import { Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import MapPreview from "../components/Home/MapPreview";
import SearchBar from "../components/Home/SearchBar";
import QuickActions from "../components/Home/QuickActions";
import WeatherCard from "../components/Home/WeatherCard";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-6 pb-4 space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Bonjour 👋</h1>
          <p className="text-sm text-muted-foreground">Où souhaitez-vous aller ?</p>
        </div>
        <button 
          onClick={() => navigate('/notifications')}
          className="w-10 h-10 bg-card rounded-xl flex items-center justify-center hover-scale shadow-sm relative"
        >
          <Bell className="w-5 h-5" />
          <div className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
        </button>
      </div>

      {/* Map Preview */}
      <MapPreview />

      {/* Search Bar */}
      <SearchBar />

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Accès rapide</h2>
        <QuickActions />
      </div>

      {/* Weather & Air Quality */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Conditions actuelles</h2>
        <WeatherCard />
      </div>
    </div>
  );
};

export default Index;
