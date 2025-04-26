import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Zap, Gauge, LineChart, Lightbulb } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Energy Saving Services | Sri Jyothi Engineering Services",
  description:
    "Expert energy efficiency consultancy tailored for power plants aiming to reduce fuel consumption and optimize performance.",
}

export default function EnergySolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Optimize Performance
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Energy <span className="gradient-text">Saving Services</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Expert energy efficiency consultancy to reduce fuel consumption and optimize plant performance through targeted upgrades and modernization.
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
                  src="/Web Pics1/Equipment/Tuffen glass.jpg"
                  alt="Energy Saving Services"
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

      {/* Image Gallery */}
      <section className="py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Our Energy Solutions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden h-64">
              <Image 
                src="/Web Pics1/Equipment/Oil coolers.jpg" 
                alt="Oil Coolers Optimization" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <Image 
                src="/Web Pics1/Equipment/Vacuum pump Overhauling.jpg" 
                alt="Vacuum System Efficiency" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <Image 
                src="/Web Pics1/Equipment/BFP-Shaft-cylindrical grinding.jpg" 
                alt="Pump Efficiency Improvement" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:col-span-3">
              <Image 
                src="/Web Pics1/Equipment/Turbine seals.jpg" 
                alt="Turbine Performance Enhancement" 
                width={1200} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Energy Efficiency Approach</h2>
            <p className="text-muted-foreground">
              We identify improvement opportunities through detailed site audits and system evaluations
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative rounded-lg overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/Web Pics1/Equipment/Basket strainer.jpg"
                  alt="Site Audit"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Site Audits</h3>
                <p className="text-white/80 text-sm">Comprehensive assessment of energy losses</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/Web Pics1/Equipment/Journal Bearings.jpg"
                  alt="Data Analysis"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Data Analysis</h3>
                <p className="text-white/80 text-sm">Advanced operational data analysis</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/Web Pics1/Equipment/Turbine Special Bolts and cap nuts.jpg"
                  alt="System Evaluation"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">System Evaluation</h3>
                <p className="text-white/80 text-sm">Assessment of key systems and equipment</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group">
              <div className="aspect-[4/3]">
                <Image
                  src="/Web Pics1/Equipment/CEP-Thrust pads cover.jpg"
                  alt="Solution Implementation"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Implementation</h3>
                <p className="text-white/80 text-sm">Expert implementation of solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div>
                <h2 className="text-3xl font-bold mb-6">Benefits of Our Energy Saving Services</h2>
                <p className="text-muted-foreground mb-8">
                  Our solutions deliver measurable improvements across your operations, reducing costs while boosting performance.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Reduced Fuel Consumption</h3>
                    <p className="text-muted-foreground">Optimize fuel usage to lower operating costs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Gauge className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Improved Plant Performance</h3>
                    <p className="text-muted-foreground">Boost output, efficiency, and reliability</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <LineChart className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Lower Emissions</h3>
                    <p className="text-muted-foreground">Reduce environmental impact and improve compliance</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Extended Equipment Life</h3>
                    <p className="text-muted-foreground">Optimize operations to reduce wear and tear</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Equipment/filters.jpg" 
                  alt="Energy Efficiency Analysis" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64">
                <Image 
                  src="/Web Pics1/Equipment/sleeves inspection.jpg" 
                  alt="System Optimization" 
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 col-span-2">
                <Image 
                  src="/Web Pics1/Equipment/Balance drum.jpg" 
                  alt="Plant Performance Improvement" 
                  width={800}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Focus Areas</h2>
            <p className="text-muted-foreground">
              Our energy saving consultancy identifies improvement opportunities across these critical systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="relative rounded-lg overflow-hidden group h-64">
              <Image 
                src="/Web Pics1/Equipment/Self lubricated guide bearings.jpg"
                alt="Fuel Systems" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Fuel Systems</h3>
                <p className="text-white/80 text-sm">Optimizing delivery and combustion</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-64">
              <Image 
                src="/Web Pics1/Equipment/Turbine Moving Blades.jpg"
                alt="Engine Performance" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Engine Performance</h3>
                <p className="text-white/80 text-sm">Enhancing output while reducing consumption</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-64">
              <Image 
                src="/Web Pics1/Equipment/Vacuum pump services-4.jpg"
                alt="Boiler Condition" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Boiler Condition</h3>
                <p className="text-white/80 text-sm">Enhancing thermal efficiency</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-64">
              <Image 
                src="/Web Pics1/Equipment/Tube sheet.jpg"
                alt="Cooling Systems" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Cooling Systems</h3>
                <p className="text-white/80 text-sm">Optimizing cooling towers and exchangers</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-64">
              <Image 
                src="/Web Pics1/Equipment/ERT devices.jpg"
                alt="Auxiliary Systems" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Auxiliary Systems</h3>
                <p className="text-white/80 text-sm">Reducing parasitic loads</p>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-64">
              <Image 
                src="/Web Pics1/Equipment/PA Fan Bearing housing.jpg"
                alt="Overall Plant Operation" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-bold">Overall Plant Operation</h3>
                <p className="text-white/80 text-sm">Holistic assessment of operations</p>
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