'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark'

  return (
    <motion.button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="p-2.5 rounded-lg border border-primary/20 dark:border-blue-400/20 bg-primary/5 dark:bg-blue-400/5 hover:bg-primary/10 dark:hover:bg-blue-400/10 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0.8 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-blue-400" />
        ) : (
          <Moon className="w-4 h-4 text-primary" />
        )}
      </motion.div>
    </motion.button>
  )
}
