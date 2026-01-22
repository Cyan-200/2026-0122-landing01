import { useState } from 'react'
import { Nav, Footer } from './home-components'
import { CollectionHero, ProductGrid, ProductModal, type Product } from './collection-components'
import { getAssetPath } from '@/lib'

// Sample product data
const products: Product[] = [
  {
    id: 'arctic-parka',
    name: 'Arctic Parka',
    price: 7800,
    tci: 9.2,
    image: getAssetPath('/images/products/arctic-parka.jpg'),
    gallery: [
      getAssetPath('/images/products/arctic-parka-2.jpg'),
      getAssetPath('/images/products/arctic-parka-3.jpg'),
    ],
    specs: {
      material: 'Pertex® Quantum Pro',
      fillPower: '800-fill white goose down',
      weight: '680g',
      waterproof: '20,000mm',
      breathability: '15,000g/m²/24h',
      care: 'Professional clean recommended',
    },
  },
  {
    id: 'summit-coat',
    name: 'Summit Coat',
    price: 6500,
    tci: 8.5,
    image: getAssetPath('/images/products/summit-coat.jpg'),
    gallery: [
      getAssetPath('/images/products/summit-coat-2.jpg'),
    ],
    specs: {
      material: 'Pertex® Shield',
      fillPower: '700-fill white goose down',
      weight: '620g',
      waterproof: '20,000mm',
      breathability: '15,000g/m²/24h',
      care: 'Machine wash cold',
    },
  },
  {
    id: 'transit-jacket',
    name: 'Transit Jacket',
    price: 4800,
    tci: 7.0,
    image: getAssetPath('/images/products/transit-jacket.jpg'),
    gallery: [
      getAssetPath('/images/products/transit-jacket-2.jpg'),
    ],
    specs: {
      material: 'Pertex® Quantum',
      fillPower: '650-fill white goose down',
      weight: '420g',
      waterproof: '15,000mm',
      breathability: '12,000g/m²/24h',
      care: 'Machine wash cold',
    },
  },
  {
    id: 'metro-vest',
    name: 'Metro Vest',
    price: 3200,
    tci: 5.5,
    image: getAssetPath('/images/products/metro-vest.jpg'),
    gallery: [
      getAssetPath('/images/products/metro-vest-2.jpg'),
    ],
    specs: {
      material: 'Pertex® Quantum',
      fillPower: '700-fill white goose down',
      weight: '280g',
      waterproof: 'DWR treated',
      breathability: '15,000g/m²/24h',
      care: 'Machine wash cold',
    },
  },
  {
    id: 'boardroom-blazer',
    name: 'Boardroom Blazer',
    price: 5500,
    tci: 6.8,
    image: getAssetPath('/images/products/boardroom-blazer.jpg'),
    gallery: [
      getAssetPath('/images/products/boardroom-blazer-2.jpg'),
    ],
    specs: {
      material: 'Silent Nylon™ + PrimaLoft®',
      fillPower: 'Synthetic 133g/m²',
      weight: '480g',
      waterproof: 'DWR treated',
      breathability: '18,000g/m²/24h',
      care: 'Dry clean',
    },
  },
  {
    id: 'altitude-shell',
    name: 'Altitude Shell',
    price: 4200,
    tci: 4.5,
    image: getAssetPath('/images/products/altitude-shell.jpg'),
    gallery: [
      getAssetPath('/images/products/altitude-shell-2.jpg'),
    ],
    specs: {
      material: 'Pertex® Shield Pro',
      fillPower: 'N/A (shell only)',
      weight: '320g',
      waterproof: '25,000mm',
      breathability: '20,000g/m²/24h',
      care: 'Machine wash cold',
    },
  },
]

export default function CollectionPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Grain texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E8E8E8 1px, transparent 1px),
            linear-gradient(to bottom, #E8E8E8 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <Nav />

      <main>
        <CollectionHero productCount={products.length} />
        <ProductGrid
          products={products}
          onProductClick={setSelectedProduct}
        />
      </main>

      <Footer />

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}
