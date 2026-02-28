import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Code2, ShoppingCart, User, Bot, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const projects = [
  {
    title: "Billing Software",
    category: "Business Solution",
    description: "A comprehensive billing and invoicing solution designed for small to medium businesses. Features include automated invoice generation, payment tracking, tax calculations, and detailed financial reports.",
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    features: ["Invoice Generation", "Payment Tracking", "Tax Calculations", "Financial Reports"],
    icon: Code2,
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description: "A full-featured online marketplace with product management, shopping cart, secure payment integration, and order tracking. Built to handle high traffic and scale with business growth.",
    techStack: ["MERN Stack", "Stripe", "Redux", "AWS"],
    features: ["Product Management", "Shopping Cart", "Secure Payments", "Order Tracking"],
    icon: ShoppingCart,
  },
  {
    title: "Portfolio Website",
    category: "Web Design",
    description: "Modern, responsive portfolio websites for professionals and creatives. Features smooth animations, optimized performance, and stunning visual design that showcases work effectively.",
    techStack: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    features: ["Responsive Design", "Smooth Animations", "SEO Optimized", "Fast Loading"],
    icon: User,
  },
  {
    title: "AI Chatbot",
    category: "AI / ML",
    description: "An intelligent conversational AI chatbot for customer support automation. Uses natural language processing to understand queries and provide accurate, helpful responses 24/7.",
    techStack: ["Python", "TensorFlow", "NLP", "React"],
    features: ["Natural Language Processing", "24/7 Availability", "Multi-language Support", "Analytics Dashboard"],
    icon: Bot,
  },
];

const Projects = () => {
  return (
    <PageTransition>
      <main className="relative z-10 pt-24 pb-20 px-4">
        <div className="container mx-auto">
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
              Portfolio
            </motion.span>
            <h2 className="section-heading">
              <TextReveal delay={0.2}>Our Projects</TextReveal>
            </h2>
            <p className="section-subheading mt-4 mx-auto">
              <TextReveal delay={0.4} staggerChildren={0.02}>
                Explore our portfolio of successful projects that have helped businesses grow
              </TextReveal>
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full"
            >
              <span className="text-4xl font-display font-bold text-primary">4</span>
              <span className="text-muted-foreground">Projects Completed</span>
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
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
                  {/* Header with icon */}
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div
                      className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors"
                      whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.4 }}
                    >
                      <project.icon className="w-7 h-7 text-primary" />
                    </motion.div>
                    <div className="min-w-0">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider block">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-display font-semibold mt-1 group-hover:text-primary transition-colors relative inline-block">
                        {project.title}
                        <motion.span
                          className="absolute bottom-0 left-0 h-0.5 bg-primary"
                          initial={{ width: 0 }}
                          whileInView={{ width: "100%" }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        />
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        className="px-3 py-1 text-xs font-medium bg-muted/30 border border-border/50 rounded-full text-muted-foreground group-hover:border-primary/30 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: featureIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.span
                    whileHover={{ x: 8 }}
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium cursor-pointer magnetic-target"
                  >
                    View Details
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink size={14} />
                    </motion.span>
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 text-center p-12 rounded-3xl bg-card/30 border border-border/30 relative overflow-hidden group"
          >
            <motion.div 
              className="absolute inset-0"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, hsl(var(--primary) / 0.15) 0%, transparent 50%)",
                ]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10">
              <motion.h2
                className="text-2xl md:text-3xl font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <TextReveal type="words">Want to Be Our Next Success Story?</TextReveal>
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-xl mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Let's build something amazing together. Share your project idea with us.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <MagneticButton to="/book-call" variant="primary" strength={0.4}>
                  Start Your Project
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

export default Projects;
