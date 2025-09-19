'use client';
import { Button } from "../ui/button"
import { Sparkles, Shield, Clock } from "lucide-react"

export function CleaningHero() {

	const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-40 pb-20 bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-12 h-12 text-accent mr-4" />
            <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">
              Услуги химчистки
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-4">В партнёрстве с «Пингвин»</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              3S Atelier заключил партнёрство с «Пингвин» (профессиональная химчистка), чтобы предоставить нашим клиентам
              надёжные и качественные услуги по чистке и уходу за одеждой.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center p-6 bg-background/50 rounded-lg">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Профессиональное качество</h3>
              <p className="text-sm text-muted-foreground text-center">Экспертный уход за всеми видами тканей и одежды</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-background/50 rounded-lg">
              <Clock className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Быстрое обслуживание</h3>
              <p className="text-sm text-muted-foreground text-center">Оперативные сроки выполнения для вашего удобства</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-background/50 rounded-lg">
              <Sparkles className="w-8 h-8 text-accent mb-3" />
              <h3 className="font-semibold mb-2">Эко-дружественные методы</h3>
              <p className="text-sm text-muted-foreground text-center">
                Безопасные технологии чистки для вас и окружающей среды
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
							variant="outline" 
							size="lg" 
							className='cursor-pointer'
							onClick={() => scrollToSection("pricing")}
						>
              Посмотреть цены
            </Button>
            <Button 
							variant="outline" 
							size="lg" 
							className='cursor-pointer'
							onClick={() => scrollToSection("contact")}
						>
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
