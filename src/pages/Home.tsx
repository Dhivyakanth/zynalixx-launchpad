import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Brain, Rocket, Smartphone, TrendingUp } from "lucide-react";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import LogoMarquee from "@/components/LogoMarquee";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";
import ParticleField from "@/components/ParticleField";
import heroOrb from "@/assets/hero-orb.png";

const services = [
  { icon: Palette, name: "Graphic Design" },
  { icon: Brain, name: "AI / ML Solutions" },
  { icon: Code2, name: "MERN Stack" },
  { icon: Smartphone, name: "App Development" },
  { icon: Rocket, name: "Full Stack Dev" },
  { icon: TrendingUp, name: "Digital Marketing" },
];

const Home = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth parallax transforms with easing
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 120], { clamp: true });
  const planetScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const planetOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <PageTransition>
      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative overflow-hidden">
          {/* Seamless Orb Background with Parallax */}
          <motion.div
            className="absolute inset-0 pointer-events-none will-change-transform"
            style={{ y: planetY, scale: planetScale, opacity: planetOpacity, willChange: "transform, opacity" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              {/* Main orb as background with radial mask for seamless blending */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh]"
                style={{
                  backgroundImage: `url(${heroOrb})`,
                  backgroundSize: "70vw auto",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  maskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 70%)",
                  WebkitMaskImage: "radial-gradient(ellipse 50% 50% at 50% 50%, black 20%, transparent 70%)",
                }}
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* Primary glow layer */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse 40% 40% at 50% 50%, hsl(var(--primary) / 0.4) 0%, hsl(var(--primary) / 0.15) 30%, transparent 60%)",
                }}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Secondary atmospheric glow */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "radial-gradient(ellipse 60% 50% at 50% 45%, hsl(280 80% 55% / 0.2) 0%, transparent 50%)",
                }}
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Floating particles around the orb */}
              <ParticleField count={40} />
              
              {/* Outer pulsing ring */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[1000px] aspect-square rounded-full"
                style={{
                  background: "radial-gradient(circle, transparent 35%, hsl(var(--primary) / 0.15) 45%, hsl(var(--primary) / 0.05) 55%, transparent 65%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Inner core glow */}
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] max-w-[400px] aspect-square rounded-full"
                style={{
                  background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, hsl(var(--primary) / 0.1) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>

          {/* Hero Content with Parallax */}
          <motion.div 
            className="relative z-10 text-center max-w-5xl mx-auto"
            style={{ y: heroContentY, opacity: heroContentOpacity }}
          >
            {/* Announcement Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.9 }} 
              animate={{ opacity: 1, y: 0, scale: 1 }} 
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8"
            >
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-card/60 border border-border/50 rounded-full text-muted-foreground backdrop-blur-sm"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary) / 0.5)" }}
              >
                <motion.span 
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                Introducing AI-Powered Development Solutions
              </motion.span>
            </motion.div>

            {/* Main Headline with text reveal */}
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
            >
              <TextReveal delay={0.3}>Turn Your Ideas Into</TextReveal>
              <br />
              <span className="text-primary">
                <TextReveal delay={0.5} type="chars" staggerChildren={0.04}>Stunning Products</TextReveal>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.9 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              <TextReveal delay={0.7} staggerChildren={0.02}>
                We build premium full-stack applications, AI solutions, and digital products that help startups and enterprises scale their business.
              </TextReveal>
            </motion.p>

            {/* CTA Buttons with magnetic effect */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.1 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <MagneticButton to="/book-call" variant="primary" strength={0.3}>
                Start Your Project <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton to="/projects" variant="secondary" strength={0.3}>
                View Our Work
              </MagneticButton>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 mx-auto rounded-full border-2 border-primary/40 flex items-start justify-center p-2 magnetic-target cursor-pointer"
              >
                <motion.div 
                  className="w-1 h-2 bg-primary rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3], y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Logo Marquee */}
        <LogoMarquee />

        {/* Services Overview with scroll-triggered animations */}
        <section className="py-24 px-4 relative">
          <div className="container mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> 
                What We Do
              </motion.span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <TextReveal>Our Expertise</TextReveal>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                <TextReveal delay={0.2} staggerChildren={0.02}>
                  From concept to deployment, we deliver end-to-end solutions that drive growth
                </TextReveal>
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => (
                <motion.div 
                  key={service.name} 
                  initial={{ opacity: 0, y: 30, scale: 0.9 }} 
                  whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: index * 0.1, duration: 0.5 }} 
                  whileHover={{ 
                    y: -8, 
                    borderColor: "hsl(var(--primary))",
                    boxShadow: "0 20px 40px -20px hsl(var(--primary) / 0.3)"
                  }}
                  className="p-6 rounded-2xl bg-card/30 border border-border/30 text-center transition-all duration-300 group cursor-pointer magnetic-target"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -15, 15, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <service.icon className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    {service.name}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Link to services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-center mt-12"
            >
              <Link to="/services">
                <motion.span
                  whileHover={{ x: 8 }}
                  className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer magnetic-target"
                >
                  Explore All Services
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight size={16} />
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats with counter animation effect */}
        <section className="py-20 px-4 border-y border-border/30 relative overflow-hidden">
          {/* Background glow */}
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{
              background: "radial-gradient(ellipse at 50% 50%, hsl(var(--primary) / 0.15) 0%, transparent 60%)",
            }}
          />
          
          <div className="container mx-auto relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "4+", label: "Projects Completed" }, 
                { value: "10+", label: "Happy Clients" }, 
                { value: "7", label: "Services Offered" }, 
                { value: "24/7", label: "Support Available" }
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  initial={{ opacity: 0, y: 30, scale: 0.8 }} 
                  whileInView={{ opacity: 1, y: 0, scale: 1 }} 
                  viewport={{ once: true, margin: "-50px" }} 
                  transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center cursor-pointer magnetic-target"
                >
                  <motion.p 
                    className="text-4xl md:text-5xl font-display font-bold text-primary mb-2"
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with enhanced animations */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.95 }} 
              whileInView={{ opacity: 1, y: 0, scale: 1 }} 
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.01 }}
              className="text-center p-12 md:p-16 rounded-3xl bg-card/30 border border-border/30 relative overflow-hidden group"
            >
              {/* Animated background glow */}
              <motion.div 
                className="absolute inset-0 opacity-20"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 70% 50%, hsl(var(--primary) / 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 30% 50%, hsl(var(--primary) / 0.4) 0%, transparent 50%)",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
                  <TextReveal>Ready to Build Something Amazing?</TextReveal>
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  <TextReveal delay={0.2} staggerChildren={0.02}>
                    Let's discuss your project and create a solution that exceeds your expectations.
                  </TextReveal>
                </p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <MagneticButton to="/book-call" variant="primary" strength={0.4}>
                    Schedule a Call <ArrowRight size={18} />
                  </MagneticButton>
                  <MagneticButton to="/contact" variant="secondary" strength={0.4}>
                    Contact Us
                  </MagneticButton>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;
