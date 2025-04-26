"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="section-padding bg-gradient-secondary" id="contact">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-title mb-4">Contact Us</h2>
          <p className="section-subtitle">
            Have questions or need assistance? Reach out to us and our team will get back to you as soon as possible.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-1">For general inquiries:</p>
                    <a href="mailto:sjes331@gmail.com" className="text-primary hover:underline">
                      sjes331@gmail.com
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 mb-1">For technical communications:</p>
                    <a href="mailto:techcom@srijyothi.com" className="text-primary hover:underline">
                      techcom@srijyothi.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground mb-1">Main Office:</p>
                    <a href="tel:+917722944331" className="text-primary hover:underline">
                      +91 77229 44331
                    </a>
                    <p className="text-sm text-muted-foreground mt-2 mb-1">Alternative:</p>
                    <a href="tel:+919630311331" className="text-primary hover:underline">
                      +91 96303 11331
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <div className="text-sm mb-4">
                      <p className="text-sm text-muted-foreground font-medium mb-1">Vijaywada Office:</p>
                      <address className="not-italic text-sm">
                        D.No : 2-306/A, Main Road,<br />
                        Polavaram (Po), Chatrai (Md),<br />
                        Eluru (Dt)-521214, AP
                      </address>
                    </div>
                    <div className="text-sm">
                      <p className="text-sm text-muted-foreground font-medium mb-1">Hyderabad Office:</p>
                      <address className="not-italic text-sm">
                        Plot No. 61/D, Phase-1,<br />
                        I.D.A., Jeedimetla,<br />
                        Hyderabad – 500055
                      </address>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-sm text-muted-foreground mb-1">Monday - Friday:</p>
                    <p className="text-sm mb-2">9:00 AM - 6:00 PM</p>
                    <p className="text-sm text-muted-foreground mb-1">Saturday:</p>
                    <p className="text-sm mb-2">10:00 AM - 2:00 PM</p>
                    <p className="text-sm text-muted-foreground mb-1">Sunday:</p>
                    <p className="text-sm">Closed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <Card className="shadow-md">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Full Name
                      </label>
                      <Input id="name" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </label>
                      <Input id="phone" placeholder="Enter your phone number" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">
                        Service Interested In
                      </label>
                      <Select>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="repair">Repair Services</SelectItem>
                          <SelectItem value="spare-parts">Spare Parts</SelectItem>
                          <SelectItem value="energy">Energy Solutions</SelectItem>
                          <SelectItem value="3d">3D Services</SelectItem>
                          <SelectItem value="maintenance">Maintenance</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us about your project or inquiry" rows={6} />
                  </div>

                  <Button type="submit" className="w-full md:w-auto" size="lg">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

