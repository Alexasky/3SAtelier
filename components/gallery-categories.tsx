"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gift, Users, Home, Camera } from "lucide-react"
import Image from 'next/image'

export function GalleryCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

 const categories = [
		{ id: "all", name: "Все фото", icon: Camera },
		{ id: "welcome", name: "Наше ателье", icon: Home },
		{ id: "workspace", name: "Общее рабочее пространство", icon: Users },		
		{ id: "gifts", name: "Подарки", icon: Gift },		
		{ id: "events", name: "События и мастер-классы", icon: Camera },
	]

	const galleryItems = [
		{
			id: 1,
			category: "gifts",
			title: "Коллекция hand-made подарков",
			image: "/gifts-on-the-shelves.jpg",
			alt: "Красивые подарки ручной работы, созданные в 3S Atelier",
		},
		{
			id: 2,
			category: "workspace",
			title: "Совместная зона шитья",
			image: "/equipment-zoje.jpg",
			alt: "Общее рабочее пространство с  швейными станциями",
		},
		{
			id: 3,
			category: "welcome",
			title: "Уютная зона oтдыха",
			image: "/lounge-area.jpg",
			alt: "Комфортная зона oтдыха с мягкой мебелью и журналами",
		},
		{
			id: 4,
			category: "events",
			title: "Женский клуб и мастер-классы",
			image: "/event.jpg",
			alt: "Женский клуб в 3S Atelier",
		},
		{
			id: 5,
			category: "gifts",
			title: "Индивидуальные вязанные изделия",
			image: "/gift-knitted-doll.jpg",
			alt: "Подарки и аксессуары, связанные вручную",
		},
		{
			id: 6,
			category: "workspace",
			title: "Профессиональное оборудование",
			image: "/equipment.jpg",
			alt: "Высококачественные швейные машины и оборудование",
		},
		{
			id: 7,
			category: "welcome",
			title: "Приёмная и вдохновение",
			image: "/reception.jpg",
			alt: "Зона приёма с вдохновляющими журналами и уютной атмосферой",
		},
		{
			id: 8,
			category: "events",
			title: "Xорошее настроение на мероприятиях",
			image: "/women-event.jpg",
			alt: "Женский клуб и мастер-классы в 3S Atelier",
		},
		{
			id: 9,
			category: "workspace",
			title: "Зона раскроя и дизайна",
			image: "/cutting-table.jpg",
			alt: "Большой раскройный стол и рабочее пространство для дизайна",
		},
		{
			id: 10,
			category: "gifts",
			title: "Коллекция hand-made подарков",
			image: "/gift-house-in-box.jpg",
			alt: "Подарки ручной работы, упакованные в красивые коробки",
		},
		{
			id: 11,
			category: "gifts",
			title: "Коллекция hand-made подарков домиков",
			image: "/gift-houses.jpg",
			alt: "Подарки ручной работы в виде домиков",
		},
		{
			id: 12,
			category: "gifts",
			title: "Коллекция украшений ручной работы",
			image: "/gift-jewellery.jpg",
			alt: "Украшения ручной работы, созданные в 3S Atelier",
		},
		{
			id: 13,
			category: "gifts",
			title: "Коллекция hand-made подарков",
			image: "/gifts-doll.jpg",
			alt: "Подарки ручной работы, созданные в 3S Atelier",
		},
		{
			id: 14,
			category: "gifts",
			title: "Коллекция hand-made подарков и игрушек",
			image: "/gifts-toys.jpg",
			alt: "Подарки и игрушки ручной работы, созданные в 3S Atelier",
		},
		{
			id: 15,
			category: "welcome",
			title: "Aтмосфера 3S Atelier",
			image: "/3satelier-area.jpg",
			alt: "Уютная и творческая атмосфера в 3S Atelier",
		},
		{
			id: 16,
			category: "gifts",
			title: "Коллекция украшений ручной работы",
			image: "/jewellery.jpg",
			alt: "Украшения ручной работы, созданные в 3S Atelier",
		},
		{
			id: 17,
			category: "workspace",
			title: "Профессиональное оборудование",
			image: "/equipment-aurora.jpg",
			alt: "Высококачественные швейные машины и оборудование",
		},
		{
			id: 18,
			category: "workspace",
			title: "Профессиональное оборудование",
			image: "/equipment-jack.jpg",
			alt: "Высококачественные швейные машины и оборудование",
		},
		{
			id: 19,
			category: "welcome",
			title: "Примерочная комната",
			image: "/fitting-room.jpg",
			alt: "Удобная примерочная комната с большим зеркалом",
		},
	] 

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Откройте для себя наше пространство</h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <IconComponent className="w-4 h-4" />
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow  p-0 h-64">
              <CardContent className="relative w-full h-full p-0">
                <div className="overflow-hidden">
									<Image 
										src={item.image || "/placeholder.svg"} 
										alt={item.alt} 
										className="object-cover group-hover:scale-105 transition-transform duration-300"
										fill
                    priority
                    sizes='400'
									/>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">В этой категории нет изображений.</p>
          </div>
        )}
      </div>
    </section>
  )
}
