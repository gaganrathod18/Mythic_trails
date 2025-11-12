import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-card to-deep-bronze border-t-2 border-temple-gold/20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-temple-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-soft-gold rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Mythic Trails" className="w-10 h-10 glow-pulse" />
              <span className="text-xl font-heading font-bold text-gradient-gold">
                MYTHIC TRAILS
              </span>
            </div>
            <p className="text-parchment/70 font-body text-sm leading-relaxed">
              A digital sanctum preserving the world's sacred stories and timeless trails.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-soft-gold mb-4 tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {["Home", "Trails", "Map", "Stories", "Blog", "About"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-parchment/70 hover:text-temple-gold transition-colors font-nav text-sm tracking-wide"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Regions */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-soft-gold mb-4 tracking-wide">
              Explore Regions
            </h3>
            <ul className="space-y-2">
              {["India", "Nepal", "Cambodia", "Indonesia", "Sri Lanka"].map((region) => (
                <li key={region}>
                  <Link
                    to="/map"
                    className="text-parchment/70 hover:text-temple-gold transition-colors font-nav text-sm tracking-wide"
                  >
                    {region}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-soft-gold mb-4 tracking-wide">
              Stay Connected
            </h3>
            <p className="text-parchment/70 font-body text-sm mb-4">
              Join our journey to preserve sacred heritage
            </p>
            <div className="flex gap-3">
              {[
                { icon: "📧", label: "Email" },
                { icon: "🐦", label: "Twitter" },
                { icon: "📘", label: "Facebook" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="w-10 h-10 flex items-center justify-center bg-background/50 border border-temple-gold/30 rounded-lg hover:border-temple-gold hover:bg-temple-gold/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-temple-gold/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
            <p className="text-parchment/60 font-body text-sm">
              © {currentYear} Mythic Trails · Crafted with devotion to the ancient world
            </p>
            <p className="text-parchment/60 font-body text-sm">
              Made by <span className="text-temple-gold font-semibold">344M</span> with ❤️
            </p>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-temple-gold to-transparent torch-flicker" />
    </footer>
  );
};

export default Footer;
