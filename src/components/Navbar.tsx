import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "TEMPLE TRAILS", path: "/trails" },
    { name: "MAP", path: "/map" },
    { name: "STORIES", path: "/stories" },
    { name: "BLOG", path: "/blog" },
    { name: "ABOUT", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-temple border-b border-border/50"
          : "bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Mythic Trails"
              className="w-10 h-10 transition-all duration-700 group-hover:rotate-180 glow-pulse"
            />
            <span className="text-xl font-heading font-bold text-gradient-gold tracking-wider">
              MYTHIC TRAILS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-nav text-sm tracking-[0.15em] transition-all duration-300 relative group ${
                  isActive(link.path)
                    ? "text-temple-gold"
                    : "text-parchment/80 hover:text-soft-gold"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-temple-gold to-soft-gold transition-all duration-300 ${
                    isActive(link.path)
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-temple-gold hover:text-soft-gold transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-card/95 backdrop-blur-xl border-t border-border/50 shadow-temple">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-6 py-4 font-nav text-sm tracking-[0.12em] border-b border-border/30 transition-all duration-300 ${
                isActive(link.path)
                  ? "text-temple-gold bg-temple-gold/10"
                  : "text-parchment/80 hover:text-soft-gold hover:bg-soft-gold/5"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
