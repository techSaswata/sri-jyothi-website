import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ScanLine, Ruler, RefreshCw, Box } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "3D Scanning Services | Sri Jyothi Engineering Services",
  description:
    "Precision 3D scanning and drawing development for accurate reverse engineering of mechanical components and spare parts.",
}

export default function ThreeDScanningPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Precision Scanning
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">3D Scanning</span> Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Accurate digital models and technical drawings of existing components—ideal for spare parts reproduction, even for damaged or aged components.
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
                  src="/Web Pics1/Services/3D scan/3D scan-1.jpg"
                  alt="3D Scanning Services"
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

      {/* Applications Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Applications</h2>
            <p className="text-muted-foreground">
              Our 3D scanning services provide solutions for a wide range of industrial needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/Web Pics1/Equipment/BFP-wearings-1.jpg"
                  alt="Reverse Engineering"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Reverse Engineering</h3>
                <p className="text-white/80 text-sm">Recreate components without original drawings</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/Web Pics1/Equipment/Turbine Moving Blades.jpg"
                  alt="Legacy Part Reproduction"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Legacy Part Reproduction</h3>
                <p className="text-white/80 text-sm">Replicate obsolete or unavailable components</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/Web Pics1/Equipment/impellers.jpg"
                  alt="Quality Control"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Quality Control</h3>
                <p className="text-white/80 text-sm">Verify dimensions and tolerances with high precision</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our 3D Scanning Process</h2>
              <p className="text-muted-foreground mb-8">
                We employ a systematic approach to capture accurate digital replicas of your components.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Component Analysis</h3>
                    <p className="text-muted-foreground">Assessment of the part's condition, material, and critical features</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">High-Resolution Scanning</h3>
                    <p className="text-muted-foreground">Precision scanning using industrial-grade equipment to capture detailed geometry</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">3D Model Creation</h3>
                    <p className="text-muted-foreground">Development of accurate digital models including precise dimensions and tolerances</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Production Documentation</h3>
                    <p className="text-muted-foreground">Creation of detailed manufacturing drawings with all necessary specifications</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64">
                <Image 
                  src="/Web Pics1/Services/3D scan/3D scan-2.jpg" 
                  alt="3D Scanning Process" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <Image 
                  src="/Web Pics1/Equipment/VTL pump impellers, deffusers and shaft assembly.jpeg" 
                  alt="Reverse Engineering" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 col-span-2">
                <Image 
                  src="/Web Pics1/Services/3D scan/3D scan-2 (2).jpg" 
                  alt="3D Model Creation" 
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Key Benefits</h2>
            <p className="section-subtitle">
              Why choose our 3D scanning services for your spare parts development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <ScanLine className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">High Precision</h3>
                <p className="text-muted-foreground">
                  Capture exact dimensions with accuracy down to 0.1mm, ensuring perfect fit and function
                </p>
              </div>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <RefreshCw className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Rapid Turnaround</h3>
                <p className="text-muted-foreground">
                  Quick digitization and modeling process to minimize your equipment downtime
                </p>
              </div>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <Box className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Design Flexibility</h3>
                <p className="text-muted-foreground">
                  Opportunity to enhance original designs or adapt materials for improved performance
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Recent Projects</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image 
                src="/Web Pics1/Equipment/Turbine seals.jpg" 
                alt="Turbine Seals Project" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image 
                src="/Web Pics1/Equipment/Journal Bearings.jpg" 
                alt="Journal Bearings Project" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image 
                src="/Web Pics1/Equipment/Guide bearings.jpg" 
                alt="Guide Bearings Project" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden aspect-square">
              <Image 
                src="/Web Pics1/Equipment/BFP-wearings-2.jpg" 
                alt="BFP Wearings Project" 
                width={300} 
                height={300} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need Parts Digitized?</h2>
                <p className="text-muted-foreground mb-6">
                  Whether you need to reproduce existing parts, modify designs, or document legacy components, our 3D scanning services can help.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Get Started Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative rounded-xl overflow-hidden h-64">
                <Image
                  src="/Web Pics1/Equipment/Impellers and bushes.jpg"
                  alt="Industrial Equipment Scanning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Standard CTA Section */}
      <CtaSection />
    </>
  )
} 