"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CustomEquipmentCta() {
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
    <section className="py-12 bg-gradient-secondary">
      <div className="container">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="bg-background rounded-2xl shadow-xl p-6 md:p-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-3">Need Custom Equipment Solutions?</h2>
              <p className="text-sm text-muted-foreground mb-6">
                Contact us today to discuss your specific requirements for equipment spares, repairs, or maintenance services.
              </p>
              <Button 
                size="default" 
                asChild
                className="bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-md hover:shadow-lg transition-all duration-500 hover:-translate-y-0.5 relative overflow-hidden group"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    Request a Quote
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 