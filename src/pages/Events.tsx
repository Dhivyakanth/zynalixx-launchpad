import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import TextReveal from "@/components/TextReveal";
import MagneticButton from "@/components/MagneticButton";

const events = [
  {
    title: "Web Dev Workshop",
    type: "Workshop",
    date: "March 2024",
    location: "Virtual Event",
    description: "An intensive hands-on workshop covering modern web development with React, Node.js, and cloud deployment. Perfect for beginners and intermediate developers looking to level up.",
    highlights: ["React Fundamentals", "API Integration", "Deployment Strategies", "Live Coding Sessions"],
    attendees: "50+",
  },
  {
    title: "Tech Hackathon 2024",
    type: "Hackathon",
    date: "February 2024",
    location: "Chennai, India",
    description: "A 48-hour coding marathon where teams built innovative solutions for real-world problems. Featured mentorship from industry experts and exciting prizes.",
    highlights: ["48 Hours Coding", "Industry Mentors", "Cash Prizes", "Networking"],
    attendees: "100+",
  },
  {
    title: "Startup Meetup",
    type: "Networking",
    date: "January 2024",
    location: "Bangalore, India",
    description: "An exclusive networking event connecting entrepreneurs, investors, and tech enthusiasts. Great opportunity to share ideas, find co-founders, and explore partnerships.",
    highlights: ["Pitch Sessions", "Investor Connect", "Panel Discussions", "Community Building"],
    attendees: "75+",
  },
];

const Events = () => {
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
              Community
            </motion.span>
            <h2 className="section-heading">
              <TextReveal delay={0.2}>Events</TextReveal>
            </h2>
            <p className="section-subheading mt-4 mx-auto">
              <TextReveal delay={0.4} staggerChildren={0.02}>
                Join us at our events to learn, connect, and grow with the tech community
              </TextReveal>
            </p>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
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
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <motion.span
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full"
                    >
                      {event.type}
                    </motion.span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors relative inline-block">
                    {event.title}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    />
                  </h3>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-1.5"
                    >
                      <Calendar size={14} className="text-primary" />
                      {event.date}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 }}
                      className="flex items-center gap-1.5"
                    >
                      <MapPin size={14} className="text-primary" />
                      {event.location}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-1.5"
                    >
                      <Users size={14} className="text-primary" />
                      {event.attendees} Attendees
                    </motion.div>
                  </div>

                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {event.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {event.highlights.map((highlight, hIndex) => (
                      <motion.div
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: hIndex * 0.05 }}
                        className="flex items-center gap-2 text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors"
                      >
                        <motion.span
                          className="w-1.5 h-1.5 rounded-full bg-primary"
                          whileHover={{ scale: 1.5 }}
                        />
                        {highlight}
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
                      <ArrowRight size={14} />
                    </motion.span>
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events Banner */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center p-12 rounded-3xl bg-card/30 border border-border/30 relative overflow-hidden group"
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center gap-2 mb-4"
              >
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Coming Soon</span>
              </motion.div>
              <motion.h2
                className="text-2xl md:text-3xl font-display font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <TextReveal type="words">Stay Tuned for Upcoming Events</TextReveal>
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-xl mx-auto mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Follow us on social media to get notified about our upcoming workshops, hackathons, and meetups.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <MagneticButton variant="secondary" strength={0.4}>
                  Follow Us
                  <ArrowRight size={16} />
                </MagneticButton>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Events;
