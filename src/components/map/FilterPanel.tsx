import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { useState } from "react";

interface FilterPanelProps {
  onFilterChange: (filters: string[]) => void;
  activeFilters: string[];
}

const filterCategories = [
  { id: "Mountain Temples", icon: "⛰️", label: "Mountain Temples" },
  { id: "Cave Temples", icon: "🕳️", label: "Cave Temples" },
  { id: "Shakti Peethas", icon: "🔱", label: "Shakti Peethas" },
  { id: "Jyotirlinga", icon: "🕉️", label: "Jyotirlingas" },
  { id: "Buddhist Routes", icon: "☸️", label: "Buddhist Routes" },
  { id: "Ramayana Sites", icon: "🏹", label: "Ramayana Sites" },
  { id: "Mahabharata Sites", icon: "⚔️", label: "Mahabharata Sites" },
  { id: "UNESCO Sites", icon: "🌍", label: "UNESCO Sites" },
  { id: "Ancient Kingdoms", icon: "👑", label: "Ancient Kingdoms" },
];

export const FilterPanel = ({ onFilterChange, activeFilters }: FilterPanelProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFilter = (filterId: string) => {
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(f => f !== filterId)
      : [...activeFilters, filterId];
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    onFilterChange([]);
  };

  return (
    <div className={`fixed left-4 top-24 z-40 transition-transform duration-500 ${!isOpen ? '-translate-x-[calc(100%+2rem)]' : ''}`}>
      {/* Toggle button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="absolute -right-12 top-0 bg-card border-2 border-temple-gold/40 hover:bg-card/80 shadow-temple"
      >
        <Filter className="w-4 h-4 text-temple-gold" />
      </Button>

      {/* Panel */}
      <div className="w-80 bg-card/95 backdrop-blur-sm border-2 border-temple-gold/40 rounded-lg shadow-temple p-6">
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-temple-gold/30 pb-3">
            <h3 className="text-xl font-heading text-gradient-gold font-bold uppercase tracking-wider">
              Sacred Filters
            </h3>
            {activeFilters.length > 0 && (
              <Button
                onClick={clearFilters}
                variant="ghost"
                size="sm"
                className="text-parchment/60 hover:text-soft-gold text-xs"
              >
                Clear All
              </Button>
            )}
          </div>

          {/* Filter categories */}
          <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
            {filterCategories.map((category) => {
              const isActive = activeFilters.includes(category.id);
              return (
                <button
                  key={category.id}
                  onClick={() => toggleFilter(category.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-md border-2 transition-all duration-300 ${
                    isActive
                      ? 'bg-temple-gold/20 border-temple-gold shadow-divine'
                      : 'bg-card/50 border-temple-gold/20 hover:border-temple-gold/40 hover:bg-card/80'
                  }`}
                >
                  <span className="text-2xl">{category.icon}</span>
                  <span className={`text-sm font-nav tracking-wide flex-1 text-left ${
                    isActive ? 'text-soft-gold font-semibold' : 'text-parchment/80'
                  }`}>
                    {category.label}
                  </span>
                  {isActive && (
                    <div className="w-2 h-2 bg-temple-gold rounded-full animate-[glow-pulse_2s_ease-in-out_infinite]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active count */}
          {activeFilters.length > 0 && (
            <div className="pt-3 border-t border-temple-gold/30">
              <p className="text-sm text-parchment/70 font-body text-center">
                <span className="text-soft-gold font-bold">{activeFilters.length}</span> filter{activeFilters.length !== 1 ? 's' : ''} active
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
