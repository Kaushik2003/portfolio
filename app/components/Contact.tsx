"use client"

import { motion } from "framer-motion"
import { Mail, Calendar, ArrowRight } from "lucide-react"

export default function Contact() {
  const email = "kaushik.samadder@example.com"
  const calendlyUrl = "https://calendly.com/kaushik-samadder"

  return (
    <section className="py-20 px-6 bg-black" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
            Let&apos;s Build Something <span className="gradient-text">Amazing</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Looking for internships or collaborations — especially in AI/ML &amp; blockchain. Let&apos;s turn ideas into
            reality.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href={`mailto:${email}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black border border-gray-800"
              aria-label={`Send email to ${email}`}
            >
              <Mail size={20} aria-hidden="true" />
              <span>Send Email</span>
              <ArrowRight size={16} aria-hidden="true" />
            </motion.a>

            <motion.a
              href={calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Schedule a call via Calendly"
            >
              <Calendar size={20} aria-hidden="true" />
              <span>Schedule a Call</span>
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm font-mono">© 2025 Kaushik Samadder. Crafted with care and code.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
