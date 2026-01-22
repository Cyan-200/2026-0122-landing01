import {
  Nav,
  Hero,
  CollectionPreview,
  BrandStatement,
  TechnologyTeaser,
  ClosingVisual,
  Footer,
} from './home-components'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <CollectionPreview />
        <BrandStatement />
        <TechnologyTeaser />
        <ClosingVisual />
      </main>
      <Footer />
    </div>
  )
}
