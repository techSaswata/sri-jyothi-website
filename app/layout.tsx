import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Sri Jyothi Engineering Services | Industrial Engineering Solutions",
  description:
    "Professional engineering services and solutions for all your industrial needs. Specializing in machinery repair, maintenance, and energy-saving solutions.",
  keywords: "engineering services, industrial solutions, machinery repair, maintenance, energy solutions, 3D services",
  authors: [{ name: "Sri Jyothi Engineering Services" }],
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: [{ url: "/favicon.ico" }],
    apple: [{ url: "/apple-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://srijyothiengineeringservices.com",
    title: "Sri Jyothi Engineering Services",
    description: "Professional engineering services and solutions for all your industrial needs",
    siteName: "Sri Jyothi Engineering Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sri Jyothi Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Jyothi Engineering Services",
    description: "Professional engineering services and solutions for all your industrial needs",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen antialiased font-sans", inter.variable, poppins.variable)}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'