import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image";
import { FadeInSection } from './fade-in-section';

export function GallerySection() {
  const galleryImages = [
    {
      src: "/equipment.jpg",
      alt: "Профессиональные швейные машины",
    },
    {
      src: "/lounge-area.jpg",
      alt: "Уютная лаунж-зона",
    },
    {
      src: "/cutting-table.jpg",
      alt: "Профессиональные раскройные столы",
    },
    {
      src: "/3satelier-area.jpg",
      alt: "Творческая мастерская в работе",
    },
    {
      src: "/fitting-room.jpg",
      alt: "Примерочная зона",
    },
    {
      src: "/reception.jpg",
      alt: "Фронт-деск 3S Atelier",
    },
  ]

  return (
    <FadeInSection>
      <section id="gallery" className="py-20 bg-brand/50">
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
              <Card key={index} className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow p-0 h-64">
                <CardContent className="relative w-full h-full p-0">
                  <Image                  
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority
                    className='object-cover'
                    sizes='400'
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
