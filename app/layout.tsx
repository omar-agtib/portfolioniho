import React from "react"
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { I18nProvider } from '@/lib/i18n-context'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Omar Agtib - Frontend Developer | React & Next.js Specialist',
  description: 'Premium frontend developer specializing in React, Next.js, and TypeScript. Building high-performance, visually refined interfaces with smooth animations and modern design.',
  generator: 'v0.app',
  keywords: ['React', 'Next.js', 'TypeScript', 'Frontend Developer', 'UI Design', 'Web Development'],
  authors: [{ name: 'Omar Agtib', url: 'https://linkedin.com/in/omar-agtib' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://omaragtib.com',
    title: 'Omar Agtib - Frontend Developer',
    description: 'Premium frontend developer specializing in React, Next.js, and TypeScript.',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0d' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <I18nProvider>
            {children}
          </I18nProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
