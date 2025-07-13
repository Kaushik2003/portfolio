"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    name: "chainZap",
    description: "Cross-chain DeFi protocol for seamless asset transfers",
    category: "Blockchain",
    year: "2024",
    github: "https://github.com/kaushiksamadder/chainzap",
    demo: "https://chainzap.vercel.app",
    tech: ["Solana", "Web3", "TypeScript", "Next.js"],
  },
  {
    name: "Dava",
    description: "AI-powered healthcare management system",
    category: "AI/ML",
    year: "2024",
    github: "https://github.com/kaushiksamadder/dava",
    demo: "https://dava-health.vercel.app",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    name: "Homiey",
    description: "Smart home automation platform with IoT integration",
    category: "Full Stack",
    year: "2023",
    github: "https://github.com/kaushiksamadder/homiey",
    demo: "https://homiey.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    name: "rubik",
    description: "Algorithm visualization tool for competitive programming",
    category: "Web App",
    year: "2023",
    github: "https://github.com/kaushiksamadder/rubik",
    demo: "https://rubik-algo.vercel.app",
    tech: ["JavaScript", "D3.js", "React", "Algorithms"],
  },
  {
    name: "V4",
    description: "Version control system built from scratch",
    category: "Systems",
    year: "2023",
    github: "https://github.com/kaushiksamadder/v4",
    demo: null,
    tech: ["Go", "Git", "CLI", "File System"],
  },
  {
    name: "CORO-TASHI",
    description: "COVID-19 tracking and analysis dashboard",
    category: "Data Viz",
    year: "2022",
    github: "https://github.com/kaushiksamadder/coro-tashi",
    demo: "https://coro-tashi.vercel.app",
    tech: ["React", "Chart.js", "API", "Data Analysis"],
  },
]

export default function Projects() {
  return (
    <section className="py-20 px-6 bg-black" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects spanning Web3, AI/ML, and full-stack development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-3xl p-6 shadow-xl border border-gray-800 hover:shadow-2xl hover:border-purple-600 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-gray-400 bg-gray-800 px-2 py-1 rounded-full font-mono">
                    {project.category}
                  </span>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>
                <div className="flex space-x-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black rounded"
                    aria-label={`View ${project.name} source code on GitHub`}
                  >
                    <Github size={16} aria-hidden="true" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black rounded"
                      aria-label={`View ${project.name} live demo`}
                    >
                      <ExternalLink size={16} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-1">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
