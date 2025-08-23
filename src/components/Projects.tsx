import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Play } from "lucide-react";
import { projects, type Project } from "@/data/projects";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const categories = ["Featured", "AI/ML", "Blockchain", "IoT"];

  const getFilteredProjects = () => {
    let filtered: Project[];

    if (activeCategory === "Featured") {
      filtered = projects.filter((project) => project.featured);
    } else {
      filtered = projects.filter((project) =>
        project.category.includes(activeCategory)
      );
    }

    // Sort to show featured projects first within each category
    return filtered.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });
  };

  const filteredProjects = getFilteredProjects();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
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
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-card-elevated to-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            A showcase of my latest work in AI, blockchain, and full-stack
            development
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-4 sm:px-0"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              size="sm"
              className={`transition-all duration-300 text-xs sm:text-sm ${
                activeCategory === category
                  ? "bg-gradient-primary shadow-glow"
                  : "hover:bg-primary/5 hover:border-primary/30"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-card p-4 sm:p-6 rounded-2xl shadow-warm border border-border/50 hover:shadow-large transition-all duration-500 h-full flex flex-col">
                  {project.featured && (
                    <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 bg-gradient-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium shadow-medium">
                      Featured
                    </div>
                  )}

                  <div className="flex items-center mb-3 sm:mb-4">
                    {project.logoUrl ? (
                      <img
                        src={project.logoUrl}
                        alt={project.title}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg mr-3 sm:mr-4 object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-lg mr-3 sm:mr-4 flex items-center justify-center text-primary-foreground font-bold text-sm sm:text-base">
                        {project.title.charAt(0)}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {project.title}
                      </h3>
                      <div className="flex flex-wrap gap-1">
                        {project.category.slice(0, 2).map((cat, catIndex) => (
                          <span
                            key={catIndex}
                            className="text-xs sm:text-sm text-muted-foreground"
                          >
                            {cat}
                            {catIndex <
                              Math.min(project.category.length - 1, 1) && ", "}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 sm:mb-6 flex-grow text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-accent/20 text-accent-foreground text-xs rounded-full border border-accent/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                    {project.demo && (
                      <Button
                        size="sm"
                        asChild
                        className="flex-1 bg-gradient-primary hover:shadow-glow text-xs sm:text-sm"
                      >
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 hover:bg-card-elevated text-xs sm:text-sm"
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Code
                        </a>
                      </Button>
                    )}
                    {project.video && (
                      <Button
                        size="sm"
                        variant="outline"
                        asChild
                        className="flex-1 hover:bg-card-elevated text-xs sm:text-sm"
                      >
                        <a
                          href={project.video}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Video
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
