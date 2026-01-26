import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Palette, Brain, Rocket, Smartphone, TrendingUp } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import LogoMarquee from "@/components/LogoMarquee";

const services = [
  { icon: Palette, name: "Graphic Design" },
  { icon: Brain, name: "AI / ML Solutions" },
  { icon: Code2, name: "MERN Stack" },
  { icon: Smartphone, name: "App Development" },
  { icon: Rocket, name: "Full Stack Dev" },
  { icon: TrendingUp, name: "Digital Marketing" },
];

const Home = () => {
  return (
    <PageTransition>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative overflow-hidden">
          {/* 3D Planet Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
            >
              <div className="absolute inset-0 rounded-full animate-planet-glow" style={{ background: "radial-gradient(circle at 30% 30%, hsl(68 100% 56% / 0.3) 0%, hsl(120 100% 50% / 0.1) 30%, transparent 70%)" }} />
              <div className="absolute inset-[10%] rounded-full" style={{ background: "radial-gradient(circle at 35% 35%, hsl(0 0% 20%) 0%, hsl(0 0% 5%) 50%, hsl(0 0% 2%) 100%)", boxShadow: "inset -40px -40px 100px rgba(0,0,0,0.8), 0 0 100px hsl(68 100% 56% / 0.2)" }} />
              <div className="absolute inset-[8%] rounded-full opacity-60" style={{ background: "radial-gradient(circle at 30% 30%, transparent 50%, hsl(68 100% 56% / 0.1) 70%, hsl(120 100% 50% / 0.15) 100%)" }} />
              <div className="absolute inset-[10%] rounded-full opacity-10 overflow-hidden" style={{ backgroundImage: "linear-gradient(0deg, transparent 49%, hsl(68 100% 56%) 50%, transparent 51%), linear-gradient(90deg, transparent 49%, hsl(68 100% 56%) 50%, transparent 51%)", backgroundSize: "60px 60px" }} />
            </motion.div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-card/60 border border-border/50 rounded-full text-muted-foreground backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Introducing AI-Powered Development Solutions
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6">
              Turn Your Ideas Into<br /><span className="text-primary">Stunning Products</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              We build premium full-stack applications, AI solutions, and digital products that help startups and enterprises scale their business.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book-call">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary flex items-center gap-2 text-base px-8 py-4">
                  Start Your Project <ArrowRight size={18} />
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-secondary flex items-center gap-2 text-base px-8 py-4">
                  View Our Work
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <LogoMarquee />

        {/* Services Overview */}
        <section className="py-24 px-4">
          <div className="container mx-auto">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> What We Do
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Expertise</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">From concept to deployment, we deliver end-to-end solutions that drive growth</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {services.map((service, index) => (
                <motion.div key={service.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -4, borderColor: "hsl(var(--primary))" }} className="p-6 rounded-2xl bg-card/30 border border-border/30 text-center transition-all duration-300 group">
                  <service.icon className="w-8 h-8 mx-auto mb-3 text-muted-foreground group-hover:text-primary transition-colors" />
                  <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">{service.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 border-y border-border/30">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[{ value: "4+", label: "Projects Completed" }, { value: "10+", label: "Happy Clients" }, { value: "7", label: "Services Offered" }, { value: "24/7", label: "Support Available" }].map((stat, index) => (
                <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                  <p className="text-4xl md:text-5xl font-display font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center p-12 md:p-16 rounded-3xl bg-card/30 border border-border/30 relative overflow-hidden">
              <div className="absolute inset-0 opacity-20" style={{ background: "radial-gradient(circle at 50% 50%, hsl(68 100% 56% / 0.3) 0%, transparent 70%)" }} />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Ready to Build Something Amazing?</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">Let's discuss your project and create a solution that exceeds your expectations.</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/book-call"><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-primary flex items-center gap-2">Schedule a Call <ArrowRight size={18} /></motion.button></Link>
                  <Link to="/contact"><motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="btn-secondary">Contact Us</motion.button></Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;
