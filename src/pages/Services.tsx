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
import SectionHeading from "@/components/SectionHeading";

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
          <SectionHeading
            badge="What We Offer"
            title="Our Services"
            subtitle="Comprehensive digital solutions tailored to transform your ideas into reality"
          />

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="card-glass group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to="/book-call">
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-2 text-primary text-sm font-medium"
                    >
                      Get Quote
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass text-center py-12 px-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Need a Custom Solution?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                We specialize in creating tailored solutions that perfectly fit your unique business needs.
              </p>
              <Link to="/book-call">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Let's Discuss Your Project
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Services;