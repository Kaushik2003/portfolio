"use client"

import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "FRONTEND",
    skills: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion", "shadcn/ui",],
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "REST API", "bun","FastAPI"],
  },
  {
    title: "DATABASE",
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Prisma", "Supabase", "Firebase", "AWS"],
  },
  {
    title: "DEVOPS",
    skills: ["Git", "Docker", "Kubernetes", "Postman"],
  },
  {
    title: "Language",
    skills: ["C","C++","Python","Rust","Solidity","JavaScript","TypeScript",]
  },
  {
    title: "BLOCKCHAIN",
    skills: ["Smart Contracts", "etherjs", "remix", "EVM", "solidity", "rust", "viem", "wagmi", "hardhat"],
  },
]

// Helper component for a single skill category block
const SkillCategoryBlock = ({ category, index }: { category: (typeof skillCategories)[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="space-y-2" // Less vertical space inside block
  >
    <h3 className="text-gray-300 text-xl font-bold tracking-wider uppercase font-mono mb-2">{category.title}</h3> {/* Smaller font and margin */}
    <div className="flex flex-wrap gap-2"> {/* Less gap between skills */}
      {category.skills.map((skill, skillIndex) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: index * 0.1 + skillIndex * 0.05 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          className="px-3 py-1.5 bg-gray-950 text-white rounded-full text-sm font-medium border border-gray-700 hover:border-purple-600 transition-all duration-300 cursor-default shadow-sm hover:shadow-md" // Smaller padding and font
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
)

export default function Skills() {
  // Find categories by title for explicit placement
  const frontend = skillCategories.find((cat) => cat.title === "FRONTEND")
  const backend = skillCategories.find((cat) => cat.title === "BACKEND")
  const database = skillCategories.find((cat) => cat.title === "DATABASE")
  const devops = skillCategories.find((cat) => cat.title === "DEVOPS")
  const language = skillCategories.find((cat) => cat.title === "Language")
  const blockchain = skillCategories.find((cat) => cat.title === "BLOCKCHAIN")

  return (

    <section className="py-20 px-4 md:px-8 bg-black ]" id="skills">
      {/* Match About section horizontal padding */}
      <div className="max-w-7xl mx-auto">
        {/* Match About container width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          {/* Reduced bottom margin */}
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Skills</h2>
          {/* Increased heading size slightly */}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-7">
          {/* Increased column gap to match wider container */}
          {/* Left Column */}
          <div className="space-y-7">
            {/* Reduced vertical spacing */}
            {frontend && <SkillCategoryBlock category={frontend} index={0} />}
            {database && <SkillCategoryBlock category={database} index={2} />}
          </div>

          {/* Right Column */}
          <div className="space-y-7">
            {/* Reduced vertical spacing */}
            {backend && <SkillCategoryBlock category={backend} index={1} />}
            {devops && <SkillCategoryBlock category={devops} index={3} />}
            {language && <SkillCategoryBlock category={language} index={5} />}
          </div>

          {/* Full-width Blockchain */}
          <div className="md:col-span-2">{blockchain && <SkillCategoryBlock category={blockchain} index={4} />}</div>
        </div>
      </div>
    </section>
  )
}
