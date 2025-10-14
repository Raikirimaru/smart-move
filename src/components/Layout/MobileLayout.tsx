import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";

interface MobileLayoutProps {
  children: ReactNode;
}

const MobileLayout = ({ children }: MobileLayoutProps) => {
  const location = useLocation();
  const showNav = !["/trip-details", "/delivery-details"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <main className="flex-1 pb-20 overflow-y-auto">
        <div className="container-mobile">
          {children}
        </div>
      </main>
      {showNav && <BottomNav />}
    </div>
  );
};

export default MobileLayout;
