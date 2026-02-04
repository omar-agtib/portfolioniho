"use client";

import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "omar.agtib.dev@gmail.com",
    link: "mailto:omar.agtib.dev@gmail.com",
    color: "from-blue-400 to-cyan-600",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/omar-agtib",
    link: "https://linkedin.com/in/omar-agtib",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/omar-agtib",
    link: "https://github.com",
    color: "from-slate-400 to-slate-700",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 md:px-8">
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
                Let's Work Together
              </span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Ready to bring your vision to life? I'm excited to discuss your
              project and explore how we can create something remarkable
              together.
            </p>
          </motion.div>

          {/* Contact methods */}
          <motion.div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Link
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.div
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-xl border border-border/50 dark:border-blue-400/10 bg-card/50 dark:bg-card/30 backdrop-blur-sm p-6 hover:border-primary/30 dark:hover:border-blue-400/30 transition-all duration-300 cursor-pointer"
                    whileHover={{ y: -8 }}
                  >
                    {/* Background glow */}
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-5 blur-xl`}
                    />

                    {/* Content */}
                    <div className="relative z-10 space-y-3">
                      <motion.div
                        className={`w-10 h-10 rounded-lg bg-linear-to-br ${method.color} flex items-center justify-center`}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-sm text-foreground/60 font-medium">
                          {method.label}
                        </p>
                        <p className="text-foreground font-semibold text-sm break-all hover:text-primary dark:hover:text-blue-400 transition-colors">
                          {method.value}
                        </p>
                      </div>
                    </div>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    >
                      <ExternalLink className="w-4 h-4 text-primary dark:text-blue-400" />
                    </motion.div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="space-y-3">
              <p className="text-foreground/70">
                Available for freelance projects and consulting work
              </p>
              <Link href="mailto:omar.agtib.dev@gmail.com">
                <motion.button
                  className="px-8 py-4 rounded-lg bg-linear-to-r from-primary dark:from-blue-500 to-accent dark:to-violet-500 text-primary-foreground dark:text-background font-semibold inline-flex items-center gap-2 hover:shadow-lg hover:shadow-primary/50 dark:hover:shadow-blue-500/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5" />
                  Send Me a Message
                </motion.button>
              </Link>
            </div>

            {/* Upwork note */}
            <p className="text-sm text-foreground/50 border-t border-border/30 dark:border-blue-400/10 pt-6">
              Also available on{" "}
              <motion.span
                className="text-primary dark:text-blue-400 font-semibold hover:underline cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                Upwork
              </motion.span>{" "}
              for ongoing collaboration
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
