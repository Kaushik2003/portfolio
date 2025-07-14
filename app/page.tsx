"use client"

import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import LoadingScreen from "./components/LoadingScreen"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Contact from "./components/Contact"
import { ScrollProgress } from "@/components/magicui/scroll-progress"



// Lazy load components for better performance
const LazySkills = dynamic(() => import("./components/Skills"), {
  loading: () => <div className="h-96 animate-pulse rounded-3xl " />,
})

const LazyProjects = dynamic(() => import("./components/Projects"), {
  loading: () => <div className="h-96 animate-pulse  rounded-3xl" />,
})

const LazyGitHubActivity = dynamic(() => import("./components/GitHubActivity"), {
  loading: () => <div className="h-96 animate-pulse  rounded-3xl" />,
})

const LazyBlogs = dynamic(() => import("./components/Blogs"), {
  loading: () => <div className="h-96 animate-pulse  rounded-3xl" />,
})

export default function Home() {
  const [showLoading, setShowLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Always show loading screen on refresh
    const timer = setTimeout(() => {
      setShowLoading(false)
    }, 3000) // Show for 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setShowLoading(false)
  }

  // Prevent hydration mismatch
  if (!isClient) {
    return null
  }

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
      <main className="min-h-screen bg-black">
        <div className="relative">
          {/* Subtle texture overlay */}
          <div
            className="fixed inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
          />
          <Hero />
          <About />
          <LazySkills />
          <LazyProjects />
          <LazyGitHubActivity />
          <Experience />
          {/* <LazyBlogs /> */}
          <Contact />
         
          <ScrollProgress />
        </div>
      </main>
  )
}
