import { GalleryCategories } from '@/components/gallery-categories';
import { GalleryHero } from '@/components/gallery-hero';

export default function GalleryPage() {
	return(
		<main className="min-h-screen">
      <GalleryHero />
      <GalleryCategories />
    </main>
	)
}