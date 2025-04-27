"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, Award, Clock, Briefcase, Globe, ThumbsUp } from "lucide-react"

const stats = [
  // {
  //   icon: <Users className="h-8 w-8" />,
  //   value: "250+",
  //   label: "Expert Engineers",
  //   description: "Skilled professionals ready to solve your engineering challenges",
  // },
  {
    icon: <Award className="h-8 w-8" />,
    value: "22+",
    label: "Years Experience",
    description: "Delivering excellence in engineering services since 2008",
    finalValue: 22,
    suffix: "+",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance for all your engineering needs",
    finalValue: 24,
    suffix: "/7",
    isFixed: true,
  },
  // {
  //   icon: <Briefcase className="h-8 w-8" />,
  //   value: "500+",
  //   label: "Projects Completed",
  //   description: "Successfully delivered projects across various industries",
  // },
  {
    icon: <Globe className="h-8 w-8" />,
    value: "15+",
    label: "Industries Served",
    description: "Providing engineering solutions to a wide range of industries",
    finalValue: 15,
    suffix: "+",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    value: "99%",
    label: "Client Satisfaction",
    description: "Committed to exceeding client expectations",
    finalValue: 99,
    suffix: "%",
    isFixed: true,
  },
]

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const controls = useAnimation()
  const [counters, setCounters] = useState(stats.map(() => 0))
  const [animationStarted, setAnimationStarted] = useState(false)

  // Start animation when section is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
      if (!animationStarted) {
        setAnimationStarted(true)
        animateCounters()
      }
    }
  }, [isInView, controls, animationStarted])

  // Counter animation function
  const animateCounters = () => {
    stats.forEach((stat, index) => {
      // Skip animation for fixed values like 24/7
      if (stat.isFixed) {
        setCounters(prevCounters => {
          const newCounters = [...prevCounters]
          newCounters[index] = stat.finalValue
          return newCounters
        })
        return
      }

      // Animation duration in ms
      const duration = 2000
      // How many steps in the animation
      const steps = Math.min(stat.finalValue, 30) // Max 30 steps for smoother animation
      // Increment per step
      const increment = stat.finalValue / steps
      // Start value
      let currentValue = 0
      // Current step
      let currentStep = 0

      // Set up the interval
      const timer = setInterval(() => {
        currentStep++
        currentValue = Math.min(currentStep * increment, stat.finalValue)

        // Update the counter state
        setCounters(prevCounters => {
          const newCounters = [...prevCounters]
          newCounters[index] = Math.round(currentValue)
          return newCounters
        })

        // Clear interval when we reach the final value
        if (currentValue >= stat.finalValue) {
          clearInterval(timer)
        }
      }, duration / steps)
    })
  }

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
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-8 shadow-sm border card-hover flex flex-col items-center text-center"
            >
              <div className="p-4 rounded-lg bg-primary/10 text-primary mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary mb-2">
                {stat.isFixed ? stat.value : counters[index] + stat.suffix}
              </div>
              <div className="font-medium text-lg mb-3">{stat.label}</div>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

