"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

const team = [
  {
    name: "Rajesh Kumar",
    position: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 25 years of experience in industrial engineering, Rajesh founded Sri Jyothi Engineering Services with a vision to provide innovative and reliable engineering solutions to industries across India.",
    linkedin: "#",
    twitter: "#",
    email: "rajesh@srijyothiengineeringservices.com",
  },
  {
    name: "Priya Sharma",
    position: "Technical Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Priya leads our technical team with her extensive knowledge in mechanical engineering and industrial automation. She has successfully managed numerous complex projects for major industrial clients.",
    linkedin: "#",
    twitter: "#",
    email: "priya@srijyothiengineeringservices.com",
  },
  {
    name: "Vikram Singh",
    position: "Operations Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Vikram oversees all operational aspects of our business, ensuring efficient service delivery and customer satisfaction. His background in project management has been instrumental in streamlining our processes.",
    linkedin: "#",
    twitter: "#",
    email: "vikram@srijyothiengineeringservices.com",
  },
  {
    name: "Ananya Patel",
    position: "Head of R&D",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Ananya leads our research and development initiatives, focusing on innovative solutions for energy efficiency and sustainable engineering practices. Her work has resulted in several patented technologies.",
    linkedin: "#",
    twitter: "#",
    email: "ananya@srijyothiengineeringservices.com",
  },
  {
    name: "Suresh Reddy",
    position: "Senior Engineer",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Suresh specializes in power generation equipment and has extensive experience in turbine repair and maintenance. His expertise has been crucial in many of our major power plant projects.",
    linkedin: "#",
    twitter: "#",
    email: "suresh@srijyothiengineeringservices.com",
  },
  {
    name: "Meera Joshi",
    position: "Client Relations Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Meera ensures that our clients receive exceptional service and support throughout their engagement with us. Her dedication to customer satisfaction has helped build our strong reputation in the industry.",
    linkedin: "#",
    twitter: "#",
    email: "meera@srijyothiengineeringservices.com",
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
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
    <section className="py-20 bg-gradient-secondary" id="team">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Meet Our Team</h2>
          <p className="section-subtitle">
            Our team of experienced professionals is dedicated to providing the highest quality engineering services and
            solutions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="border shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium mb-4">{member.position}</p>
                    <p className="text-muted-foreground mb-4 text-sm">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a
                        href={member.twitter}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label={`${member.name}'s Twitter profile`}
                      >
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

