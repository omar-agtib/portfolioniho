"use client";

import { useI18n } from "@/lib/i18n-context";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { scrollToSection } from "@/lib/scroll-navigation";

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navItems = [
    { label: t("navigation.work"), sectionId: "projects" },
    { label: t("navigation.about"), sectionId: "timeline" },
    { label: t("navigation.services"), sectionId: "values" },
    { label: t("navigation.contact"), sectionId: "contact" },
    { label: t("navigation.testimonials"), sectionId: "testimonials" },
  ];

  return (
    <footer className="relative border-t border-border/20 dark:border-blue-400/10 bg-background/50 dark:bg-background/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="text-lg font-bold bg-linear-to-r from-primary dark:from-blue-400 to-accent dark:to-violet-400 bg-clip-text text-transparent">
              Omar Agtib
            </div>
            <p className="text-sm text-foreground/60">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">
              {t("footer.navigation")}
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.sectionId}>
                  <motion.button
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors bg-transparent border-none p-0 cursor-pointer"
                    whileHover={{ x: 4 }}
                    onClick={() => scrollToSection(item.sectionId)}
                  >
                    {item.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">
              {t("footer.services")}
            </h3>
            <ul className="space-y-2">
              {t("footer.servicesList", { returnObjects: true }).map(
                (service: string) => (
                  <li key={service}>
                    <span className="text-sm text-foreground/60">
                      {service}
                    </span>
                  </li>
                ),
              )}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="font-semibold text-foreground">
              {t("footer.connect")}
            </h3>
            <div className="flex gap-3">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/omar-agtib",
                  label: "LinkedIn",
                },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                {
                  icon: Mail,
                  href: "mailto:omar.agtib.dev@gmail.com",
                  label: "Email",
                },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      className="w-10 h-10 rounded-lg border border-primary/20 dark:border-blue-400/20 bg-primary/5 dark:bg-blue-400/5 hover:bg-primary/10 dark:hover:bg-blue-400/10 flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <Icon className="w-4 h-4 text-foreground/70 hover:text-foreground" />
                    </motion.button>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-primary/20 dark:via-blue-400/20 to-transparent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>
            © {currentYear} Omar Agtib. {t("footer.rights")}
          </p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            {t("footer.backTop")}
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
