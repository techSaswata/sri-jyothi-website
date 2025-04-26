import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Settings, Gauge, Cpu, FileCheck, Clock, Wrench } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Engineering Services | Sri Jyothi Engineering Services",
  description:
    "Reliable and professional engineering support to help clients reduce downtime, improve safety, and handle changes smoothly.",
}

export default function EngineeringServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Core Capabilities
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Professional <span className="gradient-text">Engineering Services</span> for Industrial Excellence
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We offer reliable and professional engineering support to help clients reduce downtime, improve safety, and handle changes smoothly. With 24+ years of experience, we provide smart and practical mechanical solutions that improve production, reduce costs, and increase efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border">
                <Image
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg"
                  alt="Engineering Services at Sri Jyothi Engineering"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -right-6 -bottom-6 w-64 h-64 bg-primary/5 rounded-full" />
              <div className="absolute -z-10 -left-6 -top-6 w-64 h-64 bg-primary/5 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Why Choose Our Engineering Services</h2>
            <p className="section-subtitle">
              We have successfully solved production challenges across various industries with innovative designs and quality service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Gauge className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Better Efficiency</h3>
                <p className="text-muted-foreground mb-4">
                  Our engineering solutions are designed to optimize your processes and significantly improve operational efficiency.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Process optimization and streamlining</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Energy usage reduction techniques</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Performance bottleneck analysis</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Throughput enhancement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <FileCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clear Information</h3>
                <p className="text-muted-foreground mb-4">
                  We provide accurate and comprehensive information to support informed decision-making and planning.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Detailed technical documentation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Clear project roadmaps and timelines</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Transparent performance metrics</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Regular status reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Cpu className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Strong Design Quality</h3>
                <p className="text-muted-foreground mb-4">
                  Our engineering designs adhere to the highest quality standards, ensuring reliability and performance.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">ISO-compliant design processes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced simulation and validation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Rigorous quality control</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Design for manufacturability</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Less Downtime</h3>
                <p className="text-muted-foreground mb-4">
                  Our services are designed to minimize interruptions to your operations and reduce costly downtimes.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Preventive maintenance planning</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Rapid response support services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Strategic upgrade scheduling</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Remote monitoring capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Settings className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Spare Parts Availability</h3>
                <p className="text-muted-foreground mb-4">
                  We ensure quick access to high-quality spare parts to maintain smooth operations of your equipment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Extensive spare parts inventory</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Custom part manufacturing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Obsolete part replacement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Expedited delivery services</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Wrench className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reliable Support</h3>
                <p className="text-muted-foreground mb-4">
                  Our team takes pride in offering expert advice, practical solutions, and a professional working relationship you can count on.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 technical assistance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Dedicated project managers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Comprehensive training programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Long-term maintenance contracts</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Industries We Serve</h2>
            <p className="section-subtitle">
              Our engineering services cater to a wide range of industries, providing specialized solutions for unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image 
                  src="/Web Pics1/Services/BFP/IMG-20240321-WA0008.jpg" 
                  alt="Power and Energy Industry" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Power & Energy</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Serving thermal, gas, and renewable power plants with specialized engineering services designed to enhance operational efficiency and extend equipment life.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image 
                  src="/Web Pics1/Services/BFP/IMG-20240426-WA0018.jpg" 
                  alt="Cement & Manufacturing" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Cement & Manufacturing</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Engineering solutions for heavy machinery and industrial equipment in cement plants and manufacturing facilities to improve production and reduce downtime.
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image 
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg" 
                  alt="Paper & Pulp Industry" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Paper & Pulp</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  Precision solutions for paper and pulp plant optimization, focusing on machine efficiency, reliability, and product quality improvements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Engineering Expertise</h2>
            <p className="section-subtitle">
              With 24+ years of industrial experience, we've developed specialized expertise across various engineering disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div className="relative rounded-xl overflow-hidden h-[400px]">
              <Image 
                src="/Web Pics1/Services/BFP/IMG-20240426-WA0012.jpg" 
                alt="Mechanical Engineering" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Mechanical Engineering</h3>
              <p className="text-muted-foreground mb-6">
                Our mechanical engineering team specializes in the design, analysis, and optimization of complex mechanical systems for industrial applications. From concept to implementation, we ensure every mechanical solution meets the highest standards of performance and reliability.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Equipment design and retrofitting</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Structural analysis and optimization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Thermal and fluid dynamics analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Failure analysis and trouble resolution</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center flex-row-reverse">
            <div className="md:order-2 relative rounded-xl overflow-hidden h-[400px]">
              <Image 
                src="/Web Pics1/Services/Condenser vacuum Pump/IMG-20240426-WA0021.jpg" 
                alt="Process Engineering" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="md:order-1">
              <h3 className="text-2xl font-bold mb-4">Process Engineering</h3>
              <p className="text-muted-foreground mb-6">
                Our process engineering capabilities focus on optimizing industrial processes to improve efficiency, reduce waste, and ensure consistent quality. We specialize in analyzing and enhancing production workflows across various industrial sectors.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Process optimization and automation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Production capacity enhancement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Quality control system development</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                  <span>Operational cost reduction strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  )
} 