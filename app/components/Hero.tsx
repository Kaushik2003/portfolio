"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

import { InteractiveHoverButton } from "../../components/magicui/interactive-hover-button"
import { NeumorphEyebrow } from "../../components/ui/neumorph-eyebrow"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/kaushiksamadder",
    icon: Github,
    label: "View GitHub profile",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/kaushik-samadder",
    icon: Linkedin,
    label: "Connect on LinkedIn",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/kzark_dev",
    icon: Twitter,
    label: "Follow on Twitter",
  },
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-8 md:px-20 py-20 bg-black" id="hero">
      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-20">
        {/* Left: Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end items-center mb-6 md:mb-2"
        >
          <div className="relative w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-gray-800 bg-gradient-to-br from-gray-900 via-black to-gray-800">
            <img
              src="/profile-photo.jpg"
              alt="Your profile"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1 text-center md:text-left flex flex-col self-center md:self-start justify-center md:justify-center items-center md:items-start"
        >
          <NeumorphEyebrow className="mb-2 ">
            <span className="mr-2 inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Looking for Internships
          </NeumorphEyebrow>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight flex items-center justify-center md:justify-start">
            Hi, I&apos;m Kaushik
            {/* <span className="ml-2 text-3xl md:text-4xl">👋</span> */}
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-3 font-light tracking-wide font-mono">
            Full Stack | Web3 | AI/ML
          </div>
          <p className="text-base md:text-lg text-gray-400 max-w-lg mb-6 leading-tight">
            I build things at the intersection of design, code & emerging tech.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center md:justify-start w-full md:w-auto">
            {/* <ShimmerButton className="shadow-2xl" shimmerColor="#aea1f9">
              <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                View work
              </span>
            </ShimmerButton> */}
            <InteractiveHoverButton>
              Contact me
            </InteractiveHoverButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
