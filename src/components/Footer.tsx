import { motion } from "framer-motion";
import { Github, Linkedin, ExternalLink, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/pranayjalan254",
      label: "GitHub",
      color: "hover:text-foreground",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pranay-jalan254",
      label: "LinkedIn",
      color: "hover:text-primary",
    },
    {
      icon: ExternalLink,
      href: "",
      label: "Portfolio",
      color: "hover:text-accent-foreground",
    },
  ];

  return (
    <footer className="py-12 bg-gradient-to-br from-card to-card-elevated border-t border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 bg-background/50 backdrop-blur-sm rounded-full shadow-soft hover:shadow-medium transition-all duration-300 text-muted-foreground ${social.color}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center space-x-2 text-muted-foreground"
          >
            <span>© 2025 Pranay Jalan. Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="w-4 h-4 text-primary fill-current" />
            </motion.div>
            <span>and lots of coffee ☕</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-sm text-muted-foreground"
          >
            Building the future with AI, one prompt at a time.
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
