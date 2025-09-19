import { ServicesFAQ } from '@/components/services-faq';
import { ServicesGallery } from '@/components/services-gallery';
import { ServicesHero } from '@/components/services-hero';
import { ServicesPricing } from '@/components/services-pricing';

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