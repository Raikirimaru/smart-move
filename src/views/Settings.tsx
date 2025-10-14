import {
  ArrowLeft,
  Bell,
  Globe,
  Moon,
  Shield,
  CreditCard,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "../components/ui/switch";
import { Card } from "../components/ui/card";
import { Separator } from "../components/ui/separator";


interface BaseItem {
  icon: React.ElementType;
  label: string;
}

interface SwitchItem extends BaseItem {
  hasSwitch: true;
  value: boolean;
  hasArrow?: false;
}

interface ArrowItem extends BaseItem {
  hasArrow: true;
  value?: string;
  hasSwitch?: false;
}

type SettingsItem = SwitchItem | ArrowItem;

interface SettingsGroup {
  title: string;
  items: SettingsItem[];
}

const Settings = () => {
  const settingsGroups: SettingsGroup[] = [
    {
      title: "Préférences",
      items: [
        { icon: Bell, label: "Notifications", hasSwitch: true, value: true },
        { icon: Moon, label: "Mode sombre", hasSwitch: true, value: false },
        { icon: Globe, label: "Langue", hasArrow: true, value: "Français" },
      ],
    },
    {
      title: "Compte",
      items: [
        { icon: Shield, label: "Sécurité et confidentialité", hasArrow: true },
        { icon: CreditCard, label: "Gestion des paiements", hasArrow: true },
      ],
    },
    {
      title: "Support",
      items: [
        { icon: HelpCircle, label: "Centre d'aide", hasArrow: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 animate-fade-in">
      {/* 🔹 Header */}
      <div className="bg-primary text-primary-foreground p-4 rounded-b-3xl shadow-lg">
        <div className="container-mobile">
          <div className="flex items-center gap-4">
            <Link
              to="/profile"
              className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover-scale"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold">Paramètres</h1>
          </div>
        </div>
      </div>

      {/* 🔹 Content */}
      <div className="container-mobile pt-6 space-y-6">
        {settingsGroups.map((group, groupIndex) => (
          <div key={groupIndex}>
            <h2 className="text-sm font-semibold text-muted-foreground mb-3 px-1">
              {group.title}
            </h2>
            <Card className="overflow-hidden">
              {group.items.map((item, itemIndex) => (
                <div key={itemIndex}>
                  <button
                    className="w-full p-4 flex items-center gap-4 hover:bg-card-hover transition-smooth text-left"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>

                    <div className="flex-1">
                      <p className="font-medium">{item.label}</p>
                      {"value" in item &&
                        !item.hasSwitch &&
                        item.value && (
                          <p className="text-sm text-muted-foreground">
                            {item.value}
                          </p>
                        )}
                    </div>

                    {"hasSwitch" in item && item.hasSwitch && (
                      <Switch defaultChecked={item.value} />
                    )}

                    {"hasArrow" in item && item.hasArrow && (
                      <ArrowLeft className="w-5 h-5 text-muted-foreground rotate-180 shrink-0" />
                    )}
                  </button>

                  {itemIndex < group.items.length - 1 && (
                    <Separator className="mx-4" />
                  )}
                </div>
              ))}
            </Card>
          </div>
        ))}

        {/* 🔹 Logout Button */}
        <Card className="overflow-hidden">
          <button className="w-full p-4 flex items-center gap-4 hover:bg-destructive/5 transition-smooth">
            <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
              <LogOut className="w-5 h-5 text-destructive" />
            </div>
            <p className="font-medium text-destructive">Se déconnecter</p>
          </button>
        </Card>

        <p className="text-center text-xs text-muted-foreground pt-4">
          SmartMove v1.0.0
        </p>
      </div>
    </div>
  );
};

export default Settings;
