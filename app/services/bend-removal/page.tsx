import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, RotateCcw, Gauge, ShieldCheck, Ban } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Bend Removal Services | Sri Jyothi Engineering Services",
  description:
    "Precision shaft and turbine rotor bend removal to restore critical components to their original specifications.",
}

export default function BendRemovalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Precision Restoration
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Bend Removal</span> Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in precision shaft and turbine rotor bend removal, restoring critical components to their original specifications. Through advanced diagnostics, straightening, and verification techniques, we eliminate bends that impact performance, safety, and longevity.
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
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg"
                  alt="Bend Removal Services"
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
            <h2 className="section-title mb-4">Our Bend Removal Process</h2>
            <p className="section-subtitle">
              From initial diagnosis to final verification, our comprehensive process ensures precise correction of shaft and rotor bends.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg"
                  alt="Bend Diagnosis"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center text-white mb-2">
                    <span className="font-bold">1</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">Diagnosis</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Precise measurement and analysis to identify the exact location and magnitude of shaft bends.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg"
                  alt="Engineering Analysis"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center text-white mb-2">
                    <span className="font-bold">2</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">Analysis</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Engineering assessment to determine the optimal correction method based on material properties and bend characteristics.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg"
                  alt="Bend Correction"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center text-white mb-2">
                    <span className="font-bold">3</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">Correction</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Precision straightening using specialized equipment and controlled processes to restore proper alignment.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg"
                  alt="Quality Verification"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-2 left-3">
                  <div className="bg-primary/20 w-8 h-8 rounded-full flex items-center justify-center text-white mb-2">
                    <span className="font-bold">4</span>
                  </div>
                  <h3 className="text-white text-lg font-bold">Verification</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">
                  Comprehensive testing and measurement to confirm alignment is within specifications before return to service.
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
                <h2 className="text-3xl font-bold mb-6">Key Benefits of Our Bend Removal Services</h2>
                <p className="text-muted-foreground mb-8">
                  This service is essential in sectors like power generation, manufacturing, and transportation—where reliability and precision are non-negotiable.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Ban className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Cost Savings</h3>
                    <p className="text-muted-foreground">Avoid the high cost of manufacturing new components by correcting runout issues.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <RotateCcw className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Extended Equipment Life</h3>
                    <p className="text-muted-foreground">Prevent premature wear and delay expensive replacements by restoring proper alignment.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reduced Downtime</h3>
                    <p className="text-muted-foreground">Minimize unplanned outages and maintain operational continuity through effective bend correction.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Improved Reliability</h3>
                    <p className="text-muted-foreground">Ensure safer, smoother, and more dependable machinery operation with properly aligned components.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg" 
                  alt="Shaft Bend Analysis" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg" 
                  alt="Precision Bend Removal" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 col-span-2">
                <Image 
                  src="/Web Pics1/Services/400df5c5-cdf9-4ba9-9350-3d47f0512613.jpg" 
                  alt="Shaft Alignment Verification" 
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
            <h2 className="section-title mb-4">Applications</h2>
            <p className="section-subtitle">
              Our bend removal services are applied across a wide range of critical industrial components
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M12 22a9 9 0 0 0 9-9c0-7-8-10-9-1-1-9-9-6-9 1a9 9 0 0 0 9 9Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Turbine Rotors</h3>
                </div>
                <p className="text-muted-foreground">
                  Precision bend removal for steam, gas, and hydro turbine rotors to ensure balanced rotation and minimal vibration.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M5 9h14M5 15h14" />
                      <path d="M20 6c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2ZM20 18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2v2Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Generator Shafts</h3>
                </div>
                <p className="text-muted-foreground">
                  Correction of bends in large generator shafts to prevent electrical issues and ensure optimal power generation.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M8 20V9a6 6 0 0 1 12 0" />
                      <path d="M4 8v3" />
                      <path d="M4 14v5" />
                      <path d="M4 11c0-3.5 4.5-5 8.5-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Pump Shafts</h3>
                </div>
                <p className="text-muted-foreground">
                  Alignment correction for feed pump, cooling water pump, and process pump shafts to prevent premature seal and bearing failure.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10Zm0 2a8 8 0 1 1-8 8 8 8 0 0 1 8-8Zm0 2v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Industrial Fan Rotors</h3>
                </div>
                <p className="text-muted-foreground">
                  Straightening of large industrial fan shafts and rotors for improved efficiency and reduced vibration issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M10 2v4" />
                      <path d="M14 2v4" />
                      <path d="M12 15c.6 0 1 .4 1 1v1a3 3 0 0 1-6 0v-1c0-.6.4-1 1-1h4Z" />
                      <path d="M13 11.5V10c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v1.5c0 .6.4 1 1 1h4c.6 0 1-.4 1-1Z" />
                      <path d="M16 6h2c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Compressor Shafts</h3>
                </div>
                <p className="text-muted-foreground">
                  Precision correction of air and gas compressor shafts to ensure proper clearances and prevent operational issues.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Drive Shafts</h3>
                </div>
                <p className="text-muted-foreground">
                  Alignment correction for critical drive shafts in manufacturing equipment and heavy machinery applications.
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