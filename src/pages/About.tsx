import omSymbol from "@/assets/om-symbol.png";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-b from-deep-bronze via-background to-card overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {[...Array(40)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-soft-gold rounded-full animate-[float-up_10s_ease-in-out_infinite]"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <img
            src={omSymbol}
            alt="Om"
            className="w-20 h-20 mx-auto mb-8 breathe opacity-80"
          />
          <h1 className="text-5xl md:text-7xl font-heading font-black text-gradient-gold mb-6 uppercase tracking-wider animate-divine-reveal">
            The Spirit Behind Mythic Trails
          </h1>
          <p className="text-xl text-parchment/80 font-body italic max-w-3xl mx-auto animate-divine-reveal" style={{ animationDelay: "0.2s" }}>
            Where ancient wisdom meets digital devotion
          </p>
        </div>
      </section>

      {/* Vision & Purpose */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-6 uppercase tracking-wide">
              Our Vision
            </h2>
            <p className="text-xl text-parchment/90 font-body leading-relaxed">
              Mythic Trails was born from a profound reverence for the sacred spaces that have shaped human spirituality across millennia. We believe that every temple, every shrine, every pilgrimage route carries within it the accumulated prayers, hopes, and wisdom of countless generations.
            </p>
          </div>

          <div className="bg-card border-2 border-temple-gold/30 rounded-lg p-10 shadow-temple">
            <h3 className="text-3xl font-heading font-semibold text-soft-gold mb-6">Our Purpose</h3>
            <p className="text-parchment/80 font-body text-lg leading-relaxed mb-6">
              In an age where ancient heritage risks being forgotten, we serve as digital custodians—preserving not just the physical architecture, but the living stories, myths, and spiritual traditions that breathe life into these sacred spaces.
            </p>
            <p className="text-parchment/80 font-body text-lg leading-relaxed">
              Through meticulous research, artistic presentation, and technological innovation, we create immersive journeys that transport modern seekers into the heart of ancient civilizations, allowing them to experience the divine as our ancestors did.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 px-4 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-12 text-center uppercase tracking-wide">
            The Story
          </h2>

          <div className="space-y-8 text-parchment/80 font-body text-lg leading-relaxed">
            <p>
              The seed of Mythic Trails was planted during a solitary pilgrimage to Angkor Wat at dawn. As golden light filtered through ancient stone pillars, illuminating centuries-old carvings that told stories of gods and kings, a profound realization emerged: these sacred places are living libraries, their walls inscribed with humanity's deepest spiritual yearnings.
            </p>

            <p>
              But these treasures face a silent crisis. Climate change weathers stone facades. Urban development encroaches on sacred boundaries. Most critically, younger generations grow disconnected from the spiritual heritage that once defined their ancestors' worldview.
            </p>

            <p>
              Mythic Trails emerged as a response—a digital sanctuary where the world's sacred heritage could be preserved, celebrated, and shared. We document not merely structures, but the complete spiritual ecosystem: the myths that inspired their creation, the rituals that animated their courtyards, the philosophical systems that guided their architecture.
            </p>

            <p>
              Our team spans archaeologists, theologians, artists, and technologists, united by a shared conviction: that understanding our spiritual past is essential to navigating our collective future. Each trail we document, each story we preserve, each myth we illuminate becomes a thread connecting modern seekers to the eternal wisdom of the ancients.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gradient-gold mb-12 text-center uppercase tracking-wide">
            Our Sacred Pillars
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Authenticity",
                description: "Every story is researched with scholarly rigor, honoring the truth of ancient traditions without embellishment or distortion.",
              },
              {
                title: "Reverence",
                description: "We approach all spiritual traditions with deep respect, recognizing that these are living faiths for millions worldwide.",
              },
              {
                title: "Beauty",
                description: "We believe sacred spaces deserve presentation that matches their majesty—artful, cinematic, and deeply moving.",
              },
              {
                title: "Accessibility",
                description: "Complex theological concepts and architectural marvels are made comprehensible without sacrificing depth or nuance.",
              },
              {
                title: "Preservation",
                description: "Digital documentation serves as insurance against time's erosion, ensuring these treasures endure for future generations.",
              },
              {
                title: "Connection",
                description: "We build bridges—between past and present, between cultures, between the material and the divine.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-card border-2 border-temple-gold/30 rounded-lg p-8 shadow-temple hover:shadow-divine hover:border-temple-gold transition-all duration-500 animate-divine-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-2xl font-heading font-semibold text-soft-gold mb-4">
                  {value.title}
                </h3>
                <p className="text-parchment/80 font-body leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-card">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-temple-gold/20 blur-3xl rounded-full" />
            <div className="relative bg-card border-4 border-temple-gold/60 rounded-full px-12 py-6 shadow-divine">
              <p className="text-2xl font-heading font-bold text-gradient-gold tracking-wider">
                Made by 344M
              </p>
              <p className="text-parchment/80 font-body mt-2">
                with ❤️, light, and devotion
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-heading font-bold text-gradient-gold mb-6 uppercase tracking-wide">
            Connect With Us
          </h2>
          <p className="text-parchment/80 font-body text-lg mb-8">
            Share your sacred journeys, suggest trails, or join our mission to preserve humanity's spiritual heritage.
          </p>
          <p className="text-soft-gold font-body text-xl">
            🌺 Every voice shapes the trail
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
