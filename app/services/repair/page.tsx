import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Settings, PenToolIcon as Tool, Clock, Award } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Repair Services | Sri Jyothi Engineering Services",
  description:
    "Expert repair services for all types of industrial machinery and equipment to minimize downtime and maximize productivity.",
}

export default function RepairServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Engineering Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Expert <span className="gradient-text">Repair Services</span> for Industrial Equipment
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We provide comprehensive repair services for all types of industrial machinery and equipment, helping
                you minimize downtime and maximize productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Repair Service
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
                  src="/placeholder.svg?height=600&width=800"
                  alt="Industrial Equipment Repair"
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

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Repair Services</h2>
            <p className="section-subtitle">
              We offer a wide range of repair services for various types of industrial equipment and machinery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Settings className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Mechanical Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  Comprehensive repair services for mechanical components of industrial machinery, including gearboxes,
                  pumps, compressors, and more.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Gearbox repair and rebuilding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Pump and compressor overhaul</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Bearing replacement and alignment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Shaft repair and manufacturing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Tool className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Electrical Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  Expert repair services for electrical systems and components of industrial equipment, ensuring safe
                  and reliable operation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Motor repair and rewinding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Control panel troubleshooting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Generator repair and maintenance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Electrical system upgrades</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Emergency Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  Rapid response emergency repair services to minimize downtime and get your equipment back in operation
                  as quickly as possible.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">24/7 emergency response</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">On-site troubleshooting</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Temporary solutions for critical equipment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Rapid parts procurement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Precision Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  High-precision repair services for critical components requiring exact specifications and tolerances.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">CNC machining and repair</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Laser alignment services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Precision balancing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Metrology and quality control</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Settings className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hydraulic & Pneumatic Repairs</h3>
                <p className="text-muted-foreground mb-4">
                  Specialized repair services for hydraulic and pneumatic systems and components used in industrial
                  applications.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Hydraulic cylinder repair</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Valve repair and testing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Pump and motor rebuilding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">System troubleshooting and repair</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Tool className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Welding & Fabrication</h3>
                <p className="text-muted-foreground mb-4">
                  Professional welding and fabrication services for repair, modification, and reinforcement of
                  industrial equipment and structures.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">TIG, MIG, and stick welding</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Custom fabrication for repairs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Structural reinforcement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Weld inspection and testing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Equipment Types Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Equipment We Repair</h2>
            <p className="section-subtitle">
              Our repair services cover a wide range of industrial equipment and machinery across various industries.
            </p>
          </div>

          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="power">Power Generation</TabsTrigger>
              <TabsTrigger value="oil-gas">Oil & Gas</TabsTrigger>
              <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
            </TabsList>

            <TabsContent value="manufacturing" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Manufacturing Equipment</h3>
                  <p className="text-muted-foreground mb-6">
                    We provide repair services for a wide range of manufacturing equipment, helping you maintain
                    productivity and minimize downtime.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>CNC machines and lathes</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Industrial robots</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Conveyor systems</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Packaging equipment</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hydraulic presses</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Injection molding machines</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Industrial furnaces</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Material handling equipment</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Repair Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Manufacturing Equipment Repair"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="power" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Power Generation Equipment</h3>
                  <p className="text-muted-foreground mb-6">
                    Our specialized repair services for power generation equipment ensure reliable and efficient
                    operation of your power plant.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Steam turbines</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Gas turbines</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Generators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Boilers and heat exchangers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pumps and compressors</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Control systems</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Transformers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Cooling towers</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Repair Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Power Generation Equipment Repair"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="oil-gas" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Oil & Gas Equipment</h3>
                  <p className="text-muted-foreground mb-6">
                    We provide specialized repair services for oil and gas equipment, ensuring safety, reliability, and
                    compliance with industry standards.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pumps and compressors</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Valves and actuators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Heat exchangers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pressure vessels</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pipeline equipment</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Separators and filters</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Storage tanks</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Control systems</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Repair Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Oil & Gas Equipment Repair"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Infrastructure Equipment</h3>
                  <p className="text-muted-foreground mb-6">
                    Our repair services for infrastructure equipment help maintain the safety, reliability, and
                    efficiency of public facilities and utilities.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>HVAC systems</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Water treatment equipment</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Elevators and escalators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Backup generators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Electrical distribution systems</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pumping stations</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Bridge mechanisms</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Security systems</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Repair Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Infrastructure Equipment Repair"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Repair Process Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Repair Process</h2>
            <p className="section-subtitle">
              We follow a structured approach to ensure efficient and effective repair of your equipment.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2 z-0"></div>

            <div className="grid md:grid-cols-5 gap-8">
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Diagnosis</h3>
                <p className="text-muted-foreground">
                  We conduct a thorough assessment to identify the root cause of the equipment failure.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Quotation</h3>
                <p className="text-muted-foreground">
                  We provide a detailed quote outlining the repair scope, parts required, and estimated timeline.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Repair</h3>
                <p className="text-muted-foreground">
                  Our skilled technicians perform the repair using quality parts and following industry standards.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Testing</h3>
                <p className="text-muted-foreground">
                  We conduct comprehensive testing to ensure the repaired equipment meets performance specifications.
                </p>
              </div>

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Delivery</h3>
                <p className="text-muted-foreground">
                  We deliver the repaired equipment with a warranty and documentation of the work performed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Why Choose Our Repair Services</h2>
            <p className="section-subtitle">
              What sets our repair services apart from the competition and makes us the preferred choice for industrial
              equipment repair.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Technicians</h3>
                <p className="text-muted-foreground">
                  Our repair team consists of highly skilled and certified technicians with extensive experience in
                  repairing various types of industrial equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quick Turnaround</h3>
                <p className="text-muted-foreground">
                  We understand the impact of equipment downtime on your operations and strive to complete repairs as
                  quickly as possible without compromising quality.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Settings className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Parts</h3>
                <p className="text-muted-foreground">
                  We use only high-quality OEM or equivalent parts for repairs, ensuring the reliability and longevity
                  of your repaired equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Tool className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Equipment</h3>
                <p className="text-muted-foreground">
                  Our repair facility is equipped with state-of-the-art tools and diagnostic equipment to accurately
                  identify and fix issues with your machinery.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Warranty</h3>
                <p className="text-muted-foreground">
                  We stand behind our repair work with a comprehensive warranty, giving you peace of mind and confidence
                  in our services.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Settings className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Comprehensive Testing</h3>
                <p className="text-muted-foreground">
                  Every repaired equipment undergoes rigorous testing to ensure it meets or exceeds original performance
                  specifications before delivery.
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

