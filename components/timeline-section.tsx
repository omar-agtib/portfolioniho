"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { Briefcase, Calendar } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export function TimelineSection() {
  const { t } = useI18n();

  const experiences = t("timeline.experiences");

  return (
    <section id="timeline" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              {t("timeline.title")}
            </h2>

            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              {t("timeline.description")}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {index !== experiences.length - 1 && (
                  <div className="absolute left-6 md:left-8 top-20 bottom-0 w-px bg-linear-to-b from-primary/30 to-transparent" />
                )}

                <div className="absolute left-0 md:left-2 top-2 w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-background bg-linear-to-br from-primary to-accent flex items-center justify-center">
                  <Briefcase className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                </div>

                <motion.div
                  className="ml-20 md:ml-32 p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors"
                  whileHover={{ x: 8, y: -2 }}
                >
                  <div className="space-y-3">
                    <div className="flex flex-col md:flex-row md:justify-between gap-2">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold">
                          {exp.title}
                        </h3>

                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-foreground/60">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    <p className="text-foreground/70 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.highlights.map((tag: string) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-primary/10 text-xs font-medium border border-primary/20"
                          whileHover={{ scale: 1.1 }}
                        >
                          {tag}
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
