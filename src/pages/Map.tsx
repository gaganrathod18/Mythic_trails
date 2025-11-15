import { useState, useMemo } from "react";
import { temples, sacredRoutes } from "@/data/temples";
import { TempleMarker } from "@/components/map/TempleMarker";
import { FilterPanel } from "@/components/map/FilterPanel";
import { InfoDrawer } from "@/components/map/InfoDrawer";
import { SacredRoutes } from "@/components/map/SacredRoutes";
import { Button } from "@/components/ui/button";

const Map = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeRouteTemples, setActiveRouteTemples] = useState<string[]>([]);
  const [activeRoute, setActiveRoute] = useState<string | null>(null);

  const filteredTemples = useMemo(() => {
    if (activeFilters.length === 0) return temples;
    return temples.filter(temple =>
      temple.categories.some(cat => activeFilters.includes(cat))
    );
  }, [activeFilters]);

  const handleRouteToggle = (templeIds: string[]) => {
    if (templeIds.length === 0) {
      setActiveRouteTemples([]);
      setActiveRoute(null);
    } else {
      setActiveRouteTemples(templeIds);
      const route = sacredRoutes.find(r => 
        r.temples.every(t => templeIds.includes(t))
      );
      setActiveRoute(route?.name || null);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-deep-bronze via-background to-card overflow-hidden">
        {/* Animated background constellation */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-soft-gold rounded-full animate-[glow-pulse_3s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gradient-gold mb-4 uppercase tracking-wider animate-divine-reveal">
            Sacred Map of Akhanda Bharat
          </h1>
          <p className="text-xl text-parchment/80 font-body italic animate-divine-reveal" style={{ animationDelay: "0.2s" }}>
            Where divine energy flows through ancient land
          </p>
          
          {/* Sanskrit inscription */}
          <div className="mt-6 text-soft-gold/40 text-sm font-body animate-divine-reveal" style={{ animationDelay: "0.4s" }}>
            वसुधैव कुटुम्बकम् • The World is One Family
          </div>
        </div>

        {/* Cosmic Naga serpent */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-temple-gold to-transparent opacity-30 animate-shimmer" />
      </section>

      {/* Interactive Map Section */}
      <section className="relative py-12 px-4 min-h-screen">
        <div className="container mx-auto max-w-7xl">
          <div className="relative bg-gradient-to-br from-sandstone/30 via-card to-deep-bronze/50 border-4 border-temple-gold/40 rounded-lg overflow-hidden shadow-temple">
            {/* Ancient parchment texture overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.3'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Sanskrit watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <p className="text-9xl font-heading text-temple-gold">ॐ</p>
            </div>

            {/* Map Container */}
            <div className="relative h-[75vh] overflow-hidden">
              {/* Ancient map base with hand-drawn style */}
              <div className="absolute inset-0 bg-gradient-to-br from-parchment/10 via-sandstone/20 to-deep-bronze/30">
                {/* Decorative border patterns */}
                <div className="absolute inset-0 border-8 border-temple-gold/20 rounded-lg"
                  style={{
                    borderImage: 'repeating-linear-gradient(45deg, hsl(var(--temple-gold) / 0.3), hsl(var(--temple-gold) / 0.3) 10px, transparent 10px, transparent 20px) 8',
                  }}
                />

                {/* Rivers overlay with shimmer */}
                <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
                  <defs>
                    <linearGradient id="riverGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'hsl(220, 60%, 40%)', stopOpacity: 0.6 }} />
                      <stop offset="50%" style={{ stopColor: 'hsl(220, 60%, 60%)', stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: 'hsl(220, 60%, 40%)', stopOpacity: 0.6 }} />
                    </linearGradient>
                  </defs>
                  {/* Ganga */}
                  <path d="M 60% 20% Q 55% 35%, 50% 50% T 45% 80%" stroke="url(#riverGradient)" strokeWidth="3" fill="none" className="animate-[shimmer_4s_ease-in-out_infinite]" />
                  {/* Yamuna */}
                  <path d="M 55% 25% Q 52% 40%, 48% 55%" stroke="url(#riverGradient)" strokeWidth="2" fill="none" className="animate-[shimmer_5s_ease-in-out_infinite]" />
                  {/* Godavari */}
                  <path d="M 55% 55% Q 60% 65%, 70% 75%" stroke="url(#riverGradient)" strokeWidth="2" fill="none" className="animate-[shimmer_6s_ease-in-out_infinite]" />
                </svg>

                {/* Terrain regions */}
                <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-parchment/20 to-transparent" /> {/* Himalayas */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-sandstone/20 to-transparent" /> {/* Southern Peninsula */}
                
                {/* Temple markers */}
                <div className="absolute inset-0">
                  {temples.map((temple) => (
                    <TempleMarker
                      key={temple.id}
                      temple={temple}
                      isFiltered={
                        activeFilters.length === 0 ||
                        temple.categories.some(cat => activeFilters.includes(cat))
                      }
                    />
                  ))}
                </div>

                {/* Sacred route connections */}
                {activeRouteTemples.length > 0 && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <defs>
                      <linearGradient id="routeGradient">
                        <stop offset="0%" style={{ stopColor: 'hsl(var(--temple-gold))', stopOpacity: 0 }} />
                        <stop offset="50%" style={{ stopColor: 'hsl(var(--temple-gold))', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: 'hsl(var(--temple-gold))', stopOpacity: 0 }} />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    {activeRouteTemples.map((templeId, index) => {
                      if (index === activeRouteTemples.length - 1) return null;
                      const temple1 = temples.find(t => t.id === templeId);
                      const temple2 = temples.find(t => t.id === activeRouteTemples[index + 1]);
                      if (!temple1 || !temple2) return null;

                      const x1 = ((temple1.coordinates[1] + 180) / 360) * 100;
                      const y1 = ((90 - temple1.coordinates[0]) / 180) * 100;
                      const x2 = ((temple2.coordinates[1] + 180) / 360) * 100;
                      const y2 = ((90 - temple2.coordinates[0]) / 180) * 100;

                      return (
                        <g key={`${templeId}-${index}`}>
                          <line
                            x1={`${x1}%`}
                            y1={`${y1}%`}
                            x2={`${x2}%`}
                            y2={`${y2}%`}
                            stroke="url(#routeGradient)"
                            strokeWidth="3"
                            filter="url(#glow)"
                            className="animate-[shimmer_3s_ease-in-out_infinite]"
                            strokeDasharray="10,5"
                          />
                        </g>
                      );
                    })}
                  </svg>
                )}

                {/* Floating golden particles */}
                {[...Array(15)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-soft-gold/50 rounded-full animate-[float-up_12s_ease-in-out_infinite]"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${Math.random() * 12}s`,
                    }}
                  />
                ))}
              </div>

              {/* Result count overlay */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm border-2 border-temple-gold/40 rounded-full px-6 py-2 shadow-divine z-30">
                <p className="text-sm font-nav text-parchment">
                  <span className="text-soft-gold font-bold">{filteredTemples.length}</span> Sacred Sites
                  {activeFilters.length > 0 && ` • ${activeFilters.length} filters active`}
                </p>
              </div>
            </div>
          </div>

          {/* Quick navigation zones */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              { name: 'Himalayas', icon: '🏔️' },
              { name: 'Ganga Basin', icon: '🌊' },
              { name: 'Tamilakam', icon: '🛕' },
              { name: 'Gujarat Coast', icon: '🌅' },
              { name: 'Northeast', icon: '🌿' },
            ].map(zone => (
              <Button
                key={zone.name}
                variant="outline"
                className="border-temple-gold/40 bg-card/50 hover:bg-card hover:border-temple-gold hover:shadow-divine transition-all duration-300"
              >
                <span className="mr-2">{zone.icon}</span>
                <span className="font-nav text-sm">{zone.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Components */}
      <FilterPanel onFilterChange={setActiveFilters} activeFilters={activeFilters} />
      <InfoDrawer />
      <SacredRoutes onRouteToggle={handleRouteToggle} activeRoute={activeRoute} />
    </div>
  );
};

export default Map;
