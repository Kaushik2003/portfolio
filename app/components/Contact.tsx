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
          

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Looking for internships or collaborations — especially in AI/ML &amp; blockchain. Let&apos;s turn ideas into
            reality.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-5 pt-8 border-t border-gray-800"
          >
            <p className="text-gray-500 text-sm font-mono">© 2025 Kaushik Samadder. Crafted with care and chai.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
