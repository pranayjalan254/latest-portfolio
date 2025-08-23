import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  Twitter,
  Linkedin,
  Download,
  MessageCircle,
} from "lucide-react";

const Hero = () => {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/pranayjalan254",
      label: "GitHub",
    },
    { icon: Twitter, href: "https://x.com/pranaytwts", label: "X" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/pranay-jalan254",
      label: "LinkedIn",
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [-100, 100, -100],
            y: [-100, 100, -100],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-primary opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [100, -100, 100],
            y: [100, -100, 100],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-gradient-warm opacity-8 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              Hi, I'm Pranay{" "}
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                className="inline-block"
              >
                👋
              </motion.span>
            </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <h2 className="text-base sm:text-xl md:text-2xl text-muted-foreground font-medium leading-relaxed px-4 sm:px-0">
              AI/ML Engineer & Full-Stack Developer
              <br className="hidden sm:block" />
              <span className="text-primary font-semibold">
                Building with LLMs, Automation, and Web3
              </span>
            </h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 w-full sm:w-auto"
              asChild
            >
              <a
                href="https://drive.google.com/file/d/17u1p1o9naybeNA7ZbMnWOGtht2oNiIUX/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="w-4 h-4 mr-2" />
                View Resume
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary/20 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Get in Touch
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-4 sm:space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 sm:p-3 bg-card/50 backdrop-blur-sm rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-card/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
