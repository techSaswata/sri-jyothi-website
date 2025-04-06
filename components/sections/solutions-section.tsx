"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

const solutions = [
  {
    id: "manufacturing",
    title: "Manufacturing",
    description:
      "Comprehensive engineering solutions for the manufacturing industry to optimize production processes and improve efficiency.",
    image: "/Web Pics/Web Pics/Equipment Pic-1.avif",
    features: [
      "Production line optimization",
      "Equipment maintenance and repair",
      "Process automation",
      "Quality control systems",
      "Energy efficiency solutions",
      "Custom machinery design",
    ],
  },
  {
    id: "power",
    title: "Power Generation",
    description:
      "Specialized engineering services for power plants and energy generation facilities to ensure reliable and efficient operation.",
    image: "/Web Pics/Web Pics/Services/condenser tubes replacement.jpg",
    features: [
      "Turbine maintenance and repair",
      "Generator overhaul services",
      "Efficiency improvement solutions",
      "Preventive maintenance programs",
      "Power plant modernization",
      "Emergency repair services",
    ],
  },
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description:
      "Tailored engineering solutions for the oil and gas industry to maintain equipment integrity and operational safety.",
    image: "/Web Pics/Web Pics/Services/vacuum pump.jpg",
    features: [
      "Pipeline maintenance and repair",
      "Pump and compressor services",
      "Pressure vessel inspection",
      "Heat exchanger maintenance",
      "Valve repair and replacement",
      "Safety system upgrades",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "Engineering services for infrastructure projects to ensure structural integrity, safety, and longevity of public facilities.",
    image: "/Web Pics/Web Pics/Services/firefighting pumps.jpg",
    features: [
      "Structural assessment",
      "Maintenance planning",
      "Retrofit and upgrade services",
      "Safety compliance audits",
      "Energy efficiency improvements",
      "Facility modernization",
    ],
  },
]

export default function SolutionsSection() {
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
    <section className="section-padding bg-gradient-secondary" id="solutions">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Industry-Specific Solutions</h2>
          <p className="section-subtitle">
            We provide tailored engineering solutions for various industries, addressing their unique challenges and
            requirements.
          </p>
        </div>

        <motion.div ref={ref} variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
              {solutions.map((solution) => (
                <TabsTrigger
                  key={solution.id}
                  value={solution.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
                >
                  {solution.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {solutions.map((solution) => (
              <TabsContent key={solution.id} value={solution.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className="text-2xl font-bold mb-4">{solution.title} Solutions</h3>
                    <p className="text-muted-foreground mb-6">{solution.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {solution.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button>Learn More</Button>
                  </div>

                  <div className="order-1 md:order-2">
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={solution.image || "/placeholder.svg"}
                        alt={solution.title}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}

