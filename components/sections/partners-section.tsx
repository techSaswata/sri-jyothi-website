"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import Marquee from "react-fast-marquee"

const partners = [
  { name: "Tata Steel", logo: "/placeholder-logo.png" },
  { name: "Reliance Industries", logo: "/placeholder-logo.png" },
  { name: "BHEL", logo: "/placeholder-logo.png" },
  { name: "NTPC", logo: "/placeholder-logo.png" },
  { name: "L&T", logo: "/placeholder-logo.png" },
  { name: "Adani Group", logo: "/placeholder-logo.png" },
  { name: "JSW Steel", logo: "/placeholder-logo.png" },
  { name: "Hindustan Unilever", logo: "/placeholder-logo.png" },
]

export default function PartnersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-16 bg-background border-y" id="partners">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-2">Trusted by Industry Leaders</h2>
          <p className="text-muted-foreground">
            We're proud to work with some of the most respected companies in the industry
          </p>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Marquee
            gradient={true}
            gradientColor={[255, 255, 255]}
            gradientWidth={100}
            speed={40}
            pauseOnHover={true}
            className="py-4"
          >
            <div className="flex items-center space-x-16">
              {partners.map((partner, index) => (
                <div key={index} className="mx-8 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={partner.logo || "/placeholder.svg"}
                    alt={partner.name}
                    width={180}
                    height={60}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </motion.div>
      </div>
    </section>
  )
}

