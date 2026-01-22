import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Icon } from '@iconify/react'

const collectionLinks = [
  { label: 'All Products', href: '/collection' },
  { label: 'New Arrivals', href: '/collection?filter=new' },
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'lucide:instagram' },
  { label: 'WeChat', href: '#', icon: 'lucide:message-circle' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'lucide:linkedin' },
]

const legalLinks = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
    setEmail('')
  }

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      data-section="footer"
      className="bg-foreground text-background"
    >
      {/* Top border */}
      <div className="h-px bg-border-dark" />

      {/* Main Footer Content */}
      <div className="px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-sm font-medium tracking-[0.2em] uppercase">
                SKYPEOPLE
              </span>
            </Link>
            <p className="text-xs text-background/60 leading-relaxed">
              Outerwear for professionals
            </p>
          </div>

          {/* Column 2: Collection */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-4 text-background/40">
              Collection
            </h4>
            <ul className="space-y-3">
              {collectionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-[13px] text-background/80 hover:text-background transition-colors underline-slide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-4 text-background/40">
              Connect
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] text-background/80 hover:text-background transition-colors inline-flex items-center gap-2 underline-slide"
                  >
                    <Icon icon={link.icon} className="w-4 h-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase mb-4 text-background/40">
              Newsletter
            </h4>
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="flex-1 bg-transparent border-b border-background/20 text-[13px] py-2 focus:outline-none focus:border-background/60 transition-colors placeholder:text-background/40"
                required
              />
              <button
                type="submit"
                className="p-2 hover:bg-background/10 transition-colors rounded"
                aria-label="Subscribe"
              >
                <Icon icon="lucide:arrow-right" className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="px-8 py-6 border-t border-background/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-[11px] text-background/40">
            © 2025 SKYPEOPLE
          </span>
          <div className="flex gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-[11px] text-background/40 hover:text-background/80 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}
