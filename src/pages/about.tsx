import { Nav } from './home-components/nav'
import { Footer } from './home-components/footer'
import { AboutHero, ContactSection } from './about-components'

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-background">
      <Nav />
      <main>
        <AboutHero />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
