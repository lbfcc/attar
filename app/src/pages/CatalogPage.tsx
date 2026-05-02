import Header from '@/components/Header'
import Footer from '@/components/Footer'

const products = [
  { id: 1, name: 'S01 Sport', type: 'Легковые', season: 'Летние', price: 'от 89 900 ₸', size: '185/65 R15 — 255/35 R20' },
  { id: 2, name: 'S02 Ultra Sport', type: 'Легковые', season: 'Летние', price: 'от 109 900 ₸', size: '195/55 R16 — 275/30 R20' },
  { id: 3, name: 'W01 Winter', type: 'Легковые', season: 'Зимние', price: 'от 74 900 ₸', size: '175/70 R14 — 245/45 R18' },
  { id: 4, name: 'SUV01 All-Terrain', type: 'SUV', season: 'Всесезонные', price: 'от 124 900 ₸', size: '215/70 R16 — 275/55 R20' },
]

export default function CatalogPage() {
  return (
    <div className="min-h-[100dvh] bg-[#0A0A0A]">
      <Header />
      <main className="pt-28 pb-16 px-4 md:px-8 max-w-[1440px] mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold uppercase tracking-[2px] text-white mb-8">Каталог шин</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <article key={product.id} className="bg-dark-card border border-dark-border rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-3">{product.name}</h2>
              <div className="flex gap-2 mb-3">
                <span className="text-xs text-[#999999] bg-[#2A2A2A] px-2 py-1 rounded">{product.type}</span>
                <span className="text-xs text-[#999999] bg-[#2A2A2A] px-2 py-1 rounded">{product.season}</span>
              </div>
              <p className="text-sm text-[#999999] mb-2">{product.size}</p>
              <p className="text-base font-semibold text-neon-orange">{product.price}</p>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
