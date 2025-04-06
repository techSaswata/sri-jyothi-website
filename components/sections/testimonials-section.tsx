"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Rajesh Kumar",
    position: "Operations Manager, Tata Steel",
    image: "/placeholder-user.jpg",
    content:
      "Sri Jyothi Engineering Services has been our trusted partner for machinery maintenance and repair for over 5 years. Their team's expertise and prompt service have significantly reduced our downtime and improved operational efficiency.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    position: "Plant Director, Reliance Industries",
    image: "/placeholder-user.jpg",
    content:
      "We've worked with Sri Jyothi on several energy optimization projects, and the results have been outstanding. Their innovative solutions have helped us reduce energy consumption by 30% and achieve substantial cost savings.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    position: "Chief Engineer, NTPC",
    image: "/placeholder-user.jpg",
    content:
      "The team at Sri Jyothi Engineering Services provided excellent support during our power plant maintenance shutdown. Their expertise in turbine repair and maintenance ensured that we completed the project on time and within budget.",
    rating: 4,
  },
  {
    name: "Ananya Patel",
    position: "Production Head, Hindustan Unilever",
    image: "/placeholder-user.jpg",
    content:
      "Sri Jyothi's 3D modeling and printing services have revolutionized our product development process. Their quick turnaround time and attention to detail have helped us bring products to market faster than ever before.",
    rating: 5,
  },
  {
    name: "Suresh Reddy",
    position: "Maintenance Manager, BHEL",
    image: "/placeholder-user.jpg",
    content:
      "We've been using Sri Jyothi's spare parts service for our heavy machinery, and the quality has been consistently excellent. Their parts are reliable, durable, and competitively priced.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="section-padding bg-background" id="testimonials">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it. Here's what our clients have to say about our engineering services and
            solutions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="border shadow-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex space-x-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center space-x-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium">{testimonial.name}</h4>
                          <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 space-x-4">
              <CarouselPrevious className="relative inset-0 translate-y-0" />
              <CarouselNext className="relative inset-0 translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}

