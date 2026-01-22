import { motion } from 'motion/react'
import { ProductCard, type Product } from './product-card'

interface ProductGridProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
  // Define which items should be large (spanning 2 rows)
  const largeIndices = [0, 3] // First and fourth items are large

  return (
    <section data-section="product-grid" className="relative px-8 py-16">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center mb-12"
      >
        <div className="flex-1 h-px bg-border" />
        <span className="px-6 text-[10px] tracking-[0.3em] uppercase text-muted font-mono">
          Specimens
        </span>
        <div className="flex-1 h-px bg-border" />
      </motion.div>

      {/* Grid container */}
      <div className="max-w-[1200px] mx-auto relative">
        {/* Left measurement marks */}
        <div className="absolute -left-12 top-0 bottom-0 w-8 hidden lg:block">
          {[0, 200, 400, 600, 800, 1000, 1200].map((mark, i) => (
            <motion.div
              key={mark}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="absolute flex items-center gap-1"
              style={{ top: mark }}
            >
              <span className="text-[8px] font-mono text-muted/50">{mark}</span>
              <div className="w-3 h-px bg-border" />
            </motion.div>
          ))}
        </div>

        {/* Asymmetric grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => onProductClick(product)}
              large={largeIndices.includes(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
