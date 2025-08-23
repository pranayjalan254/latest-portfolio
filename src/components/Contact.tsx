import { motion } from "framer-motion";
import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState(0);
  const COOLDOWN_TIME = 60000; // 60 seconds cooldown
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Map emailjs field names to local state
    const fieldMap: { [key: string]: string } = {
      user_name: "name",
      user_email: "email",
      message: "message",
    };
    const localFieldName = fieldMap[name] || name;
    setFormData((prev) => ({ ...prev, [localFieldName]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmissionTime < COOLDOWN_TIME) {
      toast({
        title: "Rate Limited",
        description: `Please wait ${Math.ceil(
          (COOLDOWN_TIME - (now - lastSubmissionTime)) / 1000
        )} seconds before sending another message`,
        variant: "destructive",
      });
      return;
    }

    if (isSubmitting) return;

    const form = e.currentTarget;
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form,
        import.meta.env.VITE_PUBLIC_KEY
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      form.reset();
      setFormData({ name: "", email: "", message: "" });
      setLastSubmissionTime(now);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "pranayjalan.work@gmail.com",
      href: "mailto:pranayjalan.work@gmail.com",
      color: "text-primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/pranay-jalan254",
      color: "text-accent-foreground",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Follow my work",
      href: "https://github.com/pranayjalan254",
      color: "text-secondary-foreground",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      id="contact"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card to-card-elevated"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you!
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
        >
          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 sm:space-y-8"
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                I'm always open to discussing new opportunities, interesting
                projects, or just having a chat about technology and innovation.
                Whether you're looking for collaboration or have questions about
                my work, feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  whileHover={{ scale: 1.01, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-3 sm:p-4 bg-gradient-card rounded-xl shadow-warm border border-border/50 hover:shadow-large transition-all duration-300 group"
                >
                  <div
                    className={`p-2 sm:p-3 rounded-lg bg-background ${method.color} mr-3 sm:mr-4`}
                  >
                    <method.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">
                      {method.label}
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-warm border border-border/50">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-4 sm:mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <Input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background transition-colors text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="user_email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background transition-colors text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-background/50 border-border/50 focus:border-primary/50 focus:bg-background transition-colors min-h-[100px] sm:min-h-[120px] resize-none text-sm sm:text-base"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full mr-2"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
