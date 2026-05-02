import { useState, useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, MapPin, Phone, Clock } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const allStores = [
  {
    id: 1,
    city: 'Алматы',
    name: 'Attar Premium',
    address: 'пр. Назарбаева, 50',
    phone: '+7 (727) 300-45-67',
    hours: '09:00-20:00',
  },
  {
    id: 2,
    city: 'Алматы',
    name: 'Attar City',
    address: 'ул. Жибек Жолы, 89',
    phone: '+7 (727) 250-78-90',
    hours: '09:00-21:00',
  },
  {
    id: 3,
    city: 'Астана',
    name: 'Attar Capital',
    address: 'пр. Кабанбай батыра, 21',
    phone: '+7 (7172) 45-67-89',
    hours: '09:00-20:00',
  },
  {
    id: 4,
    city: 'Астана',
    name: 'Attar Grand',
    address: 'ул. Сарыарка, 44',
    phone: '+7 (7172) 33-44-55',
    hours: '10:00-20:00',
  },
  {
    id: 5,
    city: 'Караганда',
    name: 'Attar Center',
    address: 'пр. Нуркена Абдирова, 15',
    phone: '+7 (7212) 55-66-77',
    hours: '09:00-19:00',
  },
  {
    id: 6,
    city: 'Шымкент',
    name: 'Attar South',
    address: 'пр. Конаева, 78',
    phone: '+7 (7252) 88-99-00',
    hours: '09:00-20:00',
  },
]

const cities = ['Все города', 'Алматы', 'Астана', 'Караганда', 'Шымкент']

export default function StoreLocatorSection() {
  const [selectedCity, setSelectedCity] = useState('Все города')
  const cardsRef = useRef<HTMLDivElement>(null)

  const filteredStores = selectedCity === 'Все города'
    ? allStores
    : allStores.filter((s) => s.city === selectedCity)

  useGSAP(() => {
    if (!cardsRef.current) return
    const cards = cardsRef.current.querySelectorAll('.store-card')
    gsap.fromTo(cards,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: cardsRef })

  return (
    <section id="stores" className="relative w-full bg-soft-dark py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[2px] text-white text-center mb-8">
            ГДЕ КУПИТЬ
          </h2>
        </ScrollReveal>

        {/* Search interface */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 max-w-lg mx-auto">
            <div className="relative flex-1">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full h-14 px-4 pr-10 rounded-xl border border-dark-border bg-dark-card text-white appearance-none cursor-pointer focus:border-neon-orange focus:outline-none transition-colors"
              >
                {cities.map((city) => (
                  <option key={city} value={city} className="bg-dark-card">
                    {city}
                  </option>
                ))}
              </select>
              <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-[#999999] pointer-events-none" />
            </div>
            <button
              className="h-14 px-8 rounded-full bg-gradient-to-r from-neon-orange to-warm-orange text-black text-sm font-semibold uppercase tracking-wider hover:scale-[1.02] hover:shadow-orange-glow transition-all duration-200"
            >
              Найти
            </button>
          </div>
        </ScrollReveal>

        {/* Results */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Store list */}
          <div ref={cardsRef} className="lg:w-[50%] space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {filteredStores.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#999999] text-sm">Выберите город для отображения списка магазинов</p>
              </div>
            ) : (
              filteredStores.map((store) => (
                <div
                  key={store.id}
                  className="store-card bg-dark-card border border-dark-border rounded-xl p-5 hover:border-neon-orange hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-base font-semibold text-white">{store.name}</h3>
                    <span className="text-xs text-[#999999] bg-[#2A2A2A] px-2 py-1 rounded">
                      {store.city}
                    </span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-[#999999]">
                      <MapPin size={14} className="flex-shrink-0" />
                      {store.address}
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone size={14} className="flex-shrink-0 text-neon-orange" />
                      <a href={`tel:${store.phone.replace(/\s/g, '')}`} className="text-neon-orange hover:underline">
                        {store.phone}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#999999]">
                      <Clock size={14} className="flex-shrink-0" />
                      {store.hours}
                    </div>
                  </div>
                  <button className="mt-3 text-xs font-medium text-neon-orange hover:underline">
                    Показать на карте
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Map placeholder */}
          <div className="lg:w-[50%] hidden lg:block">
            <div className="w-full h-full min-h-[450px] bg-deep-dark rounded-2xl border border-dark-border flex flex-col items-center justify-center relative overflow-hidden">
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                }}
              />
              <MapPin size={48} className="text-dark-border mb-4 relative z-10" />
              <p className="text-sm text-[#999999] relative z-10">
                {selectedCity === 'Все города' ? 'Все магазины' : selectedCity}
              </p>
              <p className="text-xs text-[#666666] mt-1 relative z-10">
                {filteredStores.length} магазинов найдено
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
