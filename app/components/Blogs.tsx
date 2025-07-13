"use client"

import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "The Future of Web3: Beyond the Hype",
    excerpt:
      "Exploring the real-world applications of blockchain technology and how it's reshaping industries beyond cryptocurrency.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
    category: "Web3",
    slug: "future-of-web3-beyond-hype",
    featured: true,
  },
  {
    title: "Building Scalable AI Applications with Next.js",
    excerpt:
      "A comprehensive guide to integrating AI/ML models into modern web applications using Next.js and serverless architecture.",
    date: "Nov 28, 2024",
    readTime: "12 min read",
    category: "AI/ML",
    slug: "scalable-ai-applications-nextjs",
    featured: true,
  },
  {
    title: "Cross-Chain DeFi: The Technical Deep Dive",
    excerpt:
      "Understanding the complexities of building cross-chain protocols and the challenges of interoperability in DeFi.",
    date: "Nov 10, 2024",
    readTime: "15 min read",
    category: "DeFi",
    slug: "cross-chain-defi-technical-deep-dive",
    featured: false,
  },
  {
    title: "From Idea to Production: My Startup Journey",
    excerpt: "Lessons learned while building and scaling a healthcare AI platform from concept to thousands of users.",
    date: "Oct 22, 2024",
    readTime: "10 min read",
    category: "Startup",
    slug: "idea-to-production-startup-journey",
    featured: false,
  },
  {
    title: "The Art of Code: Writing Beautiful, Maintainable Software",
    excerpt: "Best practices for writing clean, readable code that stands the test of time and scales with your team.",
    date: "Oct 5, 2024",
    readTime: "7 min read",
    category: "Development",
    slug: "art-of-code-maintainable-software",
    featured: false,
  },
  {
    title: "Solana vs Ethereum: A Developer's Perspective",
    excerpt:
      "Comparing the two major blockchain platforms from a developer's standpoint, covering performance, costs, and ecosystem.",
    date: "Sep 18, 2024",
    readTime: "11 min read",
    category: "Blockchain",
    slug: "solana-vs-ethereum-developer-perspective",
    featured: false,
  },
]

const getCategoryColor = (category: string) => {
  const colors = {
    Web3: "bg-purple-600",
    "AI/ML": "bg-blue-600",
    DeFi: "bg-green-600",
    Startup: "bg-orange-600",
    Development: "bg-pink-600",
    Blockchain: "bg-indigo-600",
  }
  return colors[category as keyof typeof colors] || "bg-gray-600"
}

export default function Blogs() {
  const featuredPosts = blogPosts.filter((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <section className="py-20 px-6 bg-black" id="blogs">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">Blogs</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts on technology, development, and the future of digital innovation
          </p>
        </motion.div>

        {/* Featured Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-mono">Featured Posts</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="blog-card rounded-3xl p-8 cursor-pointer group"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>

                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h4>

                <p className="text-gray-400 leading-relaxed mb-6">{post.excerpt}</p>

                <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                  <span className="mr-2">Read More</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Regular Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-8 font-mono">All Posts</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-600 transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -3 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold text-white ${getCategoryColor(post.category)}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>

                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h4>

                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-xs">
                    <Clock size={12} className="mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                  <ArrowRight size={14} className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 focus:ring-offset-black"
          >
            View All Posts
            <ArrowRight size={20} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
