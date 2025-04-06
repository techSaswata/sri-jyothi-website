"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-24 md:pb-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Have questions or need assistance? Reach out to us and our team will get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-muted-foreground mb-4">Our team is available to assist you during business hours.</p>
                <a href="tel:+919876543210" className="text-primary hover:underline font-medium">
                  +91 9876543210
                </a>
                <a href="tel:+919876543211" className="text-primary hover:underline font-medium mt-1">
                  +91 9876543211
                </a>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <Mail className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Send us an email and we'll respond as soon as possible.</p>
                <a
                  href="mailto:info@srijyothiengineeringservices.com"
                  className="text-primary hover:underline font-medium break-all"
                >
                  info@srijyothiengineeringservices.com
                </a>
                <a
                  href="mailto:support@srijyothiengineeringservices.com"
                  className="text-primary hover:underline font-medium mt-1 break-all"
                >
                  support@srijyothiengineeringservices.com
                </a>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <MapPin className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Location</h3>
                <p className="text-muted-foreground mb-4">
                  Visit our office to discuss your engineering needs in person.
                </p>
                <address className="not-italic text-center">
                  123 Engineering Way,
                  <br />
                  Industrial Area,
                  <br />
                  Hyderabad, Telangana,
                  <br />
                  India - 500001
                </address>
              </CardContent>
            </Card>

            <Card className="border shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Business Hours</h3>
                <p className="text-muted-foreground mb-4">Our office is open during the following hours.</p>
                <div className="space-y-2">
                  <p className="flex justify-between gap-4">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span className="font-medium">Saturday:</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between gap-4">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center"
                >
                  <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 dark:text-green-300 mb-6">
                    Thank you for contacting us. We've received your message and will respond shortly.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setFormSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another Message
                  </Button>
                </motion.div>
              ) : (
                <Card className="shadow-md">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="service" className="text-sm font-medium">
                            Service Interested In
                          </label>
                          <Select value={formData.service} onValueChange={handleSelectChange}>
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
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project or inquiry"
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full md:w-auto" size="lg">
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location</h2>
              <p className="text-muted-foreground mb-8">
                Visit our office to discuss your engineering needs in person. We're conveniently located in the
                Industrial Area of Hyderabad.
              </p>
              <div className="rounded-xl overflow-hidden shadow-lg border h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3176195767!2d78.24323135!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1649308456642!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="section-title mb-4">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and how we can help you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What areas do you serve?</h3>
                <p className="text-muted-foreground">
                  We primarily serve clients in Hyderabad and across India. However, we also work with international
                  clients on select projects. Contact us to discuss your specific location and requirements.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How quickly can you respond to emergency repair requests?</h3>
                <p className="text-muted-foreground">
                  We understand the critical nature of equipment downtime. Our emergency response team is available 24/7
                  and typically responds within 2-4 hours depending on your location.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Do you provide warranties for your services?</h3>
                <p className="text-muted-foreground">
                  Yes, we provide warranties for all our repair services and spare parts. The warranty period varies
                  depending on the service or product, typically ranging from 3 months to 1 year.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">How do I request a quote for your services?</h3>
                <p className="text-muted-foreground">
                  You can request a quote by filling out the contact form on this page, calling our office, or sending
                  an email. Please provide as much detail as possible about your requirements for an accurate quote.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">What industries do you specialize in?</h3>
                <p className="text-muted-foreground">
                  We specialize in serving manufacturing, power generation, oil & gas, infrastructure, and heavy
                  machinery industries. However, our engineering expertise can be applied to various other sectors as
                  well.
                </p>
              </CardContent>
            </Card>

            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Can you handle large-scale projects?</h3>
                <p className="text-muted-foreground">
                  Yes, we have the capacity and expertise to handle large-scale engineering projects. Our team has
                  successfully completed numerous major projects for industrial clients across various sectors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

