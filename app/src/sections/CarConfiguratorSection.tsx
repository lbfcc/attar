import { useState, useCallback } from 'react'
import { ChevronDown, RotateCcw } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

// Car data for cascading dropdowns
const carData: Record<string, Record<string, Record<string, string[]>>> = {
  'Audi': {
    'A4': { '2020': ['2.0 TFSI', '2.0 TDI'], '2021': ['2.0 TFSI', '3.0 TFSI'], '2022': ['2.0 TFSI', '2.0 TDI quattro'] },
    'A6': { '2020': ['2.0 TFSI', '3.0 TDI'], '2021': ['2.0 TFSI', '3.0 TDI'], '2022': ['2.0 TFSI quattro', '3.0 TDI'] },
    'Q5': { '2020': ['2.0 TFSI', '2.0 TDI'], '2021': ['2.0 TFSI quattro', '3.0 TDI'], '2022': ['2.0 TFSI', '2.0 TDI quattro'] },
  },
  'BMW': {
    '3 Series': { '2020': ['320i', '330d'], '2021': ['320i', '330i', 'M340i'], '2022': ['320i', '330e', 'M340i xDrive'] },
    '5 Series': { '2020': ['520i', '530d'], '2021': ['520i', '530i', '540i'], '2022': ['520i', '530e', 'M550i xDrive'] },
    'X3': { '2020': ['xDrive20i', 'xDrive30d'], '2021': ['xDrive20i', 'xDrive30e'], '2022': ['xDrive20i', 'M40i'] },
  },
  'Mercedes-Benz': {
    'C-Class': { '2020': ['C200', 'C220d'], '2021': ['C200', 'C300', 'C300d'], '2022': ['C200', 'C220d', 'C300e'] },
    'E-Class': { '2020': ['E200', 'E220d'], '2021': ['E200', 'E300', 'E400d'], '2022': ['E200', 'E220d', 'E300e'] },
    'GLC': { '2020': ['GLC 200', 'GLC 220d'], '2021': ['GLC 200', 'GLC 300', 'GLC 300d'], '2022': ['GLC 200', 'GLC 300e'] },
  },
  'Toyota': {
    'Camry': { '2020': ['2.5', '3.5'], '2021': ['2.5', '3.5'], '2022': ['2.5 Hybrid', '3.5'] },
    'RAV4': { '2020': ['2.0', '2.5 Hybrid'], '2021': ['2.0', '2.5 Hybrid'], '2022': ['2.0', '2.5 Hybrid', '2.5 Plug-in'] },
    'Land Cruiser': { '2020': ['4.0', '4.5 D'], '2021': ['3.5 Twin-Turbo', '4.0'], '2022': ['3.5 Twin-Turbo', '3.3 D'] },
  },
  'Hyundai': {
    'Sonata': { '2020': ['2.0', '2.5'], '2021': ['2.0', '2.5'], '2022': ['2.0', '2.5', '2.0 Hybrid'] },
    'Tucson': { '2020': ['2.0', '2.0 D'], '2021': ['2.0', '1.6 T-GDI'], '2022': ['2.0', '1.6 T-GDI Hybrid'] },
    'Santa Fe': { '2020': ['2.4', '2.2 D'], '2021': ['2.5', '2.2 D'], '2022': ['2.5', '1.6 T-GDI Hybrid', '2.2 D'] },
  },
  'Kia': {
    'K5': { '2020': ['2.0', '2.5'], '2021': ['2.0', '2.5', '2.0 Hybrid'], '2022': ['2.0', '2.5', '2.0 Hybrid'] },
    'Sportage': { '2020': ['2.0', '2.0 D'], '2021': ['2.0', '1.6 T-GDI'], '2022': ['2.0', '1.6 T-GDI Hybrid'] },
    'Sorento': { '2020': ['2.4', '2.2 D'], '2021': ['2.5', '2.2 D', '1.6 T-GDI Hybrid'], '2022': ['2.5', '1.6 T-GDI Hybrid'] },
  },
}

