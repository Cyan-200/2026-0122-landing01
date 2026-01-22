import { useRef } from 'react'
import { motion } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface CollectionHeroProps {
  productCount: number
}

export function CollectionHero({ productCount }: CollectionHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const crosshairRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !textRef.current || !crosshairRef.current) return

    // Parallax - text at 0.7x, crosshairs at 0.5x
    gsap.to(textRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to(crosshairRef.current, {
      yPercent: 50,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="collection-hero"
      className="relative h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-16"
    >
      {/* Radial gradient mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 30%, rgba(250,250,250,0.1) 100%)',
        }}
      />

      {/* Crosshair SVG overlay */}
      <motion.svg
        ref={crosshairRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {/* Vertical line - draw from center outward using two paths */}
        <motion.path
          d="M50 50 L50 0"
          stroke="#1A1A1A"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        />
        <motion.path
          d="M50 50 L50 100"
          stroke="#1A1A1A"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        />
        {/* Horizontal line - draw from center outward using two paths */}
        <motion.path
          d="M50 50 L0 50"
          stroke="#1A1A1A"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        />
        <motion.path
          d="M50 50 L100 50"
          stroke="#1A1A1A"
          strokeWidth="0.1"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        />
        {/* Center crosshair marks */}
        <motion.line
          x1="48" y1="50" x2="52" y2="50"
          stroke="#1A1A1A"
          strokeWidth="0.15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
        <motion.line
          x1="50" y1="48" x2="50" y2="52"
          stroke="#1A1A1A"
          strokeWidth="0.15"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        />
      </motion.svg>

      {/* Typography */}
      <motion.h1
        ref={textRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-[12vw] font-display font-light tracking-[0.3em] uppercase text-foreground leading-none select-none"
      >
        Collection
      </motion.h1>

      {/* Divider line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="w-full h-px bg-border mt-12 origin-center"
      />

      {/* Product count */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-8 right-8 text-[10px] font-mono tracking-[0.15em] uppercase text-muted"
      >
        {productCount} Pieces
      </motion.p>
    </section>
  )
}
