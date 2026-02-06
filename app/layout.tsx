import React from "react"
import type { Metadata } from "next"
import { IBM_Plex_Sans, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Dinesh Kunjeda | DevOps Engineer',
  description: 'DevOps Engineer with hands-on expertise in CI/CD pipeline automation, Docker containerization, Kubernetes orchestration, and infrastructure monitoring using Prometheus and Grafana.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
