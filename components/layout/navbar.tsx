"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, ChevronDown, Phone } from "lucide-react"

const services = [
  {
    title: "Repair Services",
    href: "/services/repair",
    description: "Professional repair services for industrial machinery and equipment",
  },
  {
    title: "Spare Parts",
    href: "/services/spare-parts",
    description: "Quality spare parts for all types of industrial equipment",
  },
  {
    title: "Energy Solutions",
    href: "/services/energy-solutions",
    description: "Energy-saving solutions to reduce operational costs",
  },
  {
    title: "3D Services",
    href: "/services/3d-services",
    description: "Advanced 3D modeling and printing services",
  },
  {
    title: "Maintenance",
    href: "/services/maintenance",
    description: "Preventive and corrective maintenance services",
  },
  {
    title: "Consulting",
    href: "/services/consulting",
    description: "Expert consulting for industrial engineering challenges",
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "glass-effect border-b shadow-sm py-3" : "bg-transparent py-5",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo.png"
            alt="Sri Jyothi Engineering Services"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold leading-tight">
              Sri Jyothi
              <span className="block text-sm font-medium text-muted-foreground">Engineering Services</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/about"}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{service.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {service.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/projects" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/projects"}>
                    Projects
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} active={pathname === "/contact"}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <div className="hidden xl:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-primary" />
              <span className="font-medium">+91 9876543210</span>
            </div>
            <Button asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 lg:hidden">
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between py-4 border-b">
                  <Link href="/" className="flex items-center space-x-2">
                    <Image
                      src="/images/logo.png"
                      alt="Sri Jyothi Engineering Services"
                      width={40}
                      height={40}
                      className="h-10 w-auto"
                    />
                    <span className="font-bold">Sri Jyothi</span>
                  </Link>
                </div>
                <nav className="flex-1 overflow-auto py-6">
                  <ul className="space-y-6 px-2">
                    <li>
                      <Link
                        href="/"
                        className={cn(
                          "flex items-center text-lg font-medium transition-colors hover:text-primary",
                          pathname === "/" ? "text-primary" : "text-foreground",
                        )}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={cn(
                          "flex items-center text-lg font-medium transition-colors hover:text-primary",
                          pathname === "/about" ? "text-primary" : "text-foreground",
                        )}
                      >
                        About
                      </Link>
                    </li>
                    <li className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-medium">Services</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <ul className="pl-4 space-y-3">
                        {services.map((service) => (
                          <li key={service.title}>
                            <Link href={service.href} className="text-base text-muted-foreground hover:text-primary">
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/projects"
                        className={cn(
                          "flex items-center text-lg font-medium transition-colors hover:text-primary",
                          pathname === "/projects" ? "text-primary" : "text-foreground",
                        )}
                      >
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={cn(
                          "flex items-center text-lg font-medium transition-colors hover:text-primary",
                          pathname === "/contact" ? "text-primary" : "text-foreground",
                        )}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="border-t py-6 px-2">
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                  <div className="flex items-center justify-center mt-6 space-x-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">+91 9876543210</span>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

