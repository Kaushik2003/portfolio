"use client"

import { motion } from "framer-motion"
import { Calendar, Sparkle, Linkedin, Github, Twitter, Instagram, Book, Dribbble, Youtube } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { BentoGrid } from "@/components/magicui/bento-grid";
import { AnimatedListDemo } from "@/components/AnimatedListDemo";
import DockDemo from "@/components/DockDemo";
import { VideoText } from "@/components/magicui/video-text";


const socialLinks = [
  { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/kaushik-samadder-4346191a9/" },
  { name: "Medium", icon: Book, url: "https://medium.com/@kaushiksamadder2003" },
  { name: "GitHub", icon: Github, url: "https://github.com/Kaushik2003" },
  { name: "Youtube", icon: Youtube, url: "https://www.youtube.com/@kaushiksamadder5454" },
  { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/kaushiksamadder" },
  { name: "Twitter", icon: Twitter, url: "https://x.com/KaushikSam58090" },
]

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
        })
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 px-4 md:px-8 bg-black mb-20" id="about">

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">About Me</h2>
        <BentoGrid className="grid-cols-1 md:grid-cols-4 auto-rows-[208px] gap-5">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="md:row-span-2 md:col-span-1 rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md overflow-hidden relative flex items-end"
            aria-label="Profile photo of Kaushik Samadder"
          >
            <Image
              src="/bento.jpg"
              alt="Kaushik Samadder profile photo"
              fill
              className="object-cover brightness-100"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </motion.div>

          {/* About Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-8 flex flex-col justify-center"
          >
            {/* <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
              I&apos;m
              <span className="font-bold"> Kaushik Samadder</span>
            </h1> */}
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4 flex gap-1">
              I&apos;m
              <VideoText
                src="/aboutmevideo.mp4"
                className="font-bold inline-block pl-1 mt-1"
                fontSize="3.5rem"
              >
                Kaushik Samadder
              </VideoText>
            </h1>
            <p className="text-gray-400 leading-relaxed text-base">
              Started coding 4 years ago,<br />
              exploring AI/ML, smart contracts, and the edges of tech.<br />
              3rd year CS student building products, contributing to open source.<br />
              Always curious, always building.

            </p>
          </motion.div>

          {/* Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 flex flex-col"
          >
            <h3 className="text-white font-bold text-lg mb-4 tracking-wider">LINKS.</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-200"
                    aria-label={`Visit ${social.name}`}
                  >
                    <IconComponent size={20} className="text-black" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* Skills Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-2xl border-2 border-[#7c3aed] bg-[#7c3aed] p-6 relative flex flex-col justify-between"
          >
            <div className="absolute top-4 right-4">
              <Sparkle className="text-white/80" size={60} />
            </div>
            <h3 className="text-3xl font-mono font-bold text-white mb-2 uppercase tracking-wider italic">SKILLS.</h3>
            <ul className="space-y-1 text-white italic">
              <li className="font-medium text-sm leading-tight">Full Stack Developer</li>
              <li className="font-medium text-sm leading-tight">Blockchain Engineer</li>
              <li className="font-medium text-sm leading-tight">AI/ML Enthusiast</li>
              <li className="font-medium text-sm leading-tight">Technical Blogger</li>
            </ul>
          </motion.div>

          {/* Time Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 flex flex-col items-center justify-center"
            aria-label="Current local time"
          >
            <div
              className="font-mono text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-[0_0_8px_#fff]"
              style={{ textShadow: '0 0 8px #fff8' }}
              aria-live="polite"
            >
              {currentTime || "--:--:--"}
            </div>
            <div className="text-white text-xl font-mono font-bold" style={{ textShadow: '0 0 8px #fff8' }}></div>
          </motion.div>

          {/* Recent Works Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 flex flex-col"
          >
            <h3 className="text-white font-bold text-lg mb-6 tracking-wider uppercase">RECENTS WORKS.</h3>
            <AnimatedListDemo />
          </motion.div>

          {/* AKA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-4 font-mono uppercase">LORE.</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Among developers, known as
              <span className="text-white font-semibold italic"> kzark  </span>
              <br />
              A personal insignia I&apos;ve carried since the genesis of my development journey.
            </p>
          </motion.div>

          {/* Stack Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white font-mono uppercase">STACK.</h3>
            <DockDemo />
          </motion.div>

          {/* Schedule Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
            className="group rounded-2xl border border-[#333] bg-black p-6 flex items-center justify-center relative overflow-hidden"
          >
            {/* Animated Image Overlay */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10"
              aria-hidden="true"
            >
              <Image
                src="/placeholder.jpg"
                alt="Schedule Placeholder"
                fill
                className="object-cover rounded-2xl transition-all duration-500 group-hover:scale-105 group-hover:brightness-110 group-hover:blur-[1px]"
                priority={false}
              />
            </div>
            {/* Card Content */}
            <a
              href="https://calendar.app.google/aJhS1YQNNrrwQnN19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center space-y-2 text-white z-20 group-hover:text-black"
              aria-label="Schedule a call via Calendly"
              style={{ background: "transparent" }}
            >
              <Calendar size={28} />
              <span className="font-medium text-lg">Book Appointment</span>
            </a>
          </motion.div>
        </BentoGrid>
      </div>
    </section>
  )
}
