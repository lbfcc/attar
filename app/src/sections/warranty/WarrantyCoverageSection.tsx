import { AlertTriangle, CircleDot, Scissors, ShieldAlert } from 'lucide-react'

const coverageItems = [
  { title: 'ПРОКОЛЫ', Icon: CircleDot },
  { title: 'ПОРЕЗЫ', Icon: Scissors },
  { title: 'РАЗРЫВЫ', Icon: ShieldAlert },
  { title: 'ВЗДУТИЯ БОКОВИНЫ', Icon: AlertTriangle },
]

export default function WarrantyCoverageSection() {
  return (
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
  )
}
