'use client';
import Image from 'next/image'
import { Button } from "./ui/button"
import { Scissors, Clock, Award } from "lucide-react"
import { scrollToSection } from '@/lib/scrollTo'

export function ServicesHero() {
  const highlights = [
    { icon: Scissors, text: "Экспертное мастерство" },
    { icon: Clock, text: "Быстрое выполнение" },
    { icon: Award, text: "Гарантия качества" },
  ]
  return (
    <section className="relative pt-40 pb-20 px-4 bg-brand/50">
			<Image
				src="/modern-sewing-workspace-with-natural-light.png"
				alt="Креативное коворкинг-пространство"
				fill
				className="object-cover opacity-20"
				priority
				sizes="100vw"
			/>
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Профессиональные услуги ателье</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto text-balance">
          Экспертный ремонт одежды, индивидуальный пошив и подгонка в Санкт-Петербурге. От простого укорачивания до сложных переделок — мы возвращаем вашим вещам новую жизнь.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon
            return (
              <div key={index} className="flex items-center gap-2">
                <IconComponent className="w-5 h-5 text-accent" />
                <span className="text-gray-700 font-medium">{highlight.text}</span>
              </div>
            )
          })}
        </div>
        <Button size="lg" className="text-lg px-8 py-3 cursor-pointer" onClick={() => scrollToSection("price")}>
          Узнать стоимость
        </Button>
      </div>
    </section>
  )
}