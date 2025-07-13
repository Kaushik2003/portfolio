"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"

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
    <section className="py-20 px-6 bg-black" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Building the future through code and community</p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl p-8 shadow-2xl border border-gray-800 hover:border-purple-600 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                  <h4 className="text-xl text-purple-400 font-semibold mb-4">{exp.company}</h4>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Calendar size={16} />
                    <span className="text-sm font-mono">{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.highlights.map((highlight, highlightIndex) => (
                  <span
                    key={highlightIndex}
                    className="px-3 py-1 bg-gray-800 text-gray-200 rounded-full text-sm border border-gray-700 font-mono"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
