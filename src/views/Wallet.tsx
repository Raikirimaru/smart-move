import { ArrowLeft, CreditCard, Plus, ArrowUpRight, ArrowDownLeft, Gift } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const Wallet = () => {
  const transactions = [
    {
      id: 1,
      type: "expense",
      title: "Trajet Premium",
      date: "Aujourd'hui, 14:30",
      amount: "-1500 FCFA"
    },
    {
      id: 2,
      type: "expense",
      title: "Livraison urgente",
      date: "Hier, 12:20",
      amount: "-600 FCFA"
    },
    {
      id: 3,
      type: "income",
      title: "Rechargement",
      date: "20 Oct, 10:00",
      amount: "+5000 FCFA"
    },
    {
      id: 4,
      type: "income",
      title: "Bonus de parrainage",
      date: "18 Oct, 15:30",
      amount: "+1000 FCFA"
    }
  ];

  return (
    <div className="min-h-screen bg-background pb-24 animate-fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-primary-glow text-primary-foreground p-6 rounded-b-3xl shadow-xl">
        <div className="container-mobile">
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center hover-scale">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-xl font-bold">Portefeuille</h1>
          </div>

          {/* Balance Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <p className="text-sm text-primary-foreground/80 mb-2">Solde disponible</p>
            <p className="text-4xl font-bold mb-6">4250 FCFA</p>
            <div className="flex gap-3">
              <Button className="flex-1 bg-white text-primary hover:bg-white/90 rounded-xl h-11">
                <Plus className="w-4 h-4 mr-2" />
                Recharger
              </Button>
              <Button variant="outline" className="flex-1 border-white/30 text-white hover:bg-white/10 rounded-xl h-11">
                <Gift className="w-4 h-4 mr-2" />
                Bonus
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="container-mobile pt-6 space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-4">Moyens de paiement</h2>
          <div className="space-y-3">
            <Card className="p-4 hover:bg-card-hover transition-smooth hover-scale">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">Carte Visa</p>
                  <p className="text-sm text-muted-foreground">•••• 4242</p>
                </div>
                <div className="text-xs bg-secondary/20 px-2 py-1 rounded">
                  Par défaut
                </div>
              </div>
            </Card>
            <Button variant="outline" className="w-full h-12 rounded-xl border-dashed">
              <Plus className="w-4 h-4 mr-2" />
              Ajouter une carte
            </Button>
          </div>
        </div>

        {/* Transactions */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Transactions récentes</h2>
          <div className="space-y-2">
            {transactions.map((transaction) => (
              <Card key={transaction.id} className="p-4 hover:bg-card-hover transition-smooth">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    transaction.type === "expense" 
                      ? "bg-destructive/10" 
                      : "bg-secondary/10"
                  }`}>
                    {transaction.type === "expense" ? (
                      <ArrowUpRight className={`w-5 h-5 text-destructive`} />
                    ) : (
                      <ArrowDownLeft className={`w-5 h-5 text-secondary`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{transaction.title}</p>
                    <p className="text-xs text-muted-foreground">{transaction.date}</p>
                  </div>
                  <p className={`font-semibold ${
                    transaction.type === "expense" 
                      ? "text-destructive" 
                      : "text-secondary"
                  }`}>
                    {transaction.amount}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
