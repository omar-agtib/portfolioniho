"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { containerVariants, itemVariants } from "@/lib/animations";
import Link from "next/link";
import { useI18n } from "@/lib/i18n-context";

export function HeroSection() {
  const { t } = useI18n();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4 md:px-8"
    >
      {/* Grid background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-background dark:to-background/50" />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.05]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 dark:border-blue-400/20 dark:bg-blue-400/5 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary dark:text-blue-400" />
            <span className="text-sm font-medium text-foreground/80">
              {t("hero.badge")}
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div variants={itemVariants} className="space-y-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-balance bg-linear-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              {t("hero.title1")}
            </span>
            <br />
            <span className="text-balance bg-linear-to-r from-primary dark:from-blue-400 to-accent dark:to-violet-400 bg-clip-text text-transparent">
              {t("hero.title2")}
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed"
        >
          {t("hero.description")}
        </motion.p>

        {/* Developer info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-foreground/60"
        >
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary dark:text-blue-400" />
            <span>Omar Agtib</span>
          </div>

          <div className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />

          <span>{t("hero.location")}</span>

          <div className="hidden md:block w-1 h-1 rounded-full bg-foreground/20" />

          <span>{t("hero.role")}</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link href="#projects">
            <motion.button
              className="px-8 py-4 rounded-lg bg-primary dark:bg-blue-500 text-primary-foreground dark:text-background font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-blue-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.viewWork")}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </Link>

          <Link href="#contact">
            <motion.button
              className="px-8 py-4 rounded-lg border border-primary/30 dark:border-blue-400/30 text-foreground hover:bg-primary/5 dark:hover:bg-blue-400/5 font-semibold transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.getInTouch")}
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8"
        >
          <div className="flex flex-col items-center gap-2 text-foreground/40">
            <span className="text-sm">{t("hero.scrollExplore")}</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 right-10 md:right-20 w-32 h-32 rounded-lg border border-primary/10 dark:border-blue-400/10 bg-primary/5 dark:bg-blue-400/5 backdrop-blur-sm p-4 hidden lg:flex items-center justify-center"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <code className="text-xs text-foreground/40 dark:text-blue-300/40">
          &lt;Code /&gt;
        </code>
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-10 md:left-20 w-24 h-24 rounded-lg border border-accent/10 dark:border-violet-400/10 bg-accent/5 dark:bg-violet-400/5 backdrop-blur-sm hidden lg:flex items-center justify-center"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <Sparkles className="w-6 h-6 text-accent/40 dark:text-violet-400/40" />
      </motion.div>
    </section>
  );
}
