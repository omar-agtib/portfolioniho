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
  SiMongodb,
} from "react-icons/si";
import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";

type Technology = {
  name: string;
  icon: React.ElementType;
  gradient: string;
  key: string;
};

export function TechStackSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useI18n();

  const technologies: Technology[] = [
    {
      name: "React",
      icon: SiReact,
      gradient: "from-cyan-400 to-blue-500",
      key: "react",
    },
    {
      name: "React Native",
      icon: SiReact,
      gradient: "from-green-400 to-green-600",
      key: "reactNative",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      gradient: "from-slate-400 to-slate-600",
      key: "next",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      gradient: "from-blue-400 to-blue-600",
      key: "typescript",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      gradient: "from-yellow-400 to-yellow-600",
      key: "javascript",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      gradient: "from-green-600 to-green-800",
      key: "node",
    },
    {
      name: "Express.js",
      icon: SiExpress,
      gradient: "from-yellow-300 to-yellow-600",
      key: "express",
    },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      gradient: "from-cyan-400 to-cyan-600",
      key: "tailwind",
    },
    {
      name: "Framer Motion",
      icon: SiFramer,
      gradient: "from-purple-400 to-pink-600",
      key: "framer",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      gradient: "from-green-600 to-green-800",
      key: "mongodb",
    },
    {
      name: "Git",
      icon: SiGit,
      gradient: "from-orange-400 to-red-600",
      key: "git",
    },
    {
      name: "Docker",
      icon: SiDocker,
      gradient: "from-blue-400 to-blue-600",
      key: "docker",
    },
  ];

  return (
    <section id="tech-stack" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              {t("techStack.title")}
            </h2>

            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              {t("techStack.description")}
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
                  >
                    {hoveredIndex === index && (
                      <motion.div
                        className={`absolute inset-0 bg-linear-to-br ${tech.gradient} opacity-10 blur-xl`}
                      />
                    )}

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
                        className="text-xs text-foreground/60 leading-tight overflow-hidden"
                      >
                        {t(`techStack.technologies.${tech.key}`)}
                      </motion.p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Expertise Cards */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                title: t("about.expertise.performance"),
                description: t("about.expertise.performanceDesc"),
              },
              {
                title: t("about.expertise.accessibility"),
                description: t("about.expertise.accessibilityDesc"),
              },
              {
                title: t("about.expertise.design"),
                description: t("about.expertise.designDesc"),
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm"
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
