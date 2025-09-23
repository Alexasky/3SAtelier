import { ContactFormSection } from '@/components/contact-form-section';
import { ContactHero } from '@/components/contact-hero';
import { ContactInfo } from '@/components/contact-info';
import { ContactMap } from '@/components/contact-map';

export const metadata = {
  title: "Контакты 3S Atelier — швейный коворкинг в Санкт-Петербурге",
  description: "3S Atelier — ателье и швейный коворкинг в Приморском районе СПб. Адрес: Парашютная ул., 42, к. 1. Телефон и email для связи, карта проезда.",
  keywords: "ателье в приморском районе спб, ателье в спб адрес, ателье на парашютной спб, ателье рядом метро комендантский проспект",
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