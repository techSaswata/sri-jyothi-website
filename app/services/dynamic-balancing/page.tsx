import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Scale, ActivitySquare, Clock, Shield } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Dynamic Balancing Services | Sri Jyothi Engineering Services",
  description:
    "Precision dynamic balancing services to improve the performance, reliability, and safety of rotating equipment.",
}

export default function DynamicBalancingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Precision Engineering
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                <span className="gradient-text">Dynamic Balancing</span> Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We identify and correct imbalances in rotating equipment for smoother operation, reduced wear, and improved efficiency.
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
                  src="/Web Pics1/Equipment/Turbine Moving Blades.jpg"
                  alt="Dynamic Balancing Services"
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
          <h2 className="text-3xl font-bold text-center mb-12">Our Balancing Solutions</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden h-64">
              <Image 
                src="/Web Pics1/Equipment/VTL pump impellers, deffusers and shaft assembly.jpeg" 
                alt="Pump Impellers Balancing" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <Image 
                src="/Web Pics1/Equipment/PA fan bearing housing machining.jpg" 
                alt="Fan Balancing" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64">
              <Image 
                src="/Web Pics1/Equipment/Impellers.jpg" 
                alt="Impeller Balancing" 
                width={400} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-64 md:col-span-3">
              <Image 
                src="/Web Pics1/Equipment/Thrust Bearing Housing Turning Gear(1).jpeg" 
                alt="Precision Balancing Equipment" 
                width={1200} 
                height={400} 
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Benefits</h2>
            <p className="text-muted-foreground">
              Our dynamic balancing services provide critical advantages for rotating equipment across multiple industries
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <ActivitySquare className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Reduced Vibration</h3>
                <p className="text-muted-foreground">
                  Promotes smoother operation and minimizes wear on critical components like bearings, seals, and shafts
                </p>
              </div>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Extended Equipment Life</h3>
                <p className="text-muted-foreground">
                  Lowers mechanical stress, helping reduce downtime and maintenance costs over the equipment lifecycle
                </p>
              </div>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-gray-800">
              <div className="p-6 flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary w-16 h-16 flex items-center justify-center">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">Improved Performance</h3>
                <p className="text-muted-foreground">
                  Increases operational efficiency by achieving precise rotational balance and optimizing equipment function
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Dynamic Balancing Process</h2>
              <p className="text-muted-foreground mb-8">
                We employ a systematic approach to identify and correct imbalances in your rotating equipment
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Initial Assessment</h3>
                    <p className="text-muted-foreground">Comprehensive evaluation to determine baseline vibration levels</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Vibration Analysis</h3>
                    <p className="text-muted-foreground">Advanced measurements to pinpoint the exact source and nature of imbalance</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Precision Balancing</h3>
                    <p className="text-muted-foreground">Calculated weight addition or removal to achieve optimum balance</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 text-primary rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Verification Testing</h3>
                    <p className="text-muted-foreground">Final measurements to confirm proper balancing within industry standards</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/Web Pics1/Equipment/IMG-20240418-WA0007.jpg"
                  alt="Dynamic Balancing Process"
                  width={600}
                  height={800}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment We Balance Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Equipment We Balance</h2>
            <p className="text-muted-foreground">
              Our dynamic balancing services cover a wide range of industrial rotating equipment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/Journal Bearings.jpg"
                alt="Turbine Rotors" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Turbine Rotors</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/Vacuum pump services-3.jpg"
                alt="Generator Rotors" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Generator Rotors</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/Impellers and bushes.jpg"
                alt="Pump Impellers" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Pump Impellers</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/PA Fan Bearing housing.jpg"
                alt="Industrial Fans" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Industrial Fans</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/vacuum pump and booster pump casing.jpg"
                alt="Compressor Rotors" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Compressor Rotors</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/Vacuum pump services-1.jpg"
                alt="Flywheels" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Flywheels</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/Vacuum pump services-2.jpg"
                alt="Blower Wheels" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Blower Wheels</h3>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group h-48">
              <Image 
                src="/Web Pics1/Equipment/CEP-Shafts.jpg"
                alt="Drive Shafts" 
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white text-lg font-bold">Drive Shafts</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA with Image */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-0">
              <Image
                src="/Web Pics1/Equipment/BFP-wearings-4.jpg"
                alt="Dynamic Balancing Services"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
            </div>
            
            <div className="relative z-10 p-12 md:p-16 max-w-2xl text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ensure optimal performance of your critical rotating equipment</h2>
              <p className="text-lg text-white/80 mb-8">
                Our dynamic balancing services help extend equipment life, reduce maintenance costs, and improve operational efficiency.
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/contact">
                  Schedule Your Service
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