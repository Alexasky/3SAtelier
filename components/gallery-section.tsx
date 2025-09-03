import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { FadeInSection } from './fade-in-section';

export function GallerySection() {
  const galleryImages = [
    {
      src: "/modern-sewing-machines-in-bright-workspace.png",
      alt: "Профессиональные швейные машины",
    },
    {
      src: "/cozy-lounge-area-with-tea-and-coffee-setup.png",
      alt: "Уютная лаунж-зона",
    },
    {
      src: "/cutting-table-with-fabric-and-patterns.png",
      alt: "Профессиональные раскройные столы",
    },
    {
      src: "/bright-workshop-space-with-people-sewing.png",
      alt: "Творческая мастерская в работе",
    },
    {
      src: "/ironing-station-with-professional-equipment.png",
      alt: "Зона глажки и отпаривания",
    },
    {
      src: "/photo-zone-with-good-lighting-for-fashion-photogra.png",
      alt: "Фотозона для готовых проектов",
    },
  ]

  return (
    <FadeInSection>
      <section id="gallery" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Галерея</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Добро пожаловать в наш мир творчества! Здесь каждая деталь вдохновляет — от профессионального оборудования
              до уютных уголков, где рождаются новые идеи.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow p-0">
                <CardContent className="p-0">
                  <Image                  
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={600}
                    priority
                    className='w-full object-cover'
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-primary border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-4">Приходите к нам</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Загляните в 3S Atelier и почувствуйте атмосферу вдохновения! Мы с радостью покажем вам пространство,
                  расскажем о возможностях и поможем начать ваш следующий творческий проект.  
                  Приходите в любое время в часы работы или свяжитесь с нами, чтобы договориться об экскурсии.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
