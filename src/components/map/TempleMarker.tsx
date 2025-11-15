import { Temple } from "@/data/temples";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface TempleMarkerProps {
  temple: Temple;
  isFiltered: boolean;
}

export const TempleMarker = ({ temple, isFiltered }: TempleMarkerProps) => {
  const navigate = useNavigate();

  if (!isFiltered) return null;

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger asChild>
        <button
          onClick={() => navigate(`/trails/${temple.id}`)}
          className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
          style={{
            left: `${((temple.coordinates[1] + 180) / 360) * 100}%`,
            top: `${((90 - temple.coordinates[0]) / 180) * 100}%`,
          }}
        >
          <div className="relative">
            {/* Pulsating glow */}
            <div className="absolute inset-0 w-4 h-4 bg-temple-gold rounded-full animate-[glow-pulse_2s_ease-in-out_infinite] opacity-60" />
            
            {/* Main marker */}
            <div className="relative w-3 h-3 bg-temple-gold rounded-full shadow-divine border-2 border-soft-gold group-hover:scale-150 transition-transform duration-300">
              <div className="absolute -top-1 left-1/2 -translate-x-1/2">
                <span className="text-[8px]">🕉️</span>
              </div>
            </div>

            {/* Golden particles on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-soft-gold rounded-full animate-[float-up_2s_ease-out_infinite]"
                  style={{
                    left: `${Math.cos((i * 60 * Math.PI) / 180) * 20}px`,
                    top: `${Math.sin((i * 60 * Math.PI) / 180) * 20}px`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </button>
      </HoverCardTrigger>
      
      <HoverCardContent 
        side="top" 
        className="w-80 bg-card/95 backdrop-blur-sm border-2 border-temple-gold/40 shadow-temple p-4"
      >
        <div className="space-y-3 animate-divine-reveal">
          {/* Header */}
          <div className="border-b border-temple-gold/30 pb-2">
            <h3 className="text-lg font-heading text-gradient-gold font-bold">
              {temple.name}
            </h3>
            <p className="text-soft-gold/80 text-sm font-nav">{temple.nameDevanagari}</p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-parchment/60 font-body">State:</span>
              <p className="text-parchment font-semibold">{temple.state}</p>
            </div>
            <div>
              <span className="text-parchment/60 font-body">Era:</span>
              <p className="text-parchment font-semibold">{temple.era}</p>
            </div>
            <div>
              <span className="text-parchment/60 font-body">Deity:</span>
              <p className="text-parchment font-semibold">{temple.deity}</p>
            </div>
            <div>
              <span className="text-parchment/60 font-body">Type:</span>
              <p className="text-parchment font-semibold">{temple.type}</p>
            </div>
          </div>

          {/* Myth snippet */}
          <div className="pt-2 border-t border-temple-gold/20">
            <p className="text-parchment/80 text-sm italic font-body leading-relaxed">
              "{temple.mythSnippet}"
            </p>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 text-soft-gold text-xs font-nav uppercase tracking-wider pt-1">
            <MapPin className="w-3 h-3" />
            <span>Click to explore this sacred trail</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};
