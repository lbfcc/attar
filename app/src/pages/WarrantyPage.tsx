import {
  CircleDot,
  Scissors,
  ShieldAlert,
  AlertTriangle,
} from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const coverageItems = [
  { title: 'ПРОКОЛЫ', Icon: CircleDot },
  { title: 'ПОРЕЗЫ', Icon: Scissors },
  { title: 'РАЗРЫВЫ', Icon: ShieldAlert },
  { title: 'ВЗДУТИЯ БОКОВИНЫ', Icon: AlertTriangle },
]

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-[#f8f8f7] text-[#1f2937]">
      <Header />

      <main>
        <section className="relative overflow-hidden">
          <img
            src="/images/warranty-hero.jpg"
            alt="Расширенная гарантия Attar"
            className="h-[500px] w-full object-cover md:h-[620px]"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 mx-auto flex w-full max-w-7xl items-center px-4 md:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl font-extrabold uppercase tracking-wide text-white sm:text-4xl md:text-5xl">
                РАСШИРЕННАЯ ГАРАНТИЯ ATTAR
              </h1>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#models"
                  className="inline-flex items-center justify-center rounded-md bg-[#f97316] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
                >
                  МОДЕЛИ С ГАРАНТИЕЙ
                </a>
                <a
                  href="#how-to-get"
                  className="inline-flex items-center justify-center rounded-md bg-[#f97316] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-orange-600"
                >
                  ПОКУПКА С ГАРАНТИЕЙ
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f3f4f6] py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-[#1f2937] md:text-3xl">
              РАСШИРЕННАЯ ГАРАНТИЯ РАСПРОСТРАНЯЕТСЯ НА:
            </h2>
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              {coverageItems.map(({ title, Icon }) => (
                <div
                  key={title}
                  className="flex flex-col items-center rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm"
                >
                  <Icon className="h-10 w-10 text-[#f97316]" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-[#1f2937] md:text-base">
                    {title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="how-to-get" className="bg-white py-16 md:py-20">
          <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
            <h2 className="text-center text-2xl font-bold uppercase tracking-wide text-[#1f2937] md:text-3xl">
              КАК ПОЛУЧИТЬ РАСШИРЕННУЮ ГАРАНТИЮ?
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-gray-200 bg-[#f9fafb] p-6">
                <h3 className="text-lg font-bold uppercase leading-snug text-[#1f2937]">
                  1. ПРИОБРЕТАЙТЕ ШИНЫ ATTAR У УЧАСТНИКА ПРОГРАММЫ
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  <span className="cursor-pointer text-orange-500 underline">
                    Выберите
                  </span>{' '}
                  удобное место приобретения.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-[#f9fafb] p-6">
                <h3 className="text-lg font-bold uppercase leading-snug text-[#1f2937]">
                  2. ПОЛУЧИТЕ ГАРАНТИЙНЫЙ ТАЛОН
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  Получите талон при покупке шин, сохраните товарный чек.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-[#f9fafb] p-6">
                <h3 className="text-lg font-bold uppercase leading-snug text-[#1f2937]">
                  3. ОБРАТИТЕСЬ ЗА РЕМОНТОМ/ЗАМЕНОЙ ШИНЫ БЕСПЛАТНО
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600">
                  <span className="cursor-pointer text-orange-500 underline">
                    Выберите
                  </span>{' '}
                  удобную Вам авторизованную точку.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="models" className="grid grid-cols-1 md:grid-cols-2">
          <div className="min-h-[320px]">
            <img
              src="/images/family-car.jpg"
              alt="Семья в автомобиле"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="bg-[#f3f4f6] p-8 md:p-12">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1f2937] md:text-3xl">
              ШИНЫ, УЧАСТВУЮЩИЕ В ПРОГРАММЕ РАСШИРЕННОЙ ГАРАНТИИ
            </h2>
            <h3 className="mt-8 text-lg font-semibold uppercase text-[#1f2937]">
              ЗИМНИЕ ШИНЫ:
            </h3>
            <div className="mt-3 space-y-1 text-lg font-medium text-[#f97316]">
              <p>Attar W01</p>
              <p>Attar W02</p>
              <p>Attar W03</p>
            </div>
            <h3 className="mt-6 text-lg font-semibold uppercase text-[#1f2937]">
              ЛЕТНИЕ ШИНЫ:
            </h3>
            <div className="mt-3 space-y-1 text-lg font-medium text-[#f97316]">
              <p>Attar S01</p>
              <p>Attar S02</p>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-white p-8 md:p-12">
            <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1f2937] md:text-3xl">
              КОНТАКТ-ЦЕНТР
            </h2>
            <p className="mt-6 text-base text-gray-600 md:text-lg">
              Мы готовы помочь вам с вопросами по Расширенной гарантии.
            </p>
            <p className="mt-4 text-base text-gray-600 md:text-lg">
              Горячая линия -{' '}
              <span className="font-medium text-orange-500">8 800 070 80 87</span>
            </p>
            <p className="mt-3 text-base text-gray-600 md:text-lg">
              E-mail: -{' '}
              <span className="font-medium text-orange-500">
                hello@attartyres.kz
              </span>
            </p>
          </div>
          <div className="min-h-[320px]">
            <img
              src="/images/contact-center.jpg"
              alt="Сотрудник контакт-центра"
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        <div className="bg-white">
          <a
            href="/warranty-2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="block py-12 text-center text-lg font-medium text-gray-600 underline transition-colors hover:text-orange-500"
          >
            Условия программы расширенной гарантии 2026
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
