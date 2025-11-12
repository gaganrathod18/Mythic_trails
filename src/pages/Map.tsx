import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-deep-bronze via-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gradient-gold mb-4 uppercase tracking-wider animate-divine-reveal">
            Sacred Map of Akhanda Bharat
          </h1>
          <p className="text-xl text-parchment/80 font-body italic animate-divine-reveal" style={{ animationDelay: "0.2s" }}>
            Where divine energy flows through ancient land
          </p>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-card border-4 border-temple-gold/40 rounded-lg overflow-hidden shadow-temple">
            {/* Placeholder for interactive map */}
            <div className="relative h-[70vh] bg-gradient-to-br from-sandstone via-background to-deep-bronze flex items-center justify-center">
              <div className="text-center space-y-6">
                <MapPin className="w-24 h-24 text-temple-gold mx-auto glow-pulse" />
                <h2 className="text-3xl font-heading font-bold text-gradient-gold">
                  Interactive Map Coming Soon
                </h2>
                <p className="text-parchment/70 font-body max-w-md mx-auto">
                  Explore sacred temples across ancient Bharat with an immersive, interactive experience
                </p>
              </div>

              {/* Decorative Elements */}
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-soft-gold/40 rounded-full animate-[float-up_8s_ease-in-out_infinite]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 8}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Map;
