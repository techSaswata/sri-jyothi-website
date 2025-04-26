import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Droplet, ShieldCheck, Wrench, Gauge } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Fire Fighting Pumps | Sri Jyothi Engineering Services",
  description:
    "Comprehensive supply, installation, and maintenance services for industrial fire fighting pumps, ensuring reliable fire safety systems.",
}

export default function FireFightingPumpsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Safety Systems
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Fire Fighting Pumps</span> Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Complete solutions for industrial fire fighting pump systems—from supply and installation to maintenance and repairs for reliable fire safety infrastructure.
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
                  src="/images/service3.jpg"
                  alt="Fire Fighting Pumps Services"
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
              Our fire fighting pump services cater to diverse industrial fire protection needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/images/service4.jpg"
                  alt="Industrial Fire Protection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Industrial Fire Protection</h3>
                <p className="text-white/80 text-sm">Complete fire safety systems for manufacturing facilities</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/images/service5.jpg"
                  alt="Power Plant Safety Systems"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Power Plant Safety Systems</h3>
                <p className="text-white/80 text-sm">Specialized fire suppression for power generation facilities</p>
              </div>
            </div>

            <div className="relative rounded-xl overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/images/spares1.jpg"
                  alt="Critical Infrastructure Protection"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Critical Infrastructure Protection</h3>
                <p className="text-white/80 text-sm">Reliable systems for essential facilities and infrastructure</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Fire Pump Services</h2>
              <p className="text-muted-foreground mb-8">
                We provide comprehensive solutions for industrial fire fighting pump systems to ensure your facility's safety infrastructure operates reliably.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Supply & Installation</h3>
                    <p className="text-muted-foreground">Complete supply, installation, and commissioning of new fire pump systems</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Maintenance & Testing</h3>
                    <p className="text-muted-foreground">Regular maintenance and performance testing to ensure operational readiness</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Repairs & Overhauling</h3>
                    <p className="text-muted-foreground">Expert repair and complete overhaul services for all types of fire pumps</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Spare Parts Supply</h3>
                    <p className="text-muted-foreground">OEM and high-quality alternative spare parts for all major fire pump brands</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-64">
                <Image 
                  src="/images/service4.jpg" 
                  alt="Fire Pump Installation" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64">
                <Image 
                  src="/images/spares2.jpg" 
                  alt="Fire Pump Maintenance" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-64 col-span-2">
                <Image 
                  src="/images/service5.jpg" 
                  alt="Fire Safety System" 
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pump Types Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Fire Pump Types We Service</h2>
            <p className="text-muted-foreground">
              We provide solutions for all major types of fire fighting pumps used in industrial applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Centrifugal Fire Pumps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Horizontal and vertical split case</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>End suction and inline configurations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>High-pressure multistage options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Vertical Turbine Pumps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Deep well and short-set designs</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Lineshaft and submersible configurations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Single and multi-stage options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Jockey Pumps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Pressure maintenance pumps</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Vertical and horizontal configurations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Electric motor driven options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Diesel Engine Pumps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>UL/FM approved diesel engine systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Battery and cooling system maintenance</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Complete control panel servicing</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Package Fire Pump Systems</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Pre-assembled fire pump packages</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Skid-mounted pump, driver, controller</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Combined electric and diesel systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Foam Pump Systems</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Balanced pressure foam proportioning</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Fixed and portable foam systems</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>Industrial foam concentrate supply</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Key Benefits</h2>
            <p className="section-subtitle">
              Why choose our fire fighting pump services for your facility
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Safety Compliance</h3>
                <p className="text-muted-foreground">
                  All services meet or exceed NFPA 20, 25 and other relevant fire safety standards
                </p>
              </div>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Expert Technicians</h3>
                <p className="text-muted-foreground">
                  Factory-trained technicians with specialized fire safety system certification
                </p>
              </div>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <Gauge className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Performance Testing</h3>
                <p className="text-muted-foreground">
                  Comprehensive flow testing and performance verification for all pump systems
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Ensure Your Fire Safety</h2>
                <p className="text-muted-foreground mb-6">
                  Don't compromise on fire protection. Contact us today to discuss your industrial fire fighting pump needs and ensure your facility has reliable fire safety infrastructure.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative rounded-xl overflow-hidden h-64">
                <Image
                  src="/images/service3.jpg"
                  alt="Industrial Fire Protection"
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