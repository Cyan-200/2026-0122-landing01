import { motion } from 'motion/react'
import { ProductCard, type Product } from './product-card'

interface ProductGridProps {
  products: Product[]
  onProductClick: (product: Product) => void
}

export function ProductGrid({ products, onProductClick }: ProductGridProps) {
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
      <div className="max-w-[1200px] mx-auto">
        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={() => onProductClick(product)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
