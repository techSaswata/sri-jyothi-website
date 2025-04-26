import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Package, Truck, Search, ShieldCheck } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Spare Parts | Sri Jyothi Engineering Services",
  description:
    "Quality spare parts for industrial equipment, ensuring optimal performance and longevity of your machinery.",
}

export default function SparePartsPage() {
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
                Quality <span className="gradient-text">Spare Parts</span> for Industrial Equipment
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                We provide high-quality OEM and aftermarket spare parts for various types of industrial equipment,
                ensuring optimal performance and longevity of your machinery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Request Spare Parts
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
                  src="/Web Pics1/Equipment/CEP axial thrust pads.jpg"
                  alt="Industrial Spare Parts"
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
            <h2 className="section-title mb-4">Our Spare Parts Services</h2>
            <p className="section-subtitle">
              We offer a comprehensive range of spare parts services to meet your industrial equipment needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">OEM Parts</h3>
                <p className="text-muted-foreground mb-4">
                  We supply genuine Original Equipment Manufacturer (OEM) parts for various industrial machinery and
                  equipment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Genuine manufacturer parts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Original specifications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Manufacturer warranty</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hard-to-Find Parts</h3>
                <p className="text-muted-foreground mb-4">
                  We specialize in sourcing rare and obsolete parts for older equipment and discontinued models.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Global sourcing network</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Obsolete part alternatives</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Reverse engineering capabilities</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Truck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Inventory Management</h3>
                <p className="text-muted-foreground mb-4">
                  We help you manage your spare parts inventory to ensure critical parts are always available when
                  needed.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Inventory assessment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Critical spares identification</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Stocking recommendations</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Custom Manufacturing</h3>
                <p className="text-muted-foreground mb-4">
                  We can manufacture custom parts when standard replacements are not available or when modifications are
                  required.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Precision machining</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">3D modeling and printing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Material selection expertise</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Parts Categories Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Spare Parts Categories</h2>
            <p className="section-subtitle">
              We supply spare parts for various types of industrial equipment across different categories.
            </p>
          </div>

          <Tabs defaultValue="mechanical" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0 mb-8">
              <TabsTrigger value="mechanical">Mechanical Parts</TabsTrigger>
              <TabsTrigger value="electrical">Electrical Parts</TabsTrigger>
              <TabsTrigger value="hydraulic">Hydraulic & Pneumatic</TabsTrigger>
              <TabsTrigger value="consumables">Consumables</TabsTrigger>
            </TabsList>

            <TabsContent value="mechanical" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Mechanical Spare Parts</h3>
                  <p className="text-muted-foreground mb-6">
                    We supply a wide range of mechanical spare parts for various industrial machinery and equipment.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Bearings and bushings</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Gears and gearboxes</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Shafts and couplings</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Belts and pulleys</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Chains and sprockets</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Seals and gaskets</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Fasteners and hardware</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Springs and dampers</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Mechanical Parts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Mechanical Spare Parts"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="electrical" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Electrical Spare Parts</h3>
                  <p className="text-muted-foreground mb-6">
                    We provide a comprehensive range of electrical spare parts for industrial equipment and control
                    systems.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Motors and generators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Contactors and relays</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Circuit breakers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Transformers</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Sensors and switches</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Control panels</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Variable frequency drives</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>PLC components</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Electrical Parts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Electrical Spare Parts"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hydraulic" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Hydraulic & Pneumatic Parts</h3>
                  <p className="text-muted-foreground mb-6">
                    We supply high-quality hydraulic and pneumatic components for various industrial applications.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hydraulic pumps</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hydraulic motors</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Cylinders and actuators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Valves and manifolds</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Filters and filtration systems</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Hoses and fittings</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Pressure regulators</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Compressors and air treatment</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Hydraulic & Pneumatic Parts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Hydraulic & Pneumatic Parts"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="consumables" className="mt-0">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Consumable Parts</h3>
                  <p className="text-muted-foreground mb-6">
                    We supply a wide range of consumable parts that require regular replacement due to wear and tear.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Filters (air, oil, fuel)</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Belts and hoses</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Lubricants and greases</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Gaskets and seals</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Cutting tools and blades</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Welding consumables</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Cleaning supplies</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>Safety equipment</span>
                    </div>
                  </div>

                  <Button asChild>
                    <Link href="/contact">
                      Request Consumable Parts
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div>
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/placeholder.svg?height=600&width=800"
                      alt="Consumable Parts"
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

      {/* Why Choose Us Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Why Choose Our Spare Parts</h2>
            <p className="section-subtitle">
              What sets our spare parts services apart from the competition and makes us the preferred choice for
              industrial equipment parts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground">
                  All our spare parts undergo rigorous quality checks to ensure they meet or exceed OEM specifications
                  and industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Truck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Fast Delivery</h3>
                <p className="text-muted-foreground">
                  We maintain an extensive inventory of commonly used parts and have established supply chains to ensure
                  quick delivery of your ordered parts.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Extensive Inventory</h3>
                <p className="text-muted-foreground">
                  Our comprehensive inventory includes parts for various equipment types and brands, making us a
                  one-stop solution for all your spare parts needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Package className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Competitive Pricing</h3>
                <p className="text-muted-foreground">
                  We offer competitive pricing on all our spare parts without compromising on quality, helping you
                  manage your maintenance costs effectively.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Warranty</h3>
                <p className="text-muted-foreground">
                  All our spare parts come with a warranty, giving you peace of mind and assurance of their quality and
                  performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Search className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Technical Support</h3>
                <p className="text-muted-foreground">
                  Our team of technical experts is available to help you identify the right parts for your equipment and
                  provide guidance on installation and maintenance.
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

