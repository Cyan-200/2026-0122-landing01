import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { ReactLenis, useLenis } from 'lenis/react'
import { CustomCursor, type CursorType } from '@/components/effects/CustomCursor'

interface RootLayoutProps {
  cursorType?: CursorType
}

function ScrollReset() {
  const location = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true })
    }
  }, [location.pathname, lenis])

  return null
}

export function RootLayout({ cursorType = 'dot' }: RootLayoutProps) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        smoothWheel: true,
      }}
    >
      <ScrollReset />
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      {/* Hairline rules background */}
      <div className="hairline-rules fixed inset-0 pointer-events-none" aria-hidden="true" />
      <Outlet />
      <CustomCursor
        type={cursorType}
        color="#1A1A1A"
        size={8}
        glow={false}
        blendMode={undefined}
      />
    </ReactLenis>
  )
}
