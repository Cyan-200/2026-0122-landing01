import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Collection', href: '/collection' },
  { label: 'Technology', href: '/technology' },
  { label: 'About', href: '/about' },
]

export function Nav() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8 bg-transparent">
      {/* Logo */}
      <Link
        to="/"
        className="text-sm font-medium tracking-[0.2em] uppercase text-foreground underline-slide"
      >
        SKYPEOPLE
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-8">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`text-xs tracking-[0.15em] uppercase underline-slide ${
                isActive ? 'text-foreground font-medium' : 'text-foreground'
              }`}
              style={isActive ? { textDecoration: 'underline', textUnderlineOffset: '4px' } : {}}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
