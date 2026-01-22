import { useRef } from 'react'
import { motion } from 'motion/react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const statement = "Outerwear for professionals who move between contexts. Boardroom to mountain. No compromise on either."
const words = statement.split(' ')

export function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const watermarkRef = useRef<HTMLSpanElement>(null)

  useGSAP(() => {
    if (!sectionRef.current) return

    // Sticky effect for content until 40vh scroll
    if (contentRef.current) {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        end: '40% top',
        pin: contentRef.current,
        pinSpacing: false,
      })
    }

    // Parallax for watermark (slower at 0.3x)
    if (watermarkRef.current) {
      gsap.to(watermarkRef.current, {
        yPercent: 30,
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
      data-section="about-hero"
      className="relative h-screen min-h-[600px] flex items-center overflow-hidden"
    >
      {/* Hairline top border at nav clearance */}
      <div className="absolute top-20 left-0 right-0 h-px bg-border" />

      {/* Left vertical rule */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-foreground" />

      {/* ABOUT Watermark - clipped for quiet presence */}
      <div className="absolute left-0 top-0 bottom-0 w-[15%] overflow-hidden pointer-events-none">
        <motion.span
          ref={watermarkRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute text-[25vw] font-display font-light tracking-tight select-none whitespace-nowrap"
          style={{
            color: '#F2F2F2',
            transform: 'rotate(-90deg)',
            transformOrigin: 'left center',
            left: '20%',
            top: '50%',
          }}
        >
          ABOUT
        </motion.span>
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full max-w-7xl mx-auto px-8"
      >
        <div className="pl-[12%] max-w-3xl">
          {/* Thesis statement - word by word animation */}
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-display font-light leading-[1.3] tracking-tight text-foreground">
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.4 + index * 0.08,
                  ease: 'easeOut',
                }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
          </p>

          {/* Est. date */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + words.length * 0.08 + 0.3 }}
            className="mt-6 text-[10px] font-mono tracking-wider"
            style={{ color: '#999' }}
          >
            Est. 2024
          </motion.p>
        </div>
      </div>
    </section>
  )
}
