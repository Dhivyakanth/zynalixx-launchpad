import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/zynalixx-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/zynalixx", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zynalixx-23aa203a4", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "X (Twitter)" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative z-10 border-t border-border bg-card/30 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Zynalixx"
                className="w-12 h-12 rounded-xl object-cover border border-primary/30"
              />
              <span className="text-2xl font-display font-bold text-gradient">
                Zynalixx
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Transforming innovative ideas into powerful digital products that drive business growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Full Stack Development</li>
              <li>AI / ML Solutions</li>
              <li>UI/UX Designing</li>
              <li>Mobile App Development</li>
              <li>Digital Marketing</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+91 9342084099</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <a href="mailto:zynalixx@gmail.com" className="hover:text-primary transition-colors">
                  zynalixx@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary mt-0.5" />
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Zynalixx. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
