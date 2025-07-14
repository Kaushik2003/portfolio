"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import DesignSyncExample from "@/components/experience"

const experiences = [
  {
    role: "Advocate",
    company: "HackQuest",
    period: "Jan 2025 - Present",
    location: "Remote",
    description: "Leading community initiatives and educational content creation for Web3 developers.",
    highlights: ["Community building", "Technical writing", "Developer advocacy"],
  },
  {
    role: "Full Stack Engineer",
    company: "Codeate",
    period: "Nov 2024 - Present",
    location: "Remote",
    description:
      "Building scalable web applications and AI-powered solutions. Authored comprehensive blog about AI technologies.",
    highlights: ["Built Reco from scratch", "AI/ML integration", "Technical blogging"],
  },
]

export default function Experience() {
  return (
    <section className="py-28 px-6 bg-black relative" id="experience">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center md:items-center md:justify-center min-h-[60vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-center md:w-1/2 flex flex-col items-center justify-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto md:mx-0">Building the future through code and community</p>
        </motion.div>
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <DesignSyncExample experiences={experiences} />
        </div>
      </div>
    </section>
  )
}
