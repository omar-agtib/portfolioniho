'use client'

import { useEffect, useRef } from 'react'

export function useScrollAnimation(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.dispatchEvent(new Event('intersect'))
          }
        })
      },
      { threshold }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}
