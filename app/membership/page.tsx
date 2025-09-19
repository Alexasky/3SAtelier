import { MembershipFAQ } from '@/components/membership-faq';
import { MembershipFeatures } from '@/components/membership-features';
import { MembershipHero } from '@/components/membership-hero';
import { MembershipPlans } from '@/components/membership-plans';

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