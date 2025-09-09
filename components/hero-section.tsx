"use client"

import { Button } from "@/components/ui/button"
import { Clock, MapPin } from "lucide-react"
import OpeningBanner from './opening-banner'
import Image from 'next/image'

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary/20 to-primary/30 pb-20 overflow-hidden">
      <Image
        src="/modern-sewing-workspace-with-natural-light.png"
        alt="Креативное коворкинг-пространство"
        fill
        className="object-cover opacity-20"
        priority
        sizes="100vw"
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 mt-[80px]">
        {/* <OpeningBanner /> */}

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
