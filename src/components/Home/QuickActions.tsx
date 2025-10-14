import { Bus, Car, Bike, Package } from "lucide-react";
import { Link } from "react-router-dom";

const QuickActions = () => {
  const actions = [
    { icon: Bus, label: "Bus", color: "bg-primary", path: "/plan-trip?mode=bus" },
    { icon: Car, label: "Taxi", color: "bg-accent", path: "/plan-trip?mode=taxi" },
    { icon: Bike, label: "Vélo", color: "bg-secondary", path: "/plan-trip?mode=bike" },
    { icon: Package, label: "Livraison", color: "bg-destructive", path: "/delivery" },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {actions.map((action) => {
        const Icon = action.icon;
        return (
          <Link
            key={action.label}
            to={action.path}
            className="flex flex-col items-center gap-2 hover-scale"
          >
            <div className={`${action.color} w-14 h-14 rounded-2xl flex items-center justify-center shadow-md`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <span className="text-xs font-medium text-foreground">{action.label}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickActions;
