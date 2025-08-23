import { motion } from "framer-motion";

const About = () => {
  const skills = [
    "Python",
    "TypeScript",
    "C++",
    "ReactJS",
    "Flask",
    "LangChain",
    "Langgraph",
    "Web3",
    "Node.js",
    "SQLite",
    "MongoDB",
    "Docker",
    "AWS",
    "Google Gemini",
    "HuggingFace",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card to-card-elevated"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
              About Me
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-card p-6 sm:p-8 rounded-2xl shadow-warm border border-border/50">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 sm:mb-4">
                  Passionate Developer & AI Enthusiast
                </h3>
                <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p className="text-muted-foreground leading-relaxed">
                    I am an AI engineer passionate about building intelligent
                    applications that solve real-world problems. My core
                    expertise lies in developing solutions with Large Language
                    Models (LLMs), particularly in creating sophisticated RAG
                    (Retrieval-Augmented Generation) systems and autonomous
                    agents.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    At Nomura, as an AI engineering intern, I'm building a
                    virtual assistant studio that reduces RAG chatbot deployment
                    from days to minutes. I've also delivered several other
                    automation solutions to improve efficiency of the Operations
                    Team at Nomura. My full-stack skills in React and Flask
                    allow me to create intuitive applications powered by complex
                    AI models.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond practical application, I have a strong foundation in
                    theoretical research, having co-authored a paper on
                    blockchain-based energy trading frameworks, which was
                    published in the prestigious IEEE Internet of things
                    Journal. I am always excited to leverage my skills to build
                    the next generation of innovative AI-powered tools.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 text-center">
                Technologies I Love
              </h3>
              <motion.div
                variants={containerVariants}
                className="flex flex-wrap gap-2 sm:gap-3 justify-center"
              >
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    variants={skillVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-secondary text-secondary-foreground rounded-full text-xs sm:text-sm font-medium shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer border border-border/30"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
