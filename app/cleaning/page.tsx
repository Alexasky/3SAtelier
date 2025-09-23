import { CleaningContact } from '@/components/cleaning/cleaning-contact';
import { CleaningHero } from '@/components/cleaning/cleaning-hero';
import { CleaningPricing } from '@/components/cleaning/cleaning-pricing';
import { CleaningServices } from '@/components/cleaning/cleaning-services';

export const metadata = {
  title: "Химчистка и услуги химчистки в Санкт-Петербурге – Партнёр 3S Atelier и Пингвин",
  description: "3S Atelier совместно с химчисткой Пингвин предлагает профессиональные услуги химчистки по чистке одежды, обуви и текстиля.",
  keywords: "химчистка спб, профессиональная чистка одежды спб, химчистка курток и пальто спб, чистка свадебного платья спб",
}

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
