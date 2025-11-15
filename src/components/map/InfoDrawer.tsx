import { Button } from "@/components/ui/button";
import { X, Info } from "lucide-react";
import { useState } from "react";

export const InfoDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button */}
      <Button
        onClick={() => setIsOpen(true)}
        size="icon"
        className="fixed right-4 top-24 z-40 bg-card border-2 border-temple-gold/40 hover:bg-card/80 shadow-temple"
      >
        <Info className="w-4 h-4 text-temple-gold" />
      </Button>

      {/* Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-deep-bronze/80 backdrop-blur-sm z-50 animate-fade-in"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed right-0 top-0 bottom-0 w-full md:w-96 bg-gradient-to-b from-card via-card to-deep-bronze border-l-4 border-temple-gold/40 shadow-temple z-50 overflow-y-auto animate-slide-in-right">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between border-b-2 border-temple-gold/30 pb-4">
                <h2 className="text-2xl font-heading text-gradient-gold font-bold uppercase tracking-wider">
                  Akhanda Bharat
                </h2>
                <Button
                  onClick={() => setIsOpen(false)}
                  size="icon"
                  variant="ghost"
                  className="hover:bg-temple-gold/20"
                >
                  <X className="w-5 h-5 text-parchment" />
                </Button>
              </div>

              {/* Ancient Geography */}
              <section className="space-y-3">
                <h3 className="text-lg font-nav text-soft-gold uppercase tracking-wide flex items-center gap-2">
                  <span className="text-xl">🗺️</span>
                  Ancient Geography
                </h3>
                <p className="text-parchment/80 font-body leading-relaxed text-sm">
                  Akhanda Bharat represents the ancient unified Indian subcontinent, spanning from the Himalayas to Lanka, from Sindhu to Brahmaputra. This sacred land was known as Bharatavarsha in ancient texts.
                </p>
              </section>

              {/* Kingdoms */}
              <section className="space-y-3 border-t border-temple-gold/20 pt-4">
                <h3 className="text-lg font-nav text-soft-gold uppercase tracking-wide flex items-center gap-2">
                  <span className="text-xl">👑</span>
                  Ancient Kingdoms
                </h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {['Aryavarta', 'Dakshinapatha', 'Kalinga', 'Avanti', 'Gandhara', 'Magadha'].map(kingdom => (
                    <div key={kingdom} className="bg-card/50 border border-temple-gold/20 rounded px-3 py-2">
                      <span className="text-parchment font-semibold">{kingdom}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Rivers */}
              <section className="space-y-3 border-t border-temple-gold/20 pt-4">
                <h3 className="text-lg font-nav text-soft-gold uppercase tracking-wide flex items-center gap-2">
                  <span className="text-xl">🌊</span>
                  Sacred Rivers
                </h3>
                <div className="space-y-2 text-sm">
                  {[
                    { name: 'Ganga', desc: 'The holiest river, descending from Shiva\'s locks' },
                    { name: 'Yamuna', desc: 'Krishna\'s divine playground' },
                    { name: 'Saraswati', desc: 'The mystic river, now invisible' },
                    { name: 'Godavari', desc: 'Dakshin Ganga of the south' }
                  ].map(river => (
                    <div key={river.name} className="bg-card/50 border border-temple-gold/20 rounded p-3">
                      <p className="text-soft-gold font-semibold">{river.name}</p>
                      <p className="text-parchment/70 italic">{river.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mythic Significance */}
              <section className="space-y-3 border-t border-temple-gold/20 pt-4">
                <h3 className="text-lg font-nav text-soft-gold uppercase tracking-wide flex items-center gap-2">
                  <span className="text-xl">🕉️</span>
                  Mythic Significance
                </h3>
                <p className="text-parchment/80 font-body leading-relaxed text-sm italic">
                  This land is where gods walked among mortals, where epics unfolded, and where cosmic truths were revealed. Every mountain, river, and temple carries the whispers of ancient wisdom.
                </p>
              </section>

              {/* Decorative elements */}
              <div className="pt-6 border-t-2 border-temple-gold/30">
                <div className="flex items-center justify-center gap-4 text-2xl opacity-60">
                  <span className="animate-breathe">🕉️</span>
                  <span className="animate-breathe" style={{ animationDelay: '1s' }}>🪷</span>
                  <span className="animate-breathe" style={{ animationDelay: '2s' }}>🔱</span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
