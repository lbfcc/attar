export default function WarrantyHeroSection() {
  return (
    <section className="relative overflow-hidden">
      <img
        src="/assets/warrantyback.jpg"
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
  )
}
