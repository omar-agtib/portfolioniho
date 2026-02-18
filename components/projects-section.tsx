"use client";

import { motion, AnimatePresence } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { ExternalLink, Github, Play } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";
import { ProjectModal } from "./project-modal";
import { useI18n } from "@/lib/i18n-context";

type ProjectType = "all" | "mobile" | "frontend" | "backend" | "fullstack";

export function ProjectsSection() {
  const { t } = useI18n();
  const projects = t("projects.items");
  const filters = t("projects.filters");

  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [activeFilter, setActiveFilter] = useState<ProjectType>("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((project: any) => {
      if (Array.isArray(project.type)) {
        return project.type.includes(activeFilter);
      }
      return project.type === activeFilter;
    });
  }, [projects, activeFilter]);

  return (
    <>
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        project={
          selectedProject || {
            title: "",
            description: "",
            tags: [],
            screens: [],
          }
        }
      />

      <section id="projects" className="relative py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* Section header */}
            <motion.div
              variants={itemVariants}
              className="text-center space-y-4"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                  {t("projects.title")}
                </span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                {t("projects.subtitle")}
              </p>
            </motion.div>

            {/* Filter buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3"
            >
              {(Object.keys(filters) as ProjectType[]).map((filterKey) => (
                <motion.button
                  key={filterKey}
                  onClick={() => setActiveFilter(filterKey)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeFilter === filterKey
                      ? "bg-primary dark:bg-blue-500 text-primary-foreground dark:text-background shadow-lg shadow-primary/50 dark:shadow-blue-500/50"
                      : "bg-card/50 dark:bg-card/30 text-foreground/70 hover:text-foreground border border-border/50 dark:border-blue-400/10 hover:border-primary/30 dark:hover:border-blue-400/30"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filters[filterKey]}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects grid */}
            <AnimatePresence mode="wait">
              {filteredProjects.length > 0 ? (
                <motion.div
                  key={activeFilter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-6"
                >
                  {filteredProjects.map((project: any, index: number) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-xl border border-border/50 dark:border-blue-400/10 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/30 dark:hover:border-blue-400/30 transition-all duration-300"
                      whileHover={{
                        y: -8,
                        borderColor: "rgba(96, 165, 250, 0.3)",
                      }}
                    >
                      {/* Background gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.image} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      />

                      {/* Content */}
                      <div className="relative z-10 p-6 space-y-4 h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <h3 className="text-xl font-bold text-foreground flex-1">
                            {project.title}
                          </h3>
                          <motion.div
                            className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-blue-400/10 flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 45, scale: 1.1 }}
                          >
                            <div
                              className={`w-4 h-4 rounded-sm bg-gradient-to-br ${project.image}`}
                            />
                          </motion.div>
                        </div>

                        {/* Description */}
                        <p className="text-foreground/70 text-sm leading-relaxed flex-1">
                          {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="px-2 py-1 rounded text-xs font-medium bg-primary/10 dark:bg-blue-400/10 text-foreground/80 border border-primary/20 dark:border-blue-400/20"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-3 pt-4 mt-auto flex-wrap">
                          {/* ✅ Only show if showScreens is true */}
                          {project.showScreens && (
                            <motion.button
                              onClick={() => setSelectedProject(project)}
                              className="flex items-center gap-2 text-sm font-medium text-primary dark:text-blue-400 hover:text-accent dark:hover:text-violet-400 transition-colors"
                              whileHover={{ x: 4 }}
                            >
                              <Play className="w-4 h-4" />
                              {t("projects.viewScreens")}
                            </motion.button>
                          )}

                          {/* Conditionally render project link */}
                          {project.showLink && project.link && (
                            <Link href={project.link}>
                              <motion.button
                                className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                                whileHover={{ x: 4 }}
                              >
                                {t("projects.viewProject")}
                                <ExternalLink className="w-4 h-4" />
                              </motion.button>
                            </Link>
                          )}

                          {/* GitHub link */}
                          <Link href={project.github}>
                            <motion.button
                              className="flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
                              whileHover={{ x: 4 }}
                            >
                              <Github className="w-4 h-4" />
                            </motion.button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center py-20"
                >
                  <div className="inline-block p-8 rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border/50 dark:border-blue-400/10">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 dark:bg-blue-400/10 flex items-center justify-center">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        <Github className="w-8 h-8 text-primary dark:text-blue-400" />
                      </motion.div>
                    </div>
                    <p className="text-lg font-medium text-foreground/80">
                      {t("projects.noProjects")}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA */}
            <motion.div variants={itemVariants} className="text-center pt-8">
              <Link href="#contact">
                <motion.button
                  className="px-8 py-4 rounded-lg bg-primary dark:bg-blue-500 text-primary-foreground dark:text-background font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("projects.cta")}
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
