import { Link } from 'react-router-dom'
import { motion } from 'motion/react'

const collectionItems = [
  {
    id: 1,
    image: '/images/collection-1.jpg',
  },
  {
    id: 2,
    image: '/images/collection-2.jpg',
  },
  {
    id: 3,
    image: '/images/collection-3.jpg',
  },
]

export function CollectionPreview() {
  return (
    <section data-section="collection-preview" className="px-8 py-24">
      {/* Asymmetric Grid */}
      <div className="grid grid-cols-5 gap-0.5 h-[80vh]">
        {/* Large item - spans 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="col-span-3 row-span-2 relative overflow-hidden group"
        >
          <Link to="/collection" className="block w-full h-full">
            <img
              src={collectionItems[0].image}
              alt="Collection"
              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </motion.div>

        {/* Small items - stacked on right */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.12 }}
          className="col-span-2 relative overflow-hidden group"
        >
          <Link to="/collection" className="block w-full h-full">
            <img
              src={collectionItems[1].image}
              alt="Collection"
              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.24 }}
          className="col-span-2 relative overflow-hidden group"
        >
          <Link to="/collection" className="block w-full h-full">
            <img
              src={collectionItems[2].image}
              alt="Collection"
              className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-[1.02]"
            />
          </Link>
        </motion.div>
      </div>

      {/* View Collection Link */}
      <div className="mt-8 text-center">
        <Link
          to="/collection"
          className="inline-block text-xs tracking-[0.2em] uppercase text-foreground underline-slide"
        >
          View Collection →
        </Link>
      </div>
    </section>
  )
}
