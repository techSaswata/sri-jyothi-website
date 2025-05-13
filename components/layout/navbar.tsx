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
import { Menu, ChevronDown, Phone, Wrench, RefreshCw, Settings, ScanLine, Cog, Zap, Sparkles, RotateCcw, Scale, PenTool, Droplet, Mail } from "lucide-react"

export const services = [
  {
    title: "Engineering Services",
    href: "/services/engineering",
    description: "Reliable and professional engineering support to reduce downtime, improve safety, and handle changes smoothly as well",
    image: "/images/service1.jpg",
    icon: <Settings className="h-4 w-4 mr-1" />
  },
  {
    title: "Reverse Engineering",
    href: "/services/reverse-engineering",
    description: "Fast and reliable solutions to reproduce spare parts that are hard to find or no longer available as well",
    image: "/Web Pics1/Services/Reverse_Engineering.jpg",
    icon: <RefreshCw className="h-4 w-4 mr-1" />
  },
  {
    title: "Overhauling Services",
    href: "/services/overhauling",
    description: "Erection, commissioning, maintenance, and overhauling services for the entire lifecycle of industrial equipment as well",
    image: "/images/service3.jpg",
    icon: <Wrench className="h-4 w-4 mr-1" />
  },
  {
    title: "3D Scanning",
    href: "/services/3d-scanning",
    description: "Precise digital models and technical drawings of existing mechanical components for spare parts development as well",
    image: "/images/3d-scan.jpg",
    icon: <ScanLine className="h-4 w-4 mr-1" />
  },
  {
    title: "Spare Parts",
    href: "/services/spare-parts",
    description: "High-quality mechanical spares designed, manufactured, and delivered to keep your equipment running smoothly as well",
    image: "/Web Pics1/Equipment/Turbine seals.jpg",
    icon: <Cog className="h-4 w-4 mr-1" />
  },
  {
    title: "Repair Services",
    href: "/services/repair",
    description: "Comprehensive repair, reconditioning, and refurbishment services for power and process industry equipment as well",
    image: "/Web Pics1/Equipment/Vacuum pump Overhauling.jpg",
    icon: <PenTool className="h-4 w-4 mr-1" />
  },
  {
    title: "Energy Solutions",
    href: "/services/energy-solutions",
    description: "Expert efficiency consultancy to reduce fuel consumption and optimize performance in power plants as well",
    image: "/images/service2.jpg",
    icon: <Zap className="h-4 w-4 mr-1" />
  },
  {
    title: "EDM Services",
    href: "/services/edm",
    description: "High-precision Electrical Discharge Machining for intricate shapes and fine details in hard materials as well",
    image: "/Web Pics1/Services/8109b8ed-05bd-4fc3-8296-585e7ef04ab9.jpg",
    icon: <Sparkles className="h-4 w-4 mr-1" />
  },
  {
    title: "Fire Fighting Pumps",
    href: "/services/fire-fighting-pumps",
    description: "Supply, installation and maintenance of industrial fire fighting pump systems as well",
    image: "/images/service3.jpg",
    icon: <Droplet className="h-4 w-4 mr-1" />
  },
  {
    title: "Bend Removal",
    href: "/services/bend-removal",
    description: "Precision shaft and turbine rotor bend removal to restore critical components to original specifications as well",
    image: "/Web Pics1/Equipment/BFP-Shaft-cylindrical grinding.jpg",
    icon: <RotateCcw className="h-4 w-4 mr-1" />
  },
  {
    title: "Dynamic Balancing",
    href: "/services/dynamic-balancing",
    description: "Precision balancing services to improve performance, reliability, and safety of rotating equipment as well",
    image: "/images/service2.jpg",
    icon: <Scale className="h-4 w-4 mr-1" />
  }
]

// Custom navigation link style with underline animation
const navLinkStyle = (isActive: boolean) => {
  return cn(
    "relative px-3 py-1.5 transition-colors duration-200",
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100",
    isActive && "text-primary after:origin-bottom-left after:scale-x-100"
  )
}

