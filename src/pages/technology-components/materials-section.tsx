import { useRef, useId } from 'react'
import { motion, useInView } from 'motion/react'

// SVG draw-in animation component with proper stroke animation
function AnimatedSVG({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const uniqueId = useId().replace(/:/g, '')

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
            .svg-draw-${uniqueId} path,
            .svg-draw-${uniqueId} line,
            .svg-draw-${uniqueId} rect,
            .svg-draw-${uniqueId} circle,
            .svg-draw-${uniqueId} ellipse {
              stroke-dasharray: 500;
              stroke-dashoffset: ${isInView ? '0' : '500'};
              transition: stroke-dashoffset 1s ease-out;
            }
          `
        }} />
        <div className={`svg-draw-${uniqueId}`}>
          {children}
        </div>
      </motion.div>
    </div>
  )
}

const materials = [
  {
    id: 'pertex',
    name: 'PERTEX® QUANTUM',
    specs: 'Waterproof: 20,000mm | Breathable: 15,000g/m²/24h | Weight: 28g/m²',
    diagram: (
      <svg viewBox="0 0 120 80" className="w-full h-24">
        {/* Cross-section of fabric layers */}
        <g stroke="#1A1A1A" strokeWidth="1" fill="none">
          {/* Top layer - DWR */}
          <path d="M 10 15 Q 30 10 60 15 T 110 15" strokeDasharray="2,2" />
          <text x="5" y="12" className="text-[6px] fill-muted font-mono">DWR</text>

          {/* Face fabric */}
          <rect x="10" y="20" width="100" height="15" />
          <text x="60" y="30" textAnchor="middle" className="text-[6px] fill-muted font-mono">FACE FABRIC</text>

          {/* Membrane */}
          <rect x="10" y="38" width="100" height="8" strokeDasharray="4,2" />
          <text x="60" y="44" textAnchor="middle" className="text-[6px] fill-muted font-mono">MEMBRANE</text>

          {/* Backer */}
          <rect x="10" y="49" width="100" height="12" />
          <text x="60" y="57" textAnchor="middle" className="text-[6px] fill-muted font-mono">BACKER</text>

          {/* Arrows showing breathability */}
          <path d="M 25 65 L 25 75" markerEnd="url(#arrow)" />
          <path d="M 60 65 L 60 75" markerEnd="url(#arrow)" />
          <path d="M 95 65 L 95 75" markerEnd="url(#arrow)" />

          {/* Arrow marker definition */}
          <defs>
            <marker id="arrow" markerWidth="4" markerHeight="4" refX="2" refY="2" orient="auto">
              <path d="M 0 0 L 4 2 L 0 4 Z" fill="#1A1A1A" />
            </marker>
          </defs>
        </g>
      </svg>
    ),
  },
  {
    id: 'down',
    name: '800-FILL GOOSE DOWN',
    specs: 'Fill Power: 800+ | Origin: European White Goose | RDS Certified',
    diagram: (
      <svg viewBox="0 0 120 80" className="w-full h-24">
        {/* Down cluster illustration */}
        <g stroke="#1A1A1A" strokeWidth="0.5" fill="none">
          {/* Central cluster */}
          <circle cx="60" cy="40" r="20" strokeDasharray="2,1" />

          {/* Filaments radiating out */}
          {[...Array(16)].map((_, i) => {
            const angle = (i * 360) / 16
            const rad = (angle * Math.PI) / 180
            const x1 = 60 + 20 * Math.cos(rad)
            const y1 = 40 + 20 * Math.sin(rad)
            const x2 = 60 + 35 * Math.cos(rad)
            const y2 = 40 + 35 * Math.sin(rad)
            return (
              <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
            )
          })}

          {/* Outer boundary */}
          <circle cx="60" cy="40" r="35" strokeDasharray="4,2" />

          {/* Labels */}
          <text x="60" y="42" textAnchor="middle" className="text-[6px] fill-muted font-mono">800+</text>
          <text x="60" y="72" textAnchor="middle" className="text-[5px] fill-muted font-mono">FILL POWER</text>
        </g>
      </svg>
    ),
  },
  {
    id: 'nylon',
    name: 'SILENT NYLON™',
    specs: 'Noise Reduction: 85% | Soft-touch finish | Movement-friendly',
    diagram: (
      <svg viewBox="0 0 120 80" className="w-full h-24">
        {/* Sound waveform comparison */}
        <g stroke="#1A1A1A" strokeWidth="1" fill="none">
          {/* Standard nylon - high amplitude */}
          <text x="5" y="15" className="text-[5px] fill-muted font-mono">STANDARD</text>
          <path d="M 10 25 Q 20 10 30 25 T 50 25 T 70 25 T 90 25 T 110 25" />

          {/* Divider */}
          <line x1="10" y1="40" x2="110" y2="40" strokeDasharray="2,2" opacity="0.3" />

          {/* Silent nylon - low amplitude */}
          <text x="5" y="55" className="text-[5px] fill-muted font-mono">SILENT</text>
          <path d="M 10 60 Q 20 57 30 60 T 50 60 T 70 60 T 90 60 T 110 60" />

          {/* 85% reduction indicator */}
          <text x="60" y="75" textAnchor="middle" className="text-[6px] fill-foreground font-mono">-85% NOISE</text>
        </g>
      </svg>
    ),
  },
]

export function MaterialsSection() {
  return (
    <section data-section="materials" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-mono">
            Materials
          </span>
        </motion.div>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((material, index) => (
            <motion.div
              key={material.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-border hover:border-foreground transition-colors duration-200 p-6"
            >
              {/* Diagram with draw-in animation and hover pulse */}
              <AnimatedSVG className="mb-6 transition-all duration-300 group-hover:scale-[1.02] group-hover:opacity-90">
                {material.diagram}
              </AnimatedSVG>

              {/* Name */}
              <h3 className="text-xs tracking-[0.15em] uppercase font-medium text-foreground mb-3">
                {material.name}
              </h3>

              {/* Specs */}
              <p className="text-[10px] font-mono text-muted leading-relaxed">
                {material.specs.split(' | ').map((spec, i) => (
                  <span key={i}>
                    {spec}
                    {i < material.specs.split(' | ').length - 1 && (
                      <span className="mx-2 text-border">|</span>
                    )}
                  </span>
                ))}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
