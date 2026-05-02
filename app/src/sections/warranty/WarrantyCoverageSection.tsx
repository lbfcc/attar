import { AlertTriangle, CircleDot, Scissors, ShieldAlert } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const coverageItems = [
  { title: 'ПРОКОЛЫ', Icon: CircleDot },
  { title: 'ПОРЕЗЫ', Icon: Scissors },
  { title: 'РАЗРЫВЫ', Icon: ShieldAlert },
  { title: 'ВЗДУТИЯ БОКОВИНЫ', Icon: AlertTriangle },
]

export default function WarrantyCoverageSection() {
  return (
    <section className="bg-deep-dark py-16 md:py-20">
      <div className="mx-auto w-full max-w-[1440px] px-4 md:px-8">
        <ScrollReveal>
          <h2 className="text-center text-2xl font-bold uppercase tracking-[2px] text-white md:text-3xl">
            РАСШИРЕННАЯ ГАРАНТИЯ РАСПРОСТРАНЯЕТСЯ НА:
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {coverageItems.map(({ title, Icon }, index) => (
            <ScrollReveal key={title} delay={index * 0.08}>
              <div className="group flex flex-col items-center rounded-2xl border border-white/10 bg-charcoal/40 p-6 text-center shadow-xl transition-all duration-300 hover:scale-[1.04] hover:border-neon-orange/60 hover:shadow-orange-glow/30">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-neon-orange/15 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-8 w-8 text-neon-orange" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-white md:text-base">
                  {title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
