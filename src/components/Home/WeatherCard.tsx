import { Cloud, Wind, Leaf } from "lucide-react";

const WeatherCard = () => {
  return (
    <div className="glass rounded-2xl p-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
            <Cloud className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-2xl font-bold">22°C</p>
            <p className="text-xs text-muted-foreground">Partiellement nuageux</p>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-xs">
            <Wind className="w-4 h-4 text-muted-foreground" />
            <span>12 km/h</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <Leaf className="w-4 h-4 text-secondary" />
            <span className="text-secondary font-medium">Bon</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
