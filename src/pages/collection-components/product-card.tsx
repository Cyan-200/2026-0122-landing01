import { motion } from 'motion/react'

export interface Product {
  id: string
  name: string
  price: number
  tci: number
  image: string
  gallery: string[]
  specs: {
    material: string
    fillPower: string
    weight: string
    waterproof: string
    breathability: string
    care: string
  }
}

interface ProductCardProps {
  product: Product
  index: number
  onClick: () => void
}

export function ProductCard({ product, index, onClick }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: index * 0.08 }}
      onClick={onClick}
      className="group relative border border-border hover:border-foreground transition-colors duration-200 bg-transparent cursor-pointer"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Image container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-[20%] transition-all duration-300"
        />
      </div>

      {/* Product info */}
      <div className="p-4 flex items-start justify-between gap-4">
        <div className="flex-1">
          {/* Name */}
          <h3 className="text-xs tracking-[0.05em] uppercase text-foreground group-hover:tracking-[0.1em] transition-all duration-200">
            {product.name}
          </h3>

          {/* TCI Badge */}
          <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-mono tracking-wider border border-border text-muted">
            TCI {product.tci.toFixed(1)}
          </span>
        </div>

        {/* Price */}
        <span className="text-sm text-foreground">
          ¥{product.price.toLocaleString()}
        </span>
      </div>
    </motion.article>
  )
}
