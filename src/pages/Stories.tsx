import trail1 from "@/assets/trail-1.jpg";
import trail2 from "@/assets/trail-2.jpg";
import trail3 from "@/assets/trail-3.jpg";
import { BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Stories = () => {
  const stories = [
    {
      id: 1,
      image: trail1,
      title: "The Moon God's Promise",
      category: "Divine Journeys",
      era: "Vedic Age",
      region: "Madhya Pradesh",
      excerpt: "When Chandra descended from the heavens, his love for Hemavati sparked a dynasty that would build temples to celebrate the divine union of sacred and sensual...",
      readTime: "8 min read",
    },
    {
      id: 2,
      image: trail2,
      title: "Whispers of Vijayanagara",
      category: "Legends of Kings",
      era: "Medieval Era",
      region: "Karnataka",
      excerpt: "The empire built on divine blessings and strategic brilliance, where Virupaksha watched over kings and commoners alike from his sacred hilltop...",
      readTime: "12 min read",
    },
    {
      id: 3,
      image: trail3,
      title: "Ganga's Eternal Flow",
      category: "Creation Myths",
      era: "Timeless",
      region: "Uttar Pradesh",
      excerpt: "How Shiva caught the descending goddess in his matted locks, softening her cosmic power to bless the earth with eternal purification...",
      readTime: "10 min read",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-b from-deep-bronze via-background to-card overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-soft-gold rounded-full animate-[float-up_8s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gradient-gold mb-6 uppercase tracking-wider animate-divine-reveal">
            Whispers of the Forgotten Gods
          </h1>
          <p className="text-xl text-parchment/80 font-body italic max-w-3xl mx-auto animate-divine-reveal" style={{ animationDelay: "0.2s" }}>
            Ancient tales inscribed in stone and carried through time
          </p>
        </div>
      </section>

      {/* Category Bar */}
      <section className="sticky top-20 z-40 bg-card/95 backdrop-blur-xl border-y border-temple-gold/20 shadow-temple">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "All Stories",
              "Creation Myths",
              "Divine Journeys",
              "Legends of Kings",
              "Temples & Wonders",
              "Pilgrim Diaries",
              "Feminine Divinity",
            ].map((category) => (
              <button
                key={category}
                className="px-6 py-2 font-nav text-sm tracking-wide border border-temple-gold/30 rounded-full text-parchment/80 hover:text-soft-gold hover:border-temple-gold hover:bg-soft-gold/10 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <article
                key={story.id}
                className="group bg-card border-2 border-temple-gold/30 rounded-lg overflow-hidden hover:border-temple-gold transition-all duration-500 shadow-temple hover:shadow-divine animate-divine-reveal"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-bronze via-deep-bronze/50 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-temple-gold/90 text-deep-bronze px-3 py-1 rounded-full text-xs font-nav tracking-wide backdrop-blur-sm">
                    {story.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-2xl font-heading font-semibold text-soft-gold mb-3 group-hover:text-temple-gold transition-colors">
                    {story.title}
                  </h2>

                  <div className="flex items-center gap-4 mb-4 text-sm text-parchment/60">
                    <span className="font-nav">{story.era}</span>
                    <span>•</span>
                    <span className="font-nav">{story.region}</span>
                    <span>•</span>
                    <span className="font-body">{story.readTime}</span>
                  </div>

                  <p className="text-parchment/70 font-body leading-relaxed mb-6 line-clamp-3">
                    {story.excerpt}
                  </p>

                  <Button
                    variant="ghost"
                    className="w-full text-temple-gold hover:text-soft-gold hover:bg-soft-gold/10 transition-all group/btn border border-temple-gold/20 hover:border-temple-gold/40"
                  >
                    <BookOpen className="mr-2" size={18} />
                    Read Full Story
                    <ChevronRight className="ml-auto group-hover/btn:translate-x-1 transition-transform" size={18} />
                  </Button>
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent torch-flicker" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent torch-flicker" />
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-card border-2 border-temple-gold/40 text-parchment shadow-temple hover:shadow-divine hover:border-temple-gold transition-all duration-500 font-nav tracking-wide"
            >
              <BookOpen className="mr-2" />
              VIEW ALL STORIES
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Stories;
