import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TooltipProvider } from "./components/ui/tooltip";
import MobileLayout from "./components/Layout/MobileLayout";
import { Toaster as Sonner } from "sonner";
import Delivery from "./views/Delivery";
import Index from "./views/Index";
import NotFound from "./views/NotFound";
import Notifications from "./views/Notifications";
import PlanTrip from "./views/PlanTrip";
import Profile from "./views/Profile";
import TripDetails from "./views/TripDetails";
import History from "./views/History";
import Settings from "./views/Settings";
import Wallet from "./views/Wallet";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Sonner />
      <BrowserRouter>
        <MobileLayout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/plan-trip" element={<PlanTrip />} />
            <Route path="/trip-details" element={<TripDetails />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/history" element={<History />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notifications />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </MobileLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
