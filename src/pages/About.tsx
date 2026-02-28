import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Lightbulb, Rocket, CheckCircle, Users, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

const whyChooseUs = [
  {
    icon: Users,
    title: "Expert Team",
    description: "Industry experienced professionals dedicated to delivering excellence",
  },
  {
    icon: Target,
    title: "Modern Tech Stack",
    description: "Cutting-edge technologies including MERN, AI/ML, and more",
  },
  {
    icon: Lightbulb,
    title: "Client-Focused",
    description: "We prioritize your vision and goals in every project",
  },
  {
    icon: Rocket,
    title: "On-Time Delivery",
    description: "Reliable timelines with comprehensive support",
  },
];

const team = [
  {
    name: "Shanthosh",
    role: "Founder & CEO",
    initials: "S",
    color: "from-primary to-cyan-400",
  },
  {
    name: "Dhivyakanth",
    role: "AI/ML Engineer",
    initials: "D",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "Sasthika",
    role: "Full Stack Developer",
    initials: "SA",
    color: "from-blue-500 to-indigo-500",
  },
  {
    name: "Sasmitha",
    role: "UI/UX Designer",
    initials: "SM",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "Sanjay Kumar",
    role: "Hardware Technologist",
    initials: "SK",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Teja Shree",
    role: "IoT Analyst",
    initials: "T",
    color: "from-pink-500 to-rose-500",
  },
];

const About = () => {
  return (
    <PageTransition>
      <main className="relative z-10 pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <SectionHeading
            badge="About Us"
            title="About Zynalixx"
            subtitle="Your trusted technology partner for innovative digital solutions"
          />

          {/* Who We Are */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-20"
          >
            <div className="card-glass text-center">
              <h3 className="text-2xl font-display font-semibold mb-4 text-gradient">Who We Are</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Zynalixx is a premium full-stack development company specializing in cutting-edge solutions. 
                We transform innovative ideas into powerful digital products that drive business growth. 
                With our expertise in modern technologies and commitment to excellence, we help businesses 
                achieve their digital transformation goals.
              </p>
            </div>
          </motion.div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-glass relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl" />
              <div className="relative z-10">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-display font-semibold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become a leading technology partner for startups and enterprises, 
                  delivering world-class digital solutions that redefine industry standards 
                  and create lasting impact.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="card-glass relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-2xl" />
              <div className="relative z-10">
                <Rocket className="w-12 h-12 text-accent mb-4" />
                <h3 className="text-2xl font-display font-semibold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Empowering businesses with innovative technology solutions that are scalable, 
                  efficient, and user-centric. We strive to bridge the gap between ideas and 
                  execution with precision and creativity.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-20">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-center mb-12"
            >
              Why Choose <span className="text-gradient">Zynalixx</span>?
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    y: -12, 
                    boxShadow: "0 25px 50px -12px hsl(68 100% 56% / 0.15)",
                    borderColor: "hsl(68 100% 56% / 0.5)",
                  }}
                  className="card-glass text-center group border border-border/30"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h4 className="font-display font-semibold mb-2">{item.title}</h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-center mb-4"
            >
              Meet The <span className="text-gradient">Team</span>
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-muted-foreground text-center max-w-xl mx-auto mb-12"
            >
              The talented individuals behind Zynalixx, dedicated to bringing your vision to life
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="card-glass text-center group"
                >
                  {/* Avatar */}
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                    <span className="text-xl font-display font-bold text-white">
                      {member.initials}
                    </span>
                  </div>
                  <h4 className="font-display font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-muted-foreground text-xs">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-glass text-center py-12 px-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Let's collaborate and create something extraordinary together.
              </p>
              <Link to="/book-call">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get In Touch
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

export default About;