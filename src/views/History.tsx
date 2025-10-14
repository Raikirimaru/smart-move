import { ArrowLeft, MapPin, Package, Clock, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Card } from "../components/ui/card";

const History = () => {
  const trips = [
    {
      id: 1,
      from: "Place de la République",
      to: "Gare Centrale",
      date: "Aujourd'hui, 14:30",
      price: "350 FCFA",
      mode: "Éco",
      status: "completed"
    },
    {
      id: 2,
      from: "Centre Commercial",
      to: "Université",
      date: "Hier, 09:15",
      price: "800 FCFA",
      mode: "Rapide",
      status: "completed"
    },
    {
      id: 3,
      from: "Aéroport",
      to: "Hôtel Central",
      date: "23 Oct, 18:45",
      price: "1500 FCFA",
      mode: "Premium",
      status: "completed"
    }
  ];

  const deliveries = [
    {
      id: 1,
      from: "Restaurant Le Gourmet",
      to: "45 Rue Victor Hugo",
      date: "Aujourd'hui, 12:20",
      price: "450 FCFA",
      weight: "2kg",
      status: "delivered"
    },
    {
      id: 2,
      from: "Boutique Mode",
      to: "12 Avenue de la Liberté",
      date: "Hier, 16:30",
      price: "600 FCFA",
      weight: "5kg",
      status: "delivered"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24 animate-fade-in">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 rounded-b-3xl shadow-lg">
        <div className="container-mobile">
          <div className="flex items-center gap-4">
            <Link to="/" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover-scale">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold">Historique</h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container-mobile pt-6">
        <Tabs defaultValue="trips" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="trips">Trajets</TabsTrigger>
            <TabsTrigger value="deliveries">Livraisons</TabsTrigger>
          </TabsList>

          <TabsContent value="trips" className="space-y-3">
            {trips.map((trip) => (
              <Card key={trip.id} className="p-4 hover:bg-card-hover transition-smooth hover-scale">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{trip.from}</p>
                    <p className="text-sm text-muted-foreground truncate">→ {trip.to}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {trip.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        {trip.price}
                      </span>
                    </div>
                  </div>
                  <div className="bg-secondary/20 px-3 py-1 rounded-lg text-xs font-medium">
                    {trip.mode}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="deliveries" className="space-y-3">
            {deliveries.map((delivery) => (
              <Card key={delivery.id} className="p-4 hover:bg-card-hover transition-smooth hover-scale">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0">
                    <Package className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold truncate">{delivery.from}</p>
                    <p className="text-sm text-muted-foreground truncate">→ {delivery.to}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {delivery.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-3 h-3" />
                        {delivery.price}
                      </span>
                    </div>
                  </div>
                  <div className="bg-accent/20 px-3 py-1 rounded-lg text-xs font-medium">
                    {delivery.weight}
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default History;
