import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"
import TestimonialsSection from "@/components/sections/testimonials-section"

export const metadata = {
  title: "Services | Sri Jyothi Engineering Services",
  description:
    "Explore our comprehensive range of engineering services including repair services, spare parts, energy solutions, 3D services, maintenance, and consulting.",
}

const services = [
  {
    id: "engineering",
    title: "Engineering Services",
    description:
      "Reliable and professional engineering support to help clients reduce downtime, improve safety, and handle changes smoothly with 24+ years of experience.",
    image: "/Web Pics1/Equipment/Vacuum pump Overhauling.jpg",
    features: [
      "Better efficiency",
      "Correct and clear information",
      "Competitive pricing",
      "Reliable backup support",
      "Strong design quality",
      "Less downtime",
    ],
    link: "/services/engineering",
  },
  {
    id: "reverse-engineering",
    title: "Reverse Engineering",
    description:
      "Fast and reliable reverse engineering solutions to reproduce spare parts that are hard to find or no longer available.",
    image: "/Web Pics1/Services/Reverse_Engineering.jpg",
    features: [
      "Quick reproduction of unavailable parts",
      "Option to upgrade materials or improve designs",
      "Accurate 3D scanning and CAD modeling",
      "Short delivery times and reliable quality",
      "High precision and proper tolerances",
      "Support even without original drawings",
    ],
    link: "/services/reverse-engineering",
  },
  {
    id: "overhauling",
    title: "Overhauling Services",
    description:
      "Comprehensive erection, commissioning, maintenance, and overhauling services for the entire lifecycle of industrial equipment.",
    image: "/Web Pics1/Services/Condenser tubes replacement/Condenser tubes replacement work.jpg",
    features: [
      "Improve equipment performance and reliability",
      "Extend equipment lifespan",
      "Ensure safe and efficient machinery operation",
      "Specialized services for power, cement, paper industries",
      "Expert equipment inspection and assessment",
      "Post-service testing and validation",
    ],
    link: "/services/overhauling",
  },
  {
    id: "3d-scanning",
    title: "3D Scanning",
    description:
      "Precise digital models and technical drawings of existing mechanical components for spare parts development and reproduction.",
    image: "/Web Pics1/Services/3D scan/3D scan-1.jpg",
    features: [
      "3D scanning of existing parts, even if damaged",
      "Creation of detailed 3D models and drawings",
      "Reverse engineering for obsolete components",
      "Support for machining and fabrication processes",
      "Ensure dimensional accuracy and fit",
      "Eliminate dependency on unavailable OEM drawings",
    ],
    link: "/services/3d-scanning",
  },
  {
    id: "spare-parts",
    title: "Spare Parts",
    description:
      "High-quality mechanical spares designed, manufactured, and delivered to keep your equipment running smoothly and reliably.",
    image: "/Web Pics1/Equipment/Turbine seals.jpg",
    features: [
      "Turbine blades and fan blades",
      "Thrust bearings and journal bearings",
      "White metal bearings (rebabbitting)",
      "Labyrinth seals and glands",
      "Hydraulic cylinders and equipment casings",
      "Pump and fan impellers",
    ],
    link: "/services/spare-parts",
  },
  {
    id: "repair",
    title: "Repair Services",
    description:
      "Comprehensive repair, reconditioning, and refurbishment services for power and process industry equipment to restore functionality.",
    image: "/Web Pics1/Services/Condenser vacuum Pump/vacuum pump balancing.jpg",
    features: [
      "Diagnostics and precision repairs",
      "Component upgrades and retrofits",
      "Minimize downtime and operational losses",
      "Optimize reliability and performance",
      "Compliance with industry standards",
      "Extended equipment service life",
    ],
    link: "/services/repair",
  },
  {
    id: "energy-solutions",
    title: "Energy Solutions",
    description:
      "Expert energy efficiency consultancy tailored for power plants to reduce fuel consumption and optimize overall performance.",
    image: "/Web Pics1/Equipment/vacuum pump and booster pump casing.jpg",
    features: [
      "Targeted component upgrades",
      "Complete plant modernization",
      "Detailed site audits and data analysis",
      "System evaluations and improvement identification",
      "Output boosting and emission lowering",
      "Cost-effective and sustainable energy use",
    ],
    link: "/services/energy-solutions",
  },
  {
    id: "edm",
    title: "EDM Services",
    description:
      "High-precision Electrical Discharge Machining for producing intricate shapes and fine details in hard materials with exceptional accuracy.",
    image: "/Web Pics1/Equipment/ERT devices.jpg",
    features: [
      "Spark Erosion and Spark Machining",
      "Wire Erosion and Die Sinking",
      "Tolerances as tight as 0.1 microns",
      "Exceptional precision and surface finish",
      "Complex component manufacturing",
      "Hard-to-machine material processing",
    ],
    link: "/services/edm",
  },
  {
    id: "bend-removal",
    title: "Bend Removal",
    description:
      "Precision shaft and turbine rotor bend removal, restoring critical components to their original specifications for optimal performance.",
    image: "/Web Pics1/Equipment/BFP-Shaft-cylindrical grinding.jpg",
    features: [
      "Advanced diagnostics and straightening",
      "Cost savings over new component manufacturing",
      "Extended equipment life",
      "Reduced unplanned downtime",
      "Improved operational reliability",
      "Safe, smooth, and dependable machinery",
    ],
    link: "/services/bend-removal",
  },
  {
    id: "dynamic-balancing",
    title: "Dynamic Balancing",
    description:
      "Precision balancing services to improve the performance, reliability, and safety of rotating equipment across various industries.",
    image: "/Web Pics1/Services/Condenser vacuum Pump/vacuum pump.jpg",
    features: [
      "Advanced diagnostic tools",
      "Specialized balancing techniques",
      "Reduced vibration for smoother operation",
      "Minimized wear on critical components",
      "Lower mechanical stress and maintenance costs",
      "Increased operational efficiency",
    ],
    link: "/services/dynamic-balancing",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              We provide a comprehensive range of engineering services tailored to meet the specific needs of your
              industry and business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="border shadow-sm hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="relative h-48">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Explore Our Services</h2>
            <p className="section-subtitle">
              Learn more about our comprehensive range of engineering services and how they can benefit your business.
            </p>
          </div>

          <Tabs defaultValue="repair" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-transparent h-auto p-0 mb-8">
              {services.map((service) => (
                <TabsTrigger
                  key={service.id}
                  value={service.id}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground py-3"
                >
                  {service.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {services.map((service) => (
              <TabsContent key={service.id} value={service.id} className="mt-0">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button asChild>
                      <Link href={service.link}>
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>

                  <div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Industries We Serve</h2>
            <p className="section-subtitle">
              Our engineering services cater to a wide range of industries, providing specialized solutions for their
              unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 mx-auto mb-4 relative">
                  <Image
                    src="/Web Pics1/Equipment/Impellers.jpg"
                    alt="Manufacturing"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Manufacturing</h3>
                <p className="text-muted-foreground">
                  Comprehensive engineering solutions for the manufacturing industry to optimize production processes
                  and improve efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 mx-auto mb-4 relative">
                  <Image
                    src="/Web Pics1/Services/BFP/BFP-Overhauling services.jpg"
                    alt="Power Generation"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Power Generation</h3>
                <p className="text-muted-foreground">
                  Specialized engineering services for power plants and energy generation facilities to ensure reliable
                  and efficient operation.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 mx-auto mb-4 relative">
                  <Image
                    src="/Web Pics1/Equipment/Journal Bearings.jpg"
                    alt="Oil & Gas"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Oil & Gas</h3>
                <p className="text-muted-foreground">
                  Tailored engineering solutions for the oil and gas industry to maintain equipment integrity and
                  operational safety.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 mx-auto mb-4 relative">
                  <Image
                    src="/Web Pics1/Equipment/Tube sheet.jpg"
                    alt="Infrastructure"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">Infrastructure</h3>
                <p className="text-muted-foreground">
                  Engineering services for infrastructure projects to ensure structural integrity, safety, and longevity
                  of public facilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Process Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Service Process</h2>
            <p className="section-subtitle">
              We follow a structured approach to ensure high-quality service delivery and customer satisfaction.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Initial Consultation</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your specific requirements and challenges through detailed consultations.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Assessment & Planning</h3>
                <p className="text-muted-foreground">
                  Our team conducts a thorough assessment and develops a detailed service plan tailored to your needs.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Service Execution</h3>
                <p className="text-muted-foreground">
                  We execute the service according to the plan, with regular updates and quality checks throughout.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Follow-up & Support</h3>
                <p className="text-muted-foreground">
                  After service completion, we provide follow-up support to ensure your continued satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* CTA Section */}
      <CtaSection />
    </>
  )
}

