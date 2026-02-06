"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n-context";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const { t } = useI18n();
  const testimonials = t("testimonials.items");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay, testimonials.length]);

  const handlePrevious = () => {
    setAutoplay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setAutoplay(false);
    setCurrentIndex(index);
  };

  return (
    <section
      id="testimonials"
      className="py-16 md:py-32 px-4 md:px-8 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            <span className="bg-linear-to-r from-primary dark:from-blue-400 to-accent dark:to-violet-400 bg-clip-text text-transparent">
              {t("testimonials.title")}
            </span>
          </h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        {/* Testimonials slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {testimonials?.map((testimonial: any, index: number) => (
                <motion.div
                  key={index}
                  className="w-full shrink-0 px-4 md:px-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-card/50 dark:bg-blue-950/20 backdrop-blur-sm border border-border/50 dark:border-blue-400/20 rounded-2xl p-8 md:p-10 h-full">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.4 }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ),
                      )}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-foreground/90 text-lg mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="text-4xl"
                        whileHover={{ scale: 1.1 }}
                      >
                        {testimonial.image}
                      </motion.div>
                      <div>
                        <p className="font-semibold text-foreground">
                          {testimonial.name}
                        </p>
                        <p className="text-foreground/60 text-sm">
                          {testimonial.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <motion.button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 p-2 rounded-full bg-primary/10 dark:bg-blue-400/10 hover:bg-primary/20 dark:hover:bg-blue-400/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-primary dark:text-blue-400" />
          </motion.button>

          <motion.button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 p-2 rounded-full bg-primary/10 dark:bg-blue-400/10 hover:bg-primary/20 dark:hover:bg-blue-400/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-primary dark:text-blue-400" />
          </motion.button>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_: any, index: number) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary dark:bg-blue-400 w-8"
                    : "bg-border/50 dark:bg-blue-400/30 w-2 hover:bg-border dark:hover:bg-blue-400/50"
                }`}
                whileHover={{ scale: 1.2 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-accent/10 dark:from-violet-400/10 to-transparent rounded-full blur-3xl -z-10" />
    </section>
  );
}
