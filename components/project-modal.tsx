"use client";

import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    screens: string[];
    tags: string[];
  };
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentScreenIndex((prev) =>
      prev === 0 ? project.screens.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentScreenIndex((prev) =>
      prev === project.screens.length - 1 ? 0 : prev + 1,
    );
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentScreenIndex(0);
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-2xl mx-4"
          >
            {/* Card */}
            <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800">
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-200 group"
                aria-label="Close modal"
              >
                <X className="w-5 h-5 text-slate-700 dark:text-slate-300 group-hover:rotate-90 transition-transform duration-200" />
              </button>

              {/* Content */}
              <div className="p-8">
                {/* Screen viewer */}
                <div className="relative mb-6 rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
                  <div
                    className="relative w-full"
                    style={{ aspectRatio: "16 / 10" }}
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentScreenIndex}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <Image
                          src={
                            project.screens[currentScreenIndex] ||
                            "/placeholder.svg"
                          }
                          alt={`${project.title} - Screen ${currentScreenIndex + 1}`}
                          fill
                          className="object-contain p-4"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation buttons */}
                    {project.screens.length > 1 && (
                      <>
                        <button
                          onClick={handlePrevious}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-lg backdrop-blur-sm"
                          aria-label="Previous screen"
                        >
                          <ChevronLeft className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </button>

                        <button
                          onClick={handleNext}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-700 transition-all shadow-lg backdrop-blur-sm"
                          aria-label="Next screen"
                        >
                          <ChevronRight className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                        </button>
                      </>
                    )}
                  </div>
                </div>

                {/* Project info */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {project.title}
                    </h3>
                    {project.screens.length > 1 && (
                      <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                        {currentScreenIndex + 1} / {project.screens.length}
                      </div>
                    )}
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech tags */}
                {project.tags.length > 0 && (
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Thumbnail navigation */}
                {project.screens.length > 1 && (
                  <div className="flex items-center justify-center gap-2">
                    {project.screens.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScreenIndex(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentScreenIndex
                            ? "w-8 bg-blue-600 dark:bg-blue-500"
                            : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                        }`}
                        aria-label={`Go to screen ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
