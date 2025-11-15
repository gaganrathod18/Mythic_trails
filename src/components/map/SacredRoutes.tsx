import { Button } from "@/components/ui/button";
import { useState } from "react";
import { temples, sacredRoutes } from "@/data/temples";

interface SacredRoutesProps {
  onRouteToggle: (templeIds: string[]) => void;
  activeRoute: string | null;
}

export const SacredRoutes = ({ onRouteToggle, activeRoute }: SacredRoutesProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-card/95 backdrop-blur-sm border-2 border-temple-gold/40 hover:bg-card shadow-temple text-parchment font-nav uppercase tracking-wider"
      >
        <span className="mr-2">🛕</span>
        Sacred Routes
      </Button>

      {isOpen && (
        <div className="absolute bottom-full mb-4 left-1/2 -translate-x-1/2 w-96 bg-card/95 backdrop-blur-sm border-2 border-temple-gold/40 rounded-lg shadow-temple p-4 animate-scale-in">
          <div className="space-y-3">
            <h3 className="text-lg font-heading text-gradient-gold font-bold text-center uppercase tracking-wider border-b border-temple-gold/30 pb-2">
              Divine Pilgrimage Paths
            </h3>
            
            {sacredRoutes.map((route) => {
              const isActive = activeRoute === route.name;
              return (
                <button
                  key={route.name}
                  onClick={() => onRouteToggle(isActive ? [] : route.temples)}
                  className={`w-full text-left p-3 rounded-md border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-temple-gold/20 border-temple-gold shadow-divine'
                      : 'bg-card/50 border-temple-gold/20 hover:border-temple-gold/40'
                  }`}
                >
                  <p className={`font-nav font-semibold mb-1 ${
                    isActive ? 'text-soft-gold' : 'text-parchment'
                  }`}>
                    {route.name}
                  </p>
                  <p className="text-xs text-parchment/70 font-body italic">
                    {route.description}
                  </p>
                </button>
              );
            })}

            <div className="pt-2 border-t border-temple-gold/30 text-center text-xs text-parchment/60 font-body">
              Click a route to see the sacred connections
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
