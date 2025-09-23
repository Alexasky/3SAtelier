import { MembershipFAQ } from '@/components/membership-faq';
import { MembershipFeatures } from '@/components/membership-features';
import { MembershipHero } from '@/components/membership-hero';
import { MembershipPlans } from '@/components/membership-plans';

export const metadata = {
  title: "Абонементы и аренда 3S Atelier — швейный коворкинг в Санкт-Петербурге",
  description: "Выберите тариф: почасовая аренда, безлимит на 15 дней или аренда ателье на день. Доступ к оборудованию, кроильным столам и сообществу.",
  keywords: "швейный коворкинг в санкт петербурге, аренда ателье спб, аренда швейной машины, абонемент ателье спб, творческое пространство для шитья спб",
}

export default function MembershipPage() {
	return (
		<main className="min-h-screen">
      <MembershipHero />
      <MembershipPlans />
      <MembershipFeatures />
      <MembershipFAQ />
    </main>
	)
}