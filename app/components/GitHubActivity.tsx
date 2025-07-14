"use client"

import { motion } from "framer-motion"
import GitHubCalendar from "react-github-calendar"
import useGithubStats from "react-github-user-stats"
import { ShimmerButton } from "@/components/magicui/shimmer-button"
export default function GitHubActivity() {
  // Destructure the correct properties from userData
  const { error, loading, userData } = useGithubStats("Kaushik2003")
  const {
    public_repos: totalRepos = 0,
    total_stars: totalStars = 0,
    followers = 0,
    following = 0,
    total_forks: totalForks = 0,
    // totalCommits and contributionsThisYear are not available in this API, so use null or placeholder
  } = userData || {}

  return (
    <section className="py-28 px-4 md:px-8 bg-black " id="github">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-3 tracking-tight">GitHub Activity</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">My open source journey, visualized.</p>
        </motion.div>
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full"
        >
          <div className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 text-center">
            <div className="text-3xl font-bold text-white mb-1 font-mono">{followers}</div>
            <div className="text-gray-300 text-sm">Followers</div>
          </div>
          <div className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-1 font-mono">{totalStars}</div>
            <div className="text-gray-300 text-sm">Stars</div>
          </div>
          <div className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-1 font-mono">{totalRepos}</div>
            <div className="text-gray-300 text-sm">Repositories</div>
          </div>
          <div className="rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-6 text-center">
            <div className="text-3xl font-bold text-green-400 mb-1 font-mono">{totalForks}</div>
            <div className="text-gray-300 text-sm">Total Forks</div>
          </div>
        </motion.div>
        {/* GitHub Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center items-center rounded-2xl shadow-2xl border border-[#333] bg-black/40 backdrop-blur-md p-8 w-full"
        >
          <GitHubCalendar username="Kaushik2003" colorScheme="dark" />
        </motion.div>
        <div className="mt-8 text-center">
          <ShimmerButton
            onClick={() => window.open("https://github.com/Kaushik2003", "_blank", "noopener,noreferrer")}
            className="inline-flex items-center px-6 py-3"
          >
            View Full Profile
          </ShimmerButton>
        </div>
      </div>
    </section>
  )
}
