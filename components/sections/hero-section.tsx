"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

const stats = [
  { value: 25, label: "Years Experience", suffix: "+" },
  { value: 500, label: "Projects Completed", suffix: "+" },
  { value: 98, label: "Client Satisfaction", suffix: "%" },
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState(stats.map(() => 0))
  const countingRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startCounting()
        }
      },
      { threshold: 0.5 }
    )

    if (countingRef.current) {
      observer.observe(countingRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const startCounting = () => {
    stats.forEach((stat, index) => {
      const duration = 2000
      const steps = 60
      const increment = stat.value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= stat.value) {
          current = stat.value
          clearInterval(timer)
        }
        setCounts(prev => {
          const newCounts = [...prev]
          newCounts[index] = Math.floor(current)
          return newCounts
        })
      }, duration / steps)
    })
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 pt-20 pb-32">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-primary/40 to-blue-500/40 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-gradient-to-tr from-primary/40 to-blue-500/40 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left relative"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
              className="inline-block rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-primary mb-6 border border-primary/10 backdrop-blur-sm"
            >
              Leading Engineering Solutions Provider
            </motion.div>

            <div className="relative">
              <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 bg-clip-text">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="inline-block bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"
                >
                  Sri Jyothi
                </motion.span>
                <br />
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="inline-block text-slate-800 dark:text-slate-200"
                >
                  Engineering Services
                </motion.span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-xl text-muted-foreground mb-10 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
            >
              We provide comprehensive engineering services and solutions to optimize your industrial operations and
              maximize efficiency.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="mb-16"
            >
              <Button
                size="lg"
                asChild
                className="text-lg px-8 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/services">
                  Get Started
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>

            {/* Animated Stats */}
            <div ref={countingRef} className="grid grid-cols-3 gap-4 lg:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 20, opacity: 0 }}
                  animate={isVisible ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-2xl -z-10 transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="p-4 relative overflow-hidden">
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={isVisible ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      className="absolute -right-6 -top-6 w-12 h-12 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors duration-300"
                    />
                    <p className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-1">
                      {counts[index]}
                      {stat.suffix}
                    </p>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative aspect-[4/3] lg:aspect-square"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative h-full rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/Web Pics1/Services/BFP/Services- BFP replacement.jpg"
                alt="Engineering Services"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
              
              {/* Animated Border */}
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl">
                <motion.div
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 0.5 }}
                  className="w-full h-full"
                />
              </div>
            </motion.div>
            
            {/* Enhanced Decorative Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -left-4 -top-4 w-32 h-32 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

