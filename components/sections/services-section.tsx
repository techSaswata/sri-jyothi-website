"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Settings, Zap, PenToolIcon as Tool, Cog, CuboidIcon as Cube, FileText, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Engineering Services",
    description:
      "Reliable and professional engineering support to help clients reduce downtime, improve safety, and handle changes smoothly.",
    image: "/images/service1.jpg",
    link: "/services/engineering",
  },
  {
    icon: <Cog className="h-10 w-10" />,
    title: "Reverse Engineering",
    description:
      "Fast and reliable solutions to reproduce spare parts that are hard to find or no longer available.",
    image: "/images/service4.jpg",
    link: "/services/reverse-engineering",
  },
  {
    icon: <Tool className="h-10 w-10" />,
    title: "Overhauling Services",
    description:
      "Erection, commissioning, maintenance, and overhauling services for the entire lifecycle of industrial equipment.",
    image: "/images/service3.jpg",
    link: "/services/overhauling",
  },
  {
    icon: <Cube className="h-10 w-10" />,
    title: "3D Scanning",
    description:
      "Precise digital models and technical drawings of existing mechanical components for spare parts development.",
    image: "/images/3d-scan.jpg",
    link: "/services/3d-scanning",
  },
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Spares Manufacturing",
    description:
      "High-quality mechanical spares designed, manufactured, and delivered to keep your equipment running smoothly.",
    image: "/images/spares1.jpg",
    link: "/services/spare-parts",
  },
  {
    icon: <Tool className="h-10 w-10" />,
    title: "Repair Services",
    description:
      "Comprehensive repair, reconditioning, and refurbishment services for power and process industry equipment.",
    image: "/images/service4.jpg",
    link: "/services/repair",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Energy Saving Services",
    description:
      "Expert efficiency consultancy to reduce fuel consumption and optimize performance in power plants.",
    image: "/images/service2.jpg",
    link: "/services/energy-solutions",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "EDM Services",
    description:
      "High-precision Electrical Discharge Machining for intricate shapes and fine details in hard materials.",
    image: "/images/service3.jpg",
    link: "/services/edm",
  },
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Bend Removal",
    description:
      "Precision shaft and turbine rotor bend removal to restore critical components to original specifications.",
    image: "/images/service1.jpg",
    link: "/services/bend-removal",
  }
]

export default function ServicesSection() {
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
    <section className="section-padding py-12 md:py-16 bg-section-light" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="section-title mb-3">SERVICES</h2>
          <p className="section-subtitle">
            We provide a comprehensive range of engineering services tailored to meet the specific needs of your
            industry and business.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-background rounded-xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="p-2 bg-primary rounded-lg inline-block mb-2">{service.icon}</div>
                  <h3 className="text-heading-4">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-body mb-4">{service.description}</p>
                <Button variant="outline" size="sm" asChild className="group">
                  <Link href={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

