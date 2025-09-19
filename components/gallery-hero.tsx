import { Camera, Heart, Users } from 'lucide-react'
import Image from 'next/image';

export function GalleryHero() {
  const highlights = [
    { icon: Camera, text: "Уникальные творческие проекты" },
    { icon: Users, text: "Дружелюбное сообщество" },
    { icon: Heart, text: "Вдохновение и идеи" },
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
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Творческая галерея</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Погрузитесь в наше творческое пространство, откройте для себя уникальные проекты нашего сообщества и вдохновляйтесь
          атмосферой креативности в 3S Atelier.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <div key={index} className="flex items-center gap-2">
                <IconComponent className="w-5 h-5 text-accent" />
                <span className="text-gray-700 font-medium">{highlight.text}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}