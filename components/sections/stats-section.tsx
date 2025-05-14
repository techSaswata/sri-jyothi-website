"use client"

import { motion, useInView } from "framer-motion"
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
  const isInView = useInView(ref, { once: true })

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
  // No animation state or logic needed anymore

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
    <section className="bg-section-light py-12 md:py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
           <h2 className="section-title mb-3">Our Imapct in Numbers</h2>
          <p className="section-subtitle">
            Our Vision: To provide world-class engineering solutions that enhance asset performance, reduce operational costs, and maximize reliability.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background rounded-xl p-5 shadow-sm border card-hover flex flex-col items-center text-center"
            >
              <div className="p-3 rounded-lg bg-primary/10 text-primary mb-3">{stat.icon}</div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <div className="font-medium text-base mb-2">{stat.label}</div>
              <p className="text-body-sm">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

