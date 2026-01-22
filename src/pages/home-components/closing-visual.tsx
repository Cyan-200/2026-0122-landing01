import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ClosingVisual() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !imageRef.current) return

    // Parallax effect
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      data-section="closing-visual"
      className="relative h-[60vh] w-full overflow-hidden"
    >
      {/* Top gradient overlay for seamless transition */}
      <div
        className="absolute top-0 left-0 right-0 h-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #FAFAFA, transparent)',
        }}
      />

      {/* Image container with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        <img
          src="/images/closing.jpg"
          alt="SKYPEOPLE"
          className="w-full h-full object-cover grayscale-[30%]"
        />
      </div>

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <span
          className="text-[200px] font-display tracking-[0.1em] uppercase text-foreground select-none"
          style={{ opacity: 0.03 }}
        >
          SKYPEOPLE
        </span>
      </div>

      {/* Noise texture layer */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.04] z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}
