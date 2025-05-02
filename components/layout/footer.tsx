import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gradient-secondary border-t">
      <div className="container">
        {/* Newsletter Section */}
        {/* <div className="py-12 border-b">
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
        </div> */}

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/logo copy.png"
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
                  <Link href="/services/engineering" className="text-muted-foreground hover:text-primary transition-colors">
                    Engineering Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/reverse-engineering"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Reverse Engineering
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/overhauling"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Overhauling Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/3d-scanning"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    3D Scanning
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
                    href="/services/repair"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Repair Services
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="h-8 w-8 text-primary mr-3" />
                  <div className="text-muted-foreground">
                    <p className="font-medium mt-4 mb-1">Hyderabad:</p>
                    <p>Plot No. 61/D, Phase-1, I.D.A., Jeedimetla, Hyderabad – 500055</p>
                  </div>
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 text-primary mr-3" />
                  <div className="flex flex-col">
                    <span className="text-muted-foreground">+91 77229 44331</span>
                    <span className="text-muted-foreground">+91 96303 11331</span>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-muted-foreground">sjes331@gmail.com, techcom@srijyothi.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sri Jyothi Engineering Services. All rights reserved.
          </p>
          {/* <div className="mt-4 md:mt-0 flex justify-center md:justify-end space-x-6">
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
          </div> */}
        </div>
      </div>
    </footer>
  )
}

