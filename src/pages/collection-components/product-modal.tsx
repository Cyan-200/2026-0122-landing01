import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import type { Product } from './product-card'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [activeImage, setActiveImage] = useState(0)

  // Reset active image when product changes
  useEffect(() => {
    setActiveImage(0)
  }, [product])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [product])

  const specRows = product ? [
    { label: 'Material', value: product.specs.material },
    { label: 'Fill Power', value: product.specs.fillPower },
    { label: 'Weight', value: product.specs.weight },
    { label: 'Waterproof', value: product.specs.waterproof },
    { label: 'Breathability', value: product.specs.breathability },
    { label: 'Care', value: product.specs.care },
  ] : []

  return (
    <AnimatePresence>
      {product && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(8px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-foreground/40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="fixed inset-4 md:inset-8 z-50 bg-white overflow-hidden"
          >
            {/* Grain texture */}
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.03]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              }}
            />

            {/* Close button - crosshair style */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 w-8 h-8 flex items-center justify-center text-foreground hover:opacity-70 transition-opacity group"
              aria-label="Close"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                className="text-foreground"
              >
                {/* Thin crosshair X */}
                <line
                  x1="4" y1="4" x2="16" y2="16"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="group-hover:stroke-2 transition-all"
                />
                <line
                  x1="16" y1="4" x2="4" y2="16"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="group-hover:stroke-2 transition-all"
                />
                {/* Center mark */}
                <circle cx="10" cy="10" r="1" fill="currentColor" opacity="0.3" />
              </svg>
            </button>

            {/* Content */}
            <div className="h-full grid grid-cols-1 lg:grid-cols-5 overflow-auto">
              {/* Left - Image Gallery (60%) */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col">
                {/* Main image with frame */}
                <div className="flex-1 relative border border-border p-5">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeImage}
                      src={[product.image, ...product.gallery][activeImage]}
                      alt={product.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-contain"
                    />
                  </AnimatePresence>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-2 mt-4">
                  {[product.image, ...product.gallery].slice(0, 4).map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`w-16 h-20 border transition-colors ${
                        activeImage === i ? 'border-foreground' : 'border-border hover:border-foreground/50'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right - Specs (40%) */}
              <div className="lg:col-span-2 p-8 lg:p-12 lg:border-l border-border overflow-auto">
                {/* Name */}
                <h2 className="text-2xl tracking-tight text-foreground">
                  {product.name}
                </h2>

                {/* Price */}
                <p className="text-lg text-foreground mt-2">
                  ¥{product.price.toLocaleString()}
                </p>

                {/* TCI Badge with tooltip */}
                <div className="mt-6 inline-flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-mono tracking-wider border border-foreground text-foreground">
                    TCI {product.tci.toFixed(1)}
                  </span>
                  <span className="text-[10px] text-muted">
                    Thermal Comfort Index
                  </span>
                </div>

                {/* Specs table */}
                <div className="mt-8">
                  <h3 className="text-[10px] tracking-[0.2em] uppercase text-muted mb-4">
                    Specifications
                  </h3>
                  <div className="divide-y divide-border">
                    {specRows.map((row, i) => (
                      <div
                        key={row.label}
                        className={`py-3 px-2 grid grid-cols-2 gap-4 ${
                          i % 2 === 0 ? '' : 'bg-background'
                        }`}
                      >
                        <span className="text-xs text-muted">{row.label}</span>
                        <span className="text-xs text-foreground">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology link */}
                <Link
                  to="/technology"
                  className="inline-flex items-center gap-2 mt-8 text-xs tracking-[0.15em] uppercase text-foreground underline-slide group"
                >
                  View Technology
                  <Icon
                    icon="lucide:arrow-right"
                    className="w-3 h-3 group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
