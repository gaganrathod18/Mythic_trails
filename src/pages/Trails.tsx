import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter, ChevronRight, MapPin, Calendar, Users, X } from "lucide-react";
import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import trail3 from "@/assets/trail-3.jpg";

const Trails = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all regions");
  const [selectedType, setSelectedType] = useState("all types");

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

  const allTrails = [
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
    {
      id: 7,
      image: trail1,
      title: "Meenakshi Amman Temple",
      region: "Tamil Nadu",
      era: "Nayak Dynasty (17th Century)",
      difficulty: "Easy",
      type: "Shore Temples",
      description: "Towering gopurams adorned with thousands of vibrant sculptures celebrating the divine feminine.",
    },
    {
      id: 8,
      image: trail2,
      title: "Ajanta Cave Paintings",
      region: "Maharashtra",
      era: "Gupta Period (2nd Century BCE - 6th Century CE)",
      difficulty: "Moderate",
      type: "Cave Temples",
      description: "Ancient Buddhist murals preserved in stone, depicting Jataka tales and celestial beauty.",
    },
    {
      id: 9,
      image: trail3,
      title: "Brihadeeswarar Temple",
      region: "Tamil Nadu",
      era: "Chola Dynasty (1010 CE)",
      difficulty: "Easy",
      type: "Shore Temples",
      description: "Architectural marvel with the world's first complete granite temple and towering vimana.",
    },
    {
      id: 10,
      image: trail1,
      title: "Dilwara Jain Temples",
      region: "Rajasthan",
      era: "Solanki Dynasty (11th-13th Century)",
      difficulty: "Moderate",
      type: "Mountain Temples",
      description: "Exquisite marble carvings showcasing the pinnacle of Jain temple architecture.",
    },
    {
      id: 11,
      image: trail2,
      title: "Ranakpur Jain Temple",
      region: "Rajasthan",
      era: "15th Century",
      difficulty: "Easy",
      type: "Jain Routes",
      description: "1,444 intricately carved marble pillars, each unique in design, creating a forest of stone artistry.",
    },
    {
      id: 12,
      image: trail3,
      title: "Tirupati Balaji",
      region: "Andhra Pradesh",
      era: "Ancient (Rebuilt 12th Century)",
      difficulty: "Moderate",
      type: "Mountain Temples",
      description: "One of the world's richest temples, where millions seek blessings of Lord Venkateswara.",
    },
  ];

  // Filter trails based on search, region, and type
  const filteredTrails = useMemo(() => {
    return allTrails.filter((trail) => {
      const matchesSearch = 
        searchQuery === "" ||
        trail.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trail.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trail.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        trail.era.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRegion =
        selectedRegion === "all regions" ||
        trail.region.toLowerCase() === selectedRegion.toLowerCase();

      const matchesType =
        selectedType === "all types" ||
        trail.type.toLowerCase() === selectedType.toLowerCase();

      return matchesSearch && matchesRegion && matchesType;
    });
  }, [searchQuery, selectedRegion, selectedType, allTrails]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedRegion("all regions");
    setSelectedType("all types");
  };

  const hasActiveFilters = searchQuery !== "" || selectedRegion !== "all regions" || selectedType !== "all types";

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
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-temple-gold/60 hover:text-temple-gold transition-colors"
                >
                  <X size={18} />
                </button>
              )}
            </div>

            {/* Region Filter */}
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="px-4 py-2 bg-card border-2 border-temple-gold/30 rounded-md text-parchment font-nav focus:border-temple-gold transition-all cursor-pointer hover:border-temple-gold/50 z-50"
            >
              {indianStates.map((state) => (
                <option key={state} value={state.toLowerCase()} className="bg-card text-parchment">
                  {state}
                </option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-card border-2 border-temple-gold/30 rounded-md text-parchment font-nav focus:border-temple-gold transition-all cursor-pointer hover:border-temple-gold/50 z-50"
            >
              {templeTypes.map((type) => (
                <option key={type} value={type.toLowerCase()} className="bg-card text-parchment">
                  {type}
                </option>
              ))}
            </select>

            {hasActiveFilters && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="border-temple-gold/40 text-temple-gold hover:bg-temple-gold/10 hover:border-temple-gold"
              >
                <X size={18} className="mr-2" />
                Clear Filters
              </Button>
            )}
          </div>

          {/* Active Filter Tags */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mt-4">
              {searchQuery && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-temple-gold/20 border border-temple-gold/40 rounded-full text-sm text-parchment font-nav">
                  <span>Search: "{searchQuery}"</span>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="hover:text-temple-gold transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              {selectedRegion !== "all regions" && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-temple-gold/20 border border-temple-gold/40 rounded-full text-sm text-parchment font-nav">
                  <span>Region: {selectedRegion}</span>
                  <button
                    onClick={() => setSelectedRegion("all regions")}
                    className="hover:text-temple-gold transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
              {selectedType !== "all types" && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-temple-gold/20 border border-temple-gold/40 rounded-full text-sm text-parchment font-nav">
                  <span>Type: {selectedType}</span>
                  <button
                    onClick={() => setSelectedType("all types")}
                    className="hover:text-temple-gold transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Trails Grid */}
      <section className="py-16 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl">
          {/* Results Count */}
          <div className="mb-8 text-center">
            <p className="text-parchment/70 font-body">
              Found <span className="text-temple-gold font-semibold">{filteredTrails.length}</span> sacred trails
              {hasActiveFilters && " matching your search"}
            </p>
          </div>

          {filteredTrails.length === 0 ? (
            <div className="text-center py-20">
              <div className="max-w-md mx-auto">
                <Search className="w-20 h-20 text-temple-gold/40 mx-auto mb-6" />
                <h3 className="text-2xl font-heading font-bold text-soft-gold mb-4">
                  No Trails Found
                </h3>
                <p className="text-parchment/70 font-body mb-6">
                  We couldn't find any temples matching your search criteria. Try adjusting your filters or search terms.
                </p>
                <Button
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-temple-gold to-soft-gold text-deep-bronze hover:shadow-divine transition-all"
                >
                  Clear All Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTrails.map((trail, index) => (
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
          )}

          {/* Pagination - Only show if there are results */}
          {filteredTrails.length > 0 && (
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
          )}
        </div>
      </section>
    </div>
  );
};

export default Trails;
