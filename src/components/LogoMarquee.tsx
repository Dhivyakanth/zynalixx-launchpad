import { motion } from "framer-motion";

const partners = [
  "Enterprise Co",
  "TechStart",
  "InnovateLabs",
  "FutureScale",
  "CloudFirst",
  "DataDrive",
];

const LogoMarquee = () => {
  return (
    <div className="py-16 border-y border-border/30">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-sm mb-8"
        >
          Trusted by innovative companies worldwide
        </motion.p>
        
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          {/* Marquee container */}
          <div className="flex gap-16 animate-marquee">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0 flex items-center gap-3 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-muted/30 flex items-center justify-center">
                  <span className="text-lg font-bold">{partner.charAt(0)}</span>
                </div>
                <span className="text-lg font-medium whitespace-nowrap">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;
