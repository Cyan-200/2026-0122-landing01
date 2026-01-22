import { useRef } from 'react'
import { motion } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function TechnologyHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const gaugeRef = useRef<SVGSVGElement>(null)
  const watermarkRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    // Parallax for gauge
    if (gaugeRef.current) {
      gsap.to(gaugeRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }

    // Parallax for watermark (slower)
    if (watermarkRef.current) {
      gsap.to(watermarkRef.current, {
        yPercent: 40,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="technology-hero"
      className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden pt-16"
    >
      {/* Blueprint grid overlay - major (40px) and minor (10px) intervals */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8E8E8 1px, transparent 1px),
            linear-gradient(to bottom, #E8E8E8 1px, transparent 1px),
            linear-gradient(to right, rgba(232,232,232,0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(232,232,232,0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 10px 10px, 10px 10px',
          opacity: 0.1,
        }}
      />

      {/* Left vertical rule */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-foreground" />

      {/* TCI Watermark */}
      <motion.span
        ref={watermarkRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[40vw] font-display font-light tracking-tight text-border select-none pointer-events-none"
        style={{ color: '#F0F0F0' }}
      >
        TCI
      </motion.span>

      {/* Content */}
      <div className="relative z-10 px-8 w-full max-w-7xl mx-auto flex items-center justify-between">
        {/* Left - Typography */}
        <div className="pl-[12%]">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[10vw] font-display font-light tracking-[0.1em] uppercase text-foreground leading-none"
          >
            Technology
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-sm font-mono tracking-wider text-muted"
          >
            Quantified performance.
          </motion.p>
        </div>

        {/* Right - TCI Gauge */}
        <div className="relative">
          <motion.svg
            ref={gaugeRef}
            width="200"
            height="120"
            viewBox="0 0 200 120"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Gauge arc */}
            <path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="#E8E8E8"
              strokeWidth="2"
            />

            {/* Tick marks */}
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tick) => {
              const angle = (180 / 10) * tick
              const rad = (angle * Math.PI) / 180
              const x1 = 100 - 80 * Math.cos(rad)
              const y1 = 100 - 80 * Math.sin(rad)
              const x2 = 100 - 70 * Math.cos(rad)
              const y2 = 100 - 70 * Math.sin(rad)
              return (
                <line
                  key={tick}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#1A1A1A"
                  strokeWidth="1"
                />
              )
            })}

            {/* Needle - animated to 8.5 */}
            <motion.line
              x1="100"
              y1="100"
              x2="100"
              y2="30"
              stroke="#1A1A1A"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ rotate: -90 }}
              animate={{ rotate: 63 }} // 8.5 on 0-10 scale = (8.5/10) * 180 - 90 = 63
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              style={{ transformOrigin: '100px 100px' }}
            />

            {/* Center dot */}
            <circle cx="100" cy="100" r="4" fill="#1A1A1A" />

            {/* Scale labels */}
            <text x="20" y="115" className="text-[10px] font-mono fill-muted">0</text>
            <text x="95" y="20" className="text-[10px] font-mono fill-muted">5</text>
            <text x="175" y="115" className="text-[10px] font-mono fill-muted">10</text>
          </motion.svg>

          {/* Horizontal measurement scale below gauge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-2 flex items-center justify-center"
          >
            <div className="relative w-[180px] h-3">
              {/* Scale line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-border" />
              {/* Tick marks and labels */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((tick) => (
                <div
                  key={tick}
                  className="absolute top-0 flex flex-col items-center"
                  style={{ left: `${(tick / 10) * 100}%`, transform: 'translateX(-50%)' }}
                >
                  <div className={`w-px ${tick % 5 === 0 ? 'h-2 bg-foreground' : 'h-1 bg-border'}`} />
                  {tick % 2 === 0 && (
                    <span className="text-[7px] font-mono text-muted mt-0.5">{tick}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* TCI Value */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-center mt-2"
          >
            <span className="text-2xl font-mono font-medium text-foreground">8.5</span>
            <span className="text-xs font-mono text-muted ml-1">TCI</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute bottom-0 left-0 right-0 h-px bg-border origin-left"
      />
    </section>
  )
}
