import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { FacilitiesSection } from "@/components/facilities-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default async function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages?slug=3s-atelier`, { cache: 'no-store' });
  // const data = await response.json();
  

  return (
    <>
    {/* <h1>{data[0].acf.title}</h1> */}
      <Header />
      <main className="min-h-screen">      
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FacilitiesSection />
        <GallerySection />
        <ContactSection />      
      </main>
      <Footer />
    </>
  )
}
