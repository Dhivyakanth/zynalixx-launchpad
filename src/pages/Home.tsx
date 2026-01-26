import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Brain, Rocket, Smartphone, TrendingUp } from "lucide-react";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import LogoMarquee from "@/components/LogoMarquee";
import heroPlanet from "@/assets/hero-planet.png";

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

  // Parallax transforms
  const planetY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const planetScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const planetOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
  const heroContentY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroContentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <PageTransition>
      <main className="relative z-10">
        {/* Hero Section */}
        <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative overflow-hidden">
          {/* 3D Planet Background with Parallax */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            style={{ y: planetY, scale: planetScale, opacity: planetOpacity }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Planet Image */}
              <motion.img
                src={heroPlanet}
                alt=""
                className="w-[80vw] max-w-[1200px] h-auto object-contain opacity-90"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              {/* Glow overlay */}
              <div 
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "radial-gradient(circle at 60% 50%, hsl(68 100% 56% / 0.1) 0%, transparent 50%)",
                }}
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
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-card/60 border border-border/50 rounded-full text-muted-foreground backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Introducing AI-Powered Development Solutions
              </span>
            </motion.div>

            {/* Main Headline with stagger animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Turn Your Ideas Into
              </motion.span>
              <br />
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Stunning Products
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.7 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            >
              We build premium full-stack applications, AI solutions, and digital products that help startups and enterprises scale their business.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/book-call">
                <motion.button 
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsl(68 100% 56% / 0.4)" }} 
                  whileTap={{ scale: 0.98 }} 
                  className="btn-primary flex items-center gap-2 text-base px-8 py-4"
                >
                  Start Your Project <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.98 }} 
                  className="btn-secondary flex items-center gap-2 text-base px-8 py-4"
                >
                  View Our Work
                </motion.button>
              </Link>
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
                className="w-6 h-10 mx-auto rounded-full border-2 border-primary/40 flex items-start justify-center p-2"
              >
                <motion.div 
                  className="w-1 h-2 bg-primary rounded-full"
                  animate={{ opacity: [0.3, 1, 0.3] }}
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
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-display font-bold mb-4"
              >
                Our Expertise
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                From concept to deployment, we deliver end-to-end solutions that drive growth
              </motion.p>
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
                    boxShadow: "0 20px 40px -20px hsl(68 100% 56% / 0.3)"
                  }} 
                  className="p-6 rounded-2xl bg-card/30 border border-border/30 text-center transition-all duration-300 group cursor-pointer"
                >
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
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
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-medium cursor-pointer"
                >
                  Explore All Services
                  <ArrowRight size={16} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Stats with counter animation effect */}
        <section className="py-20 px-4 border-y border-border/30 relative overflow-hidden">
          {/* Background glow */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at 50% 50%, hsl(68 100% 56% / 0.1) 0%, transparent 60%)",
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
                  className="text-center"
                >
                  <motion.p 
                    className="text-4xl md:text-5xl font-display font-bold text-primary mb-2"
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
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
                    "radial-gradient(circle at 30% 50%, hsl(68 100% 56% / 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 70% 50%, hsl(68 100% 56% / 0.4) 0%, transparent 50%)",
                    "radial-gradient(circle at 30% 50%, hsl(68 100% 56% / 0.4) 0%, transparent 50%)",
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="relative z-10">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl md:text-5xl font-display font-bold mb-4"
                >
                  Ready to Build Something Amazing?
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto"
                >
                  Let's discuss your project and create a solution that exceeds your expectations.
                </motion.p>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/book-call">
                    <motion.button 
                      whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(68 100% 56% / 0.5)" }} 
                      whileTap={{ scale: 0.98 }} 
                      className="btn-primary flex items-center gap-2"
                    >
                      Schedule a Call <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                  <Link to="/contact">
                    <motion.button 
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.98 }} 
                      className="btn-secondary"
                    >
                      Contact Us
                    </motion.button>
                  </Link>
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
