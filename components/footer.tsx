"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
              Crafting high-performance, visually refined digital experiences
              with React, Next.js, and modern design principles.
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
            <h3 className="font-semibold text-foreground">Navigation</h3>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "#home" },
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <motion.span
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                      whileHover={{ x: 4 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
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
            <h3 className="font-semibold text-foreground">Services</h3>
            <ul className="space-y-2">
              {[
                "UI Development",
                "Design Systems",
                "Web Applications",
                "Performance Optimization",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-foreground/60">{service}</span>
                </li>
              ))}
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
            <h3 className="font-semibold text-foreground">Connect</h3>
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
                  <Link
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
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-primary/20 dark:via-blue-400/20 to-transparent my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60">
          <p>© {currentYear} Omar Agtib. All rights reserved.</p>
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-foreground transition-colors"
            whileHover={{ y: -2 }}
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
