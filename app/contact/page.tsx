import { ContactFormSection } from '@/components/contact-form-section';
import { ContactHero } from '@/components/contact-hero';
import { ContactInfo } from '@/components/contact-info';
import { ContactMap } from '@/components/contact-map';

export const metadata = {
  title: "Контакты 3S Atelier — швейный коворкинг в Санкт-Петербурге",
  description: "Адрес: ул. Парашютная, д.42, корп.1, Приморский район. Ежедневно 11:00–21:00. Телефон для записи: +7 (904) 525-64-25.",
}

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