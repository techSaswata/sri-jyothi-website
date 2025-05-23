"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { Award, Clock, Globe, ThumbsUp } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const stats = [
  // {
  //   icon: <Users className="h-8 w-8" />,
  //   value: "250+",
  //   label: "Expert Engineers",
  //   description: "Skilled professionals ready to solve your engineering challenges",
  // },
  {
    icon: <Award className="h-8 w-8" />,
    value: 140,
    suffix: "+",
    label: "Companies Served",
    description: "Delivering Excellence in engineering since 2008",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    value: "24/7",
    label: "Support",
    description: "Round-the-clock assistance for all your engineering needs",
  },
  // {
  //   icon: <Briefcase className="h-8 w-8" />,
  //   value: "500+",
  //   label: "Projects Completed",
  //   description: "Successfully delivered projects across various industries",
  // },
  {
    icon: <Globe className="h-8 w-8" />,
    value: 15,
    suffix: "+",
    label: "Industries Served",
    description: "Providing engineering solutions to a wide range of industries",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Customer-First Approach for Tailored Solutions",
  },
]

interface CounterProps {
  value: number | string;
  suffix?: string;
  duration?: number;
}

const Counter = ({ value, suffix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && typeof value === 'number') {
      let start = 0
      const end = value
      const incrementTime = duration / end
      const counter = setInterval(() => {
        start += 1
        setCount(start)
        if (start === end) clearInterval(counter)
      }, incrementTime)

      return () => clearInterval(counter)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className="text-3xl font-bold text-primary">
      {typeof value === 'number' ? count : value}
      {suffix}
    </span>
  )
}

export default function StatsSection() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section ref={ref} className="bg-section-light py-16 md:py-20">
      <div className="container">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={titleVariants}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted-foreground">
            Our vision: To provide world-class engineering solutions that enhance asset performance, reduce operational costs, and maximize reliability.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                borderColor: "rgba(59, 130, 246, 0.5)"
              }}
              className="bg-background rounded-xl p-6 shadow-md border border-primary/10 transition-all duration-300 flex flex-col items-center text-center"
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-3 rounded-lg bg-primary/10 text-primary mb-4"
              >
                {stat.icon}
              </motion.div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="font-medium text-lg mb-2">{stat.label}</div>
              <p className="text-muted-foreground">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

