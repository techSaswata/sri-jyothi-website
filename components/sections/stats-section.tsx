"use client"

import { motion } from "framer-motion"
import { Award, Clock, Globe, ThumbsUp } from "lucide-react"

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
    value: "15+",
    label: "Industries Served",
    description: "Providing engineering solutions to a wide range of industries",
  },
  {
    icon: <ThumbsUp className="h-8 w-8" />,
    value: "99%",
    label: "Client Satisfaction",
    description: "Committed to exceeding client expectations",
  },
]

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
          variants={containerVariants}
          initial="hidden"
          whileInView="visible" // Use whileInView for simple entrance animation
          viewport={{ once: true, amount: 0.2 }} // Configure viewport options
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
                {stat.value} {/* Display static value directly */}
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

