"use client"

import { useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"

export default function GifSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section className="py-16 md:py-20 bg-section-alternate" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* Section Title */}
          {/* <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Our Engineering Capabilities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions for industrial equipment maintenance, repair, and optimization
            </p>
          </div> */}
          
          {/* GIF Container with enhanced styling */}
          <div className="relative w-full overflow-hidden rounded-2xl shadow-2xl border border-primary/10">
            {/* Semi-transparent overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent z-10"></div>
            
            {/* GIF */}
            <div className="w-full">
              <img 
                src="/Web Pics1/Services/Services Main Page.gif" 
                alt="Sri Jyothi Engineering Services"
                className="w-full object-cover min-h-[300px] md:min-h-[500px] lg:min-h-[600px]"
                style={{ display: 'block' }}
              />
            </div>
            
            {/* Text overlay with enhanced styling */}
            {/* <div className="absolute inset-0 z-20 flex items-center">
              <div className="container px-8 md:px-12">
                <div className="max-w-xl">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg mb-4">
                    Innovative Engineering Solutions
                  </h3>
                  <p className="text-base md:text-lg text-white/90 drop-shadow-lg mb-6">
                    Our expert team delivers cutting-edge solutions for maintenance, repair, and optimization of industrial machinery across various sectors.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
                      Overhaul & Inspection
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
                      Labyrinth Seal Strips
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
                      Dynamic Balancing
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm">
                      Performance Optimization
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          
          {/* Additional info below the GIF */}
          {/* <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-gradient-to-br from-background to-blue-50/20 dark:from-gray-900 dark:to-gray-900/50 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg">
              <h4 className="text-xl font-bold text-primary mb-2">Precision Engineering</h4>
              <p className="text-muted-foreground">State-of-the-art equipment and highly skilled technicians ensure accuracy in all our engineering projects.</p>
            </div>
            <div className="bg-gradient-to-br from-background to-blue-50/20 dark:from-gray-900 dark:to-gray-900/50 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg">
              <h4 className="text-xl font-bold text-primary mb-2">Comprehensive Services</h4>
              <p className="text-muted-foreground">From analysis and diagnosis to repair and maintenance, we provide end-to-end solutions for industrial equipment.</p>
            </div>
            <div className="bg-gradient-to-br from-background to-blue-50/20 dark:from-gray-900 dark:to-gray-900/50 p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg">
              <h4 className="text-xl font-bold text-primary mb-2">Proven Experience</h4>
              <p className="text-muted-foreground">With 25+ years in the industry, our expertise spans across various engineering disciplines and industrial sectors.</p>
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  )
} 