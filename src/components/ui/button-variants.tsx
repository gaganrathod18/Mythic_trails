import { buttonVariants } from "@/components/ui/button";

// Extended button variants for Mythic Trails theme
export const mythicButtonVariants = {
  hero: "bg-gradient-to-r from-temple-gold to-soft-gold text-deep-bronze font-nav tracking-wider uppercase shadow-divine hover:shadow-[0_0_40px_hsl(var(--sacred-glow)/0.6)] hover:scale-105 transition-all duration-300 border-2 border-soft-gold/30",
  outline: "border-2 border-temple-gold/60 text-temple-gold bg-transparent hover:bg-temple-gold/10 hover:border-temple-gold hover:shadow-divine transition-all duration-300 font-nav tracking-wide",
  ghost: "text-parchment/80 hover:text-soft-gold hover:bg-soft-gold/10 transition-all duration-300",
  sacred: "bg-card border-2 border-temple-gold/40 text-parchment shadow-temple hover:shadow-divine hover:border-temple-gold transition-all duration-500 glow-pulse",
};
