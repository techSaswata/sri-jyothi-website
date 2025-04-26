import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import ServicesSection from "@/components/sections/services-section"
import SolutionsSection from "@/components/sections/solutions-section"
import AboutSection from "@/components/sections/about-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import CtaSection from "@/components/sections/cta-section"
import PartnersSection from "@/components/sections/partners-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnersSection />
      <ServicesSection />
      <StatsSection />
      <SolutionsSection />
      <AboutSection />
      <TestimonialsSection />
      <CtaSection />
      <ContactSection />
    </>
  )
}

