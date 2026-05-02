export default function WarrantyModelsSection() {
  return (
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
        <h3 className="mt-8 text-lg font-semibold uppercase text-[#1f2937]">ЗИМНИЕ ШИНЫ:</h3>
        <div className="mt-3 space-y-1 text-lg font-medium text-[#f97316]">
          <p>Attar W01</p>
          <p>Attar W02</p>
          <p>Attar W03</p>
        </div>
        <h3 className="mt-6 text-lg font-semibold uppercase text-[#1f2937]">ЛЕТНИЕ ШИНЫ:</h3>
        <div className="mt-3 space-y-1 text-lg font-medium text-[#f97316]">
          <p>Attar S01</p>
          <p>Attar S02</p>
        </div>
      </div>
    </section>
  )
}
