import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Target, CheckCircle, Clock, Briefcase, GraduationCap, Building, ArrowRight } from "lucide-react"
import TeamSection from "@/components/sections/team-section"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "About Us | Sri Jyothi Engineering Services",
  description:
    "Learn about Sri Jyothi Engineering Services, our history, mission, values, and the team behind our engineering excellence.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-6">
                About Sri Jyothi Engineering Services
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Engineering Excellence <span className="gradient-text">Since 2005</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Sri Jyothi Engineering Services has established itself as a leading provider of comprehensive
                engineering solutions for various industries. With a team of experienced engineers and technicians, we
                deliver high-quality services tailored to meet the specific needs of our clients.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border">
                <Image
                  src="/images/equipment.avif"
                  alt="About Sri Jyothi Engineering Services"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -right-6 -bottom-6 w-64 h-64 bg-primary/5 rounded-full" />
              <div className="absolute -z-10 -left-6 -top-6 w-64 h-64 bg-primary/5 rounded-full" />

              {/* Experience badge */}
              <div className="absolute top-8 -left-8 bg-primary text-white rounded-full p-6 shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-xs">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Story</h2>
            <p className="section-subtitle">
              From humble beginnings to becoming a leading engineering services provider, our journey has been defined
              by innovation, excellence, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/banner.jpeg"
                  alt="Our History"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Beginning</h3>
                <p className="text-muted-foreground">
                  Founded in 2005 by a team of passionate engineers with a vision to provide innovative engineering
                  solutions, Sri Jyothi Engineering Services started as a small workshop in Hyderabad. With a focus on
                  quality and customer satisfaction, we quickly gained recognition for our expertise in machinery repair
                  and maintenance.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Growth and Expansion</h3>
                <p className="text-muted-foreground">
                  Over the years, we expanded our services to include spare parts supply, energy solutions, 3D services,
                  and consulting. Our commitment to excellence and innovation has helped us grow from a small local
                  business to a respected name in the engineering services industry, serving clients across India and
                  beyond.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Where We Are Today</h3>
                <p className="text-muted-foreground">
                  Today, Sri Jyothi Engineering Services is a comprehensive engineering solutions provider with
                  state-of-the-art facilities, a team of skilled professionals, and a portfolio of successful projects
                  across various industries. We continue to innovate and adapt to the changing needs of our clients,
                  maintaining our core values of quality, reliability, and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Mission, Vision & Values</h2>
            <p className="section-subtitle">
              Our guiding principles that drive us to deliver excellence in everything we do.
            </p>
          </div>

          <Tabs defaultValue="mission" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="mission">Our Mission</TabsTrigger>
              <TabsTrigger value="vision">Our Vision</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
            </TabsList>
            <TabsContent value="mission" className="p-6 bg-background rounded-xl shadow-sm border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="p-4 bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center text-primary mx-auto">
                    <Target className="h-12 w-12" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-muted-foreground mb-4">
                    To provide innovative and sustainable engineering solutions that enhance operational efficiency,
                    reduce costs, and contribute to the success of our clients' businesses.
                  </p>
                  <p className="text-muted-foreground">
                    We are committed to delivering high-quality services that meet and exceed our clients' expectations,
                    while maintaining the highest standards of safety, reliability, and environmental responsibility.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="vision" className="p-6 bg-background rounded-xl shadow-sm border">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="p-4 bg-primary/10 rounded-full w-24 h-24 flex items-center justify-center text-primary mx-auto">
                    <GraduationCap className="h-12 w-12" />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-muted-foreground mb-4">
                    To be the preferred engineering services partner for industries worldwide, recognized for our
                    technical expertise, innovative solutions, and commitment to excellence.
                  </p>
                  <p className="text-muted-foreground">
                    We aspire to lead the industry in adopting and implementing new technologies that drive efficiency,
                    sustainability, and growth for our clients, while creating a positive impact on the environment and
                    communities we serve.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="values" className="p-6 bg-background rounded-xl shadow-sm border">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center text-primary mx-auto mb-4">
                    <Award className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Excellence</h4>
                  <p className="text-muted-foreground">
                    We strive for excellence in every project we undertake, ensuring the highest quality standards in
                    our services and solutions.
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center text-primary mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Collaboration</h4>
                  <p className="text-muted-foreground">
                    We believe in working closely with our clients to understand their needs and deliver tailored
                    solutions that address their specific challenges.
                  </p>
                </div>
                <div className="text-center">
                  <div className="p-4 bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center text-primary mx-auto mb-4">
                    <Target className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">Innovation</h4>
                  <p className="text-muted-foreground">
                    We continuously innovate and adopt the latest technologies to provide cutting-edge engineering
                    solutions that drive efficiency and growth.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Why Choose Us</h2>
            <p className="section-subtitle">
              What sets Sri Jyothi Engineering Services apart from the competition and makes us the preferred choice for
              engineering solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Briefcase className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Industry Experience</h3>
                <p className="text-muted-foreground mb-4">
                  With over 15 years of experience in the engineering services industry, we have the knowledge and
                  expertise to handle complex projects across various sectors.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Extensive industry knowledge</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Proven track record of success</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Diverse project portfolio</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Users className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Team</h3>
                <p className="text-muted-foreground mb-4">
                  Our team consists of highly skilled engineers, technicians, and specialists with extensive experience
                  and expertise in their respective fields.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Qualified and certified professionals</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Continuous training and development</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Specialized domain knowledge</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Building className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">State-of-the-Art Facilities</h3>
                <p className="text-muted-foreground mb-4">
                  Our modern facilities are equipped with the latest technology and equipment to deliver high-quality
                  engineering services efficiently.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Advanced machinery and tools</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Modern testing and quality control equipment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Spacious workshop and manufacturing areas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Clock className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Timely Delivery</h3>
                <p className="text-muted-foreground mb-4">
                  We understand the importance of time in business operations and are committed to delivering our
                  services within the agreed timeframe.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Efficient project management</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Streamlined processes and workflows</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Regular progress updates and communication</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Award className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <p className="text-muted-foreground mb-4">
                  We adhere to strict quality control measures and international standards to ensure the highest quality
                  in all our services and products.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">ISO 9001:2015 certified</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Rigorous testing and inspection</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Continuous improvement processes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-14 h-14 flex items-center justify-center mb-4">
                  <Target className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">Customer-Centric Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We prioritize our clients' needs and satisfaction, providing personalized solutions and exceptional
                  customer service.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Tailored solutions for specific needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Responsive communication and support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">Long-term relationship building</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Certifications Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Certifications</h2>
            <p className="section-subtitle">
              We adhere to international standards and have received various certifications that reflect our commitment
              to quality and excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="ISO 9001:2015"
                    width={200}
                    height={200}
                    className="mx-auto h-32 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">ISO 9001:2015</h3>
                <p className="text-muted-foreground">
                  Quality Management System certification, demonstrating our commitment to providing services that meet
                  customer and regulatory requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="ISO 14001:2015"
                    width={200}
                    height={200}
                    className="mx-auto h-32 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">ISO 14001:2015</h3>
                <p className="text-muted-foreground">
                  Environmental Management System certification, showing our dedication to minimizing our environmental
                  impact and promoting sustainability.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="mb-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="OHSAS 18001"
                    width={200}
                    height={200}
                    className="mx-auto h-32 w-auto"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">OHSAS 18001</h3>
                <p className="text-muted-foreground">
                  Occupational Health and Safety Management certification, highlighting our focus on providing a safe
                  and healthy workplace for our employees.
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

