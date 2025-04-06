"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Settings, Zap, PenToolIcon as Tool, Cog, CuboidIcon as Cube, FileText, ArrowRight } from "lucide-react"

const services = [
  {
    icon: <Tool className="h-10 w-10" />,
    title: "Repair Services",
    description:
      "Expert repair services for all types of industrial machinery and equipment to minimize downtime and maximize productivity.",
    image: "/images/service4.jpg",
    link: "/services/repair",
  },
  {
    icon: <Cog className="h-10 w-10" />,
    title: "Spare Parts",
    description:
      "Quality spare parts for industrial equipment, ensuring optimal performance and longevity of your machinery.",
    image: "/images/spares1.jpg",
    link: "/services/spare-parts",
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: "Energy Solutions",
    description:
      "Innovative energy-saving solutions to reduce operational costs and environmental impact of your industrial processes.",
    image: "/images/service2.jpg",
    link: "/services/energy-solutions",
  },
  {
    icon: <Cube className="h-10 w-10" />,
    title: "3D Services",
    description:
      "Advanced 3D modeling, printing, and scanning services for prototyping, reverse engineering, and product development.",
    image: "/images/3d-scan.jpg",
    link: "/services/3d-services",
  },
  {
    icon: <Settings className="h-10 w-10" />,
    title: "Maintenance",
    description:
      "Comprehensive preventive and corrective maintenance services to ensure smooth operation of your industrial equipment.",
    image: "/images/service1.jpg",
    link: "/services/maintenance",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Consulting",
    description:
      "Expert consulting services for industrial engineering challenges, process optimization, and efficiency improvement.",
    image: "/images/service3.jpg",
    link: "/services/consulting",
  },
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
    <section className="section-padding bg-background" id="services">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Our Engineering Services</h2>
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
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">{service.description}</p>
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

        <div className="mt-16 text-center">
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

