import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WarrantyHeroSection from '@/sections/warranty/WarrantyHeroSection'
import WarrantyCoverageSection from '@/sections/warranty/WarrantyCoverageSection'
import WarrantyHowToGetSection from '@/sections/warranty/WarrantyHowToGetSection'
import WarrantyModelsSection from '@/sections/warranty/WarrantyModelsSection'
import WarrantyContactSection from '@/sections/warranty/WarrantyContactSection'
import WarrantyTermsSection from '@/sections/warranty/WarrantyTermsSection'

export default function WarrantyPage() {
  return (
    <div className="min-h-screen bg-deep-dark text-white">
      <Header />

      <main>
        <WarrantyHeroSection />
        <WarrantyCoverageSection />
        <WarrantyHowToGetSection />
        <WarrantyModelsSection />
        <WarrantyContactSection />
        <WarrantyTermsSection />
      </main>

      <Footer />
    </div>
  )
}
