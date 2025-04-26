import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, ArrowUpRight } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata: Metadata = {
  title: "Equipment | Sri Jyothi Engineering Services",
  description: "Specialized equipment and components for power and process industries, engineered for reliability, efficiency, and long service life.",
}

export default function EquipmentPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Specialized <span className="gradient-text">Equipment & Components</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              At Sri Jyothi Engineering Services, we supply, maintain, and refurbish a wide range of high-performance industrial equipment. From turbines and pumps to blowers, bearings, and auxiliaries, our equipment and components are engineered for reliability, efficiency, and long service life.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">
                Request Equipment Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Turbines Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Power Generation
              </div>
              <h2 className="text-3xl font-bold mb-4">Turbines</h2>
              <p className="text-muted-foreground mb-6">
                We supply OEM-grade steam turbine spares to ensure peak reliability and performance during operations and overhauls.
              </p>
              <h3 className="text-xl font-bold mb-3">Key Spares Supplied:</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Turbine blades (HP/IP/LP)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Gland & labyrinth seals</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Journal & thrust bearings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>GV shafts, nozzle rings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Barring gear components</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Special fasteners and couplings</span>
                </li>
              </ul>
              <Button variant="outline" asChild>
                <Link href="/contact" className="group">
                  Inquire About Turbine Spares
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg h-80">
              <Image
                src="/Web Pics1/Services/BFP/BFP-Overhauling services.jpg"
                alt="Turbine Components"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* BFP Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative rounded-xl overflow-hidden shadow-lg h-80">
              <Image
                src="/Web Pics1/Services/BFP/Services-BFP1.jpg"
                alt="Boiler Feed Pumps"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Critical Pump Systems
              </div>
              <h2 className="text-3xl font-bold mb-4">Boiler Feed Pumps (BFP)</h2>
              <p className="text-muted-foreground mb-6">
                Comprehensive spares and services for TDBFPs and MDBFPs, designed to improve pump performance and lifecycle.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Spares Supplied:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Shafts, impellers, wear rings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Balance drums, thrust collar nuts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Journal & thrust bearings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Locknuts, gaskets, O-rings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Carbon bushes, view glasses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Magnetic filters, oil & seal coolers</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Services Offered:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Major overhauling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Cartridge removal & installation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>De-staging & impeller trimming</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Energy saving & performance upgrades</span>
                    </li>
                  </ul>
                </div>
              </div>
              <Button variant="outline" asChild>
                <Link href="/contact" className="group">
                  Learn More About BFP Services
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* More Equipment Grid */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Other Critical Equipment & Spares</h2>
            <p className="text-muted-foreground">
              We provide comprehensive solutions for a wide range of industrial equipment, from supply to maintenance and refurbishment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">BFP Booster Pumps</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold mb-2">Spares Supplied:</h4>
                    <p className="text-sm text-muted-foreground">
                      Casings, diffusers (DE/NDE), shafts, sleeves, wear rings, impellers, journal bearings, bearing housings, discharge bellows
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-2">Services Offered:</h4>
                    <p className="text-sm text-muted-foreground">
                      Booster pump overhauling, diffuser & casing wear-out repairs, energy-saving modifications
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Condensate Extraction Pumps (CEP)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold mb-2">Spares Supplied:</h4>
                    <p className="text-sm text-muted-foreground">
                      Upper/lower shafts, stage sleeves, impellers, wear rings, thrust & guide bearings, oil level indicators, couplings, gaskets, bearing coolers
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-2">Services Offered:</h4>
                    <p className="text-sm text-muted-foreground">
                      Complete overhauls, energy-saving retrofits, de-staging and impeller trimming
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Condenser Vacuum Pumps</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold mb-2">Spares Supplied:</h4>
                    <p className="text-sm text-muted-foreground">
                      First and second stage bodies, brackets, cones, manifolds, gland packs, shafts, rotors, gaskets, shims, bearing housings, couplings
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold mb-2">Services Offered:</h4>
                    <p className="text-sm text-muted-foreground">
                      Major overhauling, cones and casing wear repair, rotor rebalancing and inspection
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">White Metal Bearings & Rebabbitting</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold mb-2">We Offer:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Supply of new white metal bearings</li>
                      <li>• Old babbitt removal and surface prep</li>
                      <li>• Static and centrifugal rebabbitting</li>
                      <li>• Precision machining and finishing</li>
                      <li>• NDT testing and quality assurance</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Coolers & Condensers</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Tube bundles, seal oil coolers, lube oil coolers, BFP, CEP, CW pump & ID fan cooler replacements
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Industrial Fans & Dampers</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      PA, FD, ID, Seal Air Fans, bearing housings, dampers, SADC scales
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">ESP Components</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Electrodes, hammers, bushes, solenoid valves, rapping shafts, fluidizing pads
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Barring Gear Components</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Gears, shafts, springs, couplings, handles and other critical barring gear components
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Pump Systems & Spares</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      CW pumps, VTL pumps, vacuum & slurry pumps, guide bearings, sleeves, shafts, hydraulic and dosing pumps
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Large CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Need Specialized Equipment or Spares?</h2>
                <p className="text-muted-foreground mb-6">
                  Our team of engineers can help you identify the right components and solutions for your industrial equipment needs. Contact us for expert guidance and reliable spares.
                </p>
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Our Equipment Specialists
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative rounded-xl overflow-hidden h-64">
                <Image
                  src="/Web Pics1/Services/BFP/Services-BFP-2.jpg"
                  alt="Industrial Equipment Specialists"
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