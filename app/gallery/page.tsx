import { GalleryCategories } from '@/components/gallery-categories';
import { GalleryHero } from '@/components/gallery-hero';

export const metadata = {
  title: "3S Atelier — фото коворкинга, ателье и мастер-классов в Санкт-Петербурге",
  description: "Посмотрите, как выглядит наш швейный коворкинг: рабочие места, кроильные столы, зона отдыха, фотозона и события.",
}

export default function GalleryPage() {
	return(
		<main className="min-h-screen">
      <GalleryHero />
      <GalleryCategories />
    </main>
	)
}