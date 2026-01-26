import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Palette, 
  Brain, 
  Code2, 
  Layout, 
  Layers, 
  TrendingUp, 
  Smartphone,
  ArrowRight 
} from "lucide-react";
import PageTransition from "@/components/PageTransition";
import MagneticButton from "@/components/MagneticButton";
import TextReveal from "@/components/TextReveal";

const services = [
  {
    icon: Palette,
    title: "Graphic Designing",
    description: "Eye-catching visuals and brand identities that make your business stand out. From logos to marketing materials.",
    features: ["Logo Design", "Brand Identity", "Marketing Materials", "Social Media Graphics"],
  },
  {
    icon: Brain,
    title: "AI / ML Solutions",
    description: "Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business processes.",
    features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Custom AI Models"],
  },
  {
    icon: Code2,
    title: "MERN Stack Projects",
    description: "Full-stack web applications built with MongoDB, Express, React, and Node.js for scalable solutions.",
    features: ["React Applications", "Node.js Backend", "MongoDB Integration", "RESTful APIs"],
  },
  {
    icon: Layout,
    title: "UI/UX Designing",
    description: "User-centered design that creates intuitive, beautiful interfaces for exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "End-to-end development services covering frontend, backend, and everything in between.",
    features: ["Frontend Development", "Backend Systems", "Database Design", "Cloud Deployment"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Strategic digital marketing campaigns that drive traffic, engagement, and conversions.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Analytics"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across devices.",
    features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
  },
];

const Services = () => {
  return (
    <PageTransition>
      <main className="relative z-10 pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Header with text reveal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16 text-center"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-xs font-medium uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              What We Offer
            </motion.span>
            <h2 className="section-heading">
              <TextReveal delay={0.2}>Our Services</TextReveal>
            </h2>
            <p className="section-subheading mt-4 mx-auto">
              <TextReveal delay={0.4} staggerChildren={0.02}>
                Comprehensive digital solutions tailored to transform your ideas into reality
              </TextReveal>
            </p>
          </motion.div>

          {/* Services Grid with enhanced animations */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ 
                  y: -12, 
                  boxShadow: "0 25px 50px -12px hsl(68 100% 56% / 0.15)",
                  borderColor: "hsl(68 100% 56% / 0.5)",
                }}
                className="p-8 rounded-2xl bg-card/30 border border-border/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Animated gradient background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />
                
                <div className="relative z-10">
                  {/* Icon with hover animation */}
                  <motion.div 
                    className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    <service.icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  {/* Title with underline animation */}
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors relative inline-block">
                    {service.title}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    />
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features with staggered animation */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA with magnetic effect */}
                  <Link to="/book-call">
                    <motion.span
                      whileHover={{ x: 8 }}
                      className="inline-flex items-center gap-2 text-primary text-sm font-medium cursor-pointer magnetic-target"
                    >
                      Get Quote
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={16} />
                      </motion.span>
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner with enhanced animations */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-card/30 border border-border/30 relative overflow-hidden group"
          >
            {/* Animated background */}
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, hsl(68 100% 56% / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, hsl(68 100% 56% / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, hsl(68 100% 56% / 0.15) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className="relative z-10">
              <motion.h2 
                className="text-2xl md:text-4xl font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <TextReveal type="words">Need a Custom Solution?</TextReveal>
              </motion.h2>
              <motion.p 
                className="text-muted-foreground max-w-xl mx-auto mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                We specialize in creating tailored solutions that perfectly fit your unique business needs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <MagneticButton to="/book-call" variant="primary" strength={0.4}>
                  Let's Discuss Your Project
                  <ArrowRight size={18} />
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Services;
