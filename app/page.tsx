import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { QuickLinksSection } from '@/components/quick-links-section'
import { WomensClubSection } from '@/components/womens-club-section'

export default async function Home() {
  // const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/pages?slug=3s-atelier`, { cache: 'no-store' });
  // const data = await response.json();
  

  return (
    <>
    {/* <h1>{data[0].acf.title}</h1> */}
      <main className="min-h-screen">      
        <HeroSection />
        <AboutSection />
        <WomensClubSection />
        <QuickLinksSection />        
        <GallerySection />
        <ContactSection />      
      </main>
    </>
  )
}
