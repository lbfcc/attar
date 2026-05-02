import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useScrollHeader } from '@/hooks/useScrollHeader'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Расширенная гарантия', href: '/warranty' },
  { label: 'Каталог', href: '/catalog' },
  { label: 'Где купить', href: '#stores' },
]

export default function Header() {
  const scrolled = useScrollHeader(100)
  const navigate = useNavigate()
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileOpen(false)

    if (href.startsWith('/')) {
      navigate(href)
      return
    }

    if (location.pathname !== '/') {
      navigate(`/${href}`)
      return
    }

    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(20,20,20,0.85)] backdrop-blur-[20px]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between h-20 lg:h-[100px]">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="text-white text-2xl font-bold tracking-wide lowercase"
          >
            attar
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium uppercase tracking-wider text-white hover:text-neon-orange transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:88000708087"
              className="hidden md:block text-sm font-semibold text-white"
            >
              8 (800) 070-80-87
            </a>

            <a
              href="#configurator"
              onClick={(e) => handleNavClick(e, '#configurator')}
              className="hidden sm:block text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full bg-gradient-to-r from-neon-orange to-warm-orange text-black hover:scale-[1.02] hover:shadow-orange-glow transition-all duration-200"
            >
              Подобрать шины
            </a>

            {/* Language toggle */}
            <div className="hidden md:flex items-center gap-1 text-xs font-medium">
              <span className="text-white">RU</span>
              <span className="text-[#999999]">|</span>
              <span className="text-[#999999] hover:text-white cursor-pointer transition-colors">KZ</span>
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-black flex flex-col items-center justify-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-semibold uppercase tracking-wider text-white hover:text-neon-orange transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:88000708087"
            className="text-lg font-semibold text-neon-orange mt-4"
          >
            8 (800) 070-80-87
          </a>
        </div>
      )}
    </>
  )
}
