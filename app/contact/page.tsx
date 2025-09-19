import { ContactFormSection } from '@/components/contact-form-section';
import { ContactHero } from '@/components/contact-hero';
import { ContactInfo } from '@/components/contact-info';
import { ContactMap } from '@/components/contact-map';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactFormSection />
      <ContactMap />
    </main>
  )
}