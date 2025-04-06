import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Building, Clock } from "lucide-react"
import CtaSection from "@/components/sections/cta-section"

export const metadata = {
  title: "Projects | Sri Jyothi Engineering Services",
  description:
    "Explore our portfolio of successful engineering projects across various industries including manufacturing, power generation, oil & gas, and infrastructure.",
}

const projects = [
  {
    id: 1,
    title: "Turbine Overhaul for Power Plant",
    description:
      "Complete overhaul of a 500MW steam turbine for a major power plant, including repair, replacement of critical components, and performance optimization.",
    image: "/Web Pics/Web Pics/Services/8876d0e3-9802-4361-9c08-49b397b81395.jpg",
    category: "power",
    client: "National Thermal Power Corporation",
    location: "Maharashtra, India",
    duration: "3 months",
    year: "2022",
    tags: ["Turbine Repair", "Power Generation", "Maintenance"],
  },
  {
    id: 2,
    title: "Manufacturing Line Automation",
    description:
      "Design and implementation of an automated production line for a leading automotive parts manufacturer, resulting in 40% increase in productivity.",
    image: "/Web Pics/Web Pics/Services/40e82350-d502-439d-b300-0c8152499cde.jpg",
    category: "manufacturing",
    client: "Automotive Components Ltd.",
    location: "Tamil Nadu, India",
    duration: "6 months",
    year: "2021",
    tags: ["Automation", "Manufacturing", "Process Optimization"],
  },
  {
    id: 3,
    title: "Oil Refinery Equipment Maintenance",
    description:
      "Comprehensive maintenance program for critical equipment at a major oil refinery, including pumps, compressors, and heat exchangers.",
    image: "/Web Pics/Web Pics/Services/vacuum pump.jpg",
    category: "oil-gas",
    client: "Indian Oil Corporation",
    location: "Gujarat, India",
    duration: "Ongoing",
    year: "2023",
    tags: ["Maintenance", "Oil & Gas", "Equipment Repair"],
  },
  {
    id: 4,
    title: "Bridge Structural Assessment",
    description:
      "Detailed structural assessment and rehabilitation plan for a 50-year-old bridge, ensuring safety and extending its service life by 25 years.",
    image: "/Web Pics/Web Pics/Services/firefighting pumps.jpg",
    category: "infrastructure",
    client: "State Highway Authority",
    location: "Karnataka, India",
    duration: "4 months",
    year: "2022",
    tags: ["Structural Assessment", "Infrastructure", "Rehabilitation"],
  },
  {
    id: 5,
    title: "Energy Efficiency Upgrade for Steel Plant",
    description:
      "Implementation of energy-saving solutions for a steel manufacturing plant, resulting in 30% reduction in energy consumption and significant cost savings.",
    image: "/Web Pics/Web Pics/Services/Services-BFP1.jpg",
    category: "manufacturing",
    client: "Tata Steel",
    location: "Jharkhand, India",
    duration: "8 months",
    year: "2021",
    tags: ["Energy Efficiency", "Manufacturing", "Sustainability"],
  },
  {
    id: 6,
    title: "3D Modeling for Product Development",
    description:
      "Creation of detailed 3D models and prototypes for a new product line, accelerating the development process and reducing time-to-market.",
    image: "/Web Pics/Web Pics/3D scan-1.jpg",
    category: "manufacturing",
    client: "Consumer Electronics Manufacturer",
    location: "Telangana, India",
    duration: "2 months",
    year: "2023",
    tags: ["3D Modeling", "Product Development", "Prototyping"],
  },
  {
    id: 7,
    title: "Hydroelectric Plant Modernization",
    description:
      "Modernization of control systems and equipment for a 25-year-old hydroelectric power plant, improving efficiency and reliability.",
    image: "/Web Pics/Web Pics/Services/689832c2-6d8b-43b0-86d3-54cd924eb1ef.jpg",
    category: "power",
    client: "State Power Generation Company",
    location: "Himachal Pradesh, India",
    duration: "12 months",
    year: "2020",
    tags: ["Modernization", "Hydroelectric", "Control Systems"],
  },
  {
    id: 8,
    title: "Pipeline Integrity Assessment",
    description:
      "Comprehensive integrity assessment of a 200km oil pipeline, including inspection, testing, and development of a maintenance strategy.",
    image: "/Web Pics/Web Pics/Services/vacuum pump balancing.jpg",
    category: "oil-gas",
    client: "Reliance Industries",
    location: "Multiple States, India",
    duration: "5 months",
    year: "2022",
    tags: ["Pipeline Integrity", "Oil & Gas", "Assessment"],
  },
  {
    id: 9,
    title: "Airport Terminal HVAC Upgrade",
    description:
      "Design and implementation of an upgraded HVAC system for an international airport terminal, improving energy efficiency and passenger comfort.",
    image: "/Web Pics/Web Pics/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg",
    category: "infrastructure",
    client: "Airport Authority of India",
    location: "Delhi, India",
    duration: "10 months",
    year: "2021",
    tags: ["HVAC", "Infrastructure", "Energy Efficiency"],
  },
]