const tireWidths = ['145', '155', '165', '175', '185', '195', '205', '215', '225', '235', '245', '255', '265', '275', '285', '295', '305', '315']
const tireProfiles = ['25', '30', '35', '40', '45', '50', '55', '60', '65', '70', '75']
const tireDiameters = ['13', '14', '15', '16', '17', '18', '19', '20', '21', '22']

interface DropdownProps {
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}

function DarkDropdown({ label, value, options, onChange, disabled = false, placeholder = 'Выберите' }: DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <label className="block text-xs font-medium text-[#999999] uppercase tracking-wider mb-2">
        {label}
      </label>
      <button
        onClick={() => !disabled && setOpen(!open)}
        className={`w-full h-14 px-4 rounded-xl border text-left flex items-center justify-between transition-all duration-200 ${
          disabled
            ? 'bg-[#1A1A1A] border-dark-border text-[#666666] cursor-not-allowed'
            : 'bg-soft-dark border-dark-border text-white hover:border-neon-orange focus:border-neon-orange cursor-pointer'
        }`}
        onBlur={() => setTimeout(() => setOpen(false), 150)}
      >
        <span className={value ? 'text-white' : 'text-[#666666]'}>
          {value || placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''} ${disabled ? 'text-[#666666]' : 'text-[#999999]'}`}
        />
      </button>
      {open && !disabled && (
        <div className="absolute top-full left-0 right-0 mt-1 max-h-48 overflow-y-auto bg-soft-dark border border-dark-border rounded-xl z-50 shadow-xl pb-4">
          <button
            className="w-full px-4 py-3 text-left text-sm text-[#999999] hover:bg-neon-orange hover:text-black transition-colors"
            onMouseDown={() => { onChange(''); setOpen(false) }}
          >
            {placeholder}
          </button>
          {options.map((opt) => (
            <button
              key={opt}
              className={`w-full px-4 py-3 text-left text-sm transition-colors ${
                value === opt
                  ? 'bg-neon-orange text-black'
                  : 'text-white hover:bg-neon-orange hover:text-black'
              }`}
              onMouseDown={() => { onChange(opt); setOpen(false) }}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function CarConfiguratorSection() {
  const [activeTab, setActiveTab] = useState<'size' | 'car'>('size')

  // Size selection state
  const [width, setWidth] = useState('')
  const [profile, setProfile] = useState('')
  const [diameter, setDiameter] = useState('')

  // Car selection state
  const [brand, setBrand] = useState('')
  const [model, setModel] = useState('')
  const [year, setYear] = useState('')
  const [modification, setModification] = useState('')

  // No ref needed

  const resetCar = useCallback(() => {
    setBrand('')
    setModel('')
    setYear('')
    setModification('')
  }, [])

  const resetSize = useCallback(() => {
    setWidth('')
    setProfile('')
    setDiameter('')
  }, [])

  const handleSubmit = () => {
    // Navigate to catalog with params
    if (activeTab === 'size') {
      const params = new URLSearchParams()
      if (width) params.set('width', width)
      if (profile) params.set('profile', profile)
      if (diameter) params.set('diameter', diameter)
      window.location.href = `/catalog?${params.toString()}`
    } else {
      if (brand && model && year && modification) {
        const params = new URLSearchParams()
        params.set('brand', brand)
        params.set('model', model)
        params.set('year', year)
        params.set('modification', modification)
        window.location.href = `/catalog?${params.toString()}`
      }
    }
  }

  const brands = Object.keys(carData)
  const models = brand ? Object.keys(carData[brand]) : []
  const years = brand && model ? Object.keys(carData[brand][model]) : []
  const modifications = brand && model && year ? carData[brand][model][year] : []

  return (
    <section
      id="configurator"
      className="relative w-full bg-deep-dark"
      style={{ clipPath: 'polygon(0 3%, 100% 0, 100% 100%, 0 100%)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 pt-16 pb-12 lg:pt-24 lg:pb-16">
        <ScrollReveal>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-[2px] text-white mb-3">
            ПОДБЕРИТЕ ШИНЫ ДЛЯ СВОЕГО АВТО
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-base md:text-lg text-[#999999] max-w-[600px] mb-10">
            Укажите размер шин или данные автомобиля, и мы подберем идеальный вариант
          </p>
        </ScrollReveal>

        {/* Configurator Card */}
        <ScrollReveal delay={0.2}>
          <div

            className="bg-[rgba(255,255,255,0.05)] backdrop-blur-[10px] border border-[rgba(255,255,255,0.1)] rounded-3xl p-6 md:p-10"
          >
            {/* Tab Bar */}
            <div className="flex gap-0 mb-8 border-b border-dark-border">
              <button
                onClick={() => setActiveTab('size')}
                className={`px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'size'
                    ? 'text-white border-neon-orange'
                    : 'text-[#999999] border-transparent hover:text-white'
                }`}
              >
                По типоразмеру шин
              </button>
              <button
                onClick={() => setActiveTab('car')}
                className={`px-6 py-4 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeTab === 'car'
                    ? 'text-white border-neon-orange'
                    : 'text-[#999999] border-transparent hover:text-white'
                }`}
              >
                По модели автомобиля
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'size' && (
              <div className="transition-opacity duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  <DarkDropdown
                    label="Ширина"
                    value={width}
                    options={tireWidths}
                    onChange={setWidth}
                    placeholder="Все"
                  />
                  <DarkDropdown
                    label="Профиль"
                    value={profile}
                    options={tireProfiles}
                    onChange={setProfile}
                    placeholder="Все"
                  />
                  <DarkDropdown
                    label="Диаметр"
                    value={diameter}
                    options={tireDiameters}
                    onChange={setDiameter}
                    placeholder="Все"
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-orange to-warm-orange text-black text-sm font-semibold uppercase tracking-wider hover:scale-[1.02] hover:shadow-orange-glow transition-all duration-200"
                  >
                    Подобрать
                  </button>
                  <button
                    onClick={resetSize}
                    className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200"
                  >
                    <RotateCcw size={16} className="inline mr-2" />
                    Сбросить
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'car' && (
              <div className="transition-opacity duration-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <DarkDropdown
                    label="Марка авто"
                    value={brand}
                    options={brands}
                    onChange={(v) => { setBrand(v); setModel(''); setYear(''); setModification('') }}
                    placeholder="Выберите марку"
                  />
                  <DarkDropdown
                    label="Модель"
                    value={model}
                    options={models}
                    onChange={(v) => { setModel(v); setYear(''); setModification('') }}
                    disabled={!brand}
                    placeholder={brand ? "Выберите модель" : "Сначала выберите марку"}
                  />
                  <DarkDropdown
                    label="Год выпуска"
                    value={year}
                    options={years}
                    onChange={(v) => { setYear(v); setModification('') }}
                    disabled={!model}
                    placeholder={model ? "Выберите год" : "Сначала выберите модель"}
                  />
                  <DarkDropdown
                    label="Модификация"
                    value={modification}
                    options={modifications}
                    onChange={setModification}
                    disabled={!year}
                    placeholder={year ? "Выберите модификацию" : "Сначала выберите год"}
                  />
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-neon-orange to-warm-orange text-black text-sm font-semibold uppercase tracking-wider hover:scale-[1.02] hover:shadow-orange-glow transition-all duration-200"
                  >
                    Подобрать
                  </button>
                  <button
                    onClick={resetCar}
                    className="px-6 py-3 rounded-full border border-white/30 text-white text-sm font-medium hover:bg-[rgba(255,255,255,0.1)] transition-all duration-200"
                  >
                    <RotateCcw size={16} className="inline mr-2" />
                    Сбросить
                  </button>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
