import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ChevronRight, MapPin, Calendar, Users } from "lucide-react";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import trail3 from "@/assets/trail-3.jpg";

const Trails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const indianStates = [
    "All Regions",
    "Andhra Pradesh",
    "Karnataka",
    "Kerala",
    "Tamil Nadu",
    "Telangana",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
    "Madhya Pradesh",
    "Uttar Pradesh",
    "Bihar",
    "West Bengal",
    "Odisha",
    "Assam",
    "Himachal Pradesh",
    "Uttarakhand",
    "Punjab",
    "Haryana",
  ];

  const templeTypes = [
    "All Types",
    "Cave Temples",
    "Shore Temples",
    "Mountain Temples",
    "Forest Shrines",
    "Stepwell Temples",
    "Buddhist Trails",
    "Jain Routes",
  ];

  const trails = [
    {
      id: 1,
      image: trail1,
      title: "Khajuraho's Divine Sculptures",
      region: "Madhya Pradesh",
      era: "Chandela Dynasty (950-1050 CE)",
      difficulty: "Moderate",
      type: "Cave Temples",
      description: "Magnificent temples adorned with intricate sculptures depicting divine love, celestial beings, and spiritual enlightenment.",
    },
    {
      id: 2,
      image: trail2,
      title: "Hampi's Sacred Ruins",
      region: "Karnataka",
      era: "Vijayanagara Empire (1336-1565 CE)",
      difficulty: "Easy",
      type: "Mountain Temples",
      description: "Ancient capital's temple complexes carved from massive boulders, where history and mythology intertwine.",
    },
    {
      id: 3,
      image: trail3,
      title: "Varanasi's Eternal Ghats",
      region: "Uttar Pradesh",
      era: "Timeless (3000+ years)",
      difficulty: "Easy",
      type: "Shore Temples",
      description: "The spiritual heart of India, where the sacred Ganges flows through millennia of devotion and ritual.",
    },
    {
      id: 4,
      image: trail1,
      title: "Ellora's Rock-Cut Marvels",
      region: "Maharashtra",
      era: "Rashtrakuta Dynasty (600-1000 CE)",
      difficulty: "Moderate",
      type: "Cave Temples",
      description: "Monumental rock-cut architecture showcasing Buddhist, Hindu, and Jain harmony carved from living rock.",
    },
    {
      id: 5,
      image: trail2,
      title: "Konark Sun Temple",
      region: "Odisha",
      era: "Eastern Ganga Dynasty (1250 CE)",
      difficulty: "Easy",
      type: "Shore Temples",
      description: "A colossal chariot of the Sun God carved in stone, where every wheel tells stories of cosmic time.",
    },
    {
      id: 6,
      image: trail3,
      title: "Kedarnath Himalayan Shrine",
      region: "Uttarakhand",
      era: "Pandava Era (Ancient)",
      difficulty: "Challenging",
      type: "Mountain Temples",
      description: "Sacred abode of Lord Shiva nestled in the Himalayas, where pilgrims seek divine blessings amidst eternal snows.",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-deep-bronze via-background to-card">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-soft-gold/60 rounded-full animate-[float-up_6s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gradient-gold mb-4 uppercase tracking-wider animate-divine-reveal">
            Temple Trails
          </h1>
          <p className="text-xl text-parchment/80 font-body italic animate-divine-reveal" style={{ animationDelay: "0.2s" }}>
            Journeys Through Sacred Earth
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-40 bg-card/95 backdrop-blur-xl border-y border-temple-gold/20 shadow-temple">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-temple-gold/60" size={20} />
              <Input
                type="text"
                placeholder="Search temples, regions, or civilizations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-background border-temple-gold/30 text-parchment placeholder:text-muted-foreground focus:border-temple-gold transition-all"
              />
            </div>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 bg-background border border-temple-gold/30 rounded-md text-parchment font-nav focus:border-temple-gold transition-all cursor-pointer"
            >
              {indianStates.map((state) => (
                <option key={state} value={state.toLowerCase()}>
                  {state}
                </option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-background border border-temple-gold/30 rounded-md text-parchment font-nav focus:border-temple-gold transition-all cursor-pointer"
            >
              {templeTypes.map((type) => (
                <option key={type} value={type.toLowerCase()}>
                  {type}
                </option>
              ))}
            </select>

            <Button
              variant="outline"
              className="border-temple-gold/40 text-temple-gold hover:bg-temple-gold/10"
            >
              <Filter size={18} className="mr-2" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Trails Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trails.map((trail, index) => (
              <div
                key={trail.id}
                className="group relative bg-card border-2 border-temple-gold/30 rounded-lg overflow-hidden hover:border-temple-gold transition-all duration-500 shadow-temple hover:shadow-divine animate-divine-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={trail.image}
                    alt={trail.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-bronze via-deep-bronze/60 to-transparent" />
                  
                  {/* Type Badge */}
                  <div className="absolute top-4 right-4 bg-temple-gold/90 text-deep-bronze px-3 py-1 rounded-full text-xs font-nav tracking-wide backdrop-blur-sm">
                    {trail.type}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-semibold text-soft-gold mb-2 group-hover:text-temple-gold transition-colors">
                    {trail.title}
                  </h3>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center gap-2 text-temple-gold/80">
                      <MapPin size={16} />
                      <span className="font-nav">{trail.region}</span>
                    </div>
                    <div className="flex items-center gap-2 text-parchment/70">
                      <Calendar size={16} />
                      <span className="font-body text-xs">{trail.era}</span>
                    </div>
                    <div className="flex items-center gap-2 text-parchment/70">
                      <Users size={16} />
                      <span className="font-body text-xs">Difficulty: {trail.difficulty}</span>
                    </div>
                  </div>

                  <p className="text-parchment/70 text-sm font-body mb-4 line-clamp-3">
                    {trail.description}
                  </p>

                  <Link to={`/trail/${trail.id}`}>
                    <Button
                      variant="ghost"
                      className="w-full text-temple-gold hover:text-soft-gold hover:bg-soft-gold/10 transition-all group/btn border border-temple-gold/20 hover:border-temple-gold/40"
                    >
                      View Trail Details
                      <ChevronRight className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Animated Border Glow */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent torch-flicker" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent torch-flicker" />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button variant="outline" className="border-temple-gold/40 text-temple-gold hover:bg-temple-gold/10">
              Previous
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                variant={page === 1 ? "default" : "outline"}
                className={
                  page === 1
                    ? "bg-temple-gold text-deep-bronze hover:bg-soft-gold"
                    : "border-temple-gold/40 text-temple-gold hover:bg-temple-gold/10"
                }
              >
                {page}
              </Button>
            ))}
            <Button variant="outline" className="border-temple-gold/40 text-temple-gold hover:bg-temple-gold/10">
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trails;
