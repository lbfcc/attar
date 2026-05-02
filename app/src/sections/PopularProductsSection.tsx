import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    id: 1,
    name: 'S01 Sport',
    type: 'Легковые',
    season: 'Летние',
    price: 'от 15 000 ₽',
    warranty: true,
    size: '185/65 R15 — 255/35 R20',
    speedRating: 'V (240 км/ч)',
    image: '/assets/tire-s01-sport.png',
  },
  {
    id: 2,
    name: 'S02 Ultra Sport',
    type: 'Легковые',
    season: 'Летние',
    price: 'от 18 000 ₽',
    warranty: true,
    size: '195/55 R16 — 275/30 R20',
    speedRating: 'W (270 км/ч)',
    image: '/assets/tire-s02-ultra.png',
  },
  {
    id: 3,
    name: 'W01 Winter',
    type: 'Легковые',
    season: 'Зимние',
    price: 'от 12 000 ₽',
    warranty: false,
    size: '175/70 R14 — 245/45 R18',
    speedRating: 'T (190 км/ч)',
    image: '/assets/tire-w01-winter.png',
  },
  {
    id: 4,
    name: 'SUV01 All-Terrain',
    type: 'SUV',
    season: 'Всесезонные',
    price: 'от 20 000 ₽',
    warranty: true,
    size: '215/70 R16 — 275/55 R20',
    speedRating: 'H (210 км/ч)',
    image: '/assets/tire-suv01.png',
  },
]

function ProductCard({ product }: { product: typeof products[0] }) {
  return (
    <div className="group bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      {/* Tire Image */}
      <div 
        className="relative aspect-square flex items-center justify-center overflow-hidden p-6"
        style={{ background: 'radial-gradient(circle at center, #2A2A2A 0%, #1A1A1A 100%)' }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain transition-transform duration-[400ms] ease-out group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">{product.name}</h3>

        {/* Specs */}
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-xs text-[#999999] bg-[#2A2A2A] px-2 py-1 rounded">
            {product.type}
          </span>
          <span className="text-xs text-[#999999] bg-[#2A2A2A] px-2 py-1 rounded">
            {product.season}
          </span>
        </div>

        <div className="text-xs text-[#999999] mb-1">
          {product.size}
        </div>
        <div className="text-xs text-[#999999] mb-3">
          {product.speedRating}
        </div>

        {/* Warranty badge */}
        {product.warranty && (
          <div className="flex items-center gap-1 mb-3">
            <Check size={14} className="text-success" />
            <span className="text-xs text-success">Расширенная гарантия</span>
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-neon-orange">{product.price}</span>
          <button className="flex items-center gap-1 text-sm font-medium text-neon-orange hover:gap-2 transition-all duration-200">
            Подробнее
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function PopularProductsSection() {
  const gridRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!gridRef.current) return

    const cards = gridRef.current.querySelectorAll('.group')
    gsap.fromTo(cards, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, { scope: gridRef })

  return (
    <section id="popular" className="relative w-full bg-deep-dark">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16 lg:py-24">
        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-10">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[2px] text-white">
              ПОПУЛЯРНЫЕ МОДЕЛИ
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <a
              href="#popular"
              className="text-sm font-medium text-neon-orange hover:underline mt-2 sm:mt-0 inline-flex items-center gap-1"
            >
              Смотреть все
              <ArrowRight size={14} />
            </a>
          </ScrollReveal>
        </div>

        {/* Product Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
