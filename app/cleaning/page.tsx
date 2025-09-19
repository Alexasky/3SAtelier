import { CleaningContact } from '@/components/cleaning/cleaning-contact';
import { CleaningHero } from '@/components/cleaning/cleaning-hero';
import { CleaningPricing } from '@/components/cleaning/cleaning-pricing';
import { CleaningServices } from '@/components/cleaning/cleaning-services';

export default function CleaningPage() {
  return (
    <main className="min-h-screen">
      <CleaningHero />
      <CleaningServices />
      <CleaningPricing />
      <CleaningContact />
    </main>
  )
}
