"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kaushiksamadder",
    icon: Github,
    label: "View GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kaushik-samadder",
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/kzark_dev",
    icon: Twitter,
    label: "Follow on Twitter",
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black" id="hero">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tight">
            I&apos;m <span className="gradient-text">Kaushik</span>
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 mb-8 font-light tracking-wide font-mono"
          >
            Full Stack | Web3 | AI/ML
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            I build things at the intersection of design, code &amp; emerging tech.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="flex justify-center space-x-6"
            role="list"
            aria-label="Social media links"
          >
            {socialLinks.map((link) => {
              const IconComponent = link.icon
              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-gray-900 text-white hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black border border-gray-800"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.label}
                  role="listitem"
                >
                  <IconComponent size={24} aria-hidden="true" />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
