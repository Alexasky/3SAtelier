import Link from 'next/link'
import { Button } from "./ui/button"

export function ContactMap() {
  return (
    <section className="py-20 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-4">Как нас найти</h2>
      <p className="text-lg text-gray-600">Мы находимся в самом сердце Приморского района, Санкт-Петербурга</p>
    </div>

    <div className="rounded-lg overflow-hidden shadow-lg">
      <iframe src="https://yandex.com/map-widget/v1/?um=constructor%3A9074f94af7a01bb1b8aa2ec9b5c87096a2e09ea048e1beb864e204c6ac8e8e14&amp;source=constructor&lang=ru_RU" width="1152" height="568" frameBorder="0"></iframe>
    </div>

    <div className="mt-8 text-center">
      <p className="text-gray-600 mb-4">
        Рядом доступна парковка. До нас легко добраться на метро и автобусе.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
					href="https://yandex.ru/maps/?rtext=~60.029659,30.251709" 
					target="_blank"
					rel="noopener noreferrer"
					className='px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-accent bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer'
				>
					Проложить маршрут
				</Link>
        <Link
					href="https://www.google.com/maps?q=60.029659,30.251709"
					target="_blank"
					rel="noopener noreferrer"
					className='px-4 py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 border border-accent bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 cursor-pointer'

				>
					Открыть в Google Картах
				</Link>
      </div>
    </div>
  </div>
</section>
  )
}
