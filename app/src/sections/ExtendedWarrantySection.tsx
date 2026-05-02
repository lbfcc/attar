import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import ScrollReveal from '@/components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const warrantyFeatures = [
  'Покрытие проколов и порезов',
  'Защита от вздутий и разрывов',
  'Бесплатное шиномонтажное обслуживание',
  'Простая процедура оформления',
]

export default function ExtendedWarrantySection() {
  const imageRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)

  useGSAP(() => {
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }

    if (listRef.current) {
      const items = listRef.current.querySelectorAll('li')
      gsap.from(items, {
        opacity: 0,
        x: 20,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: listRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }
  })

  return (
    <section className="relative w-full bg-deep-dark">
      {/* Diagonal transition from light section */}
      <div
        className="absolute top-0 left-0 right-0 h-24 bg-light-gray"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 100% 0, 0 0)' }}
      />

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left — Image */}
          <div ref={imageRef} className="lg:w-[45%] relative">
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/assets/warranty-tire-promo.jpg"
                alt="Расширенная гарантия Attar"
                className="w-full h-auto object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              {/* Warranty badge on image */}
              <div className="absolute bottom-6 left-6">
                <div className="text-5xl font-extrabold text-white">5 ЛЕТ</div>
                <div className="text-lg font-medium text-white/80">гарантии</div>
                <div className="w-12 h-1 bg-neon-orange mt-2" />
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="lg:w-[55%]">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[2px] text-white mb-4">
                РАСШИРЕННАЯ ГАРАНТИЯ
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-base md:text-lg text-[#999999] leading-relaxed mb-8">
                Мы уверены в качестве наших шин. Поэтому предоставляем расширенную гарантию на весь срок эксплуатации.
              </p>
            </ScrollReveal>

            <ul ref={listRef} className="space-y-4 mb-8">
              {warrantyFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0">
                    <Check size={12} className="text-success" />
                  </div>
                  <span className="text-sm text-white">{feature}</span>
                </li>
              ))}
            </ul>

            <ScrollReveal delay={0.5}>
              <Link
                to="/warranty"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-full bg-gradient-to-r from-neon-orange to-warm-orange text-black hover:scale-[1.02] hover:shadow-orange-glow transition-all duration-200"
              >
                Узнать подробнее
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}
