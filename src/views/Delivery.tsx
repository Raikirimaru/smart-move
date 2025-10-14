import { Package, MapPin, Weight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Delivery = () => {
  const [packageType, setPackageType] = useState("small");

  const packageTypes = [
    { id: "small", label: "Petit", size: "< 5kg", price: "5000 FCFA" },
    { id: "medium", label: "Moyen", size: "5-15kg", price: "8000 FCFA" },
    { id: "large", label: "Grand", size: "> 15kg", price: "12000 FCFA" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-secondary text-white p-4 rounded-b-3xl shadow-lg">
        <div className="container-mobile">
          <div className="flex items-center gap-4 mb-6">
            <Link to="/" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover-scale">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold">Livraison & Logistique</h1>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-3">
            <Package className="w-8 h-8" />
            <div>
              <p className="font-semibold">Livraison express</p>
              <p className="text-sm opacity-90">En moins de 2 heures</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-mobile pt-6 space-y-6">
        {/* Addresses */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Adresses</h2>
          
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Adresse d'enlèvement"
              className="pl-12 rounded-xl h-12"
            />
          </div>
          
          <div className="relative">
            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
            <Input
              placeholder="Adresse de livraison"
              className="pl-12 rounded-xl h-12"
            />
          </div>
        </div>

        {/* Package Size */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Type de colis</h2>
          
          <div className="grid grid-cols-3 gap-3">
            {packageTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setPackageType(type.id)}
                className={`p-4 rounded-2xl border-2 transition-smooth text-center ${
                  packageType === type.id
                    ? "border-primary bg-primary/5"
                    : "border-border bg-card hover:bg-card-hover"
                }`}
              >
                <Weight className={`w-6 h-6 mx-auto mb-2 ${
                  packageType === type.id ? "text-primary" : "text-muted-foreground"
                }`} />
                <p className="font-semibold text-sm">{type.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{type.size}</p>
                <p className="text-xs font-medium text-primary mt-1">{type.price}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="glass-dark rounded-2xl p-4 space-y-3">
          <h3 className="font-semibold">Résumé</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Distance estimée</span>
              <span className="font-medium">8.5 km</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Temps de livraison</span>
              <span className="font-medium">1h 30min</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Type de colis</span>
              <span className="font-medium capitalize">{packageTypes.find(t => t.id === packageType)?.label}</span>
            </div>
            <div className="h-px bg-border my-2" />
            <div className="flex justify-between text-base">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-primary">{packageTypes.find(t => t.id === packageType)?.price}</span>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <Button 
          className="w-full h-12 rounded-xl text-base font-semibold bg-gradient-to-r from-primary to-secondary"
          size="lg"
        >
          Commander la livraison
        </Button>
      </div>
    </div>
  );
};

export default Delivery;
