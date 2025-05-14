"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Globe } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

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
    <section className="relative overflow-hidden bg-section-light pt-10 pb-16">
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
              className="inline-block rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 border border-primary/10 backdrop-blur-sm"
            >
              Innovating Engineering Solutions for Industrial Excellence
            </motion.div>

            <div className="relative">
              <motion.h1 className="text-heading-1 mb-6 bg-clip-text">
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
              className="text-body-lg mb-8 max-w-2xl lg:max-w-none mx-auto lg:mx-0"
            >
              is a leading engineering service and manufacturing company based in India, specializing in power, manufacturing, and industrial sectors. Our expertise spans across Erection, Commissioning, Maintenance, and Spares Manufacturing, ensuring high efficiency and reliability for industrial operations.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
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
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border shadow-sm">
                <div className="p-2 rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">22+</div>
                  <div className="text-sm text-muted-foreground">Countries Served</div>
                </div>
              </div>
            </motion.div>
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

