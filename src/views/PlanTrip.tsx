import { useState } from "react";
import { ArrowLeft, MapPin, Navigation, Clock, Leaf, DollarSign } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

const PlanTrip = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [selectedMode, setSelectedMode] = useState("eco");

  const modes = [
    { id: "eco", label: "Éco", time: "25 min", price: "350 FCFA", carbon: "Faible", color: "bg-secondary" },
    { id: "fast", label: "Rapide", time: "15 min", price: "800 FCFA", carbon: "Moyen", color: "bg-primary" },
    { id: "premium", label: "Premium", time: "12 min", price: "1500 FCFA", carbon: "Moyen", color: "bg-accent" },
  ];

  const handleConfirm = () => {
    navigate("/trip-details");
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 rounded-b-3xl shadow-lg">
        <div className="container-mobile">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover-scale">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold">Planifier un trajet</h1>
          </div>

          {/* Location Inputs */}
          <div className="space-y-3">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/60" />
              <Input
                placeholder="Point de départ"
                value={departure}
                onChange={(e) => setDeparture(e.target.value)}
                className="pl-12 bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 rounded-xl h-12"
              />
            </div>
            <div className="relative">
              <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary-foreground/60" />
              <Input
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="pl-12 bg-white/20 border-white/30 text-primary-foreground placeholder:text-primary-foreground/60 rounded-xl h-12"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transport Modes */}
      <div className="container-mobile pt-6 space-y-4">
        <h2 className="text-lg font-semibold">Choisissez votre mode</h2>
        
        <div className="space-y-3">
          {modes.map((mode) => (
            <button
              key={mode.id}
              onClick={() => setSelectedMode(mode.id)}
              className={`w-full p-4 rounded-2xl border-2 transition-smooth ${
                selectedMode === mode.id
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card hover:bg-card-hover"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`${mode.color} w-12 h-12 rounded-xl flex items-center justify-center`}>
                  <span className="text-white font-bold text-sm">{mode.label[0]}</span>
                </div>
                
                <div className="flex-1 text-left">
                  <p className="font-semibold">{mode.label}</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {mode.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      {mode.price}
                    </span>
                    <span className="flex items-center gap-1">
                      <Leaf className="w-3 h-3" />
                      {mode.carbon}
                    </span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Confirm Button */}
        <Button 
          onClick={handleConfirm}
          className="w-full h-12 rounded-xl text-base font-semibold"
          size="lg"
        >
          Confirmer mon trajet
        </Button>
      </div>
    </div>
  );
};

export default PlanTrip;
