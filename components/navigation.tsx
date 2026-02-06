"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";
import { useI18n } from "@/lib/i18n-context";
import { scrollToSection } from "@/lib/scroll-navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("navigation.about"), sectionId: "hero" },
    { label: t("navigation.experience"), sectionId: "timeline" },
    { label: t("navigation.skills"), sectionId: "tech-stack" },
    { label: t("navigation.work"), sectionId: "projects" },
    { label: t("navigation.services"), sectionId: "values" },
    { label: t("navigation.testimonials"), sectionId: "testimonials" },
    { label: t("navigation.contact"), sectionId: "contact" },
  ];

  return (
    <>
      {/* Header */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 dark:bg-background/60 backdrop-blur-md border-b border-border/50 dark:border-blue-400/10 py-3"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="cursor-pointer text-xl md:text-2xl font-bold bg-linear-to-r from-primary dark:from-blue-400 to-accent dark:to-violet-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              OA
            </motion.button>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="text-foreground/70 hover:text-foreground transition-colors duration-300 relative text-sm font-medium cursor-pointer bg-transparent border-none p-0"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.label}
                  <motion.span
                    className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary dark:from-blue-400 to-accent dark:to-violet-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </nav>

            {/* Controls + Burger */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />
              <ThemeToggle />

              {/* Burger button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-2 rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            {/* Menu panel */}
            <motion.nav
              className="fixed top-0 right-0 z-50 h-full w-72 bg-background border-l border-border/50 p-6 flex flex-col gap-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg border border-border/50"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.sectionId}
                    onClick={() => {
                      scrollToSection(item.sectionId);
                      setMobileOpen(false);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-left text-lg font-medium text-foreground/80 hover:text-foreground transition-colors p-2 bg-transparent border-none cursor-pointer"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
