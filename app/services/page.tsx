import { ServicesFAQ } from '@/components/services-faq';
import { ServicesGallery } from '@/components/services-gallery';
import { ServicesHero } from '@/components/services-hero';
import { ServicesPricing } from '@/components/services-pricing';

export const metadata = {
  title: "Ателье в Санкт-Петербурге — ремонт, подгонка и пошив одежды | 3S Atelier",
  description: "Подшив джинсов и брюк, замена молний, ремонт трикотажа, индивидуальный пошив платьев и костюмов. Цены от 500 ₽. Быстро и качественно.",
}

export default function ServicesPage() {
	return (
		<main className="min-h-screen">
      <ServicesHero />
      <ServicesPricing />
      <ServicesGallery />
      <ServicesFAQ />
    </main>
	)
}