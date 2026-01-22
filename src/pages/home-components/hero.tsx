import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { getAssetPath } from '@/lib'

gsap.registerPlugin(ScrollTrigger)

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!sectionRef.current || !imageRef.current) return

    // Parallax effect - image moves slower than scroll
    gsap.to(imageRef.current, {
      yPercent: 20,
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
      data-section="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Image container with parallax */}
      <div
        ref={imageRef}
        className="absolute inset-0 -top-[10%] h-[120%]"
      >
        <img
          src={getAssetPath('/images/hero.jpg')}
          alt="SKYPEOPLE Outerwear"
          className="w-full h-full object-cover grayscale-[30%]"
        />
      </div>

      {/* Vignette overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      {/* Noise texture layer */}
      <div
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}
