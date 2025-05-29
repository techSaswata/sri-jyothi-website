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
    <section className="relative overflow-hidden bg-section-light pt-16 pb-12">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute -right-40 -top-40 h-[400px] w-[400px] rounded-full bg-gradient-to-br from-primary/40 to-blue-500/40 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: 90 }}
          animate={{ opacity: 0.15, scale: 1, rotate: 0 }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
          className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-primary/40 to-blue-500/40 blur-3xl"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Text Content - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 text-left relative pr-4 lg:pr-8"
          >
            <motion.h1 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 leading-tight"
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="whitespace-nowrap"
              >
                <span className="bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">Sri Jyothi</span>{" "}
                <span className="text-slate-800 dark:text-slate-200">Engineering Services</span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed"
            >
              A leading engineering service and manufacturing company based in India, specializing in power, manufacturing, and industrial sectors. Our expertise spans across Erection, Commissioning, Maintenance, and Spares Manufacturing.
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:justify-start"
            >
              <Button
                size="lg"
                asChild
                className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 w-full sm:w-auto relative overflow-hidden group"
              >
                <Link href="/services">
                  <span className="relative z-10 flex items-center">
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </Link>
              </Button>
              
              <div className="flex items-center gap-3 bg-background/80 backdrop-blur-sm rounded-full px-6 py-3 border shadow-sm">
                <div className="p-2 rounded-full bg-primary/10">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-lg">22+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-2 relative aspect-[4/3] pl-4 lg:pl-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/10"
            >
              <Image
                src="/Web Pics1/Services/BFP/Services- BFP replacement.jpg"
                alt="Engineering Services"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
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
              className="absolute -right-6 -bottom-6 w-28 h-28 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="absolute -left-6 -top-6 w-28 h-28 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

