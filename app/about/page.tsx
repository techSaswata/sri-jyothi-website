import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, CheckCircle, Clock, Briefcase, GraduationCap, Building, ArrowRight, Badge, Trophy } from "lucide-react"
import TeamSection from "@/components/sections/team-section"
import CtaSection from "@/components/sections/cta-section"
import GifSection from "@/components/sections/gif-section"

export const metadata: Metadata = {
  title: "About Us | Sri Jyothi Engineering Services",
  description: "Learn about Sri Jyothi Engineering Services, a leading India-based engineering service and manufacturing company specializing in high-capacity production environments.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                Engineering Excellence
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                About <span className="gradient-text">Sri Jyothi</span> Engineering Services
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                SRI JYOTHI ENGINEERING SERVICES is a leading India-based engineering service and manufacturing company that specializes in high-capacity production environments across a wide range of industries, with particular expertise in the Energy sector.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                No matter what the question or the challenge, our Technical Team has the knowledge, expertise, and skills to provide sound advice, recommendations, and innovative solutions.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border">
                <Image
                  src="/Web Pics1/About Us/About us Header-1.jpg"
                  alt="Sri Jyothi Engineering Services"
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

      {/* Our Vision Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Philosophy</h2>
            <p className="text-lg">
              The guiding principles that drive our work and relationships with clients
            </p>
          </div>
          
          {/* Mission, Vision, Values Section */}
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Mission */}
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-red-50 p-5 mb-6 inline-block shadow-sm">
                  <Image 
                    src="/images/icons/mission-alt.svg" 
                    alt="Our Mission" 
                    width={52} 
                    height={52}
                    className="text-red-600"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-red-600">OUR</span> MISSION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To provide innovative and sustainable engineering solutions that enhance operational efficiency, reduce costs, and contribute to the success of our clients' businesses.
                </p>
              </div>

              {/* Vision */}
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-teal-50 p-5 mb-6 inline-block shadow-sm">
                  <Image 
                    src="/images/icons/vision-alt.svg" 
                    alt="Our Vision" 
                    width={52} 
                    height={52}
                    className="text-teal-600"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-teal-600">OUR</span> VISION
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted specialist services group in the delivery of Erection, Commissioning, Maintenance, and Manufacture & Supply of spares.
                </p>
              </div>

              {/* Values */}
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-amber-50 p-5 mb-6 inline-block shadow-sm">
                  <Image 
                    src="/images/icons/values.svg" 
                    alt="Our Values" 
                    width={52} 
                    height={52}
                    className="text-amber-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-amber-500">OUR</span> VALUES
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Excellence in everything we do, integrity in our business practices, innovation in our solutions, and a relentless commitment to safety and quality.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">22+ Years</h3>
                <p className="text-muted-foreground">
                  More than two decades of experience in industrial engineering
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-muted-foreground">
                  Skilled professionals with extensive technical knowledge
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Trophy className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality Focus</h3>
                <p className="text-muted-foreground">
                  Committed to delivering superior engineering outcomes
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                  <Badge className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">Trusted Partner</h3>
                <p className="text-muted-foreground">
                  Building long-term relationships with clients across industries
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl font-bold mb-6">Our Guiding Principle</h2>
              <p className="text-lg text-muted-foreground">
                Our guiding principle is clear – increase asset life and lower the total cost of ownership for clients by providing quality results that are delivered safely.
              </p>
              <p className="text-lg text-muted-foreground">
                With an impressive and growing client list, SRI JYOTHI ENGINEERING SERVICES has built a reputation for exceptional customer service, technical expertise, reliability and quality engineering outcomes.
              </p>
              <div className="space-y-4 mt-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Customer-Centric Approach</h3>
                    <p className="text-muted-foreground">We put our clients' needs at the center of everything we do, providing tailored solutions to address their specific challenges.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Technical Excellence</h3>
                    <p className="text-muted-foreground">Our team's deep technical knowledge ensures we deliver solutions that meet the highest standards of quality and performance.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-full bg-primary/10 text-primary mt-1">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Innovative Solutions</h3>
                    <p className="text-muted-foreground">We continuously explore new approaches and technologies to solve complex engineering challenges more effectively.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/CEP-Thrust pads cover.jpg" 
                  alt="Engineering Excellence" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 relative">
                <Image 
                  src="/Web Pics1/Equipment/Special bolts.jpg" 
                  alt="Customer Service" 
                  fill 
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md h-64 col-span-2 relative">
                <Image 
                  src="/Web Pics1/Home page/Home-Header-4.jpg" 
                  alt="Technical Expertise" 
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

      {/* Industries We Serve */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              We provide specialized engineering services across a wide range of industrial sectors, with particular expertise in the energy and manufacturing domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Services/fire fighting pumps/firefighting pumps.jpg"
                  alt="Power & Energy"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Power & Energy</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Thermal, gas, and renewable power plants with specialized engineering services designed to enhance operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Equipment/Tube sheet.jpg"
                  alt="Cement & Manufacturing"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Cement & Manufacturing</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Heavy machinery and industrial equipment in cement plants and manufacturing facilities to improve production.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Equipment/Vacuum pump services-1.jpg"
                  alt="Paper & Pulp"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Paper & Pulp</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Precision solutions for paper and pulp plant optimization, focusing on machine efficiency and reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Equipment/CHP labyrinth seals.jpeg"
                  alt="Oil & Gas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Oil & Gas</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Reliable components and services for critical oil & gas infrastructure with high safety standards.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Equipment/Vacuum pump services-4.jpg"
                  alt="Steel & Metal"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Steel & Metal</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  Customized solutions for heavy-duty applications in steel and metal industries under extreme conditions.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative h-48 rounded-t-lg overflow-hidden">
                <Image
                  src="/Web Pics1/Equipment/filters.jpg"
                  alt="Fertilizers & Chemicals"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white text-xl font-bold">Fertilizers & Chemicals</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-muted-foreground">
                  High-performance industrial equipment maintenance for chemical processing and fertilizer production.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="bg-background rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-muted-foreground mb-8">
                SRI JYOTHI ENGINEERING SERVICES welcomes the opportunity to discuss how we can add value to your next project, existing asset, or production cycle.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact">
                  Contact Us Today
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

