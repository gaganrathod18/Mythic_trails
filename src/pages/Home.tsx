import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight, Map, BookOpen, Compass } from "lucide-react";
import heroImage from "@/assets/hero-temple.jpg";
import omSymbol from "@/assets/om-symbol.png";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import trail3 from "@/assets/trail-3.jpg";

const Home = () => {
  const featuredTrails = [
    {
      id: 1,
      image: trail1,
      title: "Khajuraho's Divine Sculptures",
      subtitle: "Madhya Pradesh · Chandela Era",
      description: "Ancient temples adorned with celestial artistry",
    },
    {
      id: 2,
      image: trail2,
      title: "Hampi's Sacred Ruins",
      subtitle: "Karnataka · Vijayanagara Empire",
      description: "Where stone pillars whisper forgotten hymns",
    },
    {
      id: 3,
      image: trail3,
      title: "Varanasi's Eternal Ghats",
      subtitle: "Uttar Pradesh · Timeless",
      description: "The spiritual heart of ancient Bharat",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Ancient Temple"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-bronze/60 via-background/40 to-background" />
        </div>

        {/* Floating Dust Effect */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-soft-gold/40 rounded-full animate-[float-up_8s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 text-gradient-gold animate-divine-reveal uppercase tracking-wider">
            WHERE MYTHS BREATHE
          </h1>
          <p
            className="text-xl md:text-2xl text-parchment/90 font-body italic mb-12 animate-divine-reveal"
            style={{ animationDelay: "0.3s" }}
          >
            Step into the sacred echoes of ancient earth
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-divine-reveal"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="/trails">
              <Button
                size="lg"
                className="bg-gradient-to-r from-temple-gold to-soft-gold text-deep-bronze font-nav tracking-wider uppercase shadow-divine hover:shadow-[0_0_40px_hsl(var(--sacred-glow)/0.6)] hover:scale-105 transition-all duration-300 border-2 border-soft-gold/30 text-base px-8 py-6"
              >
                VIEW ALL TRAILS
                <ChevronRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/stories">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-temple-gold/60 text-temple-gold bg-transparent hover:bg-temple-gold/10 hover:border-temple-gold hover:shadow-divine transition-all duration-300 font-nav tracking-wide text-base px-8 py-6"
              >
                <BookOpen className="mr-2" />
                READ STORIES
              </Button>
            </Link>
          </div>
        </div>

        {/* Ornate Frame */}
        <div className="absolute inset-0 pointer-events-none z-30">
          <div className="absolute top-0 left-0 w-64 h-64 border-t-2 border-l-2 border-temple-gold/30" />
          <div className="absolute top-0 right-0 w-64 h-64 border-t-2 border-r-2 border-temple-gold/30" />
          <div className="absolute bottom-0 left-0 w-64 h-64 border-b-2 border-l-2 border-temple-gold/30" />
          <div className="absolute bottom-0 right-0 w-64 h-64 border-b-2 border-r-2 border-temple-gold/30" />
        </div>
      </section>

      {/* Sacred Divider */}
      <div className="relative py-16 flex items-center justify-center">
        <div className="absolute inset-x-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent" />
        <div className="relative bg-background px-6">
          <img
            src={omSymbol}
            alt="Om Symbol"
            className="w-16 h-16 breathe opacity-80"
          />
        </div>
      </div>

      {/* Featured Trails */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-4 uppercase tracking-wide">
              Featured Trails
            </h2>
            <p className="text-parchment/70 text-lg font-body">
              Journey through sacred sanctuaries of timeless devotion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrails.map((trail, index) => (
              <div
                key={trail.id}
                className="group relative overflow-hidden rounded-lg border-2 border-temple-gold/30 hover:border-temple-gold transition-all duration-500 shadow-temple hover:shadow-divine animate-divine-reveal"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={trail.image}
                    alt={trail.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-bronze via-deep-bronze/50 to-transparent" />
                </div>

                <div className="p-6 bg-card border-t-2 border-temple-gold/20">
                  <h3 className="text-xl font-heading font-semibold text-soft-gold mb-2 group-hover:text-temple-gold transition-colors">
                    {trail.title}
                  </h3>
                  <p className="text-sm text-temple-gold/80 mb-3 font-nav tracking-wide">
                    {trail.subtitle}
                  </p>
                  <p className="text-parchment/70 text-sm font-body mb-4">
                    {trail.description}
                  </p>
                  <Link to="/trails">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-temple-gold hover:text-soft-gold hover:bg-soft-gold/10 transition-all group/btn"
                    >
                      Explore Trail
                      <ChevronRight className="ml-1 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent torch-flicker" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent torch-flicker" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/trails">
              <Button
                size="lg"
                className="bg-card border-2 border-temple-gold/40 text-parchment shadow-temple hover:shadow-divine hover:border-temple-gold transition-all duration-500 glow-pulse font-nav tracking-wide"
              >
                <Compass className="mr-2" />
                DISCOVER ALL TRAILS
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Explore Invitation */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-bronze via-background to-sandstone" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-temple-gold/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-soft-gold/20 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-soft-gold mb-6 animate-divine-reveal">
            Begin Your Sacred Journey
          </h2>
          <p
            className="text-xl text-parchment/80 font-body italic mb-12 animate-divine-reveal"
            style={{ animationDelay: "0.2s" }}
          >
            Uncover the legends etched in time — from Kashi to Angkor
          </p>
          <Link to="/map">
            <Button
              size="lg"
              className="bg-gradient-to-r from-temple-gold to-soft-gold text-deep-bronze font-nav tracking-wider uppercase shadow-divine hover:shadow-[0_0_40px_hsl(var(--sacred-glow)/0.8)] hover:scale-110 transition-all duration-500 border-2 border-soft-gold/30 text-lg px-12 py-7 animate-divine-reveal"
              style={{ animationDelay: "0.4s" }}
            >
              <Map className="mr-3" size={24} />
              EXPLORE THE MAP
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
