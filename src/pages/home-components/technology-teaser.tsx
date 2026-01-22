import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'

const techCards = [
  {
    id: 'membrane',
    icon: 'lucide:layers',
    label: 'MEMBRANE',
    description: 'Triple-layer waterproof bonding',
  },
  {
    id: 'seams',
    icon: 'lucide:zap',
    label: 'SEAMS',
    description: 'Ultrasonic welded, zero needle holes',
  },
  {
    id: 'venting',
    icon: 'lucide:wind',
    label: 'VENTING',
    description: 'Laser-cut back panel ventilation',
  },
  {
    id: 'lining',
    icon: 'lucide:recycle',
    label: 'LINING',
    description: 'Recycled polyester, antimicrobial',
  },
]

export function TechnologyTeaser() {
  return (
    <section data-section="technology-teaser" className="py-24">
      {/* Section Label */}
      <div className="px-8 mb-8">
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted">
          Technology
        </span>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative">
        {/* Horizontal line running through cards */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-border-dark z-0" />

        {/* Scrollable area */}
        <div className="flex gap-4 overflow-x-auto px-8 pb-4 snap-x snap-mandatory scrollbar-hide">
          {techCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
              className="flex-shrink-0 w-80 snap-start"
            >
              <div className="relative bg-background border border-border hover:border-foreground transition-colors duration-300 p-6 group">
                {/* Icon */}
                <div className="mb-6 flex items-center justify-center h-12">
                  <Icon
                    icon={card.icon}
                    className="w-12 h-12 text-foreground stroke-1"
                  />
                </div>

                {/* Label */}
                <h3 className="text-xs tracking-[0.2em] uppercase text-foreground mb-2">
                  {card.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* View All Technology Link */}
      <div className="px-8 mt-8">
        <Link
          to="/technology"
          className="inline-block text-xs tracking-[0.2em] uppercase text-foreground underline-slide"
        >
          All Specifications →
        </Link>
      </div>
    </section>
  )
}
