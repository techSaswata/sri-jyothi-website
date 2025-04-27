import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ArrowUpRight } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Equipment | Sri Jyothi Engineering Services",
  description: "Specialized Equipment & Components for Power and Process Industries - Turbines, Pumps, Bearings and more from Sri Jyothi Engineering Services.",
}

export default function EquipmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
              Industrial Excellence
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Specialized <span className="gradient-text">Equipment</span> & Components
            </h1>
            <p className="text-lg text-muted-foreground">
              At Sri Jyothi Engineering Services, we supply, maintain, and refurbish a wide range of high-performance industrial equipment. From turbines and pumps to blowers, bearings, and auxiliaries, our equipment and components are engineered for reliability, efficiency, and long service life.
            </p>
          </div>
        </div>
      </section>

      {/* Turbines Section */}
      <section className="py-16 bg-background" id="turbines">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start gap-12 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">⚙️ Turbines</h2>
              <p className="text-lg mb-6">
                We supply OEM-grade steam turbine spares to ensure peak reliability and performance during operations and overhauls.
              </p>
              <div className="space-y-2 mb-8">
                <h3 className="text-xl font-bold">Key Spares Supplied:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>Turbine blades (HP/IP/LP)</li>
                  <li>Gland & labyrinth seals</li>
                  <li>Journal & thrust bearings</li>
                  <li>GV shafts, nozzle rings</li>
                  <li>Barring gear components</li>
                  <li>Special fasteners and couplings</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/Turbine Moving Blades.jpg" 
                  alt="Turbine Blades" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/Turbine seals.jpg" 
                  alt="Turbine Seals" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/GV shafts.jpg" 
                  alt="GV Shafts" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/Turbine Special Bolts and cap nuts.jpg" 
                  alt="Special Bolts" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BFP Section */}
      <section className="py-16 bg-gradient-secondary" id="bfp">
        <div className="container">
          <div className="flex flex-col md:flex-row-reverse items-start gap-12 mb-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">🚰 Boiler Feed Pumps (BFP)</h2>
              <p className="text-lg mb-6">
                Comprehensive spares and services for TDBFPs and MDBFPs, designed to improve pump performance and lifecycle.
              </p>
              <div className="space-y-2 mb-6">
                <h3 className="text-xl font-bold">Spares Supplied:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>Shafts, impellers, wear rings</li>
                  <li>Balance drums, thrust collar nuts</li>
                  <li>Journal & thrust bearings</li>
                  <li>Locknuts, gaskets, O-rings</li>
                  <li>Carbon bushes, view glasses</li>
                  <li>Magnetic filters, oil & seal coolers</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Services Offered:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>Major overhauling</li>
                  <li>Cartridge removal & installation</li>
                  <li>De-staging & impeller trimming</li>
                  <li>Energy saving & performance upgrades</li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/Balance drum.jpg" 
                  alt="Balance Drum" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/BFP-wearings-1.jpg" 
                  alt="BFP Wearings" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 col-span-2 relative">
                <Image 
                  src="/Web Pics1/Equipment/BFP-Shaft-cylindrical grinding.jpg" 
                  alt="BFP Shaft Grinding" 
                  fill 
                  className="object-cover"
                  sizes="100vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booster Pumps & CEP */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Booster Pumps */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">🔄 BFP Booster Pumps</h2>
              <p className="text-lg">
                Reliable support for booster pump spares and refurbishment.
              </p>
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative mb-6">
                <Image 
                  src="/Web Pics1/Equipment/Booster pump casing pattern.jpg" 
                  alt="Booster Pump Casing" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Spares Supplied:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>Casings, diffusers (DE/NDE)</li>
                  <li>Shafts, sleeves, wear rings</li>
                  <li>Impellers, journal bearings</li>
                  <li>Bearing housings, discharge bellows</li>
                </ul>
              </div>
            </div>

            {/* CEP */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">💧 Condensate Extraction Pumps (CEP)</h2>
              <p className="text-lg">
                High-quality CEP spares with full mechanical and hydraulic support.
              </p>
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative mb-6">
                <Image 
                  src="/Web Pics1/Equipment/CEP-Thrust pads cover.jpg" 
                  alt="CEP Thrust Pads" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Spares Supplied:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>Upper/lower shafts, stage sleeves</li>
                  <li>Impellers, wear rings</li>
                  <li>Thrust & guide bearings</li>
                  <li>Oil level indicators, couplings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vacuum Pumps & White Metal Bearings */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Vacuum Pumps */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">🌀 Condenser Vacuum Pumps</h2>
              <p className="text-lg">
                Precision spares and service support for vacuum pump units.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="rounded-xl overflow-hidden shadow-md h-48 relative">
                  <Image 
                    src="/Web Pics1/Equipment/vacuum pump and booster pump casing.jpg" 
                    alt="Vacuum Pump Casing" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-md h-48 relative">
                  <Image 
                    src="/Web Pics1/Equipment/Vacuum pump services-1.jpg" 
                    alt="Vacuum Pump Services" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 25vw"
                    priority
                  />
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Spares Supplied:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>First and second stage bodies</li>
                  <li>Brackets, cones, manifolds</li>
                  <li>Gland packs, shafts, rotors</li>
                  <li>Gaskets, shims, bearing housings</li>
                </ul>
              </div>
            </div>

            {/* White Metal Bearings */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">⚪ White Metal Bearings & Rebabbitting</h2>
              <p className="text-lg">
                Extend the life of bearings with our rebabbitting and precision finishing services.
              </p>
              <div className="rounded-xl overflow-hidden shadow-md h-48 relative mb-6">
                <Image 
                  src="/Web Pics1/Equipment/Journal Bearings.jpg" 
                  alt="Journal Bearings" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">We Offer:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4 text-muted-foreground">
                  <li>Supply of new white metal bearings</li>
                  <li>Old babbitt removal and surface prep</li>
                  <li>Static and centrifugal rebabbitting</li>
                  <li>Precision machining and finishing</li>
                  <li>NDT testing and quality assurance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Equipment Gallery */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">🔧 Other Critical Equipment & Spares</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our comprehensive range includes components for coolers, condensers, industrial fans, ESP systems, barring gear, pump systems, and more.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/Oil coolers.jpg" 
                alt="Oil Coolers" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/filters.jpg" 
                alt="Filters" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/Impellers.jpg" 
                alt="Impellers" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/Tuffen glass.jpg" 
                alt="Tuffen Glass" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/piston rings.jpg" 
                alt="Piston Rings" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/Vacuum pump services-3.jpg" 
                alt="Vacuum Pump Services" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/Special bolts.jpg" 
                alt="Special Bolts" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md aspect-square relative">
              <Image 
                src="/Web Pics1/Equipment/Basket strainer.jpg" 
                alt="Basket Strainer" 
                fill 
                className="object-cover transition-transform hover:scale-105 duration-300"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Need Custom Equipment Solutions?</h2>
              <p className="text-muted-foreground mb-8">
                Contact us today to discuss your specific requirements for equipment spares, repairs, or maintenance services.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Standard CTA Section */}
      {/* <CtaSection /> */}
    </>
  )
} 