import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Wrench, Settings, Shield, Gauge } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Overhauling Services | Sri Jyothi Engineering Services",
  description:
    "Comprehensive erection, commissioning, maintenance, and overhauling services for the entire lifecycle of industrial equipment.",
}

export default function OverhaulingServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Complete Equipment Lifecycle
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Professional <span className="gradient-text">Overhauling Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Comprehensive erection, commissioning, maintenance, and overhauling services for the entire lifecycle of industrial equipment. Our skilled teams and modern tools help maintain reliable and efficient operations across various industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Service
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
                  src="/Web Pics1/Services/BFP/BFP-Overhauling services.jpg"
                  alt="BFP Overhauling Services"
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

      {/* Key Features Showcase */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Comprehensive Overhauling Services</h2>
            <p className="section-subtitle">
              We provide end-to-end services for managing the entire lifecycle of industrial equipment, from installation to maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/BFP/Services-BFP1.jpg"
                  alt="Erection Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="text-white text-lg font-bold">Erection Services</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Professional equipment installation and setup to ensure proper alignment, connections, and initial configuration for optimal performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/BFP/Services-BFP-2.jpg"
                  alt="Commissioning Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="text-white text-lg font-bold">Commissioning</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Thorough testing and verification to ensure equipment meets operational parameters and performs according to specifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/BFP/Services- BFP replacement-3.jpg"
                  alt="Maintenance Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="text-white text-lg font-bold">Maintenance</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Regular preventive and corrective maintenance to keep equipment running efficiently, prevent breakdowns, and extend service life.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/BFP/Services- BFP replacement-4.jpg"
                  alt="Overhauling Services"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="text-white text-lg font-bold">Overhauling</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Complete disassembly, inspection, repair or replacement of worn components, and reassembly to restore equipment to like-new condition.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl font-bold mb-6">Key Benefits of Our Overhauling Services</h2>
                <p className="text-muted-foreground mb-8">
                  Our comprehensive overhauling services are designed to maximize the performance and lifespan of your industrial equipment while minimizing downtime and operational costs.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Settings className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Improved Equipment Performance</h3>
                    <p className="text-muted-foreground">Enhance operational efficiency and output quality through optimized equipment performance.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Extended Equipment Lifespan</h3>
                    <p className="text-muted-foreground">Maximize the service life of your valuable industrial assets with proper maintenance and timely overhauls.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Safe & Efficient Operation</h3>
                    <p className="text-muted-foreground">Ensure safe working conditions and compliance with industry regulations through properly maintained equipment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reduced Downtime & Costs</h3>
                    <p className="text-muted-foreground">Minimize unexpected breakdowns and costly emergency repairs through scheduled maintenance and overhauling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Services/BFP/Services- BFP replacement.jpg" 
                  alt="BFP Replacement Services" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Services/BFP/Services- BFP replacement-2.jpg" 
                  alt="BFP Replacement Services" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 col-span-2">
                <Image 
                  src="/Web Pics1/Services/BFP/BFP-Overhauling services.jpg" 
                  alt="BFP Overhauling Services" 
                  fill 
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Industries We Serve</h2>
            <p className="section-subtitle">
              Our overhauling services are commonly used across various industrial sectors that rely on complex machinery and equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M22 14v-2a6 6 0 0 0-6-6 4 4 0 0 0-4 4v4" />
                    <path d="M10 6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2" />
                    <path d="M14 22h4a2 2 0 0 0 2-2v-7" />
                    <path d="M10 22H4a2 2 0 0 1-2-2v-4.18" />
                    <path d="M7 10v12" />
                    <path d="M17 10v12" />
                    <path d="M14 10v12" />
                    <path d="M4 10v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Power & Energy</h3>
                <p className="text-muted-foreground">
                  Thermal, gas, and renewable power plants with specialized engineering services designed to enhance operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <path d="M12 12h.01" />
                    <path d="M17 12h.01" />
                    <path d="M7 12h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Cement & Manufacturing</h3>
                <p className="text-muted-foreground">
                  Heavy machinery and industrial equipment in cement plants and manufacturing facilities to improve production.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M5 8h14" />
                    <path d="M5 12h14" />
                    <path d="M10 16h9" />
                    <path d="M2 8c0-2.2 1.8-4 4-4" />
                    <path d="M2 12c0-2.2 1.8-4 4-4" />
                    <path d="M2 16c0-2.2 1.8-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Paper & Pulp</h3>
                <p className="text-muted-foreground">
                  Precision solutions for paper and pulp plant optimization, focusing on machine efficiency and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M2 22c1.25-1.25 2.5-2 4-2s2.75.75 4 2c1.25-1.25 2.5-2 4-2s2.75.75 4 2" />
                    <path d="M18 12H6a4 4 0 0 1 0-8h12a4 4 0 0 1 0 8Z" />
                    <path d="M3 12v-2" />
                    <path d="M21 12v-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Oil & Gas</h3>
                <p className="text-muted-foreground">
                  Reliable components and services for critical oil & gas infrastructure with high safety standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M3 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
                    <path d="M3 10V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
                    <path d="M3 14v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
                    <path d="M3 18v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1" />
                    <rect width="8" height="20" x="15" y="2" rx="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Steel & Metal</h3>
                <p className="text-muted-foreground">
                  Customized solutions for heavy-duty applications in steel and metal industries under extreme conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M9 2v17.6a2 2 0 0 1-.8 1.6L6 22" />
                    <path d="m13 2 3.8 1.6a2 2 0 0 1 1.2 1.8V22" />
                    <path d="M5 17h14" />
                    <path d="M5 12h14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Fertilizers & Chemicals</h3>
                <p className="text-muted-foreground">
                  High-performance industrial equipment maintenance for chemical processing and fertilizer production.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </>
  )
} 