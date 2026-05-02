export default function WarrantyContactSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-white p-8 md:p-12">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-[#1f2937] md:text-3xl">
          КОНТАКТ-ЦЕНТР
        </h2>
        <p className="mt-6 text-base text-gray-600 md:text-lg">
          Мы готовы помочь вам с вопросами по Расширенной гарантии.
        </p>
        <p className="mt-4 text-base text-gray-600 md:text-lg">
          Горячая линия - <span className="font-medium text-orange-500">8 800 070 80 87</span>
        </p>
        <p className="mt-3 text-base text-gray-600 md:text-lg">
          E-mail: - <span className="font-medium text-orange-500">hello@attartyres.kz</span>
        </p>
      </div>
      <div className="min-h-[320px]">
        <img
          src="/assets/contact-center.jpg"
          alt="Сотрудник контакт-центра"
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  )
}
