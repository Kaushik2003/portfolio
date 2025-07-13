"use client"

import { useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "வணக்கம்", lang: "Tamil" },
  { text: "ನಮಸ್ಕಾರ", lang: "Kannada" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "নমস্কার", lang: "Bengali" },
]

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const handleComplete = useCallback(() => {
    setIsComplete(true)
    setTimeout(onComplete, 500) // Small delay for smooth transition
  }, [onComplete])

  useEffect(() => {
    if (isComplete) return

    let interval: NodeJS.Timeout
    if (currentIndex === 0) {
      interval = setTimeout(() => {
        setCurrentIndex(1)
      }, 700) // Show 'Hello' longer
    } else {
      interval = setTimeout(() => {
        setCurrentIndex((prev) => {
          if (prev === greetings.length - 1) {
            setTimeout(handleComplete, 250)
            return prev
          }
          return prev + 1
        })
      }, 175) // Rapid cut for others
    }

    return () => {
      clearTimeout(interval)
    }
  }, [currentIndex, handleComplete, isComplete])

  return (
    <div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      role="dialog"
      aria-label="Loading screen"
      aria-live="polite"
    >
      {/* Geometric background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        aria-hidden="true"
      />

      <div className="text-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.08 }} // Instant cut and italics
            className="text-4xl md:text-6xl text-white tracking-tight italic font-semibold"
            style={{ fontFamily: "var(--font-sans)" }}
            aria-label={`${greetings[currentIndex]?.text} in ${greetings[currentIndex]?.lang}`}
          >
            {greetings[currentIndex]?.text}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
