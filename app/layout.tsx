import type React from "react"
import type { Metadata, Viewport } from "next"
import { Space_Grotesk, JetBrains_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["300", "400", "500", "600"],
})

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  title: "Kaushik Samadder | Full Stack Developer & Web3 Enthusiast",
  description:
    "Portfolio of Kaushik Samadder (kzark) - 3rd year CS student specializing in full stack development, Web3, and AI/ML. Available for internships and collaborations.",
  keywords: ["Kaushik Samadder", "kzark", "Full Stack Developer", "Web3", "AI/ML", "Blockchain", "React", "Next.js"],
  authors: [{ name: "Kaushik Samadder" }],
  creator: "Kaushik Samadder",
  publisher: "Kaushik Samadder",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Kaushik Samadder | Full Stack Developer & Web3 Enthusiast",
    description: "Portfolio showcasing projects in Web3, AI/ML, and full-stack development",
    type: "website",
    locale: "en_US",
    url: "https://kaushik.dev",
    siteName: "Kaushik Samadder Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaushik Samadder | Full Stack Developer & Web3 Enthusiast",
    description: "Portfolio showcasing projects in Web3, AI/ML, and full-stack development",
    creator: "@kzark",
  },
  alternates: {
    canonical: "https://kaushik.dev",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
