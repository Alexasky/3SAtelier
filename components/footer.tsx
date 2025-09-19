import { Heart } from "lucide-react"
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-primary border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-card-foreground mb-2">3S ATELIER</h3>
          <p className="text-muted-foreground mb-6 uppercase">Шей. Делись. Вдохновляйся.</p>          

          <div className="text-sm text-muted-foreground space-y-1">
            <p>ул. Парашютная, 42, корпус 1, Приморский район, Санкт-Петербург</p>
            <p>Ежедневно 11:00 – 20:00 | Телефон: +7 9045256425</p>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>&copy; 2025 3S Atelier. Все права защищены.</p>
          </div>

          <Link href={'https://alexasky.website/'} >
            <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <span>Сделано с</span>
              <Heart className="w-4 h-4 text-accent fill-current" />
              <span>для творческого сообщества</span>
            </div>
          </Link>
          <Link href={'mailto:alex.korenkova@gmail.com'} target='_blank' className='text-sm text-muted-foreground'>alexasky studio</Link>       
        </div>
      </div>
    </footer>
  )
}
