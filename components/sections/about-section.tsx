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
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="section-padding bg-background" id="about">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <motion.div variants={itemVariants}>
              <h2 className="section-title mb-6">About Sri Jyothi Engineering Services</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2005, Sri Jyothi Engineering Services has established itself as a leading provider of
                comprehensive engineering solutions for various industries. With a team of experienced engineers and
                technicians, we deliver high-quality services tailored to meet the specific needs of our clients.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground mb-6">
                To provide innovative and sustainable engineering solutions that enhance operational efficiency, reduce
                costs, and contribute to the success of our clients' businesses.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-background p-4 rounded-lg border">
                    <div className="p-2 bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center text-primary mb-4">
                      {value.icon}
                    </div>
                    <h4 className="font-bold mb-2">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
              <div className="space-y-3 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>25+ years of industry experience</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Team of certified engineers and technicians</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>State-of-the-art equipment and technology</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Customized solutions for specific industry needs</span>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Commitment to quality and customer satisfaction</span>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button asChild>
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border">
              <Image
                src="/images/equipment.avif"
                alt="About Sri Jyothi Engineering Services"
                width={600}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -right-6 -bottom-6 w-64 h-64 bg-primary/5 rounded-full" />
            <div className="absolute -z-10 -left-6 -top-6 w-64 h-64 bg-primary/5 rounded-full" />

            {/* Experience badge */}
            <div className="absolute top-8 -left-8 bg-primary text-white rounded-full p-6 shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-xs">Years Experience</div>
              </div>
            </div>

            {/* Certification badge */}
            <div className="absolute -bottom-8 -right-8 bg-background rounded-xl shadow-lg p-4 border">
              <div className="flex items-center space-x-3">
                <Award className="h-10 w-10 text-primary" />
                <div>
                  <h4 className="font-medium">ISO Certified</h4>
                  <p className="text-xs text-muted-foreground">Quality Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

