import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Sparkles, Gauge, Zap, Shield } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "EDM Services | Sri Jyothi Engineering Services",
  description:
    "High-precision Electrical Discharge Machining for intricate shapes and fine details in hard materials.",
}

export default function EDMServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Precision Machining
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">EDM</span> Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We provide high-precision EDM (Electrical Discharge Machining) services—also known as Spark Erosion, Spark Machining, Wire Erosion, and Die Sinking—to produce intricate shapes and fine details in hard materials.
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
                  src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg"
                  alt="EDM Services"
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

      {/* EDM Types Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our EDM Capabilities</h2>
            <p className="section-subtitle">
              This advanced manufacturing process uses controlled electrical discharges to remove material with exceptional accuracy, working to tolerances as tight as 0.1 microns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg"
                  alt="Wire EDM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="text-white text-lg font-bold">Wire EDM</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Uses a thin wire as an electrode to cut through metal with extreme precision, ideal for complex profiles and intricate shapes.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg"
                  alt="Die Sinking EDM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="text-white text-lg font-bold">Die Sinking EDM</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Creates precise cavities by replicating the shape of the electrode into the workpiece, perfect for molds, dies, and complex 3D shapes.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg"
                  alt="Hole Drilling EDM"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <h3 className="text-white text-lg font-bold">Hole Drilling EDM</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Specialized for creating precise, small-diameter holes in materials that are difficult to machine by conventional methods.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl font-bold mb-6">Advantages of EDM Services</h2>
                <p className="text-muted-foreground mb-8">
                  EDM offers unique capabilities that conventional machining methods cannot achieve, making it ideal for complex components and hard-to-machine materials.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Exceptional Precision</h3>
                    <p className="text-muted-foreground">Achieve tolerances as tight as 0.1 microns with superior surface finish quality.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Complex Geometries</h3>
                    <p className="text-muted-foreground">Create intricate shapes, sharp internal corners, and complex 3D features not possible with conventional machining.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Hard Materials</h3>
                    <p className="text-muted-foreground">Process hardened steels, carbides, titanium, and other difficult-to-machine materials with ease.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Stress-Free Machining</h3>
                    <p className="text-muted-foreground">No mechanical contact means no cutting forces, allowing for delicate, thin-walled parts without distortion.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg" 
                  alt="EDM Process" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg" 
                  alt="EDM Components" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 col-span-2">
                <Image 
                  src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg" 
                  alt="EDM Machining Equipment" 
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">EDM Applications</h2>
            <p className="section-subtitle">
              Our EDM services are ideal for a wide range of precision components across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <rect width="8" height="8" x="2" y="2" rx="2" />
                    <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
                    <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
                    <path d="M2 14c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
                    <path d="M2 20c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2" />
                    <path d="M14 14a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Molds & Dies</h3>
                <p className="text-muted-foreground">
                  Precision tooling for injection molding, stamping dies, and forming tools with complex geometries.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="m9 9-2 2" />
                    <path d="m13 13-2 2" />
                    <path d="m17 17-2 2" />
                    <path d="M21 21H3" />
                    <path d="M21 18H3" />
                    <path d="M21 15H3" />
                    <path d="M21 12H3" />
                    <path d="M21 9H3" />
                    <path d="M21 6H3" />
                    <path d="M21 3H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Small Components</h3>
                <p className="text-muted-foreground">
                  Intricate parts for aerospace, medical devices, electronics, and precision mechanical assemblies.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M12 2c-1.4 0-2 .6-2 2 0 .4 0 .6.5 1.5.5.8.5 1 .5 1.5 0 .6-.4 1-1 1a1 1 0 0 1-1-1c0-.5 0-.7.5-1.5.5-.8.5-1 .5-1.5 0-1.4-.6-2-2-2-1.4 0-2 .6-2 2 0 .4 0 .6.5 1.5.5.8.5 1 .5 1.5 0 .6-.4 1-1 1a1 1 0 0 1-1-1c0-.5 0-.7.5-1.5.5-.8.5-1 .5-1.5 0-1.4-.6-2-2-2s-2 .6-2 2c0 .4 0 .6.5 1.5.5.8.5 1 .5 1.5" />
                    <path d="m18 12 4-6" />
                    <path d="m14 18-2 4" />
                    <path d="M7 6 6 7" />
                    <path d="m17 6 1 1" />
                    <path d="m12 20 1 2" />
                    <path d="M3 12h4" />
                    <path d="M8 18h4" />
                    <path d="M18 8h1" />
                    <path d="M21 12h1" />
                    <path d="M21 2c-1.4 0-2 .6-2 2 0 .4 0 .6.5 1.5.5.8.5 1 .5 1.5 0 .6-.4 1-1 1a1 1 0 0 1-1-1c0-.5 0-.7.5-1.5.5-.8.5-1 .5-1.5 0-1.4-.6-2-2-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Prototyping</h3>
                <p className="text-muted-foreground">
                  Rapid development of prototype parts with complex features without the need for special tooling.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <circle cx="12" cy="15" r="4" />
                    <line x1="12" y1="15" x2="12" y2="15.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Precision Repair</h3>
                <p className="text-muted-foreground">
                  Repair of high-value components by precisely removing damaged areas without affecting surrounding material.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
                    <path d="m3 21 1.9-5.7a8.5 8.5 0 0 1-.9-3.8 8.5 8.5 0 0 1 16-4" />
                    <path d="m16 3 5 5" />
                    <path d="M21 3v5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Microelectronics</h3>
                <p className="text-muted-foreground">
                  Ultra-fine feature creation for semiconductor tooling, electronic components, and microfluidic devices.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
                    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                    <path d="M3 16c0 2 2 3 5 3s5-1 5-3-2-3-5-3-5 1-5 3Z" />
                    <path d="M16 19c0-2 2-3 5-3" />
                    <path d="M3 9v7" />
                    <path d="M13 9v7" />
                    <path d="M21 16v3" />
                    <path d="M13 9a3 3 0 0 0 6 0" />
                    <path d="M19 9a3 3 0 0 0-6 0" />
                    <circle cx="6" cy="9" r="3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Power Industry</h3>
                <p className="text-muted-foreground">
                  Specialized components for turbines, generators, and other critical power generation equipment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA with Highlight */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg"
                alt="EDM Precision Machining"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            </div>
            
            <div className="relative z-10 p-12 md:p-16 max-w-2xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Expert precision for your most challenging projects</h2>
              <p className="text-lg text-white/80 mb-8">
                From complex geometries to hard materials, our EDM services deliver unmatched precision for your most demanding applications.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standard CTA Section */}
      <CtaSection />
    </>
  )
} 