"use client"

import { motion } from "framer-motion"
import { GitCommit, Star, GitFork, Calendar } from "lucide-react"

const githubStats = {
  totalCommits: 847,
  totalStars: 156,
  totalRepos: 42,
  contributionsThisYear: 324,
}

const recentActivity = [
  {
    type: "commit",
    repo: "chainZap",
    message: "feat: implement cross-chain bridge functionality",
    date: "2 hours ago",
    branch: "main",
  },
  {
    type: "star",
    repo: "Dava",
    message: "Starred by 3 users",
    date: "5 hours ago",
    branch: null,
  },
  {
    type: "commit",
    repo: "portfolio-v2",
    message: "style: update dark theme implementation",
    date: "1 day ago",
    branch: "develop",
  },
  {
    type: "fork",
    repo: "rubik",
    message: "Forked by @developer123",
    date: "2 days ago",
    branch: null,
  },
  {
    type: "commit",
    repo: "Homiey",
    message: "fix: resolve WebSocket connection issues",
    date: "3 days ago",
    branch: "main",
  },
]

const getActivityIcon = (type: string) => {
  switch (type) {
    case "commit":
      return <GitCommit size={16} className="text-green-400" />
    case "star":
      return <Star size={16} className="text-yellow-400" />
    case "fork":
      return <GitFork size={16} className="text-blue-400" />
    default:
      return <GitCommit size={16} className="text-gray-400" />
  }
}

export default function GitHubActivity() {
  return (
    <section className="py-20 px-6 bg-black" id="github">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">GitHub Activity</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My coding journey in numbers and recent contributions
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center">
            <div className="text-3xl font-bold text-white mb-2 font-mono">{githubStats.totalCommits}</div>
            <div className="text-gray-400 text-sm">Total Commits</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2 font-mono">{githubStats.totalStars}</div>
            <div className="text-gray-400 text-sm">Stars Earned</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2 font-mono">{githubStats.totalRepos}</div>
            <div className="text-gray-400 text-sm">Repositories</div>
          </div>
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2 font-mono">{githubStats.contributionsThisYear}</div>
            <div className="text-gray-400 text-sm">This Year</div>
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-8 border border-gray-800"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Calendar className="mr-3" size={24} />
            Recent Activity
          </h3>

          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-4 rounded-xl bg-gray-800 border border-gray-700 hover:border-purple-600 transition-colors"
              >
                <div className="flex-shrink-0 mt-1">{getActivityIcon(activity.type)}</div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-white font-mono">{activity.repo}</span>
                    {activity.branch && (
                      <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full">
                        {activity.branch}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 text-sm mb-1">{activity.message}</p>
                  <span className="text-gray-500 text-xs">{activity.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/kaushiksamadder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black"
            >
              View Full Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
