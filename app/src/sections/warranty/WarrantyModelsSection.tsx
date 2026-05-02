import ScrollReveal from '@/components/ScrollReveal'

export default function WarrantyModelsSection() {
  return (
    <section id="models" className="bg-deep-dark py-16 md:py-20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-8">
        <ScrollReveal direction="right">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/assets/family.jpg"
              alt="Семья в автомобиле"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="rounded-2xl border border-white/10 bg-charcoal/35 p-8 md:p-12">
            <h2 className="text-2xl font-bold uppercase tracking-[2px] text-white md:text-3xl">
              ШИНЫ, УЧАСТВУЮЩИЕ В ПРОГРАММЕ РАСШИРЕННОЙ ГАРАНТИИ
            </h2>
            <h3 className="mt-8 text-lg font-semibold uppercase text-white">ЗИМНИЕ ШИНЫ:</h3>
            <div className="mt-3 space-y-1 text-lg font-medium text-neon-orange">
              <p>Attar W01</p>
              <p>Attar W02</p>
              <p>Attar W03</p>
            </div>
            <h3 className="mt-6 text-lg font-semibold uppercase text-white">ЛЕТНИЕ ШИНЫ:</h3>
            <div className="mt-3 space-y-1 text-lg font-medium text-neon-orange">
              <p>Attar S01</p>
              <p>Attar S02</p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
