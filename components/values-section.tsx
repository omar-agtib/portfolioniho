"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  Zap,
  Shield,
  Palette,
  Users,
  TrendingUp,
  Lightbulb,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

const values = [
  {
    icon: Zap,
    titleKey: "values.items.0.title",
    descriptionKey: "values.items.0.description",
    color: "from-amber-400 to-orange-600",
  },
  {
    icon: Shield,
    titleKey: "values.items.1.title",
    descriptionKey: "values.items.1.description",
    color: "from-emerald-400 to-teal-600",
  },
  {
    icon: Palette,
    titleKey: "values.items.2.title",
    descriptionKey: "values.items.2.description",
    color: "from-pink-400 to-rose-600",
  },
  {
    icon: Users,
    titleKey: "values.items.3.title",
    descriptionKey: "values.items.3.description",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: TrendingUp,
    titleKey: "values.items.4.title",
    descriptionKey: "values.items.4.description",
    color: "from-purple-400 to-pink-600",
  },
];

export function ValuesSection() {
  const { t } = useI18n();

  return (
    <section id="values" className="relative py-20 md:py-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
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
                {t("values.title")}
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              {t("values.subtitle")}
            </p>
          </motion.div>

          {/* Values grid */}
          <motion.div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative overflow-hidden rounded-xl border border-border/50 dark:border-blue-400/10 bg-card/50 dark:bg-card/30 backdrop-blur-sm p-6 hover:border-primary/30 dark:hover:border-blue-400/30 transition-all duration-300"
                  whileHover={{ y: -8 }}
                >
                  {/* Background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`}
                  />

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-linear-to-br ${value.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-foreground">
                      {t(value.titleKey)}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {t(value.descriptionKey)}
                    </p>
                  </div>

                  {/* Border gradient on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    initial={{ boxShadow: `0 0 0 1px rgba(96, 165, 250, 0)` }}
                    whileHover={{
                      boxShadow: `0 0 30px 0 rgba(96, 165, 250, 0.2)`,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
