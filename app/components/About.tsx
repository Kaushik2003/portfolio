"use client"

import { motion } from "framer-motion"
import { Clock, Calendar, Sparkles, Linkedin, Github, Twitter, Instagram, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/kaushik-samadder", color: "#0077B5" },
  { name: "GitHub", icon: Github, url: "https://github.com/kaushiksamadder", color: "#333" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/kzark_dev", color: "#1DA1F2" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/kzark", color: "#E4405F" },
  { name: "Portfolio", icon: ExternalLink, url: "https://kaushik.dev", color: "#8e2de2" },
]

const recentWorks = [
  { name: "chainZap", date: "Oct-2024", url: "https://chainzap.vercel.app" },
  { name: "Dava Health", date: "June-2024", url: "https://dava-health.vercel.app" },
  { name: "Homiey", date: "Jan-2024", url: "https://homiey.vercel.app" },
]

const techStack = [
  { name: "VS Code", icon: "💻" },
  { name: "Figma", icon: "🎨" },
  { name: "Notion", icon: "📝" },
  { name: "Discord", icon: "💬" },
  { name: "GitHub", icon: "🐙" },
  { name: "Vercel", icon: "▲" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
]

const skills = ["Full Stack Developer", "Web3 Engineer", "AI/ML Enthusiast", "Blockchain Developer", "Technical Writer"]

export default function About() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 px-6 bg-black" id="about">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]"
        >
          {/* Profile Photo Block - 30-40% width */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative overflow-hidden rounded-3xl bg-gray-900 border border-gray-800"
          >
            <div className="relative h-full min-h-[400px] lg:min-h-full">
              <Image
                src="/profile-photo.png"
                alt="Kaushik Samadder - Profile Photo"
                fill
                className="object-cover profile-image"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* About Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800 md:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                I&apos;m Kaushik <span className="text-5xl md:text-6xl font-black gradient-text">Samadder</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed">
                My journey in digital development began with a fascination for transforming complex ideas into elegant
                solutions. I bridge the gap between cutting-edge technology and intuitive user experiences, specializing
                in Web3, AI/ML, and full-stack development. Every project is an opportunity to push boundaries and
                create something meaningful.
              </p>
            </motion.div>

            {/* Skills Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-6 shadow-2xl relative overflow-hidden card-hover"
            >
              <div className="absolute top-4 right-4">
                <Sparkles className="text-white/80" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 font-mono">SKILLS.</h3>
              <ul className="space-y-2">
                {skills.map((skill, index) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-white font-medium"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Time Block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl p-6 border border-gray-800 flex flex-col justify-center items-center card-hover"
            >
              <Clock className="text-purple-400 mb-4" size={32} />
              <div
                className="text-3xl md:text-4xl font-bold text-white font-mono mb-2"
                aria-live="polite"
                aria-label={`Current time: ${currentTime}`}
              >
                {currentTime || "Loading..."}
              </div>
              <div className="text-gray-400 text-sm">Local Time</div>
            </motion.div>

            {/* Social Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-mono">CONNECT.</h3>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gray-800 p-3 rounded-xl border border-gray-700 hover:border-purple-600 transition-all duration-300 flex items-center justify-center group"
                      aria-label={`Visit ${social.name} profile`}
                    >
                      <IconComponent size={20} className="text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>

            {/* Recent Works */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-3xl p-6 border border-gray-800"
            >
              <h3 className="text-xl font-bold text-white mb-4 font-mono">RECENT WORKS.</h3>
              <div className="space-y-3">
                {recentWorks.map((work, index) => (
                  <motion.a
                    key={work.name}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="block text-gray-400 hover:text-white transition-colors text-sm group"
                  >
                    <span className="font-medium">{work.name}</span>
                    <span className="text-gray-500 ml-2">- {work.date}</span>
                    <ExternalLink
                      size={12}
                      className="inline ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* AKA Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-6 border border-gray-800 card-hover"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">AKA.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Within the realm of developers, I&apos;m recognised by the alias{" "}
              <span className="text-purple-400 font-semibold italic">kzark</span>, a name I&apos;ve been using ever
              since I embarked on my coding journey.
            </p>
          </motion.div>

          {/* Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-6 border border-gray-800 card-hover"
          >
            <h3 className="text-xl font-bold text-white mb-4 font-mono">TECH STACK.</h3>
            <div className="grid grid-cols-4 gap-3">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-3 rounded-xl border border-gray-700 hover:border-purple-600 transition-all duration-300 flex items-center justify-center tech-icon group"
                  title={tech.name}
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">{tech.icon}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Schedule Call Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-3xl p-6 border border-gray-800 flex items-center justify-center card-hover"
          >
            <motion.a
              href="https://calendly.com/kaushik-samadder"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg"
              aria-label="Schedule a call via Calendly"
            >
              <Calendar size={20} />
              <span>Schedule a call</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
