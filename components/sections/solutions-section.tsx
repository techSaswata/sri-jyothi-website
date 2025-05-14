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
    image: "/images/equipment.avif",
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
    image: "/images/home-hero-2.jpg",
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
    image: "/images/service1.jpg",
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
    id: "paper-pulp",
    title: "Paper & Pulp",
    description:
      "Precision solutions for paper and pulp plant optimization, focusing on machine efficiency and reliability for consistent production.",
    image: "/Web Pics1/Equipment/Vacuum pump services-1.jpg",
    features: [
      "Pulp processing equipment maintenance",
      "Paper machine optimization",
      "Vacuum system servicing",
      "Drying system efficiency improvements",
      "Precision component manufacturing",
      "Preventive maintenance programs",
    ],
  },
  {
    id: "chemicals",
    title: "Fertilizers & Chemicals",
    description:
      "High-performance industrial equipment maintenance and solutions for chemical processing and fertilizer production facilities.",
    image: "/Web Pics1/Equipment/filters.jpg",
    features: [
      "Reactor maintenance and repair",
      "Pump and compressor servicing",
      "Heat exchanger maintenance",
      "Filtration system optimization",
      "Corrosion prevention solutions",
      "Safety and compliance upgrades",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    description:
      "Engineering services for infrastructure projects to ensure structural integrity, safety, and longevity of public facilities.",
    image: "/images/service3.jpg",
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
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto p-0 mb-8">
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
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="order-2 md:order-1">
                    <h3 className={`text-2xl font-bold mb-4 ${solution.id === 'manufacturing' ? 'md:text-3xl' : ''}`}>
                      {solution.title} Solutions
                    </h3>
                    <p className={`text-muted-foreground mb-6 ${solution.id === 'manufacturing' || solution.id === 'paper-pulp' ? 'text-lg' : ''}`}>
                      {solution.description}
                    </p>
                    
                    {solution.id === 'paper-pulp' && (
                      <p className="text-lg text-muted-foreground mb-6">
                        Our specialized services for the paper and pulp industry include maintenance of critical production equipment,
                        precision component manufacturing, and optimization of processes to enhance efficiency and product quality.
                      </p>
                    )}

                    {solution.id === 'manufacturing' ? (
                      <div className="grid grid-cols-1 gap-4 mb-8">
                        {solution.features.map((feature, index) => (
                          <div
                            key={index}
                            className="bg-card/60 dark:bg-card/40 backdrop-blur-sm border rounded-lg p-4 shadow-sm flex items-center space-x-3 hover:shadow-md transition-shadow duration-200"
                          >
                            <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                            <span className="text-lg">{feature}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                        {solution.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="order-1 md:order-2">
                    <div className={`relative rounded-xl overflow-hidden shadow-lg ${solution.id === 'paper-pulp' ? 'md:w-4/5 lg:w-3/4 mx-auto' : 'w-full'}`}>
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

