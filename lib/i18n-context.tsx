'use client'

import React from "react"

import { createContext, useContext, useState, useEffect } from 'react'
import en from '@/locales/en.json'
import fr from '@/locales/fr.json'

type Locale = 'en' | 'fr'

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations: Record<Locale, typeof en> = {
  en,
  fr,
}

function getNestedValue(obj: any, path: string): string {
  return path.split('.').reduce((current, prop) => current?.[prop], obj) || path
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLocale = localStorage.getItem('locale') as Locale | null
    const browserLocale = navigator.language.split('-')[0] as Locale
    const initialLocale = savedLocale || (browserLocale === 'fr' ? 'fr' : 'en')
    setLocaleState(initialLocale)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)
  }

  const t = (key: string): string => {
    return getNestedValue(translations[locale], key)
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {mounted ? children : null}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider')
  }
  return context
}
