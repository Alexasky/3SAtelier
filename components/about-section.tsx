import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Scissors } from "lucide-react"
import Image from 'next/image'
import { FadeInSection } from './fade-in-section'

export function AboutSection() {
  return (
    <FadeInSection>
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">3S Atelier</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              В самом сердце Приморского района 3S Atelier — это не просто рабочее пространство, 
              а творческое сообщество, где мастера, дизайнеры и любители текстиля собираются, 
              чтобы шить, делиться знаниями и создавать в дружеской атмосфере.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Наша миссия</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Мы верим в силу сообщества и творчества. Наше ателье предлагает оборудование профессионального уровня, 
                удобное рабочее пространство и поддерживающую атмосферу, где как начинающие, так и опытные мастера 
                могут развивать свою страсть к текстилю и дизайну.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Heart className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Страсть к ремеслу</h4>
                    <p className="text-muted-foreground">Поддержка традиционных и современных техник шитья</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Фокус на сообществе</h4>
                    <p className="text-muted-foreground">Создание связей через совместное творчество</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Scissors className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Профессиональные инструменты</h4>
                    <p className="text-muted-foreground">Доступ к высококачественному оборудованию и рабочему пространству</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-primary border-border">
              <CardContent className="p-8">
                <Image 
                  src={'/cozy-sewing-workspace-with-natural-lighting.png'} 
                  alt={'Творческая мастерская'}
                  width={500}
                  height={256}
                  priority
                  className='h-64 mb-6 object-cover [object-position:50%_36%] w-full'
                />
                <h4 className="text-xl font-semibold text-card-foreground mb-4">Посетите наше пространство</h4>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <strong>Адрес:</strong> Парашютная, 42, корпус 1
                  </p>
                  <p>Приморский район, Санкт-Петербург</p>
                  <p>
                    <strong>Часы работы:</strong> ежедневно с 11:00 до 21:00
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </FadeInSection>
  )
}
