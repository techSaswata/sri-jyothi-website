"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Award, Clock, Briefcase, Globe, ThumbsUp } from "lucide-react"

const stats = [
  {
    icon: <Users className="h-8 w-8" />,
    value: "250+",
    label: "Expert Engineers",
    description: "Skilled professionals ready to solve your engineering challenges",
  },
  {
    icon: <Award className="h-8 w-8" />,
    value: "15+",
    label: "Years Experience",
    description: "Delivering excellence in engineering services since 2008",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance for all your engineering needs",
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    value: "500+",
    label: "Projects Completed",
    description: "Successfully delivered projects across various industries",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "20+",
    label: "Countries Served",
    description: "Providing engineering solutions globally",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    value: "98%",
    label: "Client Satisfaction",
    description: "Committed to exceeding client expectations",
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="bg-gradient-secondary py-20 md:py-32">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Our Impact in Numbers</h2>
          <p className="section-subtitle">
            We take pride in our achievements and the trust our clients place in us. Here's a glimpse of our journey in
            numbers.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-6 shadow-sm border card-hover"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">{stat.icon}</div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="font-medium mb-2">{stat.label}</div>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

