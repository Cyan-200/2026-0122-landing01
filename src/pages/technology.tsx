import { motion } from 'motion/react'
import { Nav, Footer } from './home-components'
import {
  TechnologyHero,
  TCISection,
  MaterialsSection,
  ConstructionSection,
  PerformanceSection,
} from './technology-components'

export default function TechnologyPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-background"
    >
      {/* Grain texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blueprint grid pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8E8E8 1px, transparent 1px),
            linear-gradient(to bottom, #E8E8E8 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }}
      />

      <Nav />

      <main className="relative z-10">
        <TechnologyHero />
        <TCISection />
        <MaterialsSection />
        <ConstructionSection />
        <PerformanceSection />
      </main>

      <Footer />
    </motion.div>
  )
}
