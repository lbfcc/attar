export default function WarrantyHowToGetSection() {
  return (
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
              <span className="cursor-pointer text-orange-500 underline">Выберите</span>{' '}
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
              <span className="cursor-pointer text-orange-500 underline">Выберите</span>{' '}
              удобную Вам авторизованную точку.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
