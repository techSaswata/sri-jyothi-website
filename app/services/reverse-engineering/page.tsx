import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, RefreshCw, Clock, Microscope, Ruler, Activity, Zap } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Reverse Engineering | Sri Jyothi Engineering Services",
  description:
    "Fast and reliable reverse engineering solutions to reproduce spare parts that are hard to find or no longer available.",
}

export default function ReverseEngineeringPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Specialized Service
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Advanced <span className="gradient-text">Reverse Engineering</span> Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                SRI JYOTHI ENGINEERING SERVICES offers fast and reliable reverse engineering solutions to reproduce spare parts that are hard to find or no longer available. When the original manufacturer is not able to supply parts, we help reduce downtime and keep your systems running smoothly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Reverse Engineering
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
                  src="/Web Pics1/Services/Reverse_Engineering.jpg"
                  alt="Reverse Engineering Services"
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

      {/* Process Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Reverse Engineering Process</h2>
            <p className="section-subtitle">
              Our comprehensive reverse engineering process ensures quality, accuracy, and cost-effectiveness—helping you save time and avoid long equipment downtimes.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Component Analysis</h3>
                <p className="text-muted-foreground">
                  We begin by analyzing the existing component, studying its design, materials, and functionality to understand its critical features.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">3D Scanning & Modeling</h3>
                <p className="text-muted-foreground">
                  Using advanced 3D scanning technology, we create precise digital models of the component, capturing all dimensions and geometries.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Engineering & Design</h3>
                <p className="text-muted-foreground">
                  Our engineers refine the 3D model, create technical drawings, and improve the design where possible to enhance performance and longevity.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Precision Manufacturing</h3>
                <p className="text-muted-foreground">
                  Finally, we manufacture the component using suitable materials and advanced production techniques, ensuring precise tolerances and quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Why Choose Our Reverse Engineering Services</h2>
            <p className="section-subtitle">
              We offer several compelling advantages that make us the preferred choice for reverse engineering solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <RefreshCw className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quick Reproduction</h3>
                <p className="text-muted-foreground mb-4">
                  We rapidly reproduce unavailable parts, helping you minimize downtime and get your equipment back to operation quickly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Fast turnaround times for critical components</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Expedited service options available</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Efficient project management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Zap className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Material & Design Upgrades</h3>
                <p className="text-muted-foreground mb-4">
                  We can upgrade materials or improve designs to enhance performance, durability, and reliability of the reproduced parts.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced material selection for better performance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Design optimization for improved functionality</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Enhanced durability and wear resistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Microscope className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Accurate 3D Scanning</h3>
                <p className="text-muted-foreground mb-4">
                  Our advanced 3D scanning technology ensures precise measurement and modeling of even the most complex components.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">High-precision scanning equipment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Detailed surface mapping</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Capture of complex geometries</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Reliable Quality</h3>
                <p className="text-muted-foreground mb-4">
                  We maintain strict quality control processes to ensure every reverse engineered component meets or exceeds original specifications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Comprehensive quality testing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Material certification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Performance validation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Ruler className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">High Precision</h3>
                <p className="text-muted-foreground mb-4">
                  Our manufacturing processes maintain tight tolerances to ensure perfect fit and function of the reproduced components.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Precision CNC machining</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Exact dimensional accuracy</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Perfect fitment guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Activity className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Support Without Original Drawings</h3>
                <p className="text-muted-foreground mb-4">
                  We can reverse engineer components even when original drawings or documentation are not available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Recreation from physical samples only</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Functional analysis and reconstruction</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Complete technical documentation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Applications of Reverse Engineering</h2>
            <p className="section-subtitle">
              Our reverse engineering services are used across various industries and applications to solve critical component availability challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-56">
                <Image 
                  src="/Web Pics1/Services/BFP/IMG-20240426-WA0014.jpg" 
                  alt="Complex Components" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Complex Components</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  We specialize in reverse engineering complex components with intricate geometries, tight tolerances, and special features that are challenging to reproduce through conventional methods.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Turbine blades and nozzles</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Impellers and diffusers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Custom manifolds and housings</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
              <div className="relative h-56">
                <Image 
                  src="/Web Pics1/Services/3D scan/3D Scan Service 1.jpg" 
                  alt="Obsolete Parts" 
                  fill 
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Obsolete Parts</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground mb-4">
                  When manufacturers discontinue support for older equipment, we can reverse engineer critical components to extend the service life of valuable machinery and prevent costly replacements.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Legacy industrial equipment parts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Specialized control system components</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Discontinued machine elements</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  )
} 