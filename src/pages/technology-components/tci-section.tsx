import { useRef, useEffect, useState } from 'react'
import { motion } from 'motion/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const products = [
  { name: 'Arctic Parka', tci: 9.2, image: '/images/products/arctic-parka.jpg' },
  { name: 'Summit Coat', tci: 8.5, image: '/images/products/summit-coat.jpg' },
  { name: 'Transit Jacket', tci: 7.0, image: '/images/products/transit-jacket.jpg' },
  { name: 'Boardroom Blazer', tci: 6.8, image: '/images/products/boardroom-blazer.jpg' },
  { name: 'Metro Vest', tci: 5.5, image: '/images/products/metro-vest.jpg' },
  { name: 'Altitude Shell', tci: 4.5, image: '/images/products/altitude-shell.jpg' },
]

const scaleLabels = [
  { range: '9-10', label: 'Extreme' },
  { range: '7-8', label: 'Warm' },
  { range: '4-6', label: 'Moderate' },
  { range: '0-3', label: 'Light' },
]

export function TCISection() {
  const sectionRef = useRef<HTMLElement>(null)
  const rulerRef = useRef<HTMLDivElement>(null)
  const [rulerProgress, setRulerProgress] = useState(0)

  useEffect(() => {
    if (!sectionRef.current || !rulerRef.current) return

    // Ruler draw-in animation from bottom to top
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'center center',
        scrub: 0.5,
        onUpdate: (self) => {
          setRulerProgress(self.progress)
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} data-section="tci-index" className="relative py-24">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left - Sticky explanation panel */}
          <div className="lg:col-span-2 lg:sticky lg:top-24 lg:self-start h-fit">
            <div className="relative p-8 border-r border-border">
              {/* Denser grid pattern */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, #E8E8E8 1px, transparent 1px),
                    linear-gradient(to bottom, #E8E8E8 1px, transparent 1px)
                  `,
                  backgroundSize: '10px 10px',
                }}
              />

              <div className="relative">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-6xl font-display font-bold text-foreground"
                >
                  TCI
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="mt-2 text-xs font-mono tracking-wider text-muted"
                >
                  Thermal Comfort Index
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-6 text-sm leading-relaxed text-foreground/80"
                >
                  A standardized measurement of insulation performance.
                  Higher values indicate greater warmth retention.
                </motion.p>

                {/* Scale explanation */}
                <div className="mt-8 space-y-3">
                  {scaleLabels.map((item, i) => (
                    <motion.div
                      key={item.range}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <span className="text-xs font-mono text-foreground w-12">{item.range}</span>
                      <span className="text-xs text-muted">{item.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right - Scale visualization */}
          <div className="lg:col-span-3 relative">
            {/* Vertical scale */}
            <div ref={rulerRef} className="relative h-[600px]">
              {/* Scale line - scroll-driven draw from bottom */}
              <div
                className="absolute left-8 bottom-0 w-px bg-foreground origin-bottom"
                style={{
                  height: `${rulerProgress * 100}%`,
                  transition: 'height 0.1s ease-out',
                }}
              />

              {/* Scale ticks and labels - revealed as ruler draws */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tick) => {
                const tickPosition = (10 - tick) / 10
                const tickThreshold = 1 - tickPosition
                const isTickVisible = rulerProgress >= tickThreshold
                return (
                  <motion.div
                    key={tick}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isTickVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute left-0 flex items-center gap-2"
                    style={{ top: `${(10 - tick) * 10}%` }}
                  >
                    <span className="text-[10px] font-mono text-muted w-4 text-right">{tick}</span>
                    <div className="w-3 h-px bg-foreground" />
                  </motion.div>
                )
              })}

              {/* Products positioned by TCI - fade in as ruler reaches their position */}
              {products.map((product) => {
                const position = ((10 - product.tci) / 10) * 100
                // Product becomes visible when ruler passes its position (from bottom)
                const productThreshold = 1 - position / 100
                const isVisible = rulerProgress >= productThreshold
                return (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="absolute left-16 flex items-center gap-4"
                    style={{ top: `${position}%`, transform: 'translateY(-50%)' }}
                  >
                    {/* Crosshair indicator */}
                    <svg width="8" height="8" viewBox="0 0 8 8" className="text-foreground">
                      <line x1="0" y1="4" x2="8" y2="4" stroke="currentColor" strokeWidth="1" />
                      <line x1="4" y1="0" x2="4" y2="8" stroke="currentColor" strokeWidth="1" />
                    </svg>

                    {/* Product thumbnail */}
                    <div className="w-16 h-20 border border-border overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover grayscale-[50%]"
                      />
                    </div>

                    {/* Product info */}
                    <div>
                      <p className="text-xs font-mono text-foreground">{product.name}</p>
                      <p className="text-[10px] font-mono text-muted">TCI {product.tci}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
