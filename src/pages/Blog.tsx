import { Feather } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-deep-bronze via-background to-card">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gradient-gold mb-4 uppercase tracking-wider animate-divine-reveal">
            The Pilgrim's Journal
          </h1>
          <p className="text-xl text-parchment/80 font-body italic animate-divine-reveal" style={{ animationDelay: "0.2s" }}>
            Modern seekers sharing their sacred journeys
          </p>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-32 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <Feather className="w-20 h-20 text-temple-gold mx-auto mb-8 glow-pulse" />
          <h2 className="text-3xl font-heading font-bold text-gradient-gold mb-4">
            Pilgrim Stories Coming Soon
          </h2>
          <p className="text-parchment/70 font-body text-lg">
            Share your temple experiences, spiritual insights, and travel wisdom with fellow seekers
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
