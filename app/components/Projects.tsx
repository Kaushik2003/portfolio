"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Tabs } from "@/components/ui/tabs"
import Image from "next/image" // Added import for Image

type DummyContentProps = { index: number }

const DummyContent = ({ index }: DummyContentProps) => {
  const project = projects[index];
  return (
    <div className="flex flex-col md:flex-row gap- w-full items-stretch">
      {/* Left: Cinematic Project Image (75%) with 16:9 aspect ratio */}
      <div className="w-full md:w-[75%] rounded-2xl relative aspect-[16/9] overflow-hidden shadow-xl flex items-center justify-center">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      {/* Right: Details Card (25%) */}
      <div className="w-full md:w-[25%] bg-gradient-to-r from-gray-950 to-black/90 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl items-stretch">
        <div>
          {/* Category and Year */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-semibold text-purple-200 bg-purple-800 px-2 py-1 rounded-full font-mono">
              {project.category}
            </span>
            <span className="text-xs text-gray-400 font-mono">{project.year}</span>
          </div>
          {/* Project Name */}
          <h2 className="text-xl md:text-2xl font-bold text-white mb-2">{project.name}</h2>
          {/* Description */}
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-4">{project.description}</p>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <span key={tech} className="text-xs px-2 py-1 bg-gray-800 text-purple-200 rounded border border-white/90 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>
        {/* Links */}
        <div className="flex gap-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
          >
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-full font-semibold hover:bg-white hover:text-black transition"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const tabs = [
  {
    title: "chainZap",
    value: "chainZap",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl">
        {" "}
        {/* Removed background and text styling */}
        <DummyContent index={0} />
      </div>
    ),
  },
  {
    title: "Dava",
    value: "Dava",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl">
        {" "}
        {/* Removed background and text styling */}
        <DummyContent index={1} />
      </div>
    ),
  },
  {
    title: "Homiey",
    value: "Homiey",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl">
        {" "}
        {/* Removed background and text styling */}
        <DummyContent index={2} />
      </div>
    ),
  },
  {
    title: "rubik",
    value: "rubik",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl">
        {" "}
        {/* Removed background and text styling */}
        <DummyContent index={3} />
      </div>
    ),
  },
  {
    title: "V4",
    value: "V4",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl">
        {" "}
        {/* Removed background and text styling */}
        <DummyContent index={4} />
      </div>
    ),
  },
  {
    title: "CORO-TASHI",
    value: "CORO-TASHI",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl">
        {" "}
        {/* Removed background and text styling */}
        <DummyContent index={5} />
      </div>
    ),
  },
]
const projects = [
  {
    name: "chainZap",
    image: "/chainzap.png",
    description: "Cross-chain DeFi protocol for seamless asset transfers",
    category: "Blockchain",
    year: "2024",
    github: "https://github.com/kaushiksamadder/chainzap",
    demo: "https://chainzap.vercel.app",
    tech: ["Solana", "Web3", "TypeScript", "Next.js"],
  },
  {
    name: "Dava",
    image: "/dava.png",
    description: "AI-powered healthcare management system",
    category: "AI/ML",
    year: "2024",
    github: "https://github.com/kaushiksamadder/dava",
    demo: "https://dava-health.vercel.app",
    tech: ["Python", "TensorFlow", "React", "FastAPI"],
  },
  {
    name: "Homiey",
    image: "/homiey.png",
    description: "Smart home automation platform with IoT integration",
    category: "Full Stack",
    year: "2023",
    github: "https://github.com/kaushiksamadder/homiey",
    demo: "https://homiey.vercel.app",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    name: "rubik",
    image: "/images/projects/chainzap.png",
    description: "Algorithm visualization tool for competitive programming",
    category: "Web App",
    year: "2023",
    github: "https://github.com/kaushiksamadder/rubik",
    demo: null,
    tech: ["JavaScript", "D3.js", "React", "Algorithms"],
  },
  {
    name: "V4",
    image: "/images/projects/chainzap.png",
    description: "Version control system built from scratch",
    category: "Systems",
    year: "2023",
    github: "https://github.com/kaushiksamadder/v4",
    demo: null,
    tech: ["Go", "Git", "CLI", "File System"],
  },
  {
    name: "CORO-TASHI",
    image: "/coro-tashi.png",
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
    <section className="mt-20 py-20 px-6 bg-black" id="projects">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of projects spanning Web3, AI/ML, and full-stack development
          </p>
        </motion.div>
        <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-7xl mx-auto w-full items-start justify-start my-10">
          <Tabs tabs={tabs} />
        </div>
      </div>
    </section>
  )
}
