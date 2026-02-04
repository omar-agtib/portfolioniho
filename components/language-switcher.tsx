'use client'

import { useI18n } from '@/lib/i18n-context'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <motion.div
      className="flex items-center gap-1 p-1 rounded-lg border border-primary/20 dark:border-blue-400/20 bg-primary/5 dark:bg-blue-400/5 backdrop-blur-sm"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {(['en', 'fr'] as const).map((lang) => (
        <motion.button
          key={lang}
          onClick={() => setLocale(lang)}
          className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-300 ${
            locale === lang
              ? 'bg-primary dark:bg-blue-500 text-primary-foreground dark:text-background'
              : 'text-foreground/70 hover:text-foreground'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {lang.toUpperCase()}
        </motion.button>
      ))}
    </motion.div>
  )
}
