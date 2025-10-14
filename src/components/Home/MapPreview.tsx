import { MapPin, Navigation } from "lucide-react";

const MapPreview = () => {
  return (
    <div className="relative w-full h-64 bg-muted rounded-3xl overflow-hidden shadow-2xl">
      {/* Simulated map background with subtle gradient and grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-secondary-light/10">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 35px, hsl(var(--muted-foreground)) 35px, hsl(var(--muted-foreground)) 36px),
              repeating-linear-gradient(90deg, transparent, transparent 35px, hsl(var(--muted-foreground)) 35px, hsl(var(--muted-foreground)) 36px)
            `,
          }}
        />
      </div>

      {/* User location marker with soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse-glow rounded-full blur-xl opacity-40" />
          <div className="relative w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-glow hover:scale-105 transition-transform">
            <Navigation className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          </div>
        </div>
      </div>

      {/* Nearby transport indicators with subtle hover effect */}
      <div className="absolute top-6 right-6 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md animate-fade-in hover:scale-110 transition-transform">
        <MapPin className="w-5 h-5 text-secondary-foreground" />
      </div>
      <div className="absolute bottom-10 left-10 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-md animate-fade-in" style={{ animationDelay: "0.2s" }}>
        <MapPin className="w-5 h-5 text-accent-foreground" />
      </div>

      {/* Controls overlay with blur and subtle shadow */}
      <div className="absolute top-4 right-4 bg-card/80 backdrop-blur-md px-3 py-1.5 rounded-full shadow-md flex items-center gap-2 border border-white/20">
        <div className="w-2 h-2 rounded-full animate-pulse bg-green-600" />
        <span className="text-xs font-medium text-foreground">En ligne</span>
      </div>

      {/* Optional subtle vignette for depth */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
    </div>
  );
};

export default MapPreview;
