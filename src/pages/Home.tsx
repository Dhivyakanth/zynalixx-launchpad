import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Code2, Zap, Users } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import logo from "@/assets/zynalixx-logo.jpeg";

const stats = [
  { value: "4+", label: "Projects Completed", icon: Code2 },
  { value: "100%", label: "Client Satisfaction", icon: Users },
  { value: "24/7", label: "Support Available", icon: Zap },
];

const featuredProjects = [
  {
    title: "Billing Software",
    category: "Business Solution",
    description: "Streamlined invoicing and payment tracking system",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "Full-featured online store with payment integration",
  },
  {
    title: "AI Chatbot",
    category: "AI / ML",
    description: "Intelligent conversational AI for customer support",
  },
];

const Home = () => {
  return (
    <PageTransition>
      <main className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-20 pb-12 px-4">
          <div className="container mx-auto text-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.div
                className="relative inline-block"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={logo}
                  alt="Zynalixx"
                  className="w-28 h-28 md:w-36 md:h-36 rounded-3xl object-cover mx-auto border-2 border-primary/40 glow-primary"
                />
                <motion.div
                  className="absolute -inset-4 rounded-3xl border border-primary/20"
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
            >
              <span className="text-gradient">Zynalixx</span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto mb-4"
            >
              Building Tomorrow's Digital Solutions
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-10"
            >
              We transform innovative ideas into powerful digital products that drive business growth. 
              Your vision, our expertise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/book-call">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
                >
                  <Sparkles size={20} />
                  Start Your Project
                </motion.button>
              </Link>
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
                >
                  Explore Our Work
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-20"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-primary/40 mx-auto flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-3 bg-primary rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="card-glass text-center"
                >
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects Preview */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <SectionHeading
              badge="Our Work"
              title="Featured Projects"
              subtitle="Explore some of our recent success stories and innovative solutions"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -5 }}
                  className="card-glass group cursor-pointer"
                >
                  <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-4 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-primary/60 group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-semibold mt-2 mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-center mt-12"
            >
              <Link to="/projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  View All Projects
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-glass text-center py-16 px-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10" />
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                  Ready to Build Something <span className="text-gradient">Amazing</span>?
                </h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                  Let's discuss your project and create a digital solution that sets you apart.
                </p>
                <Link to="/book-call">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;