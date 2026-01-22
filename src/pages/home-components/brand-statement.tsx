import { motion } from 'motion/react'

const specs = [
  { label: 'Waterproof', value: '20K' },
  { label: 'Breathable', value: '15K' },
  { label: '4-Way Stretch', value: '' },
]

export function BrandStatement() {
  return (
    <section
      data-section="brand-statement"
      className="relative px-8 py-32"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-8">
        {/* Left - Rotated Label with hairline */}
        <div className="col-span-3 relative">
          {/* Hairline rule */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-foreground" />

          {/* Rotated text - proper -90deg rotation */}
          <div className="pl-8 pt-4 h-32 relative">
            <span
              className="absolute text-[10px] tracking-[0.3em] uppercase text-muted origin-top-left -rotate-90 whitespace-nowrap"
              style={{ top: '80px', left: '32px' }}
            >
              MANIFESTO
            </span>
          </div>
        </div>

        {/* Right - Statement Block */}
        <div className="col-span-9">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-2xl leading-relaxed tracking-tight text-foreground max-w-xl"
          >
            Performance outerwear for business contexts.
            <br />
            One coat. Every condition.
          </motion.p>

          {/* Specs */}
          <div className="mt-12 flex gap-8">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.3 + index * 0.08 }}
                className="flex items-baseline gap-2"
              >
                <span className="text-[11px] tracking-[0.15em] uppercase font-mono text-muted">
                  {spec.label}
                </span>
                {spec.value && (
                  <span className="text-[11px] tracking-[0.1em] font-mono text-foreground">
                    {spec.value}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
