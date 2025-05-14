"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react"
import { useEffect } from "react"

const values = [
  {
    icon: <Award className="h-6 w-6" />,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake, ensuring the highest quality standards.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Collaboration",
    description:
      "We believe in working closely with our clients to understand their needs and deliver tailored solutions.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Innovation",
    description:
      "We continuously innovate and adopt the latest technologies to provide cutting-edge engineering solutions.",
  },
  {
    icon: <ArrowRight className="h-6 w-6" />,
    title: "Reliability",
    description:
      "We are committed to delivering projects on time and to specification, ensuring reliability at every step.",
  },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const controls = useAnimation()
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const textRevealVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
        duration: 0.8,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, x: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
        duration: 1,
      },
    },
  }

  return (
    <section className="py-16 md:py-20 bg-section-alternate relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-primary to-blue-500 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.05, scale: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-primary to-blue-500 blur-3xl"
        />
      </div>

      <div className="container relative">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center mb-10">
          {/* Left Column - About & Mission */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="max-w-xl lg:max-w-none mx-auto lg:mx-0"
          >
            <motion.div variants={textRevealVariants} className="mb-8">
              <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent"
              >
                About Us
              </motion.h2>
              
              <motion.p 
                variants={textRevealVariants}
                className="text-lg text-muted-foreground mb-4"
              >
              SJES is a leading India-based engineering service and manufacturing company specializing in high-capacity production environments across various industries, with particular expertise in the Energy sector.
              </motion.p>
              
              <motion.p 
                variants={textRevealVariants}
                className="text-lg text-muted-foreground mb-4"
              >
              With an impressive and growing client list, SJES has built a reputation for exceptional customer service, technical expertise, reliability, and quality engineering outcomes.
              </motion.p>
              
              <motion.p 
                variants={textRevealVariants}
                className="text-lg text-muted-foreground"
              >
              Our vision is to be the most trusted specialist services group in the delivery of Erection, Commissioning, Maintenance, and Manufacture & Supply of spares.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={controls}
            className="relative w-full h-full flex items-center justify-center pt-8 md:pt-12"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border border-primary/10"
            >
              <Image
                src="/Web Pics1/About Us/About us Header-1.jpg"
                alt="About Sri Jyothi Engineering Services"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay" />
            </motion.div>
            
            {/* Enhanced decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -z-10 -right-6 -bottom-6 w-64 h-64 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-full blur-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -z-10 -left-6 -top-6 w-64 h-64 bg-gradient-to-tr from-primary/10 to-blue-500/10 rounded-full blur-xl"
            />
          </motion.div>
        </div>

        {/* Bottom Section - CTA */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          className="text-center mt-8"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 px-8 relative overflow-hidden group"
            >
              <Link href="/about">
                <span className="relative z-10 flex items-center">
                Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

