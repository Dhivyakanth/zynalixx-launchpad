import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Code2, ShoppingCart, User, Bot, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

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
          <SectionHeading
            badge="Portfolio"
            title="Our Projects"
            subtitle="Explore our portfolio of successful projects that have helped businesses grow"
          >
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
          </SectionHeading>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ borderColor: "hsl(var(--primary) / 0.5)" }}
                className="p-8 rounded-2xl bg-card/30 border border-border/30 transition-all duration-300 group"
              >
                {/* Header with icon */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-display font-semibold mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted/30 border border-border/50 rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-primary text-sm font-medium"
                >
                  View Details
                  <ExternalLink size={14} />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-12 rounded-3xl bg-card/30 border border-border/30 relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(68 100% 56% / 0.3) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Want to Be Our Next Success Story?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Let's build something amazing together. Share your project idea with us.
              </p>
              <Link to="/book-call">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Projects;