// Mobile navigation link style
const mobileNavLinkStyle = (isActive: boolean) => {
  return cn(
    "relative inline-block transition-colors hover:text-primary",
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100",
    isActive && "text-primary after:origin-bottom-left after:scale-x-100"
  )
}

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
        isScrolled ? "glass-effect border-b shadow-sm py-2" : "bg-transparent py-3",
      )}
    >
      <div className="container max-w-[95%] mx-auto flex items-center justify-between px-0 sm:px-0 lg:px-0">
        <Link href="/" className="flex items-center space-x-2 ml-0 sm:ml-1">
          <Image
            src="/images/logo copy.png"
            alt="Sri Jyothi Engineering Services"
            width={60}
            height={60}
            className="h-16 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-base font-bold leading-tight">
              Sri Jyothi
              <span className="block text-xs font-medium text-muted-foreground">Engineering Services</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12 mr-0">
          <NavigationMenu>
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkStyle(pathname === "/")} active={pathname === "/"}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkStyle(pathname === "/about")} active={pathname === "/about"}>
                    About Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/services" legacyBehavior passHref>
                  <NavigationMenuTrigger className="text-base font-normal" data-active={pathname.startsWith("/services")}>
                    Services
                  </NavigationMenuTrigger>
                </Link>
                <NavigationMenuContent>
                  <ul className="grid w-[600px] gap-3 p-4 md:grid-cols-2">
                    {services.map((service) => (
                      <li key={service.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none flex items-center">
                              {service.icon}
                              {service.title}
                            </div>
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
                <Link href="/equipment" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkStyle(pathname === "/equipment")} active={pathname === "/equipment"}>
                    Equipment
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/contact" legacyBehavior passHref>
                  <NavigationMenuLink className={navLinkStyle(pathname === "/contact")} active={pathname === "/contact"}>
                    Contact Us
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center space-x-4">
            <div>
              <div className="hidden xl:block text-sm">
                <Phone className="h-4 w-4 text-primary mb-1 inline-block" />
                <span className="font-medium ml-2">+91 77229 44331</span>
              </div>
              <div className="hidden xl:block text-sm mt-1">
                <Mail className="h-4 w-4 text-primary mb-1 inline-block" />
                <span className="font-medium ml-2">sjes331@gmail.com</span>
              </div>
            </div>
            <Button size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-4 lg:hidden mr-0">
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
                      width={60}
                      height={60}
                      className="h-16 w-auto"
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
                          mobileNavLinkStyle(pathname === "/")
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
                          mobileNavLinkStyle(pathname === "/about")
                        )}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="space-y-3">
                      <div className="flex items-center justify-between">
                        <Link 
                          href="/services"
                          className={cn(
                            "text-lg font-medium hover:text-primary",
                            pathname.startsWith("/services") ? "text-primary" : "text-foreground",
                            mobileNavLinkStyle(pathname.startsWith("/services"))
                          )}
                        >
                          <span>Services</span>
                        </Link>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <ul className="pl-4 space-y-3">
                        {services.map((service) => (
                          <li key={service.title}>
                            <Link 
                              href={service.href} 
                              className={cn(
                                "text-base text-muted-foreground hover:text-primary relative",
                                "after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100",
                                pathname === service.href && "text-primary after:origin-bottom-left after:scale-x-100"
                              )}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </li>
                    <li>
                      <Link
                        href="/equipment"
                        className={cn(
                          "flex items-center text-lg font-medium transition-colors hover:text-primary",
                          pathname === "/equipment" ? "text-primary" : "text-foreground",
                          mobileNavLinkStyle(pathname === "/equipment")
                        )}
                      >
                        Equipment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className={cn(
                          "flex items-center text-lg font-medium transition-colors hover:text-primary",
                          pathname === "/contact" ? "text-primary" : "text-foreground",
                          mobileNavLinkStyle(pathname === "/contact")
                        )}
                      >
                        Contact Us
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
                    <span className="text-sm font-medium">+91 77229 44331</span>
                  </div>
                  <div className="flex items-center justify-center mt-6 space-x-2">
                    <Mail className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">sjes331@gmail.com</span>
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

