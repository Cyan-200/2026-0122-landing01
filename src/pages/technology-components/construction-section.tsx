import { useRef } from 'react'
import { motion, useInView } from 'motion/react'

const seamlessSpecs = [
  'Zero needle holes',
  'Ultrasonic bonding at 40kHz',
  'Increased waterproof integrity',
  'Cleaner silhouette',
]

const packSpecs = [
  'Self-stowing pocket',
  'Compressed volume: 2.5L',
  'Recovery time: <60s',
]

// Folding sequence with step-by-step reveal animation
function FoldingSequenceDiagram() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stepDelay = (step: number) => 0.3 + step * 0.25 // 250ms between each step

  return (
    <div ref={ref} className="lg:col-span-3 order-1 lg:order-2 border border-border p-8">
      <svg viewBox="0 0 400 100" className="w-full h-auto">
        <g stroke="#1A1A1A" strokeWidth="1" fill="none">
          {/* Step 1: Full jacket */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: stepDelay(0) }}
          >
            <rect x="10" y="20" width="60" height="50" />
            <line x1="40" y1="20" x2="40" y2="70" strokeDasharray="2,2" />
            <text x="40" y="85" textAnchor="middle" className="text-[6px] fill-muted font-mono">1. FLAT</text>
          </motion.g>

          {/* Arrow 1 */}
          <motion.path
            d="M 80 45 L 95 45"
            markerEnd="url(#arrowRight)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
            transition={{ duration: 0.3, delay: stepDelay(0.5) }}
          />

          {/* Step 2: Folded in half */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: stepDelay(1) }}
          >
            <rect x="110" y="25" width="30" height="50" />
            <rect x="112" y="27" width="26" height="46" strokeDasharray="2,2" />
            <text x="125" y="85" textAnchor="middle" className="text-[6px] fill-muted font-mono">2. FOLD</text>
          </motion.g>

          {/* Arrow 2 */}
          <motion.path
            d="M 150 45 L 165 45"
            markerEnd="url(#arrowRight)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
            transition={{ duration: 0.3, delay: stepDelay(1.5) }}
          />

          {/* Step 3: Rolled */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: stepDelay(2) }}
          >
            <ellipse cx="205" cy="45" rx="25" ry="20" />
            <path d="M 185 45 Q 205 35 225 45" strokeDasharray="2,2" />
            <text x="205" y="85" textAnchor="middle" className="text-[6px] fill-muted font-mono">3. ROLL</text>
          </motion.g>

          {/* Arrow 3 */}
          <motion.path
            d="M 240 45 L 255 45"
            markerEnd="url(#arrowRight)"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={isInView ? { opacity: 1, pathLength: 1 } : { opacity: 0, pathLength: 0 }}
            transition={{ duration: 0.3, delay: stepDelay(2.5) }}
          />

          {/* Step 4: In pocket */}
          <motion.g
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: stepDelay(3) }}
          >
            <rect x="270" y="30" width="40" height="35" rx="2" />
            <line x1="270" y1="40" x2="310" y2="40" />
            <circle cx="290" cy="55" r="8" strokeDasharray="2,2" />
            <text x="290" y="85" textAnchor="middle" className="text-[6px] fill-muted font-mono">4. STOW</text>
          </motion.g>

          {/* Final size indicator */}
          <motion.g
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4, delay: stepDelay(3.5) }}
          >
            <text x="360" y="35" textAnchor="middle" className="text-[10px] fill-foreground font-mono">2.5L</text>
            <text x="360" y="50" textAnchor="middle" className="text-[6px] fill-muted font-mono">FINAL</text>
            <text x="360" y="60" textAnchor="middle" className="text-[6px] fill-muted font-mono">VOLUME</text>
          </motion.g>

          {/* Arrow marker */}
          <defs>
            <marker id="arrowRight" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M 0 0 L 6 3 L 0 6 Z" fill="#1A1A1A" />
            </marker>
          </defs>
        </g>
      </svg>
    </div>
  )
}

export function ConstructionSection() {
  return (
    <section data-section="construction" className="py-24 border-t border-border">
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
            Construction
          </span>
        </motion.div>

        {/* Row 1: Seamless Construction - Diagram left, specs right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center mb-16"
        >
          {/* Diagram */}
          <div className="lg:col-span-3 border border-border p-8">
            <svg viewBox="0 0 400 150" className="w-full h-auto">
              <g stroke="#1A1A1A" strokeWidth="1" fill="none">
                {/* Traditional stitching (left) */}
                <text x="100" y="15" textAnchor="middle" className="text-[8px] fill-muted font-mono">TRADITIONAL</text>

                {/* Fabric layers with needle holes */}
                <rect x="20" y="30" width="160" height="40" />
                <rect x="20" y="75" width="160" height="40" />

                {/* Needle holes */}
                {[40, 70, 100, 130, 160].map((x) => (
                  <g key={x}>
                    <circle cx={x} cy="50" r="2" fill="#1A1A1A" />
                    <circle cx={x} cy="95" r="2" fill="#1A1A1A" />
                    <line x1={x} y1="52" x2={x} y2="93" strokeDasharray="2,2" />
                  </g>
                ))}

                {/* X marks for water penetration */}
                <text x="100" y="135" textAnchor="middle" className="text-[7px] fill-muted font-mono">WATER ENTRY POINTS</text>

                {/* Divider */}
                <line x1="200" y1="20" x2="200" y2="130" strokeDasharray="4,4" opacity="0.3" />

                {/* Ultrasonic (right) */}
                <text x="300" y="15" textAnchor="middle" className="text-[8px] fill-foreground font-mono">ULTRASONIC</text>

                {/* Seamless fabric layers */}
                <rect x="220" y="30" width="160" height="40" />
                <rect x="220" y="75" width="160" height="40" />

                {/* Bonding zone */}
                <rect x="220" y="68" width="160" height="10" fill="#E8E8E8" stroke="none" />
                <text x="300" y="74" textAnchor="middle" className="text-[5px] fill-foreground font-mono">BONDED</text>

                {/* 40kHz indicator */}
                <path d="M 240 120 Q 260 110 280 120 T 320 120 T 360 120" strokeWidth="0.5" />
                <text x="300" y="135" textAnchor="middle" className="text-[7px] fill-muted font-mono">40kHz ULTRASONIC WELD</text>
              </g>
            </svg>
          </div>

          {/* Specs */}
          <div className="lg:col-span-2">
            <h3 className="text-sm tracking-[0.1em] uppercase font-medium text-foreground mb-6">
              Seamless Construction
            </h3>
            <ul className="space-y-3">
              {seamlessSpecs.map((spec, i) => (
                <motion.li
                  key={spec}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-xs text-muted"
                >
                  <span className="w-1 h-1 bg-foreground rounded-full" />
                  {spec}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-border mb-16" />

        {/* Row 2: Pack and Go - Specs left, diagram right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center"
        >
          {/* Specs */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <h3 className="text-sm tracking-[0.1em] uppercase font-medium text-foreground mb-6">
              Pack and Go
            </h3>
            <ul className="space-y-3">
              {packSpecs.map((spec, i) => (
                <motion.li
                  key={spec}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3 text-xs text-muted"
                >
                  <span className="w-1 h-1 bg-foreground rounded-full" />
                  {spec}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Folding sequence diagram with step-by-step reveal */}
          <FoldingSequenceDiagram />
        </motion.div>
      </div>
    </section>
  )
}
