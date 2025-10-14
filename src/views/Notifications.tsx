import { ArrowLeft, MapPin, Package, Gift, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: "trip",
      icon: MapPin,
      title: "Trajet terminé",
      message: "Votre trajet vers Gare Centrale est terminé. Merci !",
      time: "Il y a 5 min",
      isNew: true,
      color: "bg-primary/10 text-primary"
    },
    {
      id: 2,
      type: "delivery",
      icon: Package,
      title: "Livraison en cours",
      message: "Votre colis arrive dans 10 minutes",
      time: "Il y a 15 min",
      isNew: true,
      color: "bg-accent/10 text-accent"
    },
    {
      id: 3,
      type: "promo",
      icon: Gift,
      title: "Offre spéciale",
      message: "50% de réduction sur votre prochain trajet Premium",
      time: "Il y a 2h",
      isNew: false,
      color: "bg-secondary/10 text-secondary"
    },
    {
      id: 4,
      type: "alert",
      icon: AlertCircle,
      title: "Trafic perturbé",
      message: "Des ralentissements sur votre trajet habituel",
      time: "Hier",
      isNew: false,
      color: "bg-destructive/10 text-destructive"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24 animate-fade-in">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 rounded-b-3xl shadow-lg">
        <div className="container-mobile">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover-scale">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="text-xl font-bold">Notifications</h1>
            </div>
            <button className="text-sm font-medium hover:underline">
              Tout marquer comme lu
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-mobile pt-6 space-y-2">
        {notifications.map((notification) => (
          <Card 
            key={notification.id} 
            className={`p-4 hover:bg-card-hover transition-smooth hover-scale ${
              notification.isNew ? "border-primary/50" : ""
            }`}
          >
            <div className="flex items-start gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${notification.color}`}>
                <notification.icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold">{notification.title}</p>
                  {notification.isNew && (
                    <Badge variant="default" className="h-5 px-2 text-xs">
                      Nouveau
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{notification.message}</p>
                <p className="text-xs text-muted-foreground mt-2">{notification.time}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
