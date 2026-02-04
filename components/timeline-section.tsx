"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Engineer",
    company: "Digital Studio",
    period: "2023 - Present",
    description:
      "Leading frontend architecture decisions, mentoring junior developers, and building scalable component systems. Optimized Core Web Vitals resulting in 40% improvement in page load times.",
    highlights: ["React", "Next.js", "TypeScript", "System Design"],
  },
  {
    title: "Frontend Developer",
    company: "Tech Innovations",
    period: "2021 - 2023",
    description:
      "Developed pixel-perfect interfaces for 15+ projects. Implemented advanced animations with Framer Motion and maintained 98% accessibility score across all deliverables.",
    highlights: ["React", "Tailwind CSS", "Framer Motion", "A11y"],
  },
  {
    title: "Junior React Developer",
    company: "Web Solutions",
    period: "2020 - 2021",
    description:
      "Built responsive web applications using React and modern JavaScript. Collaborated with design and backend teams to deliver cohesive user experiences.",
    highlights: ["React", "JavaScript", "CSS", "Git"],
  },
];

export function TimelineSection() {
  return (
    <section id="timeline" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Section header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              <span className="bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                Professional Journey
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Crafting digital experiences with precision and passion. Each role
              shaped my expertise and approach.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Connector line */}
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-20 bottom-0 w-px bg-linear-to-b from-primary/30 dark:from-blue-400/30 to-transparent" />
                )}

                {/* Timeline dot */}
                <div className="absolute left-0 md:left-2 top-2 w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-background dark:border-background bg-linear-to-br from-primary dark:from-blue-400 to-accent dark:to-violet-400 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground dark:text-background" />
                </div>

                {/* Content card */}
                <motion.div
                  className="ml-20 md:ml-32 p-6 rounded-xl border border-border/50 dark:border-blue-400/10 bg-card/50 dark:bg-card/30 backdrop-blur-sm hover:border-primary/30 dark:hover:border-blue-400/30 transition-colors duration-300"
                  whileHover={{ x: 8, y: -2 }}
                >
                  <div className="space-y-3">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary dark:text-blue-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.highlights.map((highlight) => (
                        <motion.span
                          key={highlight}
                          className="px-3 py-1 rounded-full bg-primary/10 dark:bg-blue-400/10 text-xs font-medium text-foreground border border-primary/20 dark:border-blue-400/20"
                          whileHover={{ scale: 1.1 }}
                        >
                          {highlight}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
