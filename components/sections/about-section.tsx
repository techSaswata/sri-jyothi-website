"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Award, Users, Target, CheckCircle, ArrowRight } from "lucide-react"

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const checkmarkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-background via-blue-50/10 to-background dark:from-background dark:via-blue-950/10 dark:to-background" id="about">
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
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start mb-16">
          {/* Left Column - About & Mission */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl lg:max-w-none mx-auto lg:mx-0"
          >
            <motion.div variants={itemVariants} className="mb-10">
              <div className="inline-block rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 px-4 py-1.5 mb-4 border border-primary/10 backdrop-blur-sm">
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  Discover Our Story
                </span>
              </div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
                About Us
              </h2>
              <p className="text-lg text-muted-foreground">
              SJES is a leading India-based engineering service and manufacturing company specializing in high-capacity production environments across various industries, with particular expertise in the Energy sector.
              With an impressive and growing client list, SJES has built a reputation for exceptional customer service, technical expertise, reliability, and quality engineering outcomes.
              Our vision is to be the most trusted specialist services group in the delivery of Erection, Commissioning, Maintenance, and Manufacture & Supply of spares.
              </p>
            </motion.div>

            {/* <motion.div variants={itemVariants} className="bg-primary/5 rounded-2xl p-6 mb-10 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide innovative and sustainable engineering solutions that enhance operational efficiency, reduce
                costs, and contribute to the success of our clients' businesses.
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative w-full"
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
        
        {/* Middle Section - Core Values and Why Choose Us side by side */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-start mb-16">
          {/* Left Column - Core Values */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl lg:max-w-none mx-auto lg:mx-0 h-full flex flex-col"
          >
            <motion.div variants={itemVariants} className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Our Core Values
              </h3>
              <div className="grid gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    className="group bg-gradient-to-br from-background to-blue-50/30 dark:from-gray-900 dark:to-gray-900/50 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-primary">{value.title}</h4>
                        <p className="text-base text-muted-foreground group-hover:text-primary/80 transition-colors duration-300 leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Why Choose Us */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="max-w-xl lg:max-w-none mx-auto lg:mx-0 h-full flex flex-col"
          >
            <motion.div variants={itemVariants} className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Why Choose Us
              </h3>
              <div className="grid gap-4">
                {[
                  "22+ years of industry experience",
                  "Faster Response to Clients on emergency jobs",
                  "Support on Critical Situations",
                  "Customized solutions for specific industry needs",
                  "Customer Satisfaction is our top priority",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={checkmarkVariants}
                    className="flex items-start space-x-3 group bg-gradient-to-br from-background to-blue-50/30 dark:from-gray-900 dark:to-gray-900/50 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg"
                  >
                    <div className="p-2 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl w-12 h-12 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 pt-1">
                      <span className="text-base text-muted-foreground group-hover:text-primary/80 transition-colors duration-300 block leading-relaxed">
                        {item}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - CTA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center"
        >
          <motion.div variants={itemVariants}>
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 px-8"
            >
              <Link href="/about">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

