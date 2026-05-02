import { Route, Routes } from 'react-router'
import HeroSection from '@/sections/HeroSection'
import CarConfiguratorSection from '@/sections/CarConfiguratorSection'
import PopularProductsSection from '@/sections/PopularProductsSection'
import WhyAttarSection from '@/sections/WhyAttarSection'
import ExtendedWarrantySection from '@/sections/ExtendedWarrantySection'
import FactorySection from '@/sections/FactorySection'
import StoreLocatorSection from '@/sections/StoreLocatorSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WarrantyPage from '@/pages/WarrantyPage'
import CatalogPage from '@/pages/CatalogPage'

function HomePage() {
  return (
    <div className="min-h-[100dvh] bg-[#0A0A0A]">
      <Header />
      <main>
        <HeroSection />
        <CarConfiguratorSection />
        <PopularProductsSection />
        <WhyAttarSection />
        <ExtendedWarrantySection />
        <FactorySection />
        <StoreLocatorSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/warranty" element={<WarrantyPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
    </Routes>
  )
}

export default App
