import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ChevronDown, Play } from 'lucide-react'

export default function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const line1Ref = useRef<HTMLDivElement>(null)
  const line2Ref = useRef<HTMLDivElement>(null)
  const line3Ref = useRef<HTMLDivElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const speedLinesRef = useRef<SVGSVGElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.5 })

    tl.from(badgeRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    })
    .from(line1Ref.current, {
      opacity: 0,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.2')
    .from(line2Ref.current, {
      opacity: 0,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .from(line3Ref.current, {
      opacity: 0,
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)',
      duration: 0.8,
      ease: 'power3.out',
    }, '-=0.6')
    .from(descRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: 'power2.out',
    }, '-=0.3')
    .from(ctaRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
    }, '-=0.3')
    .from(speedLinesRef.current, {
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    }, '-=0.8')
  }, { scope: sectionRef })

  const handleScrollToConfigurator = (e: React.MouseEvent) => {
    e.preventDefault()
    document.querySelector('#configurator')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-[100dvh] overflow-hidden bg-black"
    >
      {/* Video / Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?q=80&w=2070&auto=format&fit=crop"
          alt="Horses running in the Kazakh steppe"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text legibility */}
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col justify-center min-h-[100dvh] pt-[100px] pb-[80px]">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Left content */}
          <div className="lg:w-[60%]">
            {/* Subtitle badge */}
            <div
              ref={badgeRef}
              className="inline-block mb-6"
            >
              <span className="text-xs font-semibold uppercase tracking-[3px] text-neon-orange bg-[rgba(255,107,0,0.15)] px-4 py-2 rounded-full">
                ПРЕМИАЛЬНЫЕ АВТОМОБИЛЬНЫЕ ШИНЫ
              </span>
            </div>

            {/* Main headline */}
            <h1 className="mb-6">
              <div
                ref={line1Ref}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-[2px] text-white leading-none"
              >
                ШИНЫ,
              </div>
              <div
                ref={line2Ref}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-[2px] text-white leading-none mt-1"
              >
                РОЖДЁННЫЕ
              </div>
              <div
                ref={line3Ref}
                className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase tracking-[2px] leading-none mt-1"
                style={{
                  background: 'linear-gradient(135deg, #FF6B00 0%, #FF8C42 50%, #FFB347 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                ЭТОЙ ЗЕМЛЕЙ
              </div>
            </h1>

            {/* Description */}
            <p
              ref={descRef}
              className="text-base md:text-lg lg:text-xl text-white font-normal max-w-[480px] leading-relaxed mb-8"
            >
              Инновационные технологии и безупречное качество для тех, кто ценит каждый поворот
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-wrap gap-4">
              <a
                href="#configurator"
                onClick={handleScrollToConfigurator}
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-full bg-gradient-to-r from-neon-orange to-warm-orange text-black shadow-orange-glow hover:scale-[1.03] hover:shadow-orange-glow-lg transition-all duration-200"
              >
                Подобрать шины
              </a>
              <button
                className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-wider px-8 py-4 rounded-full border border-white text-white hover:bg-[rgba(255,255,255,0.1)] hover:border-neon-orange transition-all duration-200"
              >
                <Play size={16} fill="white" />
                Смотреть видео
              </button>
            </div>
          </div>

          {/* Right side - Speed Lines + Decorative Tire */}
          <div className="hidden lg:flex lg:w-[40%] justify-center items-center relative">
            {/* Speed lines SVG */}
            <svg
              ref={speedLinesRef}
              viewBox="0 0 400 300"
              className="absolute w-[400px] h-[300px] animate-speed-lines-pulse"
              style={{ opacity: 0.6 }}
            >
              {[...Array(12)].map((_, i) => (
                <line
                  key={i}
                  x1={50 + i * 30}
                  y1={20 + i * 15}
                  x2={350 + i * 10}
                  y2={10 + i * 20}
                  stroke="#FF6B00"
                  strokeWidth={1 + (i % 3) * 0.5}
                  opacity={0.2 + (i % 5) * 0.15}
                />
              ))}
            </svg>

            {/* Decorative tire image */}
            <img
              src="/assets/hero-tire-decorative.png"
              alt="Premium tire"
              className="relative z-10 w-[280px] xl:w-[340px] h-auto object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs font-medium text-white/60">Листайте вниз</span>
          <ChevronDown size={20} className="text-white/60 animate-bounce-scroll" />
        </div>
      </div>
    </section>
  )
}
