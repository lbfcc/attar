import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Lightbulb, ShieldCheck, Wallet } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: Lightbulb,
    title: 'Инновационные технологии',
    description: 'Современные решения для максимальной производительности и безопасности на дороге',
  },
  {
    icon: ShieldCheck,
    title: 'Контроль качества',
    description: 'Многоуровневая система проверки каждой шины гарантирует безупречное качество',
  },
  {
    icon: Wallet,
    title: 'Доступная цена',
    description: 'Оптимальное соотношение цены и качества без компромиссов в производительности',
  },
]

export default function WhyAttarSection() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (!cardsRef.current) return

    const cards = cardsRef.current.querySelectorAll('.feature-card')
    gsap.from(cards, {
      opacity: 0,
      y: 40,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    })
  }, { scope: cardsRef })

  return (
    <section id="about" className="relative w-full bg-light-gray">
      {/* Diagonal clip from previous dark section */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-deep-dark"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 100%)' }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-32 pb-20 lg:pt-40 lg:pb-24">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[2px] text-deep-dark text-center mb-12 lg:mb-16">
            ПОЧЕМУ ATTAR
          </h2>
        </ScrollReveal>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card relative flex flex-col items-center text-center group"
            >
              {/* Icon circle */}
              <div className="w-16 h-16 rounded-full bg-[rgba(255,179,71,0.2)] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon size={32} className="text-neon-orange" />
              </div>

              {/* Divider (between cards, desktop only) */}
              {index < features.length - 1 && (
                <div className="hidden md:block absolute -right-4 lg:-right-6 top-8 w-px h-32 bg-charcoal/20" />
              )}

              <h3 className="text-xl font-semibold text-deep-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-sm text-charcoal leading-relaxed max-w-[320px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
