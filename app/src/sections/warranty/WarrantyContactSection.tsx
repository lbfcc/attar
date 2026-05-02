import ScrollReveal from '@/components/ScrollReveal'

export default function WarrantyContactSection() {
  return (
    <section className="bg-deep-dark pb-16 md:pb-20">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-8">
        <ScrollReveal direction="right">
          <div className="rounded-2xl border border-white/10 bg-charcoal/35 p-8 md:p-12">
            <h2 className="text-2xl font-bold uppercase tracking-[2px] text-white md:text-3xl">
              КОНТАКТ-ЦЕНТР
            </h2>
            <p className="mt-6 text-base text-[#b9b9b9] md:text-lg">
              Мы готовы помочь вам с вопросами по Расширенной гарантии.
            </p>
            <p className="mt-4 text-base text-[#b9b9b9] md:text-lg">
              Горячая линия - <span className="font-medium text-neon-orange">8 800 070 80 87</span>
            </p>
            <p className="mt-3 text-base text-[#b9b9b9] md:text-lg">
              E-mail: - <span className="font-medium text-neon-orange">hello@attartyres.kz</span>
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="left">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="/assets/contact-center.jpg"
              alt="Сотрудник контакт-центра"
              className="h-full min-h-[320px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
