import { motion } from "framer-motion";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { blogs, type Blog } from "@/data/blogs";

const Blogs = () => {
  const formatDate = (dateString: string) => {
    return dateString;
  };

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Web3":
      case "NFTs":
      case "Solana":
      case "DeFi":
      case "Cross-chain":
        return "bg-primary/10 text-primary border-primary/20";
      case "AI/ML":
      case "Development":
      case "Open Source":
        return "bg-accent/10 text-accent-foreground border-accent/20";
      case "Networking":
      case "Career":
      case "Professional Growth":
        return "bg-secondary/10 text-secondary-foreground border-secondary/30";
      default:
        return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="blogs" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Latest Blogs
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            Sharing insights about AI, blockchain, and modern web development
          </p>
          <div className="w-16 sm:w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-3 sm:mt-4"></div>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * blogs.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
            className="flex gap-4 sm:gap-8"
            style={{ width: `${(blogs.length + 3) * 350}px` }}
          >
            {/* First set of blogs */}
            {blogs.map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0 w-80 sm:w-96 group"
              >
                <div className="bg-gradient-card p-4 sm:p-6 rounded-2xl shadow-warm border border-border/50 hover:shadow-large transition-all duration-500 h-full flex flex-col relative">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(
                            tag
                          )}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 sm:mb-6 flex-grow line-clamp-3 text-sm sm:text-base leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {formatDate(post.date)}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover:bg-primary/5 hover:border-primary/30 group-hover:shadow-glow transition-all duration-300 text-xs sm:text-sm"
                    >
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Read More
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Duplicate set for seamless loop */}
            {blogs.map((post, index) => (
              <motion.div
                key={`duplicate-${index}`}
                whileHover={{ scale: 1.05, y: -10 }}
                className="flex-shrink-0 w-80 sm:w-96 group"
              >
                <div className="bg-gradient-card p-4 sm:p-6 rounded-2xl shadow-warm border border-border/50 hover:shadow-large transition-all duration-500 h-full flex flex-col relative">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium border ${getTagColor(
                            tag
                          )}`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 sm:mb-6 flex-grow line-clamp-3 text-sm sm:text-base leading-relaxed">
                    {post.description}
                  </p>

                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center text-muted-foreground text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                      {formatDate(post.date)}
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="hover:bg-primary/5 hover:border-primary/30 group-hover:shadow-glow transition-all duration-300 text-xs sm:text-sm"
                    >
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Read More
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <Button
            size="lg"
            variant="outline"
            asChild
            className="hover:bg-primary/5 hover:border-primary/30"
          >
            <a
              href="https://medium.com/@pranayjalan.work"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View All Articles
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blogs;
