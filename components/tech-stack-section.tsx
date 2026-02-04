"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiRadixui,
  SiGit,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiDocker,
} from "react-icons/si";

import { useState } from "react";

type Technology = {
  name: string;
  icon: React.ElementType;
  gradient: string;
  description: string;
};

const technologies: Technology[] = [
  {
    name: "React",
    icon: SiReact,
    gradient: "from-cyan-400 to-blue-500",
    description: "Modern UI library for building interactive components",
  },
  {
    name: "React Native",
    icon: SiReact,
    gradient: "from-green-400 to-green-600",
    description: "Framework for building native apps using React",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    gradient: "from-slate-400 to-slate-600",
    description: "Full-stack framework for optimized web applications",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    gradient: "from-blue-400 to-blue-600",
    description: "Strongly typed JavaScript for safer code",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    gradient: "from-yellow-400 to-yellow-600",
    description: "Versatile programming language for web development",
  },
  {
    name: "Node.js",
    icon: SiExpress,
    gradient: "from-gray-400 to-gray-600",
    description: "JavaScript runtime for server-side development",
  },
  {
    name: "Express.js",
    icon: SiNodedotjs,
    gradient: "from-gray-400 to-gray-600",
    description: "Minimalist web framework for Node.js applications",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    gradient: "from-cyan-400 to-cyan-600",
    description: "Utility-first CSS framework for rapid design",
  },
  {
    name: "Framer Motion",
    icon: SiFramer,
    gradient: "from-purple-400 to-pink-600",
    description: "Animation library for smooth interactions",
  },
  {
    name: "Radix UI",
    icon: SiRadixui,
    gradient: "from-purple-400 to-purple-600",
    description: "Unstyled, accessible component library",
  },
  {
    name: "Git",
    icon: SiGit,
    gradient: "from-orange-400 to-red-600",
    description: "Version control for team collaboration",
  },
  {
    name: "Docker",
    icon: SiDocker,
    gradient: "from-blue-400 to-blue-600",
    description: "Containerization for consistent environments",
  },
];

export function TechStackSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tech-stack" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-linear-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
                How I Build Frontend Experiences
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              My toolkit combines modern frameworks and best practices to
              deliver fast, accessible, and elegant interfaces.
            </p>
          </motion.div>

          {/* Tech Grid */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {technologies.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <motion.div
                  key={tech.name}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <motion.div
                    className="relative h-full p-6 rounded-xl border border-primary/10 bg-primary/5 backdrop-blur-sm cursor-pointer overflow-hidden"
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gradient glow */}
                    {hoveredIndex === index && (
                      <motion.div
                        className={`absolute inset-0 bg-linear-to-br ${tech.gradient} opacity-10 blur-xl`}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                      <div
                        className={`p-3 rounded-full bg-linear-to-br ${tech.gradient}`}
                      >
                        <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                      </div>

                      <h3 className="text-sm md:text-base font-semibold">
                        {tech.name}
                      </h3>

                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={
                          hoveredIndex === index
                            ? { opacity: 1, height: "auto" }
                            : { opacity: 0, height: 0 }
                        }
                        transition={{ duration: 0.3 }}
                        className="text-xs text-foreground/60 leading-tight overflow-hidden"
                      >
                        {tech.description}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Additional Expertise */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: "Performance Optimization",
                description:
                  "Optimizing Core Web Vitals, lazy loading, and efficient state management.",
              },
              {
                title: "Accessibility First",
                description:
                  "WCAG-compliant interfaces with semantic HTML and ARIA.",
              },
              {
                title: "Pixel Perfect Design",
                description:
                  "Detail-focused UI implementation with refined interactions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm transition-colors"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
