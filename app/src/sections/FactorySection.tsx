import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollReveal from '@/components/ScrollReveal'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '106', unit: 'Га', label: 'Площадь завода' },
  { value: '200', unit: '%', label: 'Контроль качества' },
  { value: '№1', unit: '', label: 'В Центральной Азии' },
]

export default function FactorySection() {
  const imageRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    if (imageRef.current) {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      })
    }

    if (statsRef.current) {
      const items = statsRef.current.querySelectorAll('.stat-item')
      gsap.from(items, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: statsRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      })
    }
  })

  return (
    <section className="relative w-full bg-deep-dark py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left — Text content */}
          <div className="lg:w-[50%]">
            <ScrollReveal>
              <span className="text-xs font-semibold uppercase tracking-[3px] text-neon-orange mb-4 block">
                НАШЕ ПРОИЗВОДСТВО
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[2px] text-white mb-4">
                ЗАВОД TENGI TYRES
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-[#999999] leading-relaxed mb-8">
                106 гектаров площади. Самые современные технологии производства. 200% контроль качества — визуальный и автоматизированный.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <div ref={statsRef} className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="text-3xl md:text-4xl font-bold text-neon-orange">
                    {stat.value}
                    <span className="text-xl">{stat.unit}</span>
                  </div>
                  <div className="text-xs text-[#999999] mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Factory image */}
          <div ref={imageRef} className="lg:w-[50%]">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/assets/factory-aerial.jpg"
                alt="Завод Tengri Tyres — воздушный вид"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
