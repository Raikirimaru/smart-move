import { ArrowLeft, Phone, MessageCircle, Navigation } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";

const TripDetails = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Map Area */}
      <div className="relative h-[60vh] bg-gradient-to-br from-primary-light/20 to-secondary-light/20">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 35px, hsl(var(--muted-foreground)) 35px, hsl(var(--muted-foreground)) 36px),
                            repeating-linear-gradient(90deg, transparent, transparent 35px, hsl(var(--muted-foreground)) 35px, hsl(var(--muted-foreground)) 36px)`
          }}
        />
        
        {/* Vehicle marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-glow animate-pulse-glow">
            <Navigation className="w-8 h-8 text-primary-foreground" fill="currentColor" />
          </div>
        </div>

        {/* Back button */}
        <Link 
          to="/plan-trip"
          className="absolute top-4 left-4 w-10 h-10 bg-card rounded-xl flex items-center justify-center hover-scale shadow-md"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
      </div>

      {/* Trip Info Card */}
      <div className="relative -mt-8">
        <div className="container-mobile">
          <div className="bg-card rounded-3xl shadow-xl p-6 space-y-6 animate-slide-up">
            {/* Driver Info */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center text-white text-xl font-bold">
                JD
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">Jean Christen</h3>
                <p className="text-sm text-muted-foreground">Toyota Prius • AB-123-CD</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-500">★</span>
                  <span className="text-sm font-medium">4.8</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <button className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover-scale">
                  <Phone className="w-5 h-5 text-primary" />
                </button>
                <button className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center hover-scale">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Arrivée estimée</span>
                <span className="font-semibold">8 minutes</span>
              </div>
              <Progress value={65} className="h-2" />
              <div className="grid grid-cols-3 gap-2 text-xs text-center">
                <div>
                  <p className="text-secondary font-medium">✓ Départ</p>
                </div>
                <div>
                  <p className="text-primary font-medium">→ En route</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Arrivée</p>
                </div>
              </div>
            </div>

            {/* Route Details */}
            <div className="bg-muted/50 rounded-2xl p-4 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <p className="text-sm">123 Rue de la République</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <p className="text-sm font-medium">456 Avenue des Champs</p>
              </div>
            </div>

            {/* Cancel Button */}
            <Button 
              variant="outline" 
              className="w-full rounded-xl"
            >
              Annuler le trajet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
