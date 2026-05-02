import { Phone, Mail, MapPin } from 'lucide-react'

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'О бренде', href: '#about' },
  { label: 'Каталог', href: '#popular' },
  { label: 'Где купить', href: '#stores' },
  { label: 'Гарантия', href: '#warranty' },
]
const productLinks = ['Летние шины', 'Зимние шины', 'Шины для SUV', 'Расширенная гарантия']

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-black border-t border-charcoal">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo column */}
          <div>
            <div className="text-white text-2xl font-bold tracking-wide lowercase mb-4">
              attar
            </div>
            <p className="text-sm text-[#999999]">
              Премиальные шины для вашего автомобиля
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#999999] mb-4">
              Навигация
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-sm text-white hover:text-neon-orange transition-colors duration-200 cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#999999] mb-4">
              Продукция
            </h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link}>
                  <span className="text-sm text-white hover:text-neon-orange transition-colors duration-200 cursor-pointer">
                    {link}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#999999] mb-4">
              Контакты
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-neon-orange" />
                <a href="tel:88000708087" className="text-sm font-semibold text-neon-orange">
                  8 (800) 070-80-87
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#999999]" />
                <span className="text-sm text-white">info@attar-tyres.kz</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#999999] mt-0.5" />
                <span className="text-sm text-white">г. Сарань, ул. Промышленная, 1</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-charcoal mt-10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-[#999999]">
              © 2025 Attar Tyres. Все права защищены.
            </p>
            <div className="flex gap-4 text-xs text-[#999999]">
              <span className="hover:text-white hover:underline cursor-pointer transition-colors">
                Политика конфиденциальности
              </span>
              <span className="hover:text-white hover:underline cursor-pointer transition-colors">
                Условия использования
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
