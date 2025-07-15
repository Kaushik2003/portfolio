"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Tabs } from "@/components/ui/tabs"
import Image from "next/image" // Added import for Image

type DummyContentProps = { index: number }

const DummyContent = ({ index }: DummyContentProps) => {
  const project = projects[index];
  return (
    <div className="flex flex-col md:flex-row gap- w-full items-stretch ">
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
    title: "Reco",
    value: "Reco",
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl">
        {" "}
        {/* Removed background and text styling */}
        <DummyContent index={4} />
      </div>
    ),
  },
  {
    title: "CoroTashi",
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
    "name": "ChainZap",
    "image": "/chainzap.png",
    "description": "A decentralized, trustless solution for planning your digital legacy on the Aptos blockchain.",
    "category": "Blockchain",
    "year": "2025",
    "github": "https://github.com/kaushik2003/chainzap",
    "demo": null,
    "tech": ["Next.js", "React", "TypeScript", "Tailwind CSS", "Aptos", "Move"]
  },
  {
    "name": "Dava",
    "image": "/dava.png",
    "description": "Decentralized healthcare platform with NFT-based medical records, role-based access, and blockchain-powered privacy.",
    "category": "Blockchain/Healthcare",
    "year": "2025",
    "github": "https://github.com/kaushik2003/dava",
    "demo": "https://dava-theta.vercel.app",
    "tech": [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Radix UI",
      "Framer Motion",
      "Wagmi",
      "Viem",
      "RainbowKit",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Pinata",
      "IPFS",
      "ERC-721",
      "WebSockets",
      "Three.js"
    ]
  },  
  {
    "name": "Homiey",
    "image": "/homiey.png",
    "description": "AI-powered educational assistant for exam prep, doubts, and assessments",
    "category": "AI & EdTech",
    "year": "2024",
    "github": "https://github.com/Kaushik2003/Homiey",
    "demo": "https://homiey.vercel.app/",
    "tech": ["Next.js", "Tailwind CSS", "Node.js", "Express", "PostgreSQL", "MongoDB", "Gemini AI"]
  },  
  {
    "name": "Rubik",
    "image": "/rubik.png",
    "description": "AI Onchain Agent that can perform onchain operations on Base (Base Sepolia). It features a Python backend that integrates Gemini with CDP AgentKit to execute blockchain actions and a Next.js frontend providing an AI-powered chat interface to interact with the agent.",
    "category": "AI Agent",
    "year": "2025",
    "github": "https://github.com/kaushik2003/rubik",
    "demo": null,
    "tech": ["Gemini", "CDP AgentKit", "Base Chain", "Next.js", "Flask", "Python", "React", "Tailwind CSS", "TypeScript", "LangChain", "SQLite", "Bun"]
  },
  {
    "name": "Reco",
    "image": "/reco.png",
    "description": "A modern, customizable portfolio platform built with Next.js, Tailwind CSS, shadcn/ui, and Zustand. It enables professionals to create, manage, and showcase their portfolios with a beautiful, drag-and-drop interface and fully editable sections.",
    "category": "Web Development",
    "year": "2025",
    "github": "https://github.com/kaushik2003/reco",
    "demo": "http://localhost:3000",
    "tech": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "shadcn/ui",
      "Zustand",
      "Lucide Icons",
      "TypeScript"
    ]
  },
  {
    "name": "Coro Tashi",
    "image": "/coro-tashi.png",
    "description": "A next-generation DeFi staking protocol by CoreDAO. Stake CORE tokens, receive stCORE, and earn auto-compounding rewards with no lockups or intermediaries.",
    "category": "DeFi",
    "year": "2023",
    "github": "https://github.com/PepsiCola-kulfi/CORO-TASHI",
    "demo": "https://coro-tashi.vercel.app/",
    "tech": ["Next.js", "React", "TypeScript", "Ethers.js", "Solidity", "Tailwind CSS"]
   }
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
