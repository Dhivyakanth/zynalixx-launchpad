import { motion } from "framer-motion";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";

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
          <SectionHeading
            badge="Community"
            title="Events"
            subtitle="Join us at our events to learn, connect, and grow with the tech community"
          />

          {/* Events Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -4, borderColor: "hsl(var(--primary) / 0.5)" }}
                className="p-8 rounded-2xl bg-card/30 border border-border/30 transition-all duration-300 group"
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="px-3 py-1 text-xs font-medium text-primary bg-primary/10 border border-primary/20 rounded-full">
                    {event.type}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold mb-4 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Meta Info */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-primary" />
                    {event.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={14} className="text-primary" />
                    {event.location}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users size={14} className="text-primary" />
                    {event.attendees} Attendees
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {event.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {event.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {highlight}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-primary text-sm font-medium"
                >
                  View Details
                  <ArrowRight size={14} />
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* Upcoming Events Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 rounded-3xl bg-card/30 border border-border/30 relative overflow-hidden"
          >
            <div 
              className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(68 100% 56% / 0.3) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary uppercase tracking-wider">Coming Soon</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                Stay Tuned for Upcoming Events
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                Follow us on social media to get notified about our upcoming workshops, hackathons, and meetups.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary inline-flex items-center gap-2"
              >
                Follow Us
                <ArrowRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
    </PageTransition>
  );
};

export default Events;
