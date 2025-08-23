import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Briefcase, GraduationCap, Trophy, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { hackathons } from "@/data/hackathons";

const Timeline = () => {
  const [activeCategory, setActiveCategory] = useState<
    "experience" | "education" | "hackathons"
  >("experience");

  const categories = ["experience", "education", "hackathons"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "experience":
        return <Briefcase className="w-5 h-5" />;
      case "education":
        return <GraduationCap className="w-5 h-5" />;
      case "hackathons":
        return <Trophy className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "experience":
        return "bg-primary text-primary-foreground";
      case "education":
        return "bg-accent text-accent-foreground";
      case "hackathons":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getCurrentData = () => {
    console.log("getCurrentData called with activeCategory:", activeCategory);
    switch (activeCategory) {
      case "experience":
        return experience;
      case "education":
        return education;
      case "hackathons":
        return hackathons;
      default:
        return [];
    }
  };

  const getOrganization = (item: any) => {
    if (activeCategory === "experience") return item.company;
    if (activeCategory === "education") return item.institution;
    if (activeCategory === "hackathons") return item.event;
    return "";
  };

  const getSkills = (item: any) => {
    if (activeCategory === "experience") return item.skills;
    if (activeCategory === "education") return item.achievements;
    if (activeCategory === "hackathons") return item.technologies;
    return [];
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            My Journey
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            A timeline of my professional experience, education, and
            achievements
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
              onClick={() =>
                setActiveCategory(
                  category as "experience" | "education" | "hackathons"
                )
              }
              size="sm"
              className={`transition-all duration-300 text-xs sm:text-sm ${
                activeCategory === category
                  ? "bg-gradient-primary shadow-glow"
                  : "hover:bg-primary/5 hover:border-primary/30"
              }`}
            >
              {getCategoryIcon(category)}
              <span className="ml-2 capitalize">{category}</span>
            </Button>
          ))}
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Timeline line - Hidden on mobile, visible on md+ */}
            <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary"></div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8 sm:space-y-12"
              >
                {getCurrentData().map((item: any, index: number) => (
                  <motion.div
                    key={`${activeCategory}-${index}`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex flex-col md:flex-row items-start md:space-x-6"
                  >
                    {/* Timeline dot - Responsive positioning */}
                    <div
                      className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${getCategoryColor(
                        activeCategory
                      )} shadow-medium mb-4 md:mb-0 flex-shrink-0`}
                    >
                      {getCategoryIcon(activeCategory)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-4 sm:pb-8">
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className="bg-gradient-card p-4 sm:p-6 rounded-2xl shadow-warm border border-border/50 hover:shadow-large transition-all duration-300"
                      >
                        <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:justify-between mb-3">
                          <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                            {item.title}
                          </h3>
                          <span className="text-xs sm:text-sm text-muted-foreground bg-muted/50 px-2 sm:px-3 py-1 rounded-full self-start sm:self-auto">
                            {item.year}
                          </span>
                        </div>

                        <p className="text-primary font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                          {getOrganization(item)}
                        </p>

                        {/* Achievement/Status badge for hackathons */}
                        {activeCategory === "hackathons" &&
                          item.achievement && (
                            <div className="mb-3 sm:mb-4">
                              <span className="inline-block px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-800 text-xs sm:text-sm rounded-full font-medium">
                                {item.achievement}
                              </span>
                            </div>
                          )}

                        <div className="mb-3 sm:mb-4">
                          <p className="text-muted-foreground text-sm sm:text-base">
                            {item.description}
                          </p>
                        </div>

                        {getSkills(item) && getSkills(item).length > 0 && (
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {getSkills(item).map(
                              (skill: string, skillIndex: number) => (
                                <span
                                  key={skillIndex}
                                  className="px-2 sm:px-3 py-0.5 sm:py-1 bg-accent/20 text-accent-foreground text-xs rounded-full border border-accent/30"
                                >
                                  {skill}
                                </span>
                              )
                            )}
                          </div>
                        )}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
