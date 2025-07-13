"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "FRONTEND",
    skills: ["HTML/CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "REST API", "GraphQL", "Socket.io", "hono", "bun"],
  },
  {
    title: "DATABASE",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma"],
  },
  {
    title: "DEVOPS",
    skills: ["Git", "Docker", "AWS", "Cloudflare"],
  },
  {
    title: "BLOCKCHAIN",
    skills: ["Solana", "Web3", "Smart Contracts", "etherjs", "remix", "EVM", "solidity", "rust"],
  },
]

export default function Skills() {
  return (
    <section className="py-20 px-6 bg-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight mb-8">Skills</h2>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-gray-500 text-sm font-semibold tracking-wider uppercase font-mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-gray-900 text-gray-200 rounded-full text-sm font-medium border border-gray-800 hover:border-purple-600 hover:bg-gray-800 transition-all duration-300 cursor-default shadow-lg hover:shadow-purple-600/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
