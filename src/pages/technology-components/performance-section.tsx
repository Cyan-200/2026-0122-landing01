import { motion } from 'motion/react'

const performanceData = [
  { property: 'Waterproof Rating', standard: '10,000mm', skypeople: '20,000mm', improvement: '+100%' },
  { property: 'Breathability', standard: '8,000g', skypeople: '15,000g', improvement: '+87%' },
  { property: 'Fill Power', standard: '650', skypeople: '800+', improvement: '+23%' },
  { property: 'Weight (M)', standard: '750g', skypeople: '520g', improvement: '-31%' },
  { property: 'Pack Volume', standard: '8L', skypeople: '2.5L', improvement: '-69%' },
]

export function PerformanceSection() {
  return (
    <section data-section="performance" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section header with ruler underline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted font-mono">
            Performance Comparison
          </span>
          {/* Ruler underline */}
          <div className="mt-2 flex items-center">
            <div className="flex-1 relative h-2">
              {[0, 100, 200, 300, 400, 500].map((tick) => (
                <div
                  key={tick}
                  className="absolute top-0 w-px h-2 bg-border"
                  style={{ left: `${(tick / 500) * 100}%` }}
                />
              ))}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
            </div>
          </div>
        </motion.div>

        {/* Data table */}
        <div className="border border-border">
          {/* Header row */}
          <div className="grid grid-cols-4 border-b border-border">
            {['Property', 'Standard', 'SKYPEOPLE', 'Δ'].map((header, i) => (
              <div
                key={header}
                className={`p-4 text-[10px] tracking-[0.15em] uppercase font-mono text-muted ${
                  i > 0 ? 'text-right' : ''
                }`}
              >
                {header}
              </div>
            ))}
          </div>

          {/* Data rows */}
          {performanceData.map((row, index) => (
            <motion.div
              key={row.property}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`grid grid-cols-4 border-b border-border last:border-b-0 ${
                index % 2 === 0 ? '' : 'opacity-90'
              }`}
            >
              {/* Property */}
              <div className="p-4 text-xs text-foreground">
                {row.property}
              </div>

              {/* Standard (with grid pattern for odd rows) */}
              <div
                className={`p-4 text-xs font-mono text-muted text-right relative ${
                  index % 2 === 1 ? '' : ''
                }`}
                style={index % 2 === 0 ? {
                  backgroundImage: `
                    linear-gradient(to right, #E8E8E8 1px, transparent 1px),
                    linear-gradient(to bottom, #E8E8E8 1px, transparent 1px)
                  `,
                  backgroundSize: '8px 8px',
                  backgroundPosition: 'center',
                } : undefined}
              >
                <span className="relative z-10 bg-background px-1">{row.standard}</span>
              </div>

              {/* SKYPEOPLE */}
              <div className="p-4 text-xs font-mono text-foreground text-right font-medium">
                {row.skypeople}
              </div>

              {/* Improvement */}
              <div className="p-4 text-xs font-mono text-foreground text-right">
                {row.improvement}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 text-[10px] font-mono text-muted"
        >
          * Standard values represent industry average for comparable products.
        </motion.p>
      </div>
    </section>
  )
}
