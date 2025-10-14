import { History, CreditCard, Settings, LogOut, ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Profile = () => {
  const menuItems = [
    { icon: History, label: "Historique des trajets", path: "/history", badge: "12" },
    { icon: CreditCard, label: "Portefeuille", path: "/wallet" },
    { icon: Settings, label: "Paramètres", path: "/settings" },
  ];

  const stats = [
    { label: "Trajets", value: "127" },
    { label: "Note", value: "4.9", icon: Star },
    { label: "Points", value: "2.4k" },
  ];

  return (
    <div className="pt-6 pb-4 space-y-6 animate-fade-in">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-3xl font-bold">
            👤
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold">Thomas Smith</h2>
            <p className="opacity-90">thomas.smith@email.com</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-center">
              <p className="text-2xl font-bold flex items-center justify-center gap-1">
                {stat.value}
                {stat.icon && <stat.icon className="w-5 h-5 text-yellow-300" />}
              </p>
              <p className="text-sm opacity-90 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              to={item.path}
              className="flex items-center gap-4 p-4 bg-card hover:bg-card-hover rounded-2xl transition-smooth"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <span className="flex-1 font-medium">{item.label}</span>
              {item.badge && (
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-lg">
                  {item.badge}
                </span>
              )}
              <ChevronRight className="w-5 h-5 text-muted-foreground" />
            </Link>
          );
        })}
      </div>

      {/* Eco Score */}
      <div className="glass rounded-2xl p-4 border-2 border-secondary/20">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center">
            🌱
          </div>
          <div>
            <h3 className="font-semibold">Score Écologique</h3>
            <p className="text-sm text-muted-foreground">Impact CO₂ réduit de 45%</p>
          </div>
        </div>
        <div className="bg-secondary/10 h-2 rounded-full overflow-hidden">
          <div className="bg-secondary h-full rounded-full" style={{ width: "75%" }} />
        </div>
        <p className="text-xs text-muted-foreground mt-2">
          Vous avez économisé 127 kg de CO₂ ce mois-ci
        </p>
      </div>

      {/* Logout */}
      <button className="w-full flex items-center justify-center gap-2 p-4 text-destructive hover:bg-destructive/10 rounded-2xl transition-smooth">
        <LogOut className="w-5 h-5" />
        <span className="font-medium">Déconnexion</span>
      </button>
    </div>
  );
};

export default Profile;
