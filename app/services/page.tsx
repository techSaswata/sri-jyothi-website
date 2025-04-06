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
    id: "repair",
    title: "Repair Services",
    description:
      "Expert repair services for all types of industrial machinery and equipment to minimize downtime and maximize productivity.",
    image: "/Web Pics/Web Pics/Services/Services-BFP1.jpg",
    features: [
      "Emergency repair services",
      "Preventive maintenance",
      "Equipment troubleshooting",
      "Performance optimization",
      "Component replacement",
      "Quality testing and validation",
    ],
    link: "/services/repair",
  },
  {
    id: "spare-parts",
    title: "Spare Parts",
    description:
      "Quality spare parts for industrial equipment, ensuring optimal performance and longevity of your machinery.",
    image: "/Web Pics/Web Pics/Spares/Impellers.jpg",
    features: [
      "OEM and aftermarket parts",
      "Custom part manufacturing",
      "Inventory management",
      "Parts compatibility analysis",
      "Quality assurance testing",
      "Expedited delivery options",
    ],
    link: "/services/spare-parts",
  },
  {
    id: "energy-solutions",
    title: "Energy Solutions",
    description:
      "Innovative energy-saving solutions to reduce operational costs and environmental impact of your industrial processes.",
    image: "/Web Pics/Web Pics/Services/condenser tubes replacement.jpg",
    features: [
      "Energy audits and assessments",
      "Efficiency improvement recommendations",
      "Renewable energy integration",
      "Power quality optimization",
      "Heat recovery systems",
      "Energy management systems",
    ],
    link: "/services/energy-solutions",
  },
  {
    id: "3d-services",
    title: "3D Services",
    description:
      "Advanced 3D modeling, printing, and scanning services for prototyping, reverse engineering, and product development.",
    image: "/Web Pics/Web Pics/3D scan-1.jpg",
    features: [
      "3D modeling and design",
      "Rapid prototyping",
      "Reverse engineering",
      "3D scanning of components",
      "Product visualization",
      "Manufacturing support",
    ],
    link: "/services/3d-services",
  },
  {
    id: "maintenance",
    title: "Maintenance",
    description:
      "Comprehensive preventive and corrective maintenance services to ensure smooth operation of your industrial equipment.",
    image: "/Web Pics/Web Pics/Services/vacuum pump.jpg",
    features: [
      "Scheduled maintenance programs",
      "Condition monitoring",
      "Predictive maintenance",
      "Equipment lifecycle management",
      "Maintenance staff training",
      "Documentation and reporting",
    ],
    link: "/services/maintenance",
  },
  {
    id: "consulting",
    title: "Consulting",
    description:
      "Expert consulting services for industrial engineering challenges, process optimization, and efficiency improvement.",
    image: "/Web Pics/Web Pics/Services/Services-BFP-2.jpg",
    features: [
      "Process optimization",
      "Facility planning and layout",
      "Equipment selection and procurement",
      "Safety and compliance audits",
      "Project management",
      "Training and development",
    ],
    link: "/services/consulting",
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
                <div className="h-16 w-16 mx-auto mb-4">
                  <Image
                    src="/placeholder-logo.png"
                    alt="Manufacturing"
                    width={64}
                    height={64}
                    className="h-full w-full"
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
                <div className="h-16 w-16 mx-auto mb-4">
                  <Image
                    src="/placeholder-logo.png"
                    alt="Power Generation"
                    width={64}
                    height={64}
                    className="h-full w-full"
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
                <div className="h-16 w-16 mx-auto mb-4">
                  <Image
                    src="/placeholder-logo.png"
                    alt="Oil & Gas"
                    width={64}
                    height={64}
                    className="h-full w-full"
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
                <div className="h-16 w-16 mx-auto mb-4">
                  <Image
                    src="/placeholder-logo.png"
                    alt="Infrastructure"
                    width={64}
                    height={64}
                    className="h-full w-full"
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

