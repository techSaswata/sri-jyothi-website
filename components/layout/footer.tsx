import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-secondary border-t">
      <div className="container">
        {/* Newsletter Section */}
        <div className="py-12 border-b">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold">Stay Updated with Our Newsletter</h3>
              <p className="mt-2 text-muted-foreground">
                Get the latest news, updates, and engineering insights delivered to your inbox.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo.png"
                  alt="Sri Jyothi Engineering Services"
                  width={48}
                  height={48}
                  className="h-12 w-auto"
                />
                <div>
                  <h1 className="text-lg font-bold leading-tight">
                    Sri Jyothi
                    <span className="block text-sm font-medium text-muted-foreground">Engineering Services</span>
                  </h1>
                </div>
              </Link>
              <p className="text-muted-foreground">
                Providing innovative engineering solutions and services to industries across the globe since 2005.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6">Quick Links</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/services/repair" className="text-muted-foreground hover:text-primary transition-colors">
                    Repair Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/spare-parts"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Spare Parts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/energy-solutions"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Energy Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/3d-services"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    3D Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/maintenance"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Maintenance
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/consulting"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Consulting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <span className="text-muted-foreground">
                    123 Engineering Way, Industrial Area, Hyderabad, Telangana, India - 500001
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">+91 9876543210</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">info@srijyothiengineeringservices.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t text-center md:flex md:justify-between md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sri Jyothi Engineering Services. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

