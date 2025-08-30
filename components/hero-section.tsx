"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 to-primary/30">
      <div className="absolute inset-0 bg-[url('/modern-sewing-workspace-with-natural-light.png')] bg-cover bg-center opacity-20"></div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="bg-accent/90 backdrop-blur-sm rounded-2xl p-8 mb-8 inline-block">
          <div className="flex items-center justify-center space-x-2 text-accent-foreground mb-2">
            <Calendar className="w-5 h-5" />
            <span className="font-semibold">Торжественное открытие</span>
          </div>
          <div className="text-2xl font-bold text-accent-foreground">5 сентября, 12:00</div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Добро пожаловать в <span className="text-secondary-foreground">3S Atelier</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
          Креативное коворкинг-пространство, где вы можете шить, делиться идеями и найти своё место в нашем дружном сообществе.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <MapPin className="w-5 h-5" />
            <span>Парашютная 42, Санкт-Петербург</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Clock className="w-5 h-5" />
            <span>10:00 – 21:00</span>
          </div>
        </div>

        <Button
          onClick={scrollToContact}
          size="lg"
          className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3 cursor-pointer"
        >
          Присоединяйтесь
        </Button>
      </div>
    </section>
  )
}