export default function ProjectsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Explore our portfolio of successful engineering projects across various industries. These case studies
              demonstrate our expertise, innovation, and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                <TabsTrigger value="all">All Projects</TabsTrigger>
                <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
                <TabsTrigger value="power">Power Generation</TabsTrigger>
                <TabsTrigger value="oil-gas">Oil & Gas</TabsTrigger>
                <TabsTrigger value="infrastructure">Infrastructure</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "manufacturing")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="power" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "power")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="oil-gas" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "oil-gas")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="infrastructure" className="mt-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.category === "infrastructure")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Featured Project</h2>
            <p className="section-subtitle">
              A closer look at one of our most significant and successful engineering projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border">
                <Image
                  src="/Web Pics/Web Pics/Services/99fa5090-c636-4b67-b0b3-6e9a72f07c5b.jpg"
                  alt="Turbine Overhaul Project"
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -right-6 -bottom-6 w-64 h-64 bg-primary/5 rounded-full" />
              <div className="absolute -z-10 -left-6 -top-6 w-64 h-64 bg-primary/5 rounded-full" />
            </div>

            <div>
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Featured Project
              </div>
              <h3 className="text-3xl font-bold mb-4">Turbine Overhaul for 500MW Power Plant</h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">NTPC Ltd.</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">2022</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span className="text-muted-foreground">3 months</span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6">
                This project involved the complete overhaul of a 500MW steam turbine for a major power plant operated by
                the National Thermal Power Corporation. Our team was tasked with repairing and replacing critical
                components, optimizing performance, and extending the turbine's operational life.
              </p>

              <div className="space-y-4 mb-8">
                <h4 className="text-xl font-bold">Challenges:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Tight timeline to minimize plant downtime</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Complex technical issues with aging equipment</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Need for custom-manufactured replacement parts</span>
                  </li>
                </ul>

                <h4 className="text-xl font-bold">Solutions:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Deployed a specialized team of 25 engineers and technicians</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Implemented 24/7 work schedule with multiple shifts</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Used advanced 3D modeling for rapid custom part manufacturing</span>
                  </li>
                </ul>

                <h4 className="text-xl font-bold">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Completed the project 2 weeks ahead of schedule</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Improved turbine efficiency by 8%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Extended equipment life by an estimated 15 years</span>
                  </li>
                </ul>
              </div>

              <Button asChild>
                <Link href="/contact">
                  Discuss Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title mb-4">Our Project Process</h2>
            <p className="section-subtitle">
              We follow a structured approach to ensure successful project execution and delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Consultation & Assessment</h3>
                <p className="text-muted-foreground">
                  We begin by understanding your requirements, challenges, and objectives through detailed consultations
                  and site assessments.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Planning & Design</h3>
                <p className="text-muted-foreground">
                  Our team develops a comprehensive project plan and design, including timelines, resource allocation,
                  and technical specifications.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Implementation</h3>
                <p className="text-muted-foreground">
                  We execute the project according to the plan, with regular progress updates and quality checks
                  throughout the implementation phase.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold mb-4">Testing & Handover</h3>
                <p className="text-muted-foreground">
                  We conduct thorough testing and validation before project handover, ensuring everything meets the
                  required specifications and standards.
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

function ProjectCard({ project }: { project: any }) {
  return (
    <Card className="overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="relative h-48">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardHeader className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag: string, index: number) => (
            <Badge key={index} variant="secondary" className="font-normal">
              {tag}
            </Badge>
          ))}
        </div>
        <CardTitle className="text-xl">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Client:</p>
            <p className="text-sm">{project.client}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Location:</p>
            <p className="text-sm">{project.location}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Year:</p>
            <p className="text-sm">{project.year}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground mb-1">Duration:</p>
            <p className="text-sm">{project.duration}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button variant="outline" size="sm" asChild className="w-full">
          <Link href={`/projects/${project.id}`}>
            View Project Details
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

